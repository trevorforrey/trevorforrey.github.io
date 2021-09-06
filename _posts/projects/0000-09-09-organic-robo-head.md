---
layout: project
title: Organic Robo Head
meta: Embedded Project where a robotic head reacts to touch
category: project
img-src: assets/img/organic-robo-head/robohead.jpg
content-src: project/0000/09/09/organic-robo-head.html
github-url: organic_robo_head
---

{% include project-header.html
  background-img-src='assets/img/organic-robo-head/robohead-background.png'
  project-title='Organic Robo Head'
  project-description='Interactive art piece.'
  accent-color='152,173,94'
  git-url='organic_robo_head'
%}

{% include project-sticky-header.html
  project-title='Organic Robo Head'
  accent-color='152,173,94'
%}

<div class='organic-robo-head'>
<p>
This project came from me wanting to create something that combined my interests in art and software. I also wanted to create something interactive that felt alive to anyone experiencing it.
</p>

<h2>Design</h2>
<p>
The design that came out was a creature you can interact with through capacitive touch sensors.
Touching copper boxes in a field would trigger the leds near the box to light up and the eye to move and look at where you touched. To accomplish this I used a Raspberry Pi as the main controller, a PWM driver to control dimming the leds and moving the servos in the "neck", and a capacitive touch sensor connected to copper flowers to register touch. To communicate between all components I used I2C.
</p>
<div class='stylish-scroll'>
  <div class='flex overflow-x-scroll'>
    <img src='assets/img/organic-robo-head/design/org_robo_design.jpg'/>
    <img src='assets/img/organic-robo-head/design/org_robo_head_tech_sketch.jpg'/>
  </div>
</div>

<h2>Prototyping</h2>
<p>
This project was my first larger-scale embedded piece so I prototyped out communication between the main controller and the pwm driver that would control the leds and head position.
</p>
<div class='stylish-scroll'>
  <div class='flex overflow-x-scroll'>
    <img src='assets/img/organic-robo-head/prototyping/servo-proto.gif'/>
    <img src='assets/img/organic-robo-head/prototyping/capacitive-touch-proto.gif'/>
    <img src='assets/img/organic-robo-head/prototyping/proto-with-lights.gif'/>
  </div>
</div>

<h2>Assembly</h2>
<p>
After spending too much at Michael's my wife and I built out a head and a field to place the copper flowers. In hindsight, the main box was a bit too big but it gave a lot of wiggle room with placing the tech underneath.
</p>
<div class='stylish-scroll'>
  <div class='flex overflow-x-scroll'>
    <img src='assets/img/organic-robo-head/assembly/14.jpg'/>
    <img src='assets/img/organic-robo-head/assembly/12.jpg'/>
    <img src='assets/img/organic-robo-head/assembly/13.jpg'/>
  </div>
</div>

<h2>Final Piece</h2>
<p>
After bringing it all together it turned out how I was hoping! There were some funky bugs along the way (like the capacitive touch sensors getting triggered automatically), but I was able to debug them to stabilize the experience.
</p>
<div class='stylish-scroll'>
  <div class='flex overflow-x-scroll'>
    <img src='assets/img/organic-robo-head/final/front.jpg'/>
    <img src='assets/img/organic-robo-head/final/side.jpg'/>
    <img src='assets/img/organic-robo-head/final/Looking.gif'/>
  </div>
</div>

<h2>Retrospective</h2>
<p>
Like many embedded projects I've worked on, the hardest part wasn't necessarily the logic, but debugging both the hardware and software during development.
This was the first time I combined art and programming together and I'm really happy that I started that journey with this piece.
</p>