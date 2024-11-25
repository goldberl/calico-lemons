---
title: How to Improve UI Designs
description: Applying CARP design principles
featured_image: /assets/img/post-cover-img/lemon-post.jpeg
tags: ["software", "ui", "tips"]
date: 2024-11-25
ERT: 2.5
draft: false
page_type: post
---
## What is CARP?

CARP (also known as CRAP, but I much prefer CARP over CRAP) is a design acronym that stands for contrast, alignment, repetition, and proximity. By focusing on these 4 principles in the right way, you can improve and create effective, visually appealing designs.

Consider this Pokemon information webpage: 

<img class="img-fluid" src="/assets/img/post-img/2-ui-carp/ui-before.png">

<span class="caption text-muted">Before applying CARP principles</span>

It's not a terrible design, but I think we can improve it.

#### Contrast

Contrast refers to different but complementing colors, fonts, and sizes to draw out important information or things you want to stand out. In our Chikorita webpage example, we can see contrast between the Pokemon name & number (#152) and the description of the Pokemon in the size of the font. The name and number are larger and stand out much more than the description.

Let's make the description larger as well, and highlight some words in red for the reader to focus on Chikorita's inherit nature. 

<div style="display: flex; justify-content: center; align-items: center; padding: 20px; border: 3px solid #000; width: fit-content; margin: 0 auto;">
    <img class="img-fluid" src="/assets/img/post-img/2-ui-carp/contrast.png" alt="Image" style="max-width: 100%; height: auto;">
</div>

<span class="caption text-muted">Adding more contrast to the Pokemon description</span>

Making the font bigger also fills up some extra white space and gets rid of the orphan (single word on a line by itself, i.e. 'sunrays'). We can also add contrast to the link in the bottom right corner by underlining it. 

<div style="display: flex; justify-content: center; align-items: center; padding: 20px; border: 3px solid #000; width: fit-content; margin: 0 auto;">
    <img class="img-fluid" src="/assets/img/post-img/2-ui-carp/contrast2.png" alt="Image" style="max-width: 100%; height: auto;">
</div>

<span class="caption text-muted">Underlining link to provide contrast from regular text</span>

This allows it to stand out more as a link rather than another piece of text.

#### Alignment

Alignment refers to the idea that everything should line up to improve the organization and consistency of a design. This could include texts, images, buttons, menus, and titles. The way you align things can also create different sections of the design. 

In our current Chikorita webpage design, the title of the website MY POKEDEX is not aligned with the link (Return to all Pokemon). Let's align them so they create an outside border around the content.

<div style="display: flex; justify-content: center; align-items: center; padding: 20px; border: 3px solid #000; width: fit-content; margin: 0 auto;">
    <img class="img-fluid" src="/assets/img/post-img/2-ui-carp/alignment.png" alt="Image" style="width: auto; height: 300px;">
</div>

<span class="caption text-muted">Different alignment of text splits page into different sections</span>

With the title and link being on the outside, it allows the user to focus more on the center of the page which is where the main information is. This outer and inner alignment separates site info and navigation from site content. I also aligned the Pokemon type (grass) with the Pokemon name to get rid of some white space.

#### Repetition

Repetition refers to the principle that similar design elements are repeated to create something logical and consistent. This could be as simple as making sure all the buttons look the same or all of the menu navigation links are the same size.

<div style="display: flex; justify-content: center; align-items: center; padding: 20px; border: 3px solid #000; width: fit-content; margin: 0 auto;">
    <img class="img-fluid" src="/assets/img/post-img/2-ui-carp/repetition.png" alt="Image" style="max-width: 100%; height: auto;">
</div>

<span class="caption text-muted">Using the same font size creates consistency</span>

Our current design does this pretty well so I won't change anything here.

#### Proximity

Lastly, proximity refers to the idea that items that are related to each other should be close to each other. This helps the viewer visually group and associate like elements. 

In our original Pokemon example, the Pokemon name, type, and description are quite spread apart. Let's fix that and group them closer together.

<div style="display: flex; justify-content: center; align-items: center; padding: 20px; border: 3px solid #000; width: fit-content; margin: 0 auto;">
    <img class="img-fluid" src="/assets/img/post-img/2-ui-carp/proximity.png" alt="Image" style="max-width: 100%; height: auto;">
</div>

<span class="caption text-muted">Grouping all the Pokemon information together</span>

Now viewers can clearly see that these elements are related and that they are all describing Chikorita. 

## After Applying CARP Principles

Here is the final result of our webpage after applying CARP principles:

<img class="img-fluid" src="/assets/img/post-img/2-ui-carp/ui-after.png">

<span class="caption text-muted">After applying CARP principles</span>

I think that this is an improvement from the original design. However I do recognize that everyone has their own taste when it comes to design and some people purposefully create things to look a certain way that may not follow these CARP principles. Despite that, if you want to improve your design, I highly recommend you start by applying these 4 principles that we talked about today.

**_今日は明日も頑張っている　ー　End._**

<a href="/all-posts.html" class="btn btn-primary" style="float: right; margin-bottom: 20px; text-decoration: none;">RETURN TO POSTS</a>
