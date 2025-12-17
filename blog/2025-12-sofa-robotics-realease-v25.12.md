---
title: Release - SOFA Robotics v25.12
description: We are happy to announce **SOFA Robotics v25.12**
authors:
  - hanaerateau
  - eulaliecoevoet
tags: [v25.12, release, SOFA Robotics]
hide_table_of_contents: false
date: 2025-12-31T10:00
---

import action_block_options from './2025-12-release/img/action-block-options.png'
import action_swap_button from './2025-12-release/img/action-swap-button.png'
import connection_section_ports from './2025-12-release/img/connection-section-ports.png'
import connection_section_status from './2025-12-release/img/connection-section-status.png'
import pad_move_window from './2025-12-release/img/pad-move-window.png'
import sliders_move_window from './2025-12-release/img/sliders-move-window.png'
import sofa_robotics from './2025-12-release/img/screenshot-sofa-robotics.png'
import sofa_robotics_highlights from './2025-12-release/img/sofa-robotics-highlight-objects.png'

## Highlights

### ✨ A New Interface to Move the Robot

You can now use a 2D pad to move the robot. This pad is available in the Move window.
Choose the axes you want to control with the pad, and also choose the direction. 

<div style={{display:"flex"}}>
<div>
<img className="centered" src={sliders_move_window} width="95%"/>
<figcaption>Sliders interface</figcaption>
</div>
<div>
<img className="centered" src={pad_move_window} width="95%"/>
<figcaption>Pad interface</figcaption>
</div>
</div>

### ✨ Save your project

You can now **save your project** as a `.crproj` file. This file contains a lot of information about your project, such as the windows you have opened, and the settings you have configured. 

<!--truncate--> 

### ✨ New features

1. My Robot Window: We have added a connection section. You can now **connect multiple robots to your computer** and choose which robot to connect to, by selecting the corresponding port.  

  <div style={{display:"flex"}}>
  <div>
  <img className="centered" src={connection_section_ports} width="95%"/>
  <figcaption>Select the port to connect to</figcaption>
  </div>
  <div>
  <img className="centered" src={connection_section_status} width="95%"/>
  <figcaption>Connection status</figcaption>
  </div>
  </div>

2. Program Window: You can now **duplicate**, **replace**, and **swap** actions in the program window.  

    <img className="centered" src={action_block_options} width="50%"/>
    <figcaption>Action block options</figcaption>

3. Program Window: You can also use buttons to **swap** actions.  

    <img className="centered" src={action_swap_button} width="70%"/>
    <figcaption>Swap action button</figcaption>

4. Scene Graph Window: You can now click on a component or a node to **highlight** it in the 3D view.

    <img className="centered" src={sofa_robotics_highlights} width="100%"/>
    <figcaption>Highlight objects in the viewport</figcaption>

## Other changes

### Enhancements
- Switch to orthographic mode when aligning the camera
- Also align the grid when aligning the camera
- When saving screenshots, the name of the file now contains the date and time of the screenshot

### New features
- **Scene Graph Window**:
  - You can now filter the components by name
  - We have improved the general readability of the window
  - We also have improved the readability of the components and nodes window 
  - You can now right-click on a node or component to copy its path, deactivate or activate it, etc.
- **Viewport Window**:
  - We have added gizmos to align, rotate the camera
  - We have added buttons to center, fit, translate the camera
  - We have added a button to switch between perspective and orthographic mode


### Bug fixes
- We fixed some rendering issues with the program

### Screenshot

<img className="centered" src={sofa_robotics} width="100%"/>
<figcaption>SOFA Robotics Interface v25.12</figcaption>