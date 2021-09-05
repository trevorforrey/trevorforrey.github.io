---
layout: project
title: Subway Shibori
description: An embedded tech jacket inspired by the subways in Tokyo.
meta: Fashion + Tech Garment
category: project
img-src: assets/img/subwayShibori/gallery_shot.JPG
background-img-src: assets/img/subwayShibori/gallery_shot.JPG
accent-color: 202,179,2
content-src: project/2018/04/03/subway-shibori.html
---

{% include project-header.html
  background-img-src='assets/img/subwayShibori/gallery_shot.JPG'
  project-title='Subway Shibori'
  project-description='An embedded tech jacket inspired by the subways in Tokyo.'
  accent-color='202,179,2'
  git-url='web_ble_jacket'
%}

{% include project-sticky-header.html
  project-title='Subway Shibori'
  accent-color='202,179,2'
%}

<div class='subway-shibori'>

<p>
Subway Shibori is a piece I made in a Fashion+Tech class I took. The piece was shown
at the MRS Materials Research Society Conference, held at the Phoenix Convention Center.
It was also shown at the Scottsdale Fashion Square Mall.
<p>

<h2>Research</h2>
<p>I came into this project with no experience creating garments, let alone embedding tech inside of them. I was inspired by a recent trip to Japan with my now wife. In the creation of this garment, I knew I wanted to create something that was functional, visually inspired by the fashion scene in Tokyo, as well as customizable for the user. To narrow down on a concept, I went through a bunch of photos from that trip to find textures and colors that worked well together.</p>

<div class='stylish-scroll'>
  <div class='flex overflow-x-scroll'>
    <img src='assets/img/subwayShibori/research/r1.jpg'/>
    <img src='assets/img/subwayShibori/research/r2.jpg'/>
    <img src='assets/img/subwayShibori/research/r3.jpg'/>
    <img src='assets/img/subwayShibori/research/r4.jpg'/>
    <img src='assets/img/subwayShibori/research/r5.jpg'/>
    <img src='assets/img/subwayShibori/research/r6.jpg'/>
  </div>
</div>

<h2>Concept</h2>
<p>
I ended up deciding to create a garment that represented a user's speed through a "subway" of lights that travel along the garment. I wanted the wearer to be able to control the color of the lights
via a bluetooth paired web app. The goal was to represent the energy being put
into travel even when sitting. This was my first time making any type of piece fashion-wise. Therefore, I kept my design
fairly simple, with a bomber jacket, harem pants, and a simple gold shirt underneath.
</p>

<div class='stylish-scroll'>
  <div class='flex overflow-x-scroll'>
    <img src='assets/img/subwayShibori/concept/final_colors.jpg'/>
    <img src='assets/img/subwayShibori/concept/seethrough.jpg'/>
    <img src='assets/img/subwayShibori/concept/sketch.jpg'/>
  </div>
</div>

<h2>Prototype</h2>
<h3>Garment</h3>
<p> Before working with the final material, I made a prototype out of muslin. This prototype allowed
me to test out the sizing of the jacket, as well as plan where I would embed all the tech incorporated
into the piece. </p>
<div class='stylish-scroll'>
  <div class='flex overflow-x-scroll'>
    <img src='assets/img/subwayShibori/prototype/sewing.jpg'/>
    <img src='assets/img/subwayShibori/prototype/p2.jpg'/>
    <img src='assets/img/subwayShibori/prototype/p3.jpg'/>
    <img src='assets/img/subwayShibori/prototype/p4.jpg'/>
    <img src='assets/img/subwayShibori/prototype/p5.jpg'/>
  </div>
