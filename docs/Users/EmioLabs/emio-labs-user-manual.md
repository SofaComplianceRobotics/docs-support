---
title: App User Manual
sidebar_position: 1
---

import emiolabs_overview from './img/emio-labs-overview.png';
import exercise_overview from './img/exercise.png';
import emio_labs_labsconfigurator from './img/emio-labs-labsconfigurator.png';
import emio_labs_resetlabs from './img/emio-labs-resetlabs.png';
import emio_labs_empty from './img/emio-labs-empty.png';
import emio_labs_exportimport from './img/emio-labs-exportimportconfig.png';
import sofa_icon from './img/SOFAIcon.png'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# App User Manual

Welcome to the user manual of the **Emio Labs** application.

## Introduction

This desktop application is designed to teach soft robotics through interactive labs. This manual will guide you through the application's features and help you navigate the learning process.

## Getting Started

### System Requirements

Ensure your system meets the following minimum requirements:

- Operating System (OS) minimum: Windows 10, Ubuntu 22.04 or MacOS14
- RAM: 8GB minimum, 16GB recommended
- Storage: 2GB free space

### Installation

[Download](https://mailchi.mp/compliance-robotics.com/download-emio-labs) the **Emio Labs** application for free. After completing a form, you'll receive an email with download links. Choose the version that matches your operating system. Each version comes in three formats: an installer, a portable, or a `.zip` file containing the binaries.

<Tabs className="unique-tabs" groupId="operating-systems">
  <TabItem value="linux" label="Linux" default>
       :::important[requirements]
       - To use the portable `.AppImage`, install libfuse2: `sudo apt install libfuse2`

       - When trying to connect the real robot, if you get a `[Errno 13] Permission denied: '/dev/ttyUSB0'` message. Run the following command in terminal: `sudo chmod 777 /dev/ttyUSB0`. Make sure that the name of the USB port matches the one from the error message.
       ::: 
       1. **Installer.** If you have downloaded an installer `.deb`, run it and follow the on-screen instructions. When the installation is completed, simply search for the **Emio Labs** application on your computer, as you would do with any other software.
       2. **Portable.** If you have downloaded a portable `.AppImage`, untar the file, the **Emio Labs** application is the resulting executable file.   
       3. **Binaries.** If you have downloaded the `.zip` file, first, unzip the directory. The **Emio Labs** application is then located at the root of the directory. 
  </TabItem>
  <TabItem value="windows" label="Windows">
       :::important[requirements]
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
       :::important[requirements]
       1. Install [Python 3.10](https://www.python.org/downloads/release/python-31011/) for MacOS from [python.org](http://python.org/). 
       2. Download the file [requirements.txt](https://www.dropbox.com/scl/fi/ruzghkla5f2b2bfbng0cz/requirements.txt?rlkey=bipcw34buoegxqs101srpt20u&st=b8vw0dya&dl=1).
       3. And finally, install the required Python modules by running `python -m pip install -r requirements.txt`.
       :::

       1. **Installer.** If you have downloaded an installer `.dmg`, run it and follow the on-screen instructions.
       2. **Portable.** If you have downloaded the `.zip`, double-click the file to create a `.app` file.

       To launch Emio Labs on MacOS, please refer to the [section below](#running-emio-labs-on-macos) 
  </TabItem>
</Tabs>

### Running Emio Labs on MacOS
:::warning
The [Lab Design](https://docs-support.compliance-robotics.com/docs/v25.06/Users/EmioLabs/find-labs/#lab---design) is not working on MacOS due to an issue with `gmsh`.
:::

If you are running the Emio Labs on MacOS, you need to run it with **admin privileges**. This is necessary for the application to access certain system resources and functionalities, such as connecting to the real robot.

To run the application with admin privileges, open a terminal and use the following command depending on the installation method you used:

If using the portable (unzipped .app file): 
```bash
cd path/to/where/you/unzipped/the/app
sudo ./emio-labs.app/Contents/MacOS/emio-labs
```

If installed with the .dmg file:
```bash
sudo /Applications/emio-labs.app/Contents/MacOS/emio-labs
```

You may encounter a security warning when launching the application for the first time. 

To resolve this:
1. Open **System Preferences**.
2. Go to **Security & Privacy**.
3. Under the **Security** section, click on **Open Anyway** next to the message about the blocked application.
4. Confirm by clicking **Open** in the pop-up dialog.
5. Enter your password if prompted.
6. Restart the application.

## Application Overview

**Emio Labs** consists of several key components:

- Main Table of Contents: Navigate between different labs and access resources.
- Lab Environment: Interactive space where you'll follow learning materials and complete exercises and simulations.
- Simulation Application (sofa-robotics): Launch and interact with the numerical twin of Emio.
- To reset the application go to **Edit > Reset App** in the main menu bar. This will reset the quiz, select the default parameters in the labs, etc.

<img className="centered" src={emiolabs_overview} width="50%" alt="emio labs overview"/>
<figcaption>The **Emio Labs** application on the Introduction page. The main dashboard is located at the top of each page.</figcaption>

:::tip[important]
A directory <code>~/emio-labs</code> containing all the assets (labs, python scripts, meshes, etc.) is created in your Home directory after the first run of the application. The application uses the files of this directory. If you make modifications and want to reset the directory to its original state, use the [**Reset Labs**](#resettingdeleting-the-labs) window (recommended), or remove the directory from your Home directory then rerun the application.
:::

## The Labs

The original content of **Emio Labs** created by Compliance Robotics offers a series of labs covering various aspects of soft robotics:

- Modeling
- Inverse Kinematics
- Pick & Place
- Design 
- Closed Loop

To access a lab:

1. Click on the desired lab from the table of contents.
2. Read the lab overview and objectives.
3. Follow the step-by-step instructions within each lab.

If you want to create your own content, you can follow this [documentation](create-your-lab.md). 

### Configuring the Labs
The **Labs Configurator** lists all the labs available for Emio Labs that are in the `path/to/home/emio-labs/version/assets/labs` folder.
From this window, you can **activate** a lab to be viewed in the app and **reorder** the labs by checking and drag and dropping the lab cards.

To open the configurator, click on **Labs>Configure Labs** in the top menu bar.

<img className="centered" src={emio_labs_labsconfigurator} width="70%" alt="overview of the labs configurator window"/>
<figcaption>The labs configurator of the **Emio Labs** application. Remove, add, or organize the labs.</figcaption>

You can add a lab by inputting either of the following in the text input:
- A local path on your computer to a folder containing the lab material;
     - e.g., _/home/username/path/to/a/lab/folder_
- A link (`http` or `https`) to a `zip` archive.
     - e.g., _https://github.com/SofaComplianceRobotics/Emio.lab_empty/archive/refs/heads/main.zip_

<img className="centered" src={emio_labs_empty} width="70%" alt="how to get a link to a zip archive on GitHub"/>
<figcaption>Getting a link to a zip archive on GitHub.</figcaption>

Then click on the **Add** button to add the lab to the list of available labs for Emio Labs. This will copy or download the folder from the input into the `path/to/home/emio-labs/version/assets/labs` folder.

By default, the lab will be checked and added to the application.

:::tip
A lab should follow the [Lab Empty](https://github.com/SofaComplianceRobotics/Emio.lab_empty) template.
Refer to [Create Your Own Lab](create-your-lab.md) for all the details to create a lab.
:::

### Resetting/Deleting the Labs
You can reset or delete labs by opening the **Reset/Delete Labs** window by clicking the **Labs>Reset/Delete Labs**. Resetting a lab means copying back the original content of the labs into the `path/to/home/emio-labs/version/assets/labs` folder. This way, if you made changes to the labs material, you can easily come back to the initial state.

In the window, either select the labs you want to reset and click the **Reset Selected** button or simply click the **Reset All** button to reset all the labs.  

You can also **permanently delete** labs from the computer, using the same window (see image below).

<img className="centered" src={emio_labs_resetlabs} width="70%" alt="overview of the reset labs window"/>
<figcaption>Resetting the labs from the application.</figcaption>

:::tip[important]
Note: You can only reset the labs that have been added with the Labs Configurator or the core labs.
:::

To delete labs, just check the labs you want to delete and then click on the red __Delete__ button.

### Export/Import Labs Configuration
You can easily export and import labs configuration. 
It is particularly convenient when you want to share a labs configuration across several computers.

Click on the top menu bar in __Labs__>__Export Config__ or __Labs__>__Import Config__.

<img className="centered" width="70%" src={emio_labs_exportimport} alt="Exporting/importing a configuration"/>
<figcaption>Exporting/importing a configuration.</figcaption>

### Manually Edit the Lab Config File
:::warning[important]
Note: This is not the recommended method. Instead, use the [Labs Configurator](#configuring-the-labs).
:::

The content of the application is set in the file `assets/labs/labsConfig.json`. If you want to add or remove some labs, you can simply modify this file. The order of the labs in the application will match the order in the `labsConfig.json` file. For example:   

```json title="/assets/labs/labsConfig.json"
{
    "labs": [{"name": "introduction"},
             {"name": "lab_models"},
             {"name": "sandbox"}]
}
```

## Using the Simulation Software

The simulation software provides a numerical twin of Emio for experimentation:

- Each lab contains exercise sections within you could be asked to launch the simulation corresponding to the exercise.
- To launch the simulation, click the **SOFA** <img className="drop-shadow" src={sofa_icon} style={{height: '1em', border: '', borderRadius: '2px'}} /> button within the section.
- For information about the simulation software, follow the [SOFA Robotics docs](../SOFARobotics/GUI-user-manual.md).

<img className="centered" src={exercise_overview} width="50%" alt="overview of an exercise section"/>
<figcaption>Example of a lab exercise. Notice the SOFA button at the bottom of the section. Follow the instructions and click on this button to launch the simulation of the exercise.</figcaption>

## Piloting the Real Device

After completing the requirements in simulation, you may have the opportunity to pilot the real soft robot:

- Ensure the physical device is properly connected and powered on by following [this guide](../../Emio/getting-started-with-emio/).
- Toggle the __Simulation/Robot__ button at the top of the simulation software to establish a connection between the simulator and the real device. 
- When in _Robot_ mode, pressing the play button will send simulation commands directly to the real device. 
- And finally use the interface controls to pilote Emio (see the [SOFA Robotics docs](../SOFARobotics/GUI-user-manual.md)).

## Sandbox

The **Emio Labs** application offers a sandbox mode which allows you to set up Emio exactly as you want. Using the original set of legs and connectors or your own designed parts. 

In the main dashboard click on the Sandbox link to open the corresponding page: 

1. Follow the instructions to help you set up your Emio and the numerical twin.
2. Launch the corresponding simulation by clicking on the SOFA button as usual, and enjoy.

## Install Python packages for Emio Labs
For some labs or if you are creating your own lab, you might need to install Python packages that are not shipped with the embedded Emio Labs Python.

To do this:

1. Find the Python installation of Emio Labs by going to the installation folder of Emio Labs, for example on Windows that might be `C:\Users\<USERNAME>\AppData\Local\Programs\emio-labs` .
2. There should be a folder `resources\sofa\bin\python`. This is where the Python running with Emio Labs is.
3. Open a terminal in this folder ( e.g. `C:\Users\<USERNAME>\AppData\Local\Programs\emio-labs\resources\sofa\bin\python`).
4. To install the Python package of name `lepackage`, type in `python -m pip install lepackage` 
5. If admin rights are necessary, accept or type in the admin password when prompted

:::warning
If you are on MacOS, there is no Python shipped with Emio Labs. Use the Python you installed in the [installation process](#installation)
:::

## Additional Resources

Access supplementary materials through this website, including:

- [FAQs](../faq.md)

For lab-related troubleshouting, refer to the documentation in the lab itself or the README file if you are using a lab from a Git repo.

For additional help or inquiries, please contact our support team using this [form](/emio-support-form).

