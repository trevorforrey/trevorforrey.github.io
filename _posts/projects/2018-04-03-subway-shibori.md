---
layout: project
title: Subway Shibori
description: An embedded tech jacket inspired by the subways in Tokyo.
meta: Fashion + Tech Garment
category: project
img-src: assets/img/subwayShibori/gallery_shot.JPG
background-img-src: assets/img/subwayShibori/final_piece copy.png
accent-color: 209,136,48
content-src: project/2018/04/03/subway-shibori.html
---

{% include project-header.html
  background-img-src='assets/img/subwayShibori/final_piece copy.png'
  project-title='Subway Shibori'
  project-description='An embedded tech jacket inspired by the subways in Tokyo.'
  accent-color='243,156,107'
  git-url='web_ble_jacket'
%}

{:.image}
![Alt text](assets/img/subwayShibori/gallery_shot.JPG "My Title")

Subway Shibori is a piece I made in a Fashion+Tech class I took. The piece was shown
at the MRS Materials Research Society Conference, held at the Phoenix Convention Center.
It was also shown at the Scottsdale Fashion Square.

{:.image}
![Alt text](assets/img/subwayShibori/runway_shot.png "My Title")

The garment represents the user's current speed through a subway of lights that
travel along the garment. The wearer is able to control the color of the lights
via a bluetooth paired web app. The goal is to represent the energy being put
into travel even when the user is sitting.

**Technology:**
* Flora Microcontroller
* Sewable Neopixels
* GPS Module
* Bluetooth Feather Board
* Web Bluetooth App

**Fashion:**
* Hand-dyed Shibori (outer layer)
* Rib knit (collar, sleeves, bottom)
* Faux suede (pants)
* Crushed Velvet (shirt)

Here's some videos of the final product, if you're interested in the process of creating
this piece, I'll go into detail below!

<iframe width="560" height="315" src="https://www.youtube.com/embed/nRnUgiD-eZY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/tQkDqPtIQPA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/dZ1LrMXEA9M" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

# Concept

I was inspired by a recent trip to Japan with my fiance. In the creation of this garment,
I knew I wanted to create something that was functional, visually inspired by the fashion
scene I experienced in Tokyo, as well as customizable for the user.

I started taking images from the trip and began pulling out colors, textures, and structures
that I wanted to bring out in my piece.

{:.image}
![Alt text](assets/img/subwayShibori/mood_board.JPG "My Title")

After playing out different textures and creating a color palette, I came up with
the following design for the piece.

{:.image}
![Alt text](assets/img/subwayShibori/final_colors.jpg "My Title")

{:.image}
![Alt text](assets/img/subwayShibori/seethrough.jpg "My Title")


# Fashion Creation

This was my first time making any type of piece fashion-wise. Therefore, I kept my design
fairly simple, with a bomber jacket, harem pants, and a simple gold shirt underneath.

Before working with the final material, I made a prototype out of muslin. This prototype allowed
me to test out the sizing of the jacket, as well as plan where I would embed all the tech incorporated
into the piece.

{:.image}
![Alt text](assets/img/subwayShibori/prototype_mel.JPG#50 "My Title")

{:.image}
![Alt text](assets/img/subwayShibori/muslin_prototype.JPG#50 "My Title")

The biggest part of the whole garment creation was shibori dyeing the outer layer of the jacket.
It was a full day process, but it was fun learning how to dye fabric and experimenting with different
techniques.

{:.image}
![Alt text](assets/img/subwayShibori/dye_wrap.JPG "My Title")

{:.image}
![Alt text](assets/img/subwayShibori/dye_shot.JPG#50 "My Title")

{:.image}
![Alt text](assets/img/subwayShibori/post_dye.JPG#50 "My Title")

{:.image}
![Alt text](assets/img/subwayShibori/final_piece.JPG "My Title")

After processing the outer layer of the jacket, all that was needed was bringing together
the lining, outer layer, rib knit, and a zipper.

{:.image}
![Alt text](assets/img/subwayShibori/lining_shot.JPG "My Title")

{:.image}
![Alt text](assets/img/subwayShibori/some_rib_knit.JPG "My Title")

My fiance was the best partner ever and made the shirt and pants for the outfit.

# Software/Tech Creation

The software side of this garment was pretty straightforward, I used the speed gathered
by a GPS module to determine the speed of the lights underneath the garment. I also used
the I2C protocol to communicate between my bluetooth and main Flora boards. I also created a
VueJS site that uses Google's Web Bluetooth API to communicate with the bluetooth board.

Both the embedded code and frontend code used can be found on [my github repo]('https://github.com/trevorforrey/web_ble_jacket')

Along with writing all the software, soldering everything together took quite a long time.
Here are some WIP shots of getting all the lights together. (apologies for not rotating them yet).

{:.image}
![Alt text](assets/img/subwayShibori/SolderProgress.JPG "My Title")

{:.image}
![Alt text](assets/img/subwayShibori/followingPath.JPG "My Title")

<iframe width="560" height="315" src="https://www.youtube.com/embed/pfc90bKp9n4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

{:.image}
![Alt text](assets/img/subwayShibori/EmbeddedShot.JPG "My Title")

As you can see, integrating all the tech into the garment took quite a lot of space!

# Reflection

I really loved challenging myself creatively while learning how to sew and the basics
of fashion. I definitely plan on creating future wearable tech projects in the future,
that take advantage of smart materials. I would love to create a piece that uses smart
materials to better embed tech into a garment, instead of having two distinct layers.
