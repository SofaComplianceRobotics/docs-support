---
title: Release - Emio Labs v25.06
description: We are happy to announce **Emio Labs v25.06**.
authors:
  - hanaerateau
  - eulaliecoevoet
tags: [v25.06, release, Emio Labs]
hide_table_of_contents: false
date: 2025-06-30T10:00
---

import emio_sofa_api_img from './2025-06-release/img/emio-sofa-api.png'
import emio_api_img from './2025-06-release/img/emioapi.png'
import emio_labs_macos from './2025-06-release/img/emio-labs-macos.png'


We are happy to announce **Emio Labs v25.06**!

With this release Emio Labs is now available for MacOS. 
The release also contains many new exciting features and improvements.
To upgrade, download the new version !

![MacOS icon](./2025-06-release/img/emio_macos.png)

<!--truncate--> 

## Highlights

### ✨ Emio Labs on MacOS!

You can now download Emio Labs for MacOS!
Download the latest version [here](https://mailchi.mp/compliance-robotics.com/download-emio-labs) and follow the [installation steps](/docs/v25.06/Users/EmioLabs/emio-labs-user-manual/#installation).

<img className="centered" src={emio_labs_macos} width="70%"/>

### ✨ A New Emio API
Emio Labs now comes with a new API to use Emio without the simulation environment. Browse our [documentation](/docs/v25.06/Developers/emio-api/) to learn how to use this API.


<img className="centered" src={emio_api_img} width="70%"/>

### ✨ Emio SOFA API Documentation
To help you customize your Emio SOFA scene, we created a new documentation page for that!

Check this page to learn about the [Emio SOFA API](/docs/v25.06/Developers/emio-sofa-api/).

<img className="centered" src={emio_sofa_api_img} width="70%"/>

## Other Changes

### Enhancements
- The labs have been renamed, removing the numbering to let you organize the labs as you want
- Changes in the solutions: 
    - The leg for the `lab_design` does not collide with the structure anymore
    - There were some typos in the solutions of the `lab_colsedloop`
- There were some typos and descriptions missing in the `lab_inversekinematics`:
    - Matrices descriptions in the course material
    - Unifies the notation between the python code and course material
    - Detailed explanations in the solution
- You will now find tips to 3D print the soft parts of Emio in the `lab_design` 
- Update the instruction for the setup of FreeCAD in the `lab_design`
- The numbering of the motors was shifted in some labs

### New Features
- The camera orientation in the simulation is automatically changed with respect to Emio's configuration: extended or compact  
- In the sandbox, you can now set up Emio with a custom number of legs
- You can use the option `show_video_feed` in the `DotTracker` to see the camera feed while running the simulation 

### Bug Fixes
- Parameters fix:
    - The mass of the cube in the `lab_models` was off by a factor of 10
    - The Young's modulus has been changed consequently
    - The artificial rigidity of the FEM volume model is compensated with the `tetraYMFactor` set in the `parameters.py` file