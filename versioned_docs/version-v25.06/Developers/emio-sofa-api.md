# Emio SOFA API

<a id="camera"></a>

## Module camera

This module defines the Camera class, which represents the Emio camera positioned as it would be on the real device. 

The `camera.py` file also includes an example usage. You can test it by running the script with the `runSofa` command:
```bash
runSofa -l SofaPython3,SofaImGui -g imgui camera.py
```

<a id="camera.Camera"></a>

### Camera

```python
class Camera(Sofa.Prefab)
```

Represents the Emio camera in the simulation.

This class adds the camera to the simulation and provides its position (`torealtranslation`) 
and orientation (`torealrotation`) relative to the real device. The camera can be configured 
in two modes:

- compact: The camera is oriented upwards.
- extended: The camera is oriented downwards.

By default, the camera is added to the Emio class.

Class Variables:
    - `extended` (`bool`): Specifies the configuration of the camera. `True` for extended mode, `False` for compact mode.

Example Usage:
```python
from camera import Camera

def createScene(root):
    camera = root.addChild(Camera(extended=True))
    print("Camera Translation:", camera.torealtranslation)
    print("Camera Rotation:", camera.torealrotation)
```

<a id="centerpart"></a>

## Module centerpart

This module defines the `CenterPart` class for the Emio robot.
By default this example will load the white part (deformable gripper).
The file `centerpart.py` also contains an example, try it by running the script with the runSofa command:
```bash
runSofa -l SofaPython3,SofaImGui -g imgui centerpart.py
```

<a id="centerpart.CenterPart"></a>

### CenterPart

```python
class CenterPart(Sofa.Prefab)
```

Represents the center part of the Emio robot that connected the legs together (also called connector).

Class Variables:
    - `partName` (`string`): Name of the center part (e.g., "whitepart", "yellowpart", "bluepart"), should have corresponding meshes in the "data/meshes/centerparts" directory.
    - `type` (`string`): Type of the center part, either "deformable" or "rigid".
    - `model` (`string`): Model type between "tetra" and "beam", if deformable.
    - `massDensity` (`float`): Mass density of the center part.
    - `poissonRatio` (`float`): Poisson's ratio of the material, if deformable.
    - `youngModulus` (`float`): Young's modulus of the material, if deformable.
    - `color` (`Vec4d`): Color of the center part, for rendering.
    - `rotation` (`Vec3d`): Rotation of the center part in degrees.

Class Members:
    - `attach`: Node containing the positions to attach the legs.
    - `deformable`: Node containing the deformable part, if deformable.

Expected files in the "data/meshes/centerparts" directory:
    - partName.stl: surface mesh for the visual model. 
    - partName.vtk: volume mesh for the tetra model.
    - partName.json: file containing the initial position of the center part and the position of the legs'attach in local coordinates.

Example Usage:
```python
from centerpart import CenterPart
from utils import addHeader, addSolvers
def createScene(root):
    settings, modelling, simulation = addHeader(root)
    addSolvers(simulation)

    centerpart = root.addChild(CenterPart(name="CenterPart",
                                         partName="whitepart",
                                         type="deformable",
                                         color=[1, 1, 1, 1]))
```

<a id="emio"></a>

## Module emio

This module defines the `Emio` class, which represents the Emio robot.
The `Emio` class builds the robot's structure, including its motors, legs, and center part, and provides methods for adding components and GUI elements.
The file `emio.py` also contains an example usage. You can test it by running the script with the runSofa command:
```bash
runSofa -l SofaPython3,SofaImGui -g imgui emio.py
```

<a id="emio.EmioGUI"></a>

### EmioGUI

```python
class EmioGUI(Sofa.Core.Controller)
```

The `EmioGUI` class setups the elements of the graphical user interface for SOFA robotics.
It uses a user-friendly interface to control the Emio robot's parameters and visualize its state.
The GUI includes windows for robot settings, movement controls, and plotting.

