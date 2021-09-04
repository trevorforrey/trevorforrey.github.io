---
layout: project
title: Organic Robo Head
meta: Embedded Project where a robotic head reacts to touch
category: project
img-src: assets/img/robohead.jpg
content-src: project/0000/09/09/organic-robo-head.html
github-url: organic_robo_head
---

{% include project-header.html
  background-img-src='assets/img/robohead-background.png'
  project-title='Organic Robo Head'
  project-description='Interactive art piece.'
  accent-color='152,173,94'
  git-url='organic_robo_head'
%}

{% include project-sticky-header.html
  project-title='Organic Robo Head'
  accent-color='152,173,94'
%}

This project was for an Embedded C Programming class I took in college.

My goals for this project were:
* Create something that combined my interests in art and software
* Have the piece be interactive and feel alive

{:.image}
![Alt text](assets/img/org_robo_design.jpg "My Title")

The design that came out was a creature you can interact with through capacitive touch sensors.
Touching copper boxes in a field would trigger the leds near the box to light up and the eye to move and look at where you touched.

{:.image}
![Alt text](assets/img/org_robo_head_tech_sketch.jpg "My Title")

Technology Used:
* **Raspberry Pi** - main board
* **PWM Driver** - controlling the dimming of leds and servos moving the head
* **Capacitive Touch Sensor** - registering user touch
* **I2C Bus** - to communicate between the Raspberry Pi, PWM driver, and capacitive touch sensor.

Other Materials Used:
* Too much stuff from Michael's

Like many embedded projects I've worked on, the hardest part wasn't necessarily the logic, but debugging both the hardware and software during development.

This was the first time I combined art and programming together.
If you want to see it in action, I have a small demo below.

<iframe width="560" height="315" align="middle" src="https://www.youtube.com/embed/FqyfqyQukl8" frameborder="0" allowfullscreen></iframe>
