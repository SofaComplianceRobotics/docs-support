---
title: Getting Started with Emio
sidebar_position: 2
---

import accessories from './img/accessories.png';
import emio_drawer_camera from './img/emio-drawer-camera.png';
import emio_motors from './img/emio-motors.png';
import emio_connections from './img/emio-connections.png';
import motor_cap1 from './img/motor-cap1.png';
import motor_cap2 from './img/motor-cap2.png';
import motor_cap3 from './img/motor-cap3.png';
import motor_cap4 from './img/motor-cap4.png';

# Getting Started with Emio

Emio is a parallel deformable robot developed by [Compliance Robotics](https://compliance-robotics.com/). 
It features a structure composed of four servo motor-actuated deformable legs connected together. 

The robot comes equipped with a depth camera and a set of accessories, including multiple deformable legs and connectors, all stored in a dedicated drawer.

Emio features two distinct configurations, as shown in the images below:

1. **Extended Configuration**: In this setup, the legs point downward, enabling it to perform tasks such as pick-and-place.
2. **Compact Configuration**: Here, the legs are oriented upward, facilitating easier interaction with the robot.



<div style={{display: "flex"}}>
    <div>
        <img className="centered" src={emio_drawer_camera} width="70%"/>
        <figcaption>Emio in extended configuration with (1) the drawer in which you will find Emio's accessories, (2) the depth camera that can be oriented up or down. </figcaption>
    </div>
    <div>
        <img className="centered" src={emio_motors} width="70%"/>
        <figcaption>Emio in compact configuration with the four motors with their corresponding identification number (n°0, n°1, n°2, n°3), which we use in the labs. </figcaption>
    </div>
</div>


<div style={{display: "flex"}}>
    <div>
        <img className="centered" src={accessories} width="50%"/>
        <figcaption> Emio's accessories </figcaption>
    </div>
</div>

## Connecting Emio to Your Computer
You will find a USB cable in the drawer to connect the robot to your computer. The robot also has a power supply and a switch.
To connect Emio to your computer:
1. Plug the USB cable into the USB port of Emio (see Figure 2),
2. Connect the other end of the USB cable to your computer,
3. Plug the power supply into the power port of Emio (see Figure 3),
4. Turn on the switch to power the robot (see Figure 3).

<div style={{display: "flex"}}>
    <div>
        <img className="centered" src={emio_connections} width="50%"/>
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
        <img className="centered" src={motor_cap1} width="90%"/>
        <figcaption>(1) Motor's zero position (orange marker pointing upward) </figcaption>
    </div>
    <div>
        <img className="centered" src={motor_cap2} width="90%"/>
        <figcaption>(2) Rotate the cap until the leg can be attached </figcaption>
    </div>
    <div>
        <img className="centered" src={motor_cap3} width="90%"/>
        <figcaption>(3) Once the leg is in place, rotate the cap again to lock it </figcaption>
    </div>
    <div>
        <img className="centered" src={motor_cap4} width="90%"/>
        <figcaption>(4) The leg can be adjusted to different positions </figcaption>
    </div>
</div>

                   
<!-- | ![](assets/data/images/legs/blueleg-clockwiseup.png)    | ![](assets/data/images/legs/blueleg-counterclockwiseup.png) | ![](assets/data/images/legs/blueleg-clockwisedown.png)   | ![](assets/data/images/legs/blueleg-counterclockwisedown.png)   | 
|:--------------------------------------------------:|:------------------------------------------------------:|:---------------------------------------------------:|:----------------------------------------------------------:|
|         **(1) The blue leg clockwise up**          |       **(2) The blue leg counter clockwise up**        |         **(3) The blue leg clockwise down**         |        **(4) The blue leg counter clockwise down**         | -->

:::note
Throughout the lab sessions, you will be instructed to configure Emio into specific setups. Simply follow the 
provided instructions by clicking on *Set up Emio*. We use colors to refer to the legs and connectors, and numbers to identify the motors.
:::