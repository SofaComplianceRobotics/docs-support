---
title: SOFA Robotics w/o Emio Labs
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SOFA Robotics without Emio Labs

This guide provides instructions for using SOFA Robotics independently of the Emio Labs application. This only works with installers and archives Emio Labs formats.

:::important
- To use SOFA Robotics independently of Emio Labs, you first need to download the appropriate Emio Labs package for your operating system. This package may come as an installer (`.deb` for Linux, `.msi` for Windows, or `.dmg` for MacOS) or as a compressed archive (`.zip`). 
- Portable formats (`.AppImage` for Linux, `.exe` for Windows, `.app` for MacOS) are **NOT** supported because they run from a temporary directory,
- Ensure you extract or install the package to a permanent location on your system before proceeding.
:::

## Locate the SOFA Robotics Directory and Executable

To find the paths to the SOFA Robotics directory and executable, follow the instructions below depending on your chosen package format: 

<Tabs className="unique-tabs">
  <TabItem value="installer" label="Installer" default>
      1. Locate the directory where you installed the Emio Labs application. We will refer to this directory as `PATH_TO_EMIO_LABS`. 
      2. Within this directory, you will find the SOFA Robotics directory at `PATH_TO_EMIO_LABS/resources/sofa`. 
      3. Inside this directory, you will find the `bin` subdirectory, which contains the executable file required to run the software. This executable is essential for launching SOFA Robotics independently.
      
      :::tip
      - A typical path example when you installed Emio Labs on Windows using the `.msi` installer is `C:\Users\YOUR_USERNAME\AppData\Local\Programs\emio-labs`
      - A typical example on Linux when you used the `.deb` installer is `/opt/emio-labs`
      :::
  </TabItem>
  <TabItem value="archive" label="Compressed Archive">
      1. Extract the compressed archive to your chosen location (referred to as `PATH_TO_EMIO_LABS`).
      2. Within this directory, you will find the SOFA Robotics directory at `PATH_TO_EMIO_LABS/resources/sofa`. 
      3. Inside this directory, you will find the `bin` subdirectory, which contains the executable file required to run the software. This executable is essential for launching SOFA Robotics independently.
  </TabItem>
</Tabs>

## Setup the Environment Variables

In the previous section, you located the path to the SOFA Robotics directory. 
We will refer to this path as `PATH_TO_SOFA_ROBOTICS_DIR` throughout this guide.

To run the software, you need to configure your environment by adding specific paths to your `PATH` and `PYTHONPATH`, along with other required environment variables. 

The steps below will help you set up these variables temporarily. Note that these changes will only last for the duration of your terminal session. To avoid repeating these steps every time you run SOFA, consider creating a script to automate the process. However, we recommend against setting these variables permanently to maintain a clean environment.

Open a terminal and run the commands for your operating system as outlined below.

<Tabs className="unique-tabs" groupId="operating-systems">
  <TabItem value="linux" label="Linux" default>
        ```bash
        export SOFA_ROOT=PATH_TO_SOFA_ROBOTICS_DIR
        export PATH=$PATH:$SOFA_ROOT/bin
        export PYTHONHOME=$SOFA_ROOT/bin/python
        export PYTHONPATH=$SOFA_ROOT/bin/python/lib/python3.10/site-packages
        export PYTHONPATH=$PYTHONPATH:$SOFA_ROOT/plugins/SofaPython3/lib/python3/site-packages
        ```
  </TabItem>
  <TabItem value="windows" label="Windows">
        #### Using Powershell:

        ```powershell
        $env:SOFA_ROOT=PATH_TO_SOFA_ROBOTICS_DIR
        $env:PATH+=";$env:SOFA_ROOT\bin"
        $env:PYTHONHOME="$env:SOFA_ROOT\bin\python"
        $env:PYTHONPATH="$env:SOFA_ROOT\bin\python\Lib\site-packages"
        $env:PYTHONPATH+=";$env:SOFA_ROOT\plugins\SofaPython3\lib\python3\site-packages"
        ```

        #### Using Command Prompt:

        ```bash
        set SOFA_ROOT=PATH_TO_SOFA_ROBOTICS_DIR
        set PATH=$PATH:$SOFA_ROOT\bin
        set PYTHONHOME=$SOFA_ROOT\bin\python
        set PYTHONPATH=$SOFA_ROOT\bin\python\Lib\site-packages
        set PYTHONPATH=$PYTHONPATH:$SOFA_ROOT\plugins\SofaPython3\lib\python3\site-packages
        ```
  </TabItem>
  <TabItem value="macos" label="MacOS">
        ```bash
        export SOFA_ROOT=PATH_TO_SOFA_ROBOTICS_DIR
        export PATH=$PATH:$SOFA_ROOT/bin
        export PYTHONPATH=$PYTHONPATH:$SOFA_ROOT/plugins/SofaPython3/lib/python3/site-packages
        ```
  </TabItem>