Class Variables:
    - `emio`: The Emio robot instance.
    - `plotTorquesAngles`: A boolean flag to enable or disable torque and angle plotting.

Requirements:
    - This class requires inverse components to be added to the Emio instance.
    - The instance of Emio should be added in the graph scene before creating the GUI: to allow the GUI to control the robot, EmioGUI must access the inverse solver which is located at the root of the scene.
    - The instance of Emio should also have the effector and actuator components added: typically done by calling the `addInverseComponentAndGUI` method. 

Elements added to the GUI:
    - My Robot: Allows users to adjust robot settings such as maximum speed and motor angle limits.
    - Move: Provides controls for moving the robot's TCP and adjusting motor angles.
    - Plotting: Visualizes torque and angle data for each motor.

<a id="emio.Emio"></a>

### Emio

```python
class Emio(Sofa.Prefab)
```

The `Emio` class represents the Emio robot in the simulation. It constructs the robot's structure, including its motors, legs, and center part, and provides methods for adding components to solve the inverse kinematics and integrate GUI elements.

Class Variables:
    - `legsName` (`list[str]`): A list of names for the legs, corresponding to the mesh file names in the "data/meshes/legs" directory. The order follows the numbering of the motors. For a single type of leg, use a list like `["blueleg"]`. To skip a leg, use `"None"` as the name, e.g., `["blueleg", "blueleg", None, None]`.
    - `legsPositionOnMotor` (`list[str]`): A list of positions for each leg on the motor. Possible values are "clockwiseup", "counterclockwiseup", "clockwisedown", or "counterclockwisedown".
    - `legsModel` (`list[str]`): A list of models for each leg. Possible values are "beam", "cosserat", or "tetra".
    - `legsMassDensity` (`list[float]`): A list of mass densities for each leg. At least one value is expected, which will be applied to all legs in that case.
    - `legsPoissonRatio` (`list[float]`): A list of Poisson ratios for each leg. At least one value is expected, which will be applied to all legs in that case.
    - `legsYoungModulus` (`list[float]`): A list of Young's moduli for each leg. At least one value is expected, which will be applied to all legs in that case.
    - `centerPartName` (`str`): The name of the center part, which should correspond to the mesh file name in the "data/meshes/centerparts" directory.
    - `centerPartType` (`str`): The type of the center part. Possible values are "deformable", "rigid", or "gripper".
    - `centerPartModel` (`str`): The model of the center part. Possible values are "beam" or "tetra".
    - `centerPartMassDensity` (`float`): The mass density of the center part material.
    - `centerPartPoissonRatio` (`float`): The Poisson ratio of the center part material, if deformable.
    - `centerPartYoungModulus` (`float`): The Young's modulus of the center part material, if deformable.
    - `extended` (`bool`): A flag indicating whether the robot is in extended mode (True) or compact mode (False).
    - `platformLevel` (`int`): The level of the platform. Possible values are 0, 1, or 2.
    - `motorsDistanceToCenter` (`list[float]`): A list of distances from the motors to the center part. The default value is [97.5, 97.5, 97.5, 97.5] which correspond to the real device.

Class Members:
    - `motors`: A list of motor objects.
    - `legs`: A list of leg objects.
    - `centerpart`: The center part object.
    - `effector`: The effector node, which is used for inverse kinematics.

Example Usage:
```python
from emio import Emio
from utils import addHeader, addSolvers

def createScene(root):
    settings, modelling, simulation = addHeader(root)
    addSolvers(simulation)

    emio = Emio(name="Emio", 
                legsName=["blueleg"], 
                centerPartName="yellowpart", 
                centerPartType="rigid")
    if not emio.isValid():
        return
    simulation.addChild(emio)
    emio.attachCenterPartToLegs()
```

<a id="emio.Emio.attachCenterPartToLegs"></a>

#### Emio.attachCenterPartToLegs

```python
def attachCenterPartToLegs() -> None
```

