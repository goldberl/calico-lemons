import Metalsmith from 'metalsmith';
import drafts from '@metalsmith/drafts';
import layouts from '@metalsmith/layouts';
import markdown from '@metalsmith/markdown';
import sass from '@metalsmith/sass';
import collections from '@metalsmith/collections';
import postcss from '@metalsmith/postcss';
import { performance } from 'perf_hooks';
import browserSync from 'browser-sync';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import tags from 'metalsmith-tags';

/* eslint-disable no-underscore-dangle */
const __dirname = dirname(fileURLToPath(import.meta.url));
const prod = process.env.NODE_ENV === 'production';

const sitedata = {
  generator: {
    name: 'Metalsmith'
  },
  site: {
    base: !prod ? 'http://localhost:5000' : 'https://calico-lemons.onrender.com',
    subject: 'A sweet but zesty personal blog',
  },
  nav: [
    { path: 'index.html', label: 'Home' },
    { path: 'about.html', label: 'About' },
  ],
  socials: {
    desktop: 'https://goldberl.github.io',
    linkedin: 'https://linkedin.com/in/goldberl',
    github: 'https://github.com/goldberl'
  }
};

function formatDate(value, format) {
  const dt = new Date(value);
  if (format === 'iso') {
    return dt.toISOString();
  }
  const utc = dt.toUTCString().match(/(\d{1,2}) (.*) (\d{4})/);
  return `${utc[2]} ${utc[1]}, ${utc[3]}`;
}

function formattedDatesForPosts(files, metalsmith) {
  if (!sitedata.tags) {
    sitedata.tags = [];
  }

  // Log all posts and their tags
  metalsmith.metadata().collections.posts.forEach(post => {
    if (post.date) {
      post.displayDate = formatDate(post.date);
      post.isoDate = formatDate(post.date, 'iso');
    }

    if (post.tags && Array.isArray(post.tags)) {
      // console.log(`Post: ${post.title}, Tags: ${post.tags}`); // Log post tags
      post.tags.forEach(tag => {
        if (!sitedata.tags.includes(tag)) {
          sitedata.tags.push(tag);
        }
      });
    }
  });

  console.log("All tags in metadata:", sitedata.tags); // Ensure tags are being added to the metadata
}

function noop() {}

let devServer = null;
let t1 = performance.now();

function msBuild() {
  return Metalsmith(__dirname)
    .clean(true)
    .watch(prod ? false : ['src'])
    .source('src/content')
    .destination('dist')
    .metadata(sitedata)
    .use(prod ? noop : drafts())
    .use(markdown())
    .use(collections({
      posts: {
        pattern: 'posts/**/*.html',
        reverse: true,
        sortBy: 'date'
      }
    }))
    .use(formattedDatesForPosts)
    .use(layouts({
      directory: 'src/pug',
      default: 'default.pug'
    }))
    .use(sass({
      entries: {
        'src/scss/styles.scss': 'css/styles.css'
      }
    }))
    .use(!prod ? postcss({
      plugins: [
        'autoprefixer',
        'cssnano'
      ],
      map: true
    }) : noop)
    .use(tags({
      property: 'tags',
    }, (files, done) => {
      // Log to ensure the files are being processed
      // console.log('Generated files in metalsmith-tags:', Object.keys(files));
      done();
    }))  
}

const ms = msBuild();
ms.build((err) => {
  if (err) {
    throw err;
  }
  console.log(`Build success in ${((performance.now() - t1) / 1000).toFixed(1)}s`);
  if (ms.watch()) {
    if (devServer) {
      t1 = performance.now();
      devServer.reload();
    } else {
      devServer = browserSync.create();
      devServer.init({
        host: 'localhost',
        server: './dist',
        port: 5000,
        injectChanges: false,
        reloadThrottle: 0,
        open: false
      });
    }
  }
});