</Tabs>

## Launch the Software

In the same terminal, try the following command: 

<Tabs className="unique-tabs" groupId="operating-systems">
  <TabItem value="linux" label="Linux" default>
      ```bash
      runSofa -l SofaPython3,SofaImGui
      ```
  </TabItem>
  <TabItem value="windows" label="Windows">
      ```bash
      runSofa.exe -l SofaPython3,SofaImGui
      ```
  </TabItem>
  <TabItem value="macos" label="MacOS">
      ```bash
      runSofa -l SofaPython3,SofaImGui
      ```
  </TabItem>
</Tabs>
This should run the SOFA Robotics with a default simulation (press the play button). 

To run your own simulation:



<Tabs className="unique-tabs" groupId="operating-systems">
  <TabItem value="linux" label="Linux" default>
      ```bash
      runSofa -l SofaPython3,SofaImGui your_scene.py
      ```
  </TabItem>
  <TabItem value="windows" label="Windows">
      ```bash
      runSofa.exe -l SofaPython3,SofaImGui your_scene.py
      ```
  </TabItem>
  <TabItem value="macos" label="MacOS">
      ```bash
      runSofa -l SofaPython3,SofaImGui your_scene.py
      ```
  </TabItem>
</Tabs>

## Using Emio Assets
If you want to use the Emio assets (e.g. scenes, parts, meshes, etc. ), you need to add the Emio Labs `assets` folder to the `PYTHONPATH`.

You have two options: 
- use the assets from the `path/to/home/emio-labs/VERSION/assets` folder that is created at the first launch of Emio Labs
- use directly the assets from the Emio Labs installation folder (i.e. `PATH_TO_EMIO_LABS/resources/assets`)

:::warning
If you use the assets in the `PATH_TO_EMIO_LABS` folder, changes made there cannot be reverted except by downloading and copying the content of [Emio.CoreAssets](https://github.com/SofaComplianceRobotics/Emio.CoreAssets) back in the `PATH_TO_EMIO_LABS/resources/assets` folder.
:::

To set the `PYTHONPATH` variable, use the corresponding command:

<Tabs className="unique-tabs" groupId="operating-systems">
  <TabItem value="linux" label="Linux" default>
        ```bash
        export PYTHONPATH=$PYTHONPATH:PATH_TO_EMIO_LABS/resources/assets
        ```
        or
        ```bash
        export PYTHONPATH=$PYTHONPATH:path/to/home/emio-labs/VERSION/assets
        ```
  </TabItem>
  <TabItem value="windows" label="Windows">
        #### Using Powershell:

        ```powershell
        $env:PYTHONPATH+=";PATH_TO_EMIO_LABS\resources\assets
        ```
        or
        ```powershell
        $env:PYTHONPATH+=";path\to\home\emio-labs\VERSION\assets
        ```

        #### Using Command Prompt:

        ```bash
        set PYTHONPATH=$PYTHONPATH:$PATH_TO_EMIO_LABS\resources\assets
        ```
        or
        ```bash
        set PYTHONPATH=$PYTHONPATH:path\to\home\emio-labs\VERSION\assets
        ```
  </TabItem>
  <TabItem value="macos" label="MacOS">
        ```bash
        export PYTHONPATH=$PYTHONPATH:PATH_TO_EMIO_LABS/resources/assets
        ```
        or
        ```bash
        export PYTHONPATH=$PYTHONPATH:path/to/home/emio-labs/VERSION/assets
        ```
  </TabItem>
</Tabs>
