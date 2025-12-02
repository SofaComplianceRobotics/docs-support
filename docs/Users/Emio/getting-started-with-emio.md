---
title: Getting Started with Emio
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import accessories from './img/accessories.jpg';
import emio_drawer_camera from './img/emio-drawer-camera.png';
import emio_motors from './img/emio-motors.png';
import emio_connections from './img/emio-connections.png';
import motor_cap1 from './img/motor-cap1.png';
import motor_cap2 from './img/motor-cap2.png';
import motor_cap3 from './img/motor-cap3.png';
import motor_cap4 from './img/motor-cap4.png';
import calib_emio from './img/calibration_emio_setup.png';
import calib_window from './img/calibration_window.png';
import calib_rgb_window from './img/calibration_rgb.png';
import calib_simulation from './img/calibration_simulation.png';

# Getting Started with Emio

Emio is a parallel deformable robot. Together with the desktop application [Emio Labs](../../../Users/EmioLabs/), this hands-on platform provides a practical introduction to the concepts of compliant and deformable robotics. 

## Discovering Emio

The robot features a structure composed of four servo motor-actuated deformable legs connected together. 
It comes equipped with a depth camera and a set of accessories, including multiple deformable legs and connectors, all stored in a dedicated drawer.

Emio features two distinct configurations, as shown in the images below:

1. **Extended Configuration**: In this setup, the legs point downward, enabling it to perform tasks such as pick-and-place.
2. **Compact Configuration**: Here, the legs are oriented upward, facilitating easier interaction with the robot.


<div style={{display: "flex"}}>
    <div>
        <img className="centered" src={emio_drawer_camera} width="70%" alt="Emio in extended configuration showing the accessory drawer and the depth camera."/>
        <figcaption>Emio in extended configuration with (1) the drawer in which you will find Emio's accessories, (2) the depth camera that can be oriented up or down. </figcaption>
    </div>
    <div>
        <img className="centered" src={emio_motors} width="70%" alt="Emio in compact configuration showing the four motors with their identification numbers."/>
        <figcaption>Emio in compact configuration with the four motors with their corresponding identification number (n°0, n°1, n°2, n°3), which we use in the labs. </figcaption>
    </div>
</div>


<div style={{display: "flex"}}>
    <div>
        <img className="centered" src={accessories} width="50%" alt="Emio's accessories including multiple deformable legs and connectors."/>
        <figcaption> Emio's accessories </figcaption>
    </div>
</div>

## Connecting Emio to your Computer
You will find a USB cable in the drawer to connect the robot to your computer. The robot also has a power supply and a switch.
To connect Emio to your computer:
1. Plug the USB cable into the USB port of Emio (see Figure 2),
2. Connect the other end of the USB cable to your computer,
3. Plug the power supply into the power port of Emio (see Figure 3),
4. Turn on the switch to power the robot (see Figure 3).

<div style={{display: "flex"}}>
    <div>
        <img className="centered" src={emio_connections} width="30%" alt="The connection panel on the side of Emio"/>
        <figcaption>(1) USB connection. (2) Power connection. (3) Switch to power the robot.</figcaption>
    </div>
</div>


## Attaching Legs to Motors
Each motor is equipped with a drum and a cap for connecting a leg.

To attach a leg to a motor:
    1. Find the zero position of the motor is indicated by the orange marker pointing upward,
    2. Simply rotate the cap until you can set the leg into the desired orientation,
    3. Once the leg is in place, rotate the cap again to lock it.


<div style={{display: "flex"}}>
    <div>
        <img className="centered" src={motor_cap1} width="90%" alt="One Emio motor with the zero position marker pointing upward"/>
        <figcaption>(1) Motor's zero position (orange marker pointing upward) </figcaption>
    </div>
    <div>
        <img className="centered" src={motor_cap2} width="90%" alt="Emio motor with the cap rotated and the leg attached to it and pointing downward"/>
        <figcaption>(2) Rotate the cap until the leg can be attached </figcaption>
    </div>
    <div>
        <img className="centered" src={motor_cap3} width="90%" alt="Emio motor with the cap rotated back to lock in the leg"/>
        <figcaption>(3) Once the leg is in place, rotate the cap again to lock it </figcaption>
    </div>
    <div>
        <img className="centered" src={motor_cap4} width="90%" alt="Another example of position for the leg, pointing upward instead"/>
        <figcaption>(4) The leg can be adjusted to different positions </figcaption>
    </div>
</div>

:::note
Throughout the lab sessions, you will be instructed to configure Emio into specific setups. Simply follow the 
provided instructions by clicking on *Set up Emio*. We use colors to refer to the legs and connectors, and numbers to identify the motors.
:::

