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

{% highlight c %}
#include <stdint.h>
#include <wiringPiI2C.h>
#include <wiringPi.h>
#include <stdlib.h>
#include <stdio.h>
#include "cap1188.h"

///////// CAP 1188 FUNCTIONS ///////////

void cap1188info(int fd_cap) {
	printf("Product Id - %d\n", wiringPiI2CReadReg8(fd_cap,CAP1188_PRODID));
	printf("Manufac Id - %d\n", wiringPiI2CReadReg8(fd_cap,CAP1188_MANUID));
	printf("Revision # - %d\n", wiringPiI2CReadReg8(fd_cap,CAP1188_REV));
}


void setUpLEDTouch(int fd_cap) {
	wiringPiI2CWriteReg8(fd_cap,CAP1188_MTBLK, 0);
	wiringPiI2CWriteReg8(fd_cap,CAP1188_LEDLINK, 0xFF);
	wiringPiI2CWriteReg8(fd_cap,CAP1188_STANDBYCFG, 0x30);
}


uint8_t touched(int fd_cap) {
	uint8_t touchedCaps = wiringPiI2CReadReg8(fd_cap,CAP1188_SENINPUTSTATUS);
	if (touched) {
		wiringPiI2CWriteReg8(fd_cap,CAP1188_MAIN, wiringPiI2CReadReg8(fd_cap,CAP1188_MAIN) & ~CAP1188_MAIN_INT);
	}
	return touchedCaps;
}
{% endhighlight %}

~~Oh no, didn't mean to~~
<iframe width="560" height="315" align="middle" src="https://www.youtube.com/embed/FqyfqyQukl8" frameborder="0" allowfullscreen></iframe>