Attaches the center part to the legs.
The center part is attached to the legs at their extremities.
The legs are attached to the motors at their base.

<a id="emio.Emio.addInverseComponentAndGUI"></a>

#### Emio.addInverseComponentAndGUI

```python
def addInverseComponentAndGUI(targetMechaLink,
                              positionWeight=1.,
                              orientationWeight=0.,
                              withGUI=True,
                              barycentric=False) -> None
```

Adds the inverse components to the Emio robot.
The components are used to control the robot's movements.
Two components `PositionEffector` are added to the effector node of Emio. One to control the position and one to control the orientation.
Also adds the GUI elements of the graphical user interface for SOFA robotics.
It uses a user-friendly interface to control the Emio robot's parameters and visualize its state.
The GUI includes windows for robot settings, movement controls, and plotting.
We do this in the same method because the GUI needs the inverse components to be created before.

Method Parameters:
- `targetMechaLink`: The mechanical link to the target.
- `positionWeight`: The weight of the position component (`PositionEffector`). Default is 1.
- `orientationWeight`: The weight of the orientation component (`PositionEffector`). Default is 0.
- `withGUI`: If True, add the GUI components. Default is True.
- `barycentric`: If True, use barycentric coordinates for the effector. Default is False.

<a id="emio.Emio.addConnectionComponents"></a>

#### Emio.addConnectionComponents

```python
def addConnectionComponents() -> None
```

Adds the connection components to the Emio robot.
The components are used to connect the simulation to the real robot.

<a id="emio.Emio.isValid"></a>

#### Emio.isValid

```python
def isValid() -> bool
```

Check if Emio is in a valid state. Returns True if Emio is in a valid state, False otherwise.

<a id="emio.getParserArgs"></a>

### getParserArgs

```python
def getParserArgs()
```

Parse the command line arguments for the simulation of Emio.
The arguments include the names and models of the legs, the position of the legs on the motor,
the name and type of the center part, and the configuration of Emio (extended or compact).
The arguments can be passed in any order and are optional.
If no arguments are passed, default values are used.
The default values are:
    - legsName: "blueleg"
    - legsModel: "beam"
    - legsPositionOnMotor: "clockwisedown counterclockwisedown clockwisedown counterclockwisedown"
    - centerPartName: "yellowpart"
    - centerPartType: "rigid"
    - configuration: "extended"
The function returns the parsed arguments.
If the arguments are invalid, an error message is displayed and default values are used.

For more information on the arguments, see the help message:
```bash
runSofa -l SofaPython3,SofaImGui emio.py --argv --help
```

<a id="leg"></a>

## Module leg

This module defines the `Leg` class for the Emio robot. 
The `Leg` represents a deformable component with multiple configuration and modeling options.
The file `leg.py` also includes an example usage, which can be tested by running the script with the `runSofa` command:
```bash
runSofa -l SofaPython3,SofaImGui -g imgui leg.py
```

<a id="leg.Leg"></a>

### Leg

```python
class Leg(Sofa.Prefab)
```

The `Leg` class represents a leg component of the Emio robot. It includes rigid base, rigid extremity, 
and deformable part, and supports multiple modeling options such as beam, cosserat, and tetra models.
By default, the legs are added to the Emio class.

Class Overview:
    - `base`: Represents the rigid base of the leg, typically attached to the motor.
    - `extremity`: Represents the rigid extremity part of the leg, typically attached to a connector.
    - `deformable`: Represents the deformable part of the leg.
    - `leg`: Represents the entire leg model.

Key Features:
    - Supports multiple modeling techniques: "beam", "cosserat", and "tetra".
    - Automatically adjusts rotation and translation based on the motor position.
    - Includes visual and physical modeling components.

