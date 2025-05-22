---
title: App User Manual
sidebar_position: 3
---

import emiolabs_overview from './img/emio-labs-overview.png';
import exercise_overview from './img/exercise.png';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# App User Manual

Learn how to use the **Emio Labs** application.

## Introduction

Welcome to the user manual of the software **Emio Labs**. This desktop application is designed to teach soft robotics through interactive labs. This manual will guide you through the application's features and help you navigate the learning process.

## Getting Started

### System Requirements

Ensure your system meets the following minimum requirements:

- Operating System (OS) minimum: Windows 10, Ubuntu 22.04 or MacOS14
- RAM: 8GB minimum, 16GB recommended
- Storage: 2GB free space

### Installation

Visit our [website and download](https://compliance-robotics.com/compliance-lab/) the **Emio Labs** application for free. After completing a form, you'll receive an email with download links. Choose the version that matches your operating system. Each version comes in three formats: an installer, a portable, or a `.zip` file containing the binaries.

<Tabs className="unique-tabs" groupId="operating-systems">
  <TabItem value="linux" label="Linux" default>
       :::warning[requirements]
       - To use the portable `.AppImage`, install libfuse2: `sudo apt install libfuse2`

       - When trying to connect the real robot, if you get a `[Errno 13] Permission denied: '/dev/ttyUSB0'` message. Run the following command in terminal: `sudo chmod 777 /dev/ttyUSB0`. Make sure that the name of the USB port matches the one from the error message.
       ::: 
       1. **Installer.** If you have downloaded an installer `.deb`, run it and follow the on-screen instructions. When the installation is completed, simply search for the **Emio Labs** application on your computer, as you would do with any other software.
       2. **Portable.** If you have downloaded a portable `.AppImage`, untar the file, the **Emio Labs** application is the resulting executable file.   
       3. **Binaries.** If you have downloaded the `.zip` file, first, unzip the directory. The **Emio Labs** application is then located at the root of the directory. 
  </TabItem>
  <TabItem value="windows" label="Windows">
       :::warning[requirements]
       - All formats require [Microsoft Visual C++ 2022 Redistributable](https://aka.ms/vs/17/release/vc_redist.x64.exe) to be installed.

       - Depending on your version of Windows, you may need to install the [FTDI drivers](https://ftdichip.com/drivers/vcp-drivers/) to pilot the robot. This is typically necessary if, upon connecting the robot to your computer, you encounter the following error message:  
       `[ERROR] No serial port found with manufacturer = FTDI`.  
       Installing the drivers should resolve this issue.
       :::   

       1. **Installer.** If you have downloaded an installer `.msi`, run it and follow the on-screen instructions. When the installation is completed, simply search for the **Emio Labs** application on your computer, as you would do with any other software.
       2. **Portable.** If you have downloaded a portable `.exe`, the **Emio Labs** application is this executable file. Note that the application may take a while to open, as the software needs to install itself in a temporary directory before launching.   
       3. **Binaries.** If you have downloaded the `.zip` file, first, unzip the directory. The **Emio Labs** application is then located at the root of the directory. 

  </TabItem>
  <TabItem value="macos" label="MacOS">
       :::warning[requirements]
       - Install [Python 3.10](https://www.python.org/downloads/release/python-31011/) for MacOS from [python.org](http://python.org/). 
       - Download the file `requirements.txt`.
       - And finally, install the required Python modules by running `python -m pip install -r requirements.txt`.
       :::

       1. **Installer.** If you have downloaded an installer `.dmg`, run it and follow the on-screen instructions. When the installation is completed, simply search for the **Emio Labs** application on your computer, as you would do with any other software.
       2. **Portable.** If you have downloaded the `.zip`, double-click the file to create a `.app` file. To launch the **Emio Labs** application, simply click this new file. 
  </TabItem>
</Tabs>

Once installed, try the Emio Labs application. 

:::tip[important]
A directory <code>~/emio-labs</code> containing all the assets (labs, python scripts, meshes, etc.) is created in your Home directory after the first run of the application. The application uses the files of this directory. If you make modifications and want to reset the directory to its original state, simply delete or remove it from your Home directory, then rerun the application.
:::

## Application Overview

**Emio Labs** consists of several key components:

- Main Dashboard: Navigate between different labs and access resources.
- Lab Environment: Interactive space where you'll follow learning materials and complete exercises and simulations.
- Simulation Interface (sofa-robotics): Launch and interact with the numerical twin of Emio.
- To reset the application go to **Edit > Reset App** in the main menu bar. This will reset the quiz, select the default parameters in the labs, etc.

<img className="centered" src={emiolabs_overview} width="50%" alt="emio labs overview"/>
<figcaption>The **Emio Labs** application on the Introduction page. The main dashboard is located at the top of each page.</figcaption>



## Navigating the Labs

The original content of **Emio Labs** created by Compliance Robotics offers a series of labs covering various aspects of soft robotics:

- Modeling
- Inverse Kinematics
- Pick & Place
- Design 
- Closed Loop

To access a lab:

1. Click on the desired lab from the main dashboard.
2. Read the lab overview and objectives.
3. Follow the step-by-step instructions within each lab.

If you want to create your own content, you can follow this [documentation](/docs/EmioLabs/create-your-lab). 

## Using the Simulation Software

The simulation software provides a numerical twin of Emio for experimentation:

- Each lab contains exercise sections within you could be asked to launch the simulation corresponding to the exercise.
- To launch the simulation, click the **SOFA** button within the section.
- For information about the simulation software, follow the [SOFA Robotics docs](/docs/SOFARobotics/GUI-user-manual).

<img className="centered" src={exercise_overview} width="50%" alt="overview of an exercise section"/>
<figcaption>Example of a lab exercise. Notice the SOFA button at the bottom of the section. Follow the instructions and click on this button to launch the simulation of the exercise.</figcaption>

## Piloting the Real Device

After completing the requirements in simulation, you may have the opportunity to pilot the real soft robot:

- Ensure the physical device is properly connected and powered on.
- Toggle the "Simulation/Robot" button at the top of the simulation software to establish a connection between the simulator and the real device. When in "Robot" mode, pressing the play button will send simulation commands directly to the real device. 
- And finally use the interface controls to pilote Emio (see the [SOFA Robotics docs](/docs/SOFARobotics/GUI-user-manual)).

## Sandbox

The **Emio Labs** application offers a sandbox mode which allow you to set up Emio exactly as you want. Using the original set of legs and connectors or your own designed parts. In the main dashboard click on the Sandbox link to open the corresponding page: 

1. Follow the instructions to help you set up your Emio and the numerical twin.
2. Launch the corresponding simulation by clicking on the SOFA button as usual, and enjoy.

## Additional Resources

Access supplementary materials through this website, including:

- [FAQs](/docs/EmioLabs/faq)

For additional help or inquiries, please contact our support team using this [form](/emio-support-form).