---
title: Migration Guide
sidebar_position: 1
---

# Migration Guide

:::note
This document outlines the steps required to migrate your simulation python scripts between releases.  
**If not mentioned here**, your scripts should work without any modification.
:::

## Migrate from v25.12 to v26.06

In order to avoid possible conflicts, all the Emio-related Python packages have been moved to the new `emio` package. This means that the use of the `parts`, `utils` packages and `parameters` module is now deprecated. You will have until v26.12 to update your code. 

To use them, start from the `emio` package. Also, the `Emio`, `EmioGUI` classes and `getParserArgs` function are now available directly from the `emio` package.

For example:

    ```python
        from emio import Emio, getParserArgs # The Emio class is available directly from the emio package
        from emio.parts.controllers.assemblycontroller import AssemblyController # parts modules are available from emio.parts
        from emio.utils.header import addHeader, addSolvers # utils modules are now available from emio.utils
        import emio.parameters as parameters # parameters module is available from emio
    ```

## Migrate from v24.12 to v25.06

1. `Sofa.ImGui.getRobotConnection()` has been removed. Use `Sofa.ImGui.getRobotConnectionToggle()` instead. 
Corresponding error message: `AttributeError: module 'Sofa.ImGui' has no attribute 'getRobotConnection'`
2. The method `Sofa.ImGui.MoveWindow.setActuators()` should be called before `Sofa.ImGui.MoveWindow.setActuatorsLimits()`.
Corresponding warning message: `Calling setActuatorsLimits() without any actuators set. Won't proceed.To fix this warning you can call setActuators() before calling setActuatorsLimits().`
