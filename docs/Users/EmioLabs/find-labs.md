---
title: Find your labs
sidebar_position: 4
---

import lab_models from './img/volumemodel.png';
import lab_inverse from './img/emio-SOFA-extended.png';
import project_picknplace from './img/emio-gripper-contact3.png';
import lab_design from './img/legDesign.png';
import lab_closed from './img/emio-simulationgui.png';
import {LabDescription} from './_find-labs_.mdx';
import {QuentinPeyron, QuentinPeyronLink} from './_find-labs_.mdx';


# Find your Labs

:::tip
Teach soft robotics with the original content created by Compliance Robotics. It provides a practical introduction to the concepts of soft robotics: models, inverse kinematics, pick & place, design, and closed loop.

*[Easily compose your labs and add your own content](/docs/EmioLabs/create-your-lab). Share your content for Emio with the community. Contact us to add your content to this page by sending an email at this address [contact@compliance-robotics.com](mailto:contact@compliance-robotics.com).*
:::

## Lab - Models for Soft Robotics

:::verified
Author: Compliance Robotics \
*Distributed with the Emio Labs application*
:::

**Discover and analyse different models. Discover the accuracy and limitation of continuum mechanics models.**

<LabDescription
    description={<>This lab aims to familiarize with certain deformable models used in the soft robotics community, particularly beam models and volumetric finite element models. It briefly describe three models and provide references for a deeper understanding. 
    This lab consist of understanding these models and their parameters, and experimentally analyzing their behavior. To do so, different legs with various geometries are provided with the robot. Each leg leading to different mechanical behaviors. You will be able to confront the models with the legs one by one.
    </>}
    image={<>
    <img className="centered" src={lab_models} width="250px"/>
    <figcaption> Lab Models </figcaption>
    </>}
/>

## Lab - Inverse Kinematics

:::verified
Author: Compliance Robotics \
*Distributed with the Emio Labs application*
:::

**Explore the principles of inverse kinematics as applied to soft robots, and write your own inverse kinematic solver in python.**

<LabDescription
    description={<>In this lab, you will explore the principles of inverse kinematics (IK) as applied to soft robots. The kinematics of soft robots has been, and continues to be, a subject of extensive scientific research. 
    Here, the proposed approach relies on the computation of mechanical models that consider the material properties, specifically utilizing compliance projected into the space of actuators and end effectors. 
    By the end of this lab, you will have a better understanding of the concept of mechanical compliance and the formulation of an optimization problem that allows to get the inverse kinematics from the mechanical compliance model of soft robots.
    </>}
    image={<>
    <img className="centered" src={lab_inverse} width="250px"/>
    <figcaption> Lab Inverse Kinematics </figcaption>
    </>}
/>

## Project - Pick & Place

:::verified
Author: Compliance Robotics \
*Distributed with the Emio Labs application*
:::

**Start from scratch, end up with a full deformable pick & place robot, and solve a pick and place task.**

<LabDescription
    description={<>In this lab, we will test a simple pick & place example using a soft gripper attached to the robot's end-effector. This exercise aims to apply the concepts studied and reinforce the student understanding of inverse models in soft robotics by programming a complete pick & place cycle.
    </>}
    image={<>
    <img className="centered" src={project_picknplace} width="250px"/>
    <figcaption> Project Pick & Place </figcaption>
    </>}
/>

## Lab - Design

:::verified
Authors: <QuentinPeyronLink/> & Compliance Robotics \
*Distributed with the Emio Labs application*

<QuentinPeyron/>
:::

**Design your own legs and gripper for Emio, and check their performance in simulation.**

<LabDescription
    description={<>In this lab, we will work on the design of the flexible legs composing Emio such that a pick & place task can be realized.In particular, we aim at picking an object which is not reachable with the initial design of the robot. For that purpose, we propose you to follow an iterative and interactive design process where fast mechanical simulations are used to predict the system behavior and performances.
    </>}
    image={<>
    <img className="centered" src={lab_design} width="250px"/>
    <figcaption> Lab Design </figcaption>
    </>}
/>

## Lab - Closed Loop

:::verified
Author: Compliance Robotics \
*Distributed with the Emio Labs application*
:::

**Discover closed loop control strategies, from basic inverse kinematic proportional control, to state feedback plus observer.**

<LabDescription
    description={<>This lab is dedicated to control. Its goals are to make you understand: 
    - When and why a closed loop control scheme is required for a given application
    - What are the effects of the different parameters of the controller
    - The limitation of the proposed approach and what has to be done to overcome it
    - And finally give some insight of what could be achieved with more time.
    </>}
    image={<>
    <img className="centered" src={lab_closed} width="250px"/>
    <figcaption> Lab Closed Loop </figcaption>
    </>}
/>