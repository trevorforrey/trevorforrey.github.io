---
layout: project
title: Satellite Visualizer
meta: 3D simulation where users can explore the location and path of an ASU satelitte launch.
category: project
img-src: assets/img/deepSpaceVisualizer/EarthView.png
content-src: project/2019/04/30/deep-space-visualizer.html
accent-color: '51,51,51'
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

<div class='deepspace-visualizer'>

<p>
Deep Space Visualizer is a project I worked on for the ASU School of Earth and Space Exploration. The visualizer provides a 3D simulation where users can explore the location and path of a satellite that ASU is launching.
</p>

<h2>Architecture</h2>
<p>
The application is structured as a web app. Mission data is taken from an SPK trajectory file provided by the school of space and exploration. A python wrapper for the SPICE SPK provides querying mission data inside a python Flask server.

The frontend was built using React and Redux to organize UI components and keep track of state in the application. The simulation is rendered using Three.js, a web graphics library.
</p>

<h2>Features</h2>
<h3>Views</h3>
<p>
Users are able to view the simulation from three different views: solar system, moon, and spacecraft. The solar system view gives users full orbit controls of the entire scene, with a target on the earth. The user can rotate and drag around the scene to explore perspectives. The moon view lets users see the moon as if looking up from earth, based on the current date selected. The spacecraft view switches cameras to follow the spacecraft as the simulation runs.
</p>
<div class='stylish-scroll'>
  <div class='flex overflow-x-scroll'>
    <img src='assets/img/deepSpaceVisualizer/EarthView.png'/>
    <img src='assets/img/deepSpaceVisualizer/MoonView.png'/>
    <img src='assets/img/deepSpaceVisualizer/SpacecraftView.png'/>
  </div>
</div>

<h3>Spacecraft Trajectory Trails</h3>
<p>
Along with different views, users can select multiple trajectory displays: full, partial, and none. Full displays the entire path of the spacecraft throughout the mission. Partial displays the spacecraft trail from the last two weeks. None hides the trail completely from the scene.
</p>
<div class='stylish-scroll'>
  <div class='flex overflow-x-scroll'>
    <img src='assets/img/deepSpaceVisualizer/PathView.png'/>
    <img src='assets/img/deepSpaceVisualizer/PartialTrail.png'/>
  </div>
</div>

<h3>Toggle-able Labels</h3>
<p>
The label buttons toggle the display of labels in the simulation. Currently, there are labels on the earth, moon, and spacecraft.
</p>
<div class='stylish-scroll'>
  <div class='flex overflow-x-scroll'>
    <img src='assets/img/deepSpaceVisualizer/LabelScene.png'/>
  </div>
</div>

<h3>Timeline and Speed Slider</h3>
<p>
The timeline slider allows users to update the date of the simulation. The speed slider allows users to update the speed the simulation runs at.
</p>

<h2>Retrospective</h2>
<p>
It was really working with Three.js and diving deeper into the React ecosystem. I'm hoping to get to work on more 3d websites in the future!
</p>

</div>
