---
title: App User Manual
sidebar_position: 3
---

# App User Manual
[emio labs user manual](https://docs-support.compliance-robotics.com/User-Manual-Software-136582ce7d3a809680a5d3326ad2e658)

# User Manual - Software

## 1. Introduction

Welcome to the user manual of the software **emio-labs**. This desktop application is designed to teach soft robotics through interactive labs. This manual will guide you through the application's features and help you navigate the learning process.

## 2. Getting Started

### 2.1 System Requirements

Ensure your system meets the following minimum requirements:

- Operating System (OS) minimum: Windows 10 or Ubuntu 22.04
- RAM: 8GB minimum, 16GB recommended
- Storage: 2GB free space

### 2.2 Installation

1. [Download](https://compliance-robotics.com/compliance-lab/) the **emio-labs** application and follow the instructions provided with the download links. Download the version that corresponds to your OS. There are three options, an installer, a portable version, or a `.zip` file containing the binaries:
    1. If you have downloaded an installer, run it and follow the on-screen instructions. When the installation is completed, simply search for the **emio-labs** application on your computer, as you would do with any other software.
    2. If you have downloaded a portable version (`.appImage` for Linux, `.exe` for Windows), just untar the file if necessary, the **emio-labs** application is the resulting executable file.  
    3. If you have downloaded the `.zip` file, first, unzip the directory. The **emio-labs** application is then located at the root of the directory. 
2. Launch the **emio-labs** application after installation is complete.

## 3. Application Overview

**emio-labs** consists of several key components:

- Main Dashboard: Navigate between different labs and access resources.
- Lab Environment: Interactive space where you'll follow learning materials and complete exercises and simulations.
- Simulation Interface: Launch and interact with the numerical twin of Emio.
- To reset the application go to **Edit > Reset App** in the main menu bar. This will reset the quiz, select the default parameters in the labs, etc.


![emio labs overview](img/emio-labs-overview.png "emio labs overview")
*The **emio-labs** application on the Introduction page. The main dashboard is located at the top of each page.*



## 4. Navigating the Labs

The original content of **emio-labs** created by Compliance Robotics offers a series of labs covering various aspects of soft robotics:

- Modeling
- Inverse Kinematics
- Pick & Place
- Design Principles
- Control

To access a lab:

1. Click on the desired lab from the main dashboard.
2. Read the lab overview and objectives.
3. Follow the step-by-step instructions within each lab.

If you want to create your own content simply follow this [documentation](https://www.notion.so/13c582ce7d3a80ceb636ca3153f5594a?pvs=21). 

## 5. Using the Simulation Software

The simulation software provides a numerical twin of Emio for experimentation:

- Each lab contains exercise sections within you could be asked to launch the simulation corresponding to the exercise.
- To launch the simulation, click the **SOFA** button within the section.
- For information about the simulation software, follow the [Simulation Software User Manual](https://www.notion.so/136582ce7d3a8087a6ddd36a4f3ed1b2?pvs=21).

![exercise](img/exercise.png "exercise")
_Example of a lab exercise. Notice the SOFA button at the bottom of the section. Follow the instructions and click on this button to launch the simulation of the exercise._

## 6. Piloting the Real Device

After completing the requirements in simulation, you may have the opportunity to pilot the real soft robot:

- Ensure the physical device is properly connected and powered on.
- Toggle the "Simulation/Robot" button at the top of the simulation software.
- And finally use the interface controls to send commands to the real robot (see the [Simulation Software User Manual](https://www.notion.so/136582ce7d3a8087a6ddd36a4f3ed1b2?pvs=21)).

## 7. Sandbox

The **emio-labs** application offers a sandbox mode which allow you to set up Emio exactly as you want. Using the original set of legs and connectors or your own designed parts. In the main dashboard click on the Sandbox link to open the corresponding page: 

1. Follow the instructions to help you set up your Emio and the numerical twin.
2. Launch the corresponding simulation by clicking on the SOFA button as usual, and enjoy.

## 8. Additional Resources

Access supplementary materials through this website, including:

- [Video tutorials](https://www.notion.so/138582ce7d3a8077bb51c7dcd901fa49?pvs=21)
- [FAQs](https://www.notion.so/136582ce7d3a8025a374f5ad4b8a3e53?pvs=21)

For additional help or inquiries, please contact our support team using this [form](/emio-support-form).