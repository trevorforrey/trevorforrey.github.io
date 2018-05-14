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

This project was for an Embedded C Programming class I took my Junior year.

My goals for this project were:

* It didn't look like an embedded project at first glance
* The user could interact with it
* The subject of the piece felt alive

{:.image}
![Alt text](assets/img/robohead.jpg "My Title")

The project was created using a Raspberry Pi, along with a PWM driver to control the head and dimming of the LEDS. I also used a capacitive touch sensor to take in
user inputs. I used an I2C bus to communicate to both the touch sensors and the PWM driver.

I used a CAP1818 as the touch sensor and a PCA9685 for the PWM driver. To communicate with
both of these I translated their arduino libraries into C. This ended up being one of the
hardest parts of the project. For some example code, I have the translated CAP1818 code below.

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

This ended up being a really fun project. It was the first time I combined art
and programming together. I hope to do more projects like this in the future.
If you want to see it in action, I have a small demo below.


<iframe width="560" height="315" align="middle" src="https://www.youtube.com/embed/FqyfqyQukl8" frameborder="0" allowfullscreen></iframe>
