---
title: Getting Started With Emio
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

# Getting Started With Emio

Emio is a parallel deformable robot developed by [Compliance Robotics](https://compliance-robotics.com/). 
It features a structure composed of four servo motor-actuated deformable legs connected together. 

## Discovering Emio

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
When using [Emio Labs](../../../Users/EmioLabs/), throughout the lab sessions, you will be instructed to configure Emio into specific setups. Simply follow the 
provided instructions by clicking on *Set up Emio*. We use colors to refer to the legs and connectors, and numbers to identify the motors.
:::

## Connecting Emio to Your Computer

<Tabs className="unique-tabs" groupId="operating-systems">
  <TabItem value="linux" label="Linux" default>

     On Linux, serial ports require specific permissions to be accessed. By default, only the `root` user can access `/dev/ttyUSB*`. Here are two solutions to grant access to serial ports and pilot the real robot:

          <Tabs className="unique-tabs" groupId="serial-ports">
               <TabItem value="temporary" label="Temporary" default>
                    Run the following command to grant read/write permissions:
                    ```bash
                    sudo chmod 777 /dev/ttyUSB0
                    ```
                    Note: Replace `ttyUSB0` with the actual port name. You can find it by running `ls /dev/ttyUSB*` or by using SOFA Robotics. This change will revert after reboot or disconnect.
               </TabItem>
               <TabItem value="permanent" label="Permanent" default>
                    Add your user to the `dialout` group to access serial devices without root privileges:
                    ```bash
                    sudo usermod -aG dialout $USER
                    ```
                    Then log out and log back in (or reboot) for the group changes to take effect. This is the recommended approach.  
               </TabItem>
          </Tabs>

  </TabItem>
  <TabItem value="windows" label="Windows" default>

       Depending on your version of Windows, you may need to install the [FTDI drivers](https://ftdichip.com/drivers/vcp-drivers/) to pilot the robot. This is typically necessary if, upon connecting the robot to your computer, you encounter the following error message:  
       `[ERROR] No serial port found with manufacturer = FTDI`.  
       Installing the drivers should resolve this issue.
  </TabItem>
</Tabs>

You will find a USB cable in the drawer to connect the robot to your computer. The robot also has a power supply and a switch.
To connect Emio to your computer:
1. Plug the USB cable into the USB port of Emio,
2. Connect the other end of the USB cable to your computer,
3. Plug the power supply into the power port of Emio,
4. Turn on the switch to power the robot.

<div style={{display: "flex"}}>
    <div>
        <img className="centered" src={emio_connections} width="30%" alt="The connection panel on the side of Emio"/>
        <figcaption>(1) USB connection. (2) Power connection. (3) Switch to power the robot.</figcaption>
    </div>
</div>

:::note
To pilot Emio, you have two options: 
1. You can use [Emio Labs](../../../Users/EmioLabs/), which provides an intuitive interface to launch SOFA Robotics and run simulations to solve Emio's inverse kinematics and control the robot's end-effector.
2. Or you can use the [Emio API](../../../Developers/emio-api/), which allows you to pilot the motors of Emio programmatically using Python.  

You can find more information about these two options in the following sections.
:::