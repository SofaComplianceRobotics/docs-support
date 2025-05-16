---
title: Release - Emio Labs v25.06
description: We are happy to announce **Emio Labs v25.06**.
authors:
  - hanaerateau
  - eulaliecoevoet
tags: [v25.06, release, Emio Labs]
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
date: 2025-06-30T10:00
---

We are happy to announce **Emio Labs v25.06**. With this release Emio Labs is now available for MacOS. 
The release also contains many new exciting features and improvements.
To upgrade, download the new version !

![MacOS icon](./2025-06-release/img/macos.png)

<!--truncate--> 

## Highlights

You can now download Emio Labs for MacOS ! 

## Other changes

### Enhancements
- The labs have been renamed, removing the numbering to let you organize the labs as you want
- Changes in the solutions: 
    - The leg for the `lab_design` does not collide with the structure anymore
    - There were some typo in the solutions of the `lab_colsedloop`
- There were some typo and descriptions missing in the `lab_inversekinematics`:
    - Matrices descriptions in the course material
    - Unifies the notation between the python code and course material
    - Detailed explanations in the solution
- You will now find tips to 3D print the soft parts of Emio in the `lab_design` 
- Update the instruction for the setup of FreeCAD in the `lab_design`
- The numbering of the motors was shifted in some labs

### New features
- The camera orientation in the simulation is automatically changed with respect to Emio's configuration: extended or compact  
- In the sandbox, you can now set up Emio with a custom number of legs
- On Linux, you can use the option `show_video_feed` in the `DotTracker` to see the camera feed while running the simulation 

### Bug fixes
- Parameters fix:
    - The mass of the cube in the `lab_models` was off by a factor of 10
    - The Young's modulus has been changed consequently
    - The artificial rigidity of the FEM volume model is compensated with the `tetraYMFactor` set in the `parameters.py` file