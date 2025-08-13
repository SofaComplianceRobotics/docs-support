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

## Highlights

### ✨ Save your project

You can now save your project as a `.crproj` file. This file contains a lot of information about your project, such as the windows you have opened, and the settings you have configured. 

### ✨ New features

1. We have added a connection section. You can now connect multiple robots to your computer and choose which robot to connect to, by selecting the corresponding port.  

  <div style={{display:"flex"}}>
  <img className="centered" src={connection_section_ports} width="40%"/>
  <img className="centered" src={connection_section_status} width="40%"/>
  </div>

2. You can now duplicate, replace, and swap actions in the program window.  

  <img className="centered" src={action_block_options} width="50%"/>

3. You can also use buttons to swap actions.  

  <img className="centered" src={action_swap_button} width="70%"/>

<!--truncate--> 

## Other changes

### Enhancements
- Switch to orthographic mode when aligning the camera
- Also align the grid when aligning the camera
- When saving screenshots, the name of the file now contains the date and time of the screenshot

### New features
- 

### Bug fixes
- We fixed some rendering issues with the program