Class Variables:
    - `legName` (`string`): Name of the leg, should have corresponding meshes in the "data/meshes/legs" directory.
    - `positionOnMotor` (`string`): Specifies the position on the motor. Options are: "clockwiseup", "counterclockwiseup", "clockwisedown", "counterclockwisedown"
    - `model` (`string`): Specifies the modeling technique. Options are: "beam", "cosserat", "tetra"
    - `massDensity` (`float`): Mass density of the leg material.
    - `poissonRatio` (`float`): Poisson's ratio of the leg material.
    - `youngModulus` (`float`): Young's modulus of the leg material.
    - `rotation` (`Vec3d`): Rotation of the leg.
    - `translation` (`Vec3d`): Translation of the leg.
    - `positions` (`Rigid3::VecCoord`, optional): Optional list of Rigid3 positions describing the leg's rod shape (for `beam` and `cosserat` models). If none is given, the "data/meshes/legs" directory should contain a file named "legName.txt" with the positions.
    - `crossSectionShape` (`string`): Shape of the cross-section. Options are: "circular", "rectangular"
    - `radius` (`float`): Radius of the leg, if the `crossSectionShape` is `circular` (for `beam` and `cosserat` models).
    - `thickness` (`float`): Thickness of the leg, if the `crossSection` is `rectangular` (for `beam` and `cosserat` models).
    - `width` (`float`): Width of the leg, if the `crossSection` is `rectangular` (for `beam` and `cosserat` models).

Expected files in the "data/meshes/legs" directory:
    - legName.stl: surface mesh for the visual model. Only used for `tetra` model, for `beam` and `cosserat` models, the mesh is created from the positions.
    - legName.vtk: volume mesh for the tetra model
    - legName.txt: file containing the positions of the leg (for beam and cosserat models)

Example Usage:
```python
from utils.header import addHeader, addSolvers

def createScene(root):
    # Header of the simulation
    settings, modelling, simulation = addHeader(root)
    addSolvers(simulation)
    # Create a leg instance
    leg = Leg(name="Leg",
                legName="blueleg",
                model="beam",
                positionOnMotor="clockwiseup")
    if not leg.isValid():
        return
    simulation.addChild(leg)
```

<a id="leg.Leg.attachBase"></a>

#### Leg.attachBase

```python
def attachBase(attach, index) -> None
```

Attach the base of the leg to the motor.

Function Parameters:
- `attach` (`Sofa.Node`): The node to which the leg's base will be attached.
- `index` (`int`): The index of the degrees of freedom (DOFs) in the `attach` node to connect to.

<a id="leg.Leg.attachExtremity"></a>

#### Leg.attachExtremity

```python
def attachExtremity(attach, index) -> None
```

Attach the extremity of the leg to the motor.

Function Parameters:
- `attach` (`Sofa.Node`): The node to which the leg's extremity will be attached.
- `index` (`int`): The index of the degrees of freedom (DOFs) in the `attach` node to connect to.

<a id="leg.Leg.isValid"></a>

#### Leg.isValid

```python
def isValid() -> bool
```

Check if the leg is in a valid state. Returns True if the leg is in a valid state, False otherwise.

<a id="motor"></a>

## Module motor

This module defines the `Motor` class for the Emio robot. 
The file `motor.py` also contains an example, try it by running the script with the runSofa command:
```bash
runSofa -l SofaPython3,SofaImGui -g imgui motor.py
```

<a id="motor.Motor"></a>

### Motor

```python
class Motor(Sofa.Prefab)
```

Represents a motor in the Emio robot. 
By default, four motors are added to the Emio class with the rotation and translation matching the real device.

Class Variables:
    - `rotation` (`Vec3d`): Orientation of the motor.
    - `translation` (`Vec3d`): Position of the motor. 
    - `scale3d` (`Vec3d`): Scale of the 3D model for rendering purposes.
    - `color` (`Vec4f`): Color of the motor for rendering purposes, in RGBA format.

Example Usage:
```python
    def createScene(root):
        motor = root.addChild(Motor(name="Motor"))

        # Access the motor's angle
        angle = motor.getMechanicalState().position.value[0]
```