</div>
<h3>Tech</h3>
<p>I had some previous experience with embedded tech but had never done anything flexible enough to fit inside a garment. I ended up deciding to use a Flora Microcontroller as the main controller of the system, a GPS Module to track the user's speed, a Bluetooth Feather Board for the bluetooth interface, and sewable Neopixels for the lighting. As a part of my prototyping phase, I tested out the I2C communication between my microcontroller and the other hardware. I also began work on a VueJS site, utilizing the web bluetooth spec, that would act as a lighting controller for the user.</p>
<div class='stylish-scroll'>
  <div class='flex overflow-x-scroll'>
    <img src='assets/img/subwayShibori/tech-prototype/pt1.jpg'/>
    <img src='assets/img/subwayShibori/tech-prototype/pt2.jpg'/>
  </div>
</div>

<h2>Fabrics</h2>
<p>After searching multiple fabric stores I was able to find fabric for pants, a shirt, the inner layer of the jacker, but was having a hard time finding the right fabric for the outer layer. My wife had recently taken a fibers class and recommended I try shibori dyeing to get the texture I was going for. It ended up being an all day process but it was fun learning the dyeing technique.
</p>
<div class='stylish-scroll'>
  <div class='flex overflow-x-scroll'>
    <img src='assets/img/subwayShibori/dying/dye_wrap.jpg'/>
    <img src='assets/img/subwayShibori/dying/dye_shot.jpg'/>
    <img src='assets/img/subwayShibori/dying/post_dye.jpg'/>
    <img src='assets/img/subwayShibori/dying/final_dye.jpg'/>
  </div>
</div>

<h2>Sewing</h2>
<p>Given how long it took to dye the fabric it was pretty high stakes when it came to building the final garment. Thankfully I was able to go off the same pattern as my muslin prototype.</p>
<div class='stylish-scroll'>
  <div class='flex overflow-x-scroll'>
    <img src='assets/img/subwayShibori/sewing/s1.jpg'/>
    <img src='assets/img/subwayShibori/sewing/s2.jpg'/>
    <img src='assets/img/subwayShibori/sewing/s3.jpg'/>
    <img src='assets/img/subwayShibori/sewing/s4.jpg'/>
    <img src='assets/img/subwayShibori/sewing/s5.jpg'/>
    <img src='assets/img/subwayShibori/sewing/s6.jpg'/>
  </div>
</div>

<h2>Tech Assembly</h2>
<p>It took multiple days of soldering to get all the lights shaped in the pattern I wanted. As time to the runway show crept closer, I decided to pause work on the bluetooth web app and the GPS integration.</p>
<div class='stylish-scroll'>
  <div class='flex overflow-x-scroll'>
    <img src='assets/img/subwayShibori/tech-assembly/ta0.jpg'/>
    <img src='assets/img/subwayShibori/tech-assembly/ta1.jpg'/>
    <img src='assets/img/subwayShibori/tech-assembly/ta2.jpg'/>
    <img src='assets/img/subwayShibori/tech-assembly/lights.gif'/>
    <img src='assets/img/subwayShibori/tech-assembly/ta3.jpg'/>
  </div>
</div>


<h2>Fashion Show & Scottsdale Fashion Square</h2>
<p>The piece was shown at the MRS Materials Research Society Conference and was displayed in the Scottsdale Fashion Square mall. It was really fun experiencing a runway show from backstage and getting to see people's reaction to the piece.
</p>
<div class='stylish-scroll'>
  <div class='flex overflow-x-scroll'>
    <img src='assets/img/subwayShibori/runway/lightsinjacket.gif'/>
    <img src='assets/img/subwayShibori/gallery_shot.JPG'/>
    <img src='assets/img/subwayShibori/runway/runwaybackstage.gif'/>
    <img src='assets/img/subwayShibori/runway/runwayfrontstage.gif'/>
  </div>
</div>

<h2>Retrospective</h2>
<p>This project gave me a huge appreciation for the work that people in the fashion industry do. I'm happy I got to bring what I've learned in software engineering to a new medium. If I were to revisit making an embedded garment again I'd like to experiment more with conductive thread to bring down the weight and improve flexibility.</p>

<div>