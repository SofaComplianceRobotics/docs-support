---
title: Release - Emio Labs v25.12
description: We are happy to announce **Emio Labs v25.12**.
authors:
  - hanaerateau
  - eulaliecoevoet
tags: [v25.12, release, Emio Labs]
hide_table_of_contents: false
date: 2025-12-31T10:00
---

import lab_empty from './2025-12-release/img/lab-empty.png'
import calibration from './2025-12-release/img/calibration.png'
import github_labempty from './2025-12-release/img/emio-labs-empty.png'
import reset_labs from './2025-12-release/img/emio-labs-resetlabs.png'
import labs_configurator from './2025-12-release/img/emio-labs-labsconfigurator.png'


## Highlights

### ✨ Labs Configurator

Configure your labs with ease using the new Labs Configurator! Add, remove, and organize your labs directly from the Emio Labs interface. This feature allows you to customize the application to your curiculum needs. Follow this documentation for more details: [Configuring Emio Labs](https://docs-support.compliance-robotics.com/docs/v25.12/Users/EmioLabs/emio-labs-user-manual/#configuring-the-labs).

<img className="centered" src={labs_configurator} width="70%" style={{boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"}}/>

### ✨ Reset Labs
Easily reset your labs to their original state with the new Reset Labs feature. This is particularly useful for educators who want to ensure that all students start with the same setup. You can reset individual labs or all labs at once. Follow this documentation for more details: [Resetting the Labs](https://docs-support.compliance-robotics.com/docs/v25.12/Users/EmioLabs/emio-labs-user-manual/#resetting-the-labs).

<img className="centered" src={reset_labs} width="70%" style={{boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"}}/>

### ✨ New Content

We are excited to introduce new content to Emio Labs, including new demos and a new lab. These additions will help you explore the capabilities of Emio:

- [demo_sensing](https://github.com/SofaComplianceRobotics/Emio.demo_sensing): A new demo that showcases the sensing capabilities of Emio using the camera. Use Emio as a joystick, and teleoperate another Emio. 
- [demo_tictactoe](https://github.com/SofaComplianceRobotics/Emio.demo_tictactoe): Play Tic Tac Toe with Emio! This demo allows you to play the classic game against Emio, showcasing the pick-and-place capabilities of Emio, and the use of computer vision and AI to recognize the game pawns.
- [demo_sofagym](https://github.com/SofaComplianceRobotics/Emio.demo_sofagym): A new demo that showcases the integration of Emio with SofaGym, allowing you to use reinforcement learning in a simulated environment to train Emio to solve the push-T task.
- [lab_control]

<!--truncate--> 

### ✨ Camera Calibration
We introduced a new process to calibrate the camera Emio Labs. This allows you to accurately map the real-world coordinates to the camera's view, enhancing the interaction with Emio in your lab environment.

There are two ways to calibrate the camera:
- Using the [Emio API](docs/v25-12/Developers/emio-api/#camera-calibration-tool) to calibrate the camera programmatically.
- Using the [Emio Labs camera calibration scene](docs/v25.12/Users/Emio/getting-started-with-emio/#calibrating-the-camera) to calibrate the camera through the user interface from the sandbox section of Emio Labs.

<a href="https://docs-support.compliance-robotics.com/docs/v25.12/Users/Emio/getting-started-with-emio/#calibrating-the-camera"> <img className="centered" src={calibration} width="70%" style={{boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"}}/> </a>

### ✨ Empty Lab

We've made a [new GitHub repository](https://github.com/SofaComplianceRobotics/Emio.lab_empty) to help you getting started with the creation of your own lab. It contains a minimal setup with the necessary files to get you started quickly.

<a href="https://github.com/SofaComplianceRobotics/Emio.lab_empty"><img className="centered" src={lab_empty} width="70%" style={{boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"}}/></a>

## Other Changes

### Enhancements
- The core assets of Emio Labs are now in a [public GitHub repository](https://github.com/SofaComplianceRobotics/Emio.CoreAssets). You can now open issues and propose changes. 
- We have organized the sections of the labs as files to make it easier to navigate.
- The descriptions of each lab are now located in the `lab.json` file, directly in the lab folder
- You can now use your own centerpart and leg meshes in the labs by placing them in a folder named `data/meshes/centerparts` or `data/meshes/legs` in the lab folder.

### New Features
- 

### Bug Fixes
- Quiz: Fixed a bug where the quiz was not working properly when reloading a page
- We have updated the lab design with the latest version of FreeCAD

