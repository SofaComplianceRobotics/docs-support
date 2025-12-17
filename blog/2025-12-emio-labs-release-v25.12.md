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
import export_import from './2025-12-release/img/emio-labs-exportimportconfig.png'


## Highlights

### ✨ Camera Calibration
We introduced a new process to calibrate the camera of Emio. 

There are two ways to calibrate the camera:
- Using the [Emio API](https://docs-support.compliance-robotics.com/docs/v25.12/Developers/emio-api#camera-calibration-tool) to calibrate the camera programmatically.
- Using the [Emio Labs camera calibration scene](https://docs-support.compliance-robotics.com/docs/v25.12/Users/Emio/getting-started-with-emio/#calibrating-the-camera) to calibrate the camera through the user interface from the sandbox section of Emio Labs.

<a href="https://docs-support.compliance-robotics.com/docs/v25.12/Users/Emio/getting-started-with-emio#calibrating-the-camera"> <img className="centered" src={calibration} width="70%" style={{boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"}}/> </a>

<!--truncate--> 

### ✨ Configure Labs

Configure your labs directly from the application. Add new labs, remove those you don't need, and organize them to meet your curiculum.  
Follow this documentation for more details: [Configuring the Labs](https://docs-support.compliance-robotics.com/docs/v25.12/Users/EmioLabs/emio-labs-user-manual#configuring-the-labs).

<img className="centered" src={labs_configurator} width="100%" style={{boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"}}/>  

#### Export/Import Labs Configuration
You can also export and import your labs configuration as a JSON file. This is useful for sharing your setup with colleagues or to quickly set up multiple installations of Emio Labs with the same configuration.

<img className="centered" src={export_import} width="100%" style={{boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"}}/>  

### ✨ Reset/Delete Labs
Easily reset your labs to their original state with the new Reset Labs feature. This is particularly useful to ensure that all students start with the same setup. You can reset individual labs or all labs at once. Follow this documentation for more details: [Resetting the Labs](https://docs-support.compliance-robotics.com/docs/v25.12/Users/EmioLabs/emio-labs-user-manual#resettingdeleting-the-labs).

<img className="centered" src={reset_labs} width="100%" style={{boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"}}/>

### ✨ New Content

We are excited to introduce new content to Emio Labs. These additions will help you explore the capabilities of Emio:

- [demo_sensing](https://github.com/SofaComplianceRobotics/Emio.demo_sensing): A new demo that showcases the sensing capabilities of Emio using the camera. 
- [demo_tictactoe](https://github.com/SofaComplianceRobotics/Emio.demo_tictactoe): Play Tic Tac Toe with Emio! This demo allows you to play the classic game against Emio, showcasing the pick-and-place capabilities of Emio, and the use of computer vision and AI to recognize the game pawns.
- Explore our [GitHub repositories](https://github.com/orgs/SofaComplianceRobotics/repositories?q=emiolabslibrary) to access a comprehensive collection of labs and demos designed for Emio and the Emio Labs application.

### ✨ Empty Lab

We've made a [new GitHub repository](https://github.com/SofaComplianceRobotics/Emio.lab_empty) that can be used as a template to help you getting started with the creation of your own lab. It contains a minimal setup with the necessary files to get you started quickly.

<a href="https://github.com/SofaComplianceRobotics/Emio.lab_empty"><img className="centered" src={lab_empty} width="70%" style={{boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"}}/></a>

## Other Changes

### Enhancements
- The core assets of Emio Labs are now in a [public GitHub repository](https://github.com/SofaComplianceRobotics/Emio.CoreAssets). You can now open issues and propose changes. 
- We have organized the sections of the labs as files to make it easier to navigate.
- The descriptions of each lab are now located in the `lab.json` file, directly in the lab folder (see [this documentation](https://docs-support.compliance-robotics.com/docs/v25.12/Users/EmioLabs/create-your-lab#introduction))
- You can now use your own centerpart and leg meshes, by placing them directly in the lab folder, in folders named `data/meshes/centerparts` or `data/meshes/legs`.

### New Features
- We have reintroduced the [python button](https://docs-support.compliance-robotics.com/docs/v25.12/Users/EmioLabs/create-your-lab#buttons) to run python scripts directly from Emio Labs. 
- Check for updates directly from Emio Labs. You can now check for updates and download the latest version of Emio Labs directly from the application.

### Bug Fixes
- Quiz: Fixed a bug where the quiz was not working properly when reloading a page
- We have updated the lab design with the latest version of FreeCAD

