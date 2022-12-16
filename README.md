# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [Github Repo](https://github.com/kebin20/sunnyside-agency-landing-page)
- Live Site URL: [sunnyside-agency-landing-page](https://kebin20.github.io/sunnyside-agency-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla JS
- Mobile-first workflow

### What I learned

I took this challenge as this website was a good example to learn regarding UI design and layout. Blending in the different colours and constrasting them nicely, as well as font choice was a good learning experience on what a nice UI will typically look like.

I also had lots of practice with making hamburger menus, CSS Grid and Flexbox. In addition, I also learnt how to manage my CSS classes and HTML better.

Two significant parts that I learnt about CSS here though, were the use of the pseudo elements ::before and ::after, where I used ::before to create the right-angled triangle for my hamburger menu and ::after to create the coloured underlining in the "Learn more" link.

```css
.transform__a::after {
  content: '';
  display: block;
  width: 100%;
  border-radius: 5px;
  height: 8px;
  background: hsl(51, 100%, 49%);
  margin-top: -8px;
  padding: 0px 4em 0px 4em;
}

.standout__a::after {
  content: '';
  display: block;
  width: 100%;
  border-radius: 5px;
  height: 8px;
  background: hsl(7, 99%, 70%);
  margin-top: -8px;
  margin-left: 0px;
  padding: 0px 4em 0px 4em;
}

.nav-links::before {
  content: '';
  position: absolute;
  bottom: 99.5%;
  left: 89.5%;
  width: 0;
  height: 0;
  border-top: 0px solid transparent;
  border-right: 33.1px solid white;
  border-bottom: 35px solid transparent;
  rotate: 90deg;
}
```

### Continued development

I still think I need to improve my HTML layout better, and be more familiar with the use of pseudoclasses.

### Useful resources

- [Scrimba](https://www.scrimba.com) - The responsive design course by Kevin Powell helped me with the ::after pseudoclass.
- [Stack Overflow](https://www.stackoverflow.com) - This site helped me find the solution to creating a right-angled triangle plus an understanding of the ::before pseudoclass.

## Author

- Frontend Mentor - [@kebin20](https://www.frontendmentor.io/profile/kebin20)
