---
layout: project
title: Organic Robo Head
meta: Embedded Project where a robotic head reacts to touch
category: project
img-src: assets/img/robohead.jpg
content-src: project/0000/09/09/organic-robo-head.html
---

# Organic Robo Head {% include icon-github.html %}
**Time to get froggy**
![Alt text](assets/img/robohead.jpg "My Title")

This project was made for an Embedded C programming class. I wanted to create something
using embedded materials, but also have a bit of magic in the project, by hiding as much of the materials as possible. From this idea, Organic Robo Head was born.

The project was created using a Raspberry Pi as the brains of the bot, along with a PWM9685 to control the movements of the head (and LEDs), and a CAP8585 to sense the capacitive touch from the user.

I used I2C to communicate to both the touch sensors and the PWM driver.

~~Oh no, didn't mean to~~
<iframe width="560" height="315" align="middle" src="https://www.youtube.com/embed/FqyfqyQukl8" frameborder="0" allowfullscreen></iframe>