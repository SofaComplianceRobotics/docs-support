---
title: Migration Guide
sidebar_position: 1
---

# Migration Guide

:::note
This document outlines the steps required to migrate your simulation python scripts between releases.  
**If not mentioned here**, your scripts should work without any modification.
:::

## Migrate from v24.12 to v25.12

1. `Sofa.ImGui.getRobotConnection()` has been removed. Use `Sofa.ImGui.getRobotConnectionToggle()` instead. 
Corresponding error message: `AttributeError: module 'Sofa.ImGui' has no attribute 'getRobotConnection'`
2. The method `Sofa.ImGui.MoveWindow.setActuators()` should be called before `Sofa.ImGui.MoveWindow.setActuatorsLimits()`.
Corresponding warning message: `Calling setActuatorsLimits() without any actuators set. Won't proceed.To fix this warning you can call setActuators() before calling setActuatorsLimits().`
