---
layout: project
title: Organic Robo Head
meta: Embedded Project where a robotic head reacts to touch
category: project
img-src: assets/img/robohead.jpg
content-src: project/0000/09/09/organic-robo-head.html
github-url: organic_robo_head
---

# Organic Robo Head {% include icon-github.html username='trevorforrey' git-url='organic_robo_head' %}

**Time to get froggy**


This project was made for an Embedded C programming class. I wanted to create something
using embedded materials, but also have a bit of magic in the project, by hiding as much of the materials as possible. From this idea, Organic Robo Head was born.

The project was created using a Raspberry Pi as the brains of the bot, along with a PWM9685 to control the movements of the head (and LEDs), and a CAP8585 to sense the capacitive touch from the user.

![Alt text](assets/img/robohead.jpg "My Title")

I used I2C to communicate to both the touch sensors and the PWM driver.

<pre><code>.nav {
  float: right;
  padding-right: .2em;
  width: 60%;
}

li {
  line-height: 0.25rem;
  height: 0.5rem;
  display: inline-block;
  padding: 0.5em;
  padding-top: 1.5em;
  margin: auto;
  color: #5585A6
}</code></pre>

~~Oh no, didn't mean to~~
<iframe width="560" height="315" align="middle" src="https://www.youtube.com/embed/FqyfqyQukl8" frameborder="0" allowfullscreen></iframe>