## Calibrating the Camera

The calibration allows to calculate the transform from the camera image, to 3D points into the simulation reference frame. The Emio API (included with Emio Labs) comes with a default calibration, but it can vary based on if the camera has been moved. 
If you notice a large difference between the simulation and reality markers, you might need to re-calibrate the camera.

### Set up Emio for the Calibration

<div style={{display: "flex", columnGap: "1em"}}>
    <div style={{flex:"2 1 0"}}>

        You will need (see the image to the right):

        - The Aruco marker
        - Two green markers
        - The blue elevators to raise the platform

        To set up Emio for calibration, follow these steps:
        1. Raise the platform with the blue elevators.
        2. Place the Aruco marker on the platform, arrow facing the camera.
        3. Insert two green markers into the Aruco marker slots.
        4. Connect Emio to the computer and power supply.
        5. Turn on Emio. 
    </div>
    <div style={{flex:"1 1 0"}}>
        <img className="centered" src={calib_emio} width="100%" alt="The set up for calibration of the camera."/>
        <figcaption>The set up for calibration of the camera. (1) the Aruco marker. (2) two green markers. (3) the elevators.</figcaption>
    </div>
</div>

:::tip
The calibration marker normally comes with Emio but you can 3D print it using either:
- [the whole marker file](https://github.com/SofaComplianceRobotics/Emio.CoreAssets/tree/main/data/meshes) (requires a multicolor 3D printer)
- [the support file](https://github.com/SofaComplianceRobotics/Emio.CoreAssets/tree/main/data/meshes) and the [Aruco marker file](https://github.com/SofaComplianceRobotics/Emio.CoreAssets/tree/main/data/meshes)

The Aruco marker should be printed in __black__ and the support in __white__ for better performance.
:::

### Start the Calibration
Calibration can be done using several methods: with Emio Labs or with the Emio API.

<Tabs className="unique-tabs" groupId="calibration-methods">
  <TabItem value="emio-labs" label="Emio Labs" default>
       The easiest way to start the calibration is to use the SOFA Robotics interface from Emio Labs:
        1. Open Emio Labs
        2. Go to the `Sandbox` page
        3. Select the `Camera Calibration` section
        5. Run the simulation by pressing the SOFA button in the section
        6. Press the _Play_ button to start the simulation
        7. Toggle the robot connection button to connect to the robot
  </TabItem>
  <TabItem value="emio-api" label="Emio API">
    Alternatively, you can start the calibration using Emio API.
    From a terminal with a Python executable that has emioapi installed, run:
    ```bash
    python -m emioapi calibrate
    ```
    For more information, go to the [Emio API documentation](../../../Developers/emio-api/#calibrate) and follow the instructions to start the calibration process.
  </TabItem>
</Tabs>


### Calibration Process

Regardless of the method you use to start the calibration, the process will start by opening several windows, including a _Calibration_ window and a _RGB Frame_ window.
<div style={{display: "flex", columnGap: "1em"}}>
    <div>
    <img className="centered" src={calib_window}  width='90%' alt="The calibration window with the aruco marker being tracked."/>
    <figcaption>
    The _Calibration_ window displays the corners and other points detected by the camera.
    </figcaption>
    </div>
    <div>
    <img className="centered" src={calib_rgb_window} width='66%' alt="The _RGB Frame_ window with the result of the green markers tracking."/>
    <figcaption>
    The _RGB Frame_ window displays the 3D position of the two markers in the frame of the camera (first line) and in the simulation frame (second line).
    </figcaption>
    </div>
</div>

The calibration ends when the _Calibration_ window closes and the _RGB Frame_ window displays the position of the the two markers.

To make sure the calibration is successful, you can check the simulation coordinates of the markers in the _RGB Frame_ window:
- The top marker should be at around `(32, -230, 32)`
- The bottom marker should be at `(-32, -230, -32)`

In the simulation, if used, the green markers (_i.e._ what the camera is tracking) should be at the same positions as the red markers (_i.e._ theoretical positions). The actual error for each marker can be seen in the _Information_ collapsible menu in the _My Robot_ window. You can expect an error of around 2-4 mm for each marker.

Once the calibration is done, you can close the SOFA window or `Ctrl+C` if you used Emio API. The saved calibration will be used for all the following use of the Emio API.

<img className="centered" src={calib_simulation} width="90%" alt="The simulation in SOFA Robotics at the end of the calibration process. The green markers match the red ones."/>
<figcaption>The simulation in SOFA Robotics at the end of the calibration process. The green markers match the red ones.</figcaption>
