---
layout: project
title: Deep Space Visualizer
meta: Space Visualizer for the Web
category: project
img-src: assets/img/deepSpaceVisualizer/EarthView.png
content-src: project/2019/04/30/deep-space-visualizer.html
---

{% include project-header.html
  background-img-src='assets/img/deepSpaceVisualizer/PathView-background.png'
  project-title='Deep Space Visualizer'
  project-description='3D satellite launch visualizer'
  accent-color='51,51,51'
%}

{% include project-sticky-header.html
  project-title='Deep Space Visualizer'
  accent-color='51,51,51'
%}

{:.image}
![Alt text](assets/img/deepSpaceVisualizer/PathView.png "My Title")

Deep Space Visualizer is a project I worked on for the ASU School of Earth and Space Exploration. The visualizer provides a 3D simulation where users can explore the location and path of a satellite that ASU is launching.

# Features
**Solar System View**

{:.image}
![Alt text](assets/img/deepSpaceVisualizer/EarthView.png "My Title")

The solar system view gives users full orbit controls of the entire scene, with a target on the earth. The user can rotate and drag around the scene to explore perspectives.

**Moon View**

{:.image}
![Alt text](assets/img/deepSpaceVisualizer/MoonView.png "My Title")

The moon view lets users see the moon as if looking up from earth, based on the current date selected.

**Spacecraft View**

{:.image}
![Alt text](assets/img/deepSpaceVisualizer/SpacecraftView.png "My Title")

The spacecraft view switches cameras to follow the spacecraft as the simulation runs.

**Spacecraft Trajectory Trails**

{:.image}
![Alt text](assets/img/deepSpaceVisualizer/PathView.png "My Title")

{:.image}
![Alt text](assets/img/deepSpaceVisualizer/PartialTrail.png "My Title")

Along with different views, users can select multiple trajectory displays: full, partial, and none. Full displays the entire path of the spacecraft throughout the mission. Partial displays the spacecraft trail from the last two weeks. None hides the trail completely from the scene.

**Labels On Object**

{:.image}
![Alt text](assets/img/deepSpaceVisualizer/LabelScene.png "My Title")

The label buttons toggle the display of labels in the simulation. Currently, there are labels on the earth, moon, and spacecraft.

**Timeline and Speed Slider**
The timeline slider allows users to update the date of the simulation. The speed slider allows users to update the speed the simulation runs.

# Architecture
**Overview**
The application was structured as a web app. Mission data is taken from an SPK trajectory file provided by the school of space and exploration. A python wrapper for the SPICE SPK, provides querying mission data inside a python Flask server.

The frontend was built using React & Redux to organize UI components and keep track of state in the application. The simulation was rendered using Three.js, a web graphics library.