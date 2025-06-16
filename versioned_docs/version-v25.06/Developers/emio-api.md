# Emio API

[Emio API](https://github.com/SofaComplianceRobotics/Emio.API) is a Python package created to control the [Emio robot](https://compliance-robotics.com/compliance-lab/).

To install it from PyPI, run the following command: 
```bash
pip install emioapi
```

To install the latest version from the Github repository, run:  
```bash
pip install git+https://github.com/SofaComplianceRobotics/Emio.API.git@main
```

## EmioAPI

```python
class EmioAPI()
```

Class to control emio motors.
It is essentially divided into two objects:
- The [`motors`](#motors) object ([`EmioMotors`](#emiomotors)), which is used to control the motors.
- The [`camera`](#camera) object ([`EmioCamera`](#emiocamera)), which is used to control the camera.


The EmioAPI class is the main class that combines both classes and provides a simple interface to control the emio device.
It also provides static utility methods to list the emio devices connected to the computer.

Motors:
> The motors are controlled in position mode. The class is thread-safe and can be used in a multi-threaded environment.
> All the data sent to the motors are list of *4 values* for the *4 motors* of the emio device. The order in the list corresponds to the motor ID's in the emio device.
> Motor 0 is the first motor in the list, motor 1 is the second motor, etc.
> You can open a connection directly to the motors using the [`open`](#opendevice_name-str--none) method of the `motors` object.
>
> :::warning
>
> Emio motors are clamped between 0 and PI radians (0 and 180 degrees). If you input a value outside this range, the motor will not move.
>
> :::

Camera:
> The camera is used to track objects and compute the point cloud.
> The camera parameters are stored in a config file. If the config file is not found, default values are used.
> The camera can be configured to show the frames, track objects, and compute the point cloud.
> You can open a connection directly to the camera using the [`open`](#open) method of the `camera` object.
>
> :::warning
> By default, EmioAPI launches the camera in the same process by creating an [EmioCamera](#emiocamera) object.
> You can launch the camera in another process using a [MultiProcessEmioCamera](#multiprocessemiocamera) by setting the `multiprocess_camera=True` when creating an `EmioAPI` object.
> :::


**Example**:

    ```python
    from emioapi import EmioAPI

    # Create an EmioAPI instance
    emio = EmioAPI(multiprocess_camera=False)

    # Connect to the first available Emio device
    if emio.connectToEmioDevice():
        print("Connected to Emio device.")

        # Print device status
        emio.printStatus()

        # Example: Move all motors to 90 degrees (PI/2 radians)
        target_angles = [math.pi/2] * 4
        emio.motors.setAngles(target_angles)

        # Disconnect when done
        emio.disconnect()
    else:
        print("Failed to connect to Emio device.")
    ```

### motors

The emio motors object: [`EmioMotors`](#emiomotors)

### camera

The emio camera object: [`EmioCamera`](#emiocamera) | [`MultiprocessEmioCamera`](#multiprocessemiocamera)

### device\_name()

```python
@property
def device_name() -> str | None
```

Get the port name to which the EmioAPI object is connected if connected, else None

### camera\_serial()

```python
@property
def camera_serial() -> str | None
```

Get the camera serial number to which the EmioAPI object is connected if connected, else None

### listEmioDevices()

```python
@staticmethod
def listEmioDevices() -> list
```

List all the emio devices connected to the computer.

**Returns**:

  A list of device names (the ports).

### listUnusedEmioDevices()

```python
@staticmethod
def listUnusedEmioDevices() -> list
```

List all the emio devices that are not currently used by any instance of EmioAPI in this process.

**Returns**:

  A list of device names (the ports).

### listUsedEmioDevices()

```python
@staticmethod
def listUsedEmioDevices() -> list
```

List all the emio devices that are currently used by an instance of EmioAPI in this process.

**Returns**:

  A list of device names (the ports).

### connectToEmioDevice(device\_name: str = None)

```python
def connectToEmioDevice(device_name: str = None) -> bool
```

Connect to the emio device with the given name.

**Arguments**:

- `device_name` - str: The name of the device to connect to. If None, the first device found that is not used will be used.
  

**Returns**:

  True if the connection is successful, False otherwise.

### disconnect()

```python
def disconnect()
```

Close the connection to motors and camera.

### printStatus()

```python
def printStatus()
```

Print the status of the Emio device.

## EmioCamera

```python
class EmioCamera()
```

A class to interface with the Realsense camera on Emio.
This class opens the camera in the same process as the code is running from.

It is recommendend to use this class if you want to use the camera in a SOFA scene.

:::warning
If you want to open the camera in another process, you can use the [MultiprocessEmioCamera](#MultiprocessEmioCamera) class.
:::


**Example**:

    ```python
    from emioapi import EmioCamera

    # Create an instance of EmioCamera
    camera = EmioCamera(show=True, track_markers=True, compute_point_cloud=True)

    # Open the camera
    if camera.open():
        try:
            while camera.is_running:
                # Update camera frames and tracking
                camera.update()

                # Access tracker positions
                positions = camera.trackers_pos
                print("Tracker positions:", positions)

                # Access point cloud data
                pc = camera.point_cloud
                print("Point cloud shape:", pc.shape)

                # Access HSV and mask frames
                hsv = camera.hsv_frame
                mask = camera.mask_frame

                # ... (process frames as needed)

                # For demonstration, break after one iteration
                break
        finally:
            # Close the camera when done
            camera.close()
    ```

### is\_running()

```python
@property
def is_running() -> bool
```

Get the running status of the camera.

**Returns**:

- `bool` - The running status of the camera.

### track\_markers()

```python
@property
def track_markers() -> bool
```

Get whether the camera is tracking objects or not.

**Returns**:

- `bool` - True if the camera is tracking the markers, else False.

### track\_markers(value: bool)

```python
@track_markers.setter
def track_markers(value: bool)
```

Set the tracking status of the camera.

**Arguments**:

- `value` - bool: The new tracking status.

### compute\_point\_cloud()

```python
@property
def compute_point_cloud() -> bool
```

Get whether the camera is computing the point cloud or not.

**Returns**:

- `bool` - True if the camera is computing the point cloud, else False.

### compute\_point\_cloud(value: bool)

```python
@compute_point_cloud.setter
def compute_point_cloud(value: bool)
```

Set the point cloud computation status of the camera.

**Arguments**:

- `value` - bool: The new point cloud computation status.

### show\_frames()

```python
@property
def show_frames() -> bool
```

Get whether the camera HSV and mask frames are shown in windows.

**Returns**:

- `bool` - The show status of the camera.

### show\_frames(value: bool)

```python
@show_frames.setter
def show_frames(value: bool)
```

Set the show status of the camera.

**Arguments**:

- `value` - bool: The new show status.

### parameters()

```python
@property
def parameters() -> dict
```

Get the camera parameters in a dict object:
- `hue_h`: int: The upper hue value.
- `hue_l`: int: The lower hue value.
- `sat_h`: int: The upper saturation value.
- `sat_l`: int: The lower saturation value.
- `value_h`: int: The upper value value.
- `value_l`: int: The lower value value.
- `erosion_size`: int: The size of the erosion kernel.
- `area`: int: The minimum area of the detected objects.

**Returns**:

- `dict` - The camera parameters.

### parameters(value: dict)

```python
@parameters.setter
def parameters(value: dict)
```

Set the camera tracking parameters from the dict object:
- `hue_h`: int: The upper hue value.
- `hue_l`: int: The lower hue value.
- `sat_h`: int: The upper saturation value.
- `sat_l`: int: The lower saturation value.
- `value_h`: int: The upper value value.
- `value_l`: int: The lower value value.
- `erosion_size`: int: The size of the erosion kernel.
- `area`: int: The minimum area of the detected objects.

:::warning
- The camera parameters are not saved to a file. You need to save them manually.
- The paramters are set when opening the camera. To change the parameters programatically, you need to close the camera and open it again with the wanted parameters.
:::

**Arguments**:

- `value` - dict: The new camera parameters.

### trackers\_pos()

```python
@property
def trackers_pos() -> list
```

Get the positions of the trackers.

**Returns**:

- `list` - The positions of the trackers as a list of lists.

### point\_cloud()

```python
@property
def point_cloud() -> np.ndarray
```

Get the point cloud data.

**Returns**:

  The point cloud data as a numpy array.

### hsv\_frame()

```python
@property
def hsv_frame() -> np.ndarray
```

Get the HSV frame.

**Returns**:

  The HSV frame as a numpy array.

### mask\_frame()

```python
@property
def mask_frame() -> np.ndarray
```

Get the mask frame.

**Returns**:

  The mask frame as a numpy array.

### listCameras()

```python
@staticmethod
def listCameras() -> list
```

Static method to list all the Realsense cameras connected to the computer

**Returns**:

- `list` - A list of the serial numbers as string.

### open(camera\_serial: str = None)

```python
def open(camera_serial: str = None) -> bool
```

Initialize and open the camera in another process.
This function creates a new handle to the camera and starts it.

**Arguments**:

- `camera_serial` - str: the serial number of the camera to open. If None, the first found Realsense camera will be opened. If the `camera_serial` was set as a parameter or before, the given camera will be opened.
  

**Returns**:

- `bool` - True if a camera was opened, else False

### update()

```python
def update()
```

Update the camera frames and tracking elements (markers and point cloud)

### close()

```python
def close()
```

Close the camera and terminate the process. Sets the running status to False.

## EmioMotors

```python
class EmioMotors()
```

Class to control emio motors.
The class is designed to be used with the emio device.
The motors are controlled in position mode. The class is thread-safe and can be used in a multi-threaded environment.

**Example**:

    ```python
    from emioapi import EmioMotors

    # Create an instance of EmioMotors
    motors = EmioMotors()

    # Open connection to the motors (optionally specify device name)
    if motors.open():
        # Print current angles in radians
        print("Current angles (rad):", motors.angles)

        # Set new goal angles (example values)
        motors.angles = [0.5, 1.0, -0.5, 1.0]

        # Print status
        motors.printStatus()

        # Close connection when done
        motors.close()
    else:
        print("Failed to connect to motors.")
    ```

### lengthToPulse(displacement: list)

```python
def lengthToPulse(displacement: list)
```

Convert length (mm) to pulse using the conversion factor `lengthToPulse`.

**Arguments**:

- `displacement` - list: list of length values in mm for each motor.
  

**Returns**:

  A list of pulse values for each motor.

### pulseToLength(pulse: list)

```python
def pulseToLength(pulse: list)
```

Convert pulse to length (mm) using the conversion factor `lengthToPulse`.

**Arguments**:

- `pulse` - list of pulse integer values for each motor.
  

**Returns**:

  A list of length values in mm for each motor.

### pulseToRad(pulse: list)

```python
def pulseToRad(pulse: list)
```

Convert pulse to radians using the conversion factor `radToPulse`.

**Arguments**:

- `pulse` - list: list of pulse integer values for each motor.
  

**Returns**:

  A list of angles in radians for each motor.

### pulseToDeg(pulse: list)

```python
def pulseToDeg(pulse: list)
```

Convert pulse to degrees using the conversion factor `radToPulse`.

**Arguments**:

- `pulse` - list: list of pulse values for each motor.
  

**Returns**:

  A list of angles in degrees for each motor.

### open(device\_name: str = None)

```python
def open(device_name: str = None) -> bool
```

Open the connection to the motors.

**Arguments**:

- `device_name` - str: if set, it will connect to the device with the given name, If not set, the first emio device will be used.

### findAndOpen(device\_name: str = None)

```python
def findAndOpen(device_name: str = None) -> int
```

Iterate over the serial ports and try to conenct to the first available emio motors.

**Arguments**:

- `device_name` - str: If set, It will try to connected to the given device name (port name)
  

**Returns**:

  the index in the list of port to which it connected. If no connection was possible, returns -1.

### close()

```python
def close()
```

Close the connection to the motors.

### printStatus()

```python
def printStatus()
```

Print the current position of the motors.

### relativePos(init\_pos: list, rel\_pos: list)

```python
@property
def relativePos(init_pos: list, rel_pos: list)
```

Calculate the new position of the motors based on the initial position and relative position in pulses.

**Arguments**:

- `init_pos` - list of initial pulse values for each motor.
- `rel_pos` - list of relative pulse values for each motor.
  

**Returns**:

  A list of new pulse values for each motor.

### angles()

```python
@property
def angles() -> list
```

Get the current angles of the motors in radians.

### angles(angles: list)

```python
@angles.setter
def angles(angles: list)
```

Set the goal angles of the motors in radians.

### goal\_velocity()

```python
@property
def goal_velocity() -> list
```

Get the current velocity (rev/min) of the motors.

### goal\_velocity(velocities: list)

```python
@goal_velocity.setter
def goal_velocity(velocities: list)
```

Set the goal velocity (rev/min) of the motors.

### max\_velocity()

```python
@property
def max_velocity() -> list
```

Get the current velocity (rev/min) profile of the motors.

### max\_velocity(max\_vel: list)

```python
@max_velocity.setter
def max_velocity(max_vel: list)
```

Set the maximum velocities (rev/min) in position mode.

**Arguments**:

- `max_vel` - list of maximum velocities for each motor in rev/min.

### is\_connected()

```python
@property
def is_connected() -> bool
```

Check if the motors are connected.

### device\_name()

```python
@property
def device_name() -> str
```

Get the name of the device.

### device\_index()

```python
@property
def device_index() -> int
```

Get the index of the device in the list of Emio Devices from EmioAPI

### moving()

```python
@property
def moving() -> list
```

Check if the motors are moving.

### moving\_status()

```python
@property
def moving_status() -> list
```

Get the moving status of the motors.

**Returns**:

  A Byte encoding different informations on the moving status like whether the desired position has been reached or not, if the profile is in progress or not, the kind of Profile used.
  
  See [here](https://emanual.robotis.com/docs/en/dxl/x/xc330-t288/[`moving`](#emioapi.emiomotors.EmioMotors.moving)-status) for more details.

### velocity()

```python
@property
def velocity() -> list
```

Get the current velocity (rev/min) of the motors.

### velocity\_trajectory()

```python
@property
def velocity_trajectory() -> list
```

Get the velocity (rev/min) trajectory of the motors.

### position\_trajectory()

```python
@property
def position_trajectory() -> list
```

Get the position (pulse) trajectory of the motors.

## MultiprocessEmioCamera

```python
class MultiprocessEmioCamera()
```

A class to interface with the realsense camera on Emio.
This class creates a process using mulltiprocessing to handle the camera.

:::warning
This class does **not** work in a SOFA scene. The multiprocessing clashes with SOFA.
If you want to use the camera in a SOFA scene, use the not-paralelized version of the class: [EmioCamera](#EmioCamera)
:::

**Example**:

    ```python
    from emioapi import MultiprocessEmioCamera

    # Initialize the camera with default parameters
    camera = MultiprocessEmioCamera(show=True, tracking=True, compute_point_cloud=True)

    # Open the camera (starts the camera process)
    if camera.open():
        print("Camera started successfully.")

        # Access tracker positions and point cloud in a loop
        for _ in range(10):
            print("Trackers positions:", camera.trackers_pos)
            print("Point cloud shape:", camera.point_cloud.shape if camera.point_cloud is not None else None)
            time.sleep(1)

        # Close the camera process
        camera.close()
        print("Camera closed.")
    else:
        print("Failed to start camera.")
    ```

### camera\_serial()

```python
@property
def camera_serial() -> str
```

Get the current camera serial number

### is\_running()

```python
@property
def is_running() -> bool
```

Get the running status of the camera.

**Returns**:

- `bool` - The running status of the camera.

### track\_markers()

```python
@property
def track_markers() -> bool
```

Get whether the camera is tracking objects or not.

**Returns**:

- `bool` - True if the camera is tracking the markers, else False.

### track\_markers(value: bool)

```python
@track_markers.setter
def track_markers(value: bool)
```

Set the tracking status of the camera.

**Arguments**:

- `value` - bool: The new tracking status.

### compute\_point\_cloud()

```python
@property
def compute_point_cloud() -> bool
```

Get whether the camera is computing the point cloud or not.

**Returns**:

- `bool` - True if the camera is computing the point cloud, else False.

### compute\_point\_cloud(value: bool)

```python
@compute_point_cloud.setter
def compute_point_cloud(value: bool)
```

Set the point cloud computation status of the camera.

**Arguments**:

- `value` - bool: The new point cloud computation status.

### show\_frames()

```python
@property
def show_frames() -> bool
```

Get the show status of the camera.

**Returns**:

- `bool` - The show status of the camera.

### show\_frames(value: bool)

```python
@show_frames.setter
def show_frames(value: bool)
```

Set the show status of the camera.

**Arguments**:

- `value` - bool: The new show status.

### parameters()

```python
@property
def parameters() -> dict
```

Get the camera parameters in a dict:
- `hue_h`: int: The upper hue value.
- `hue_l`: int: The lower hue value.
- `sat_h`: int: The upper saturation value.
- `sat_l`: int: The lower saturation value.
- `value_h`: int: The upper value value.
- `value_l`: int: The lower value value.
- `erosion_size`: int: The size of the erosion kernel.
- `area`: int: The minimum area of the detected objects.

**Returns**:

- `dict` - The camera parameters.

### parameters(value: dict)

```python
@parameters.setter
def parameters(value: dict)
```

Set the camera tracking parameters from the dict:
- `hue_h`: int: The upper hue value.
- `hue_l`: int: The lower hue value.
- `sat_h`: int: The upper saturation value.
- `sat_l`: int: The lower saturation value.
- `value_h`: int: The upper value value.
- `value_l`: int: The lower value value.
- `erosion_size`: int: The size of the erosion kernel.
- `area`: int: The minimum area of the detected objects.

:::warning
- The camera parameters are not saved to a file. You need to save them manually.
- The paramters are set when opening the camera. To change the parameters programatically, you need to close the camera and open it again with the wanted parameters.
:::

**Arguments**:

- `value` - dict: The new camera parameters.

### trackers\_pos()

```python
@property
def trackers_pos() -> list
```

Get the positions of the trackers.

**Returns**:

- `list` - The positions of the trackers as a list of lists.

### point\_cloud()

```python
@property
def point_cloud() -> np.ndarray
```

Get the point cloud data.

**Returns**:

  The point cloud data as a numpy array.

### hsv\_frame()

```python
@property
def hsv_frame() -> np.ndarray | None
```

Get the HSV frame.

**Returns**:

  The HSV frame as a numpy array.

### mask\_frame()

```python
@property
def mask_frame() -> np.ndarray | None
```

Get the mask frame.

**Returns**:

  The mask frame as a numpy array.

### open(camera\_serial: str = None)

```python
def open(camera_serial: str = None) -> bool
```

Initialize and open the camera in another process.
This function creates a new process to handle the camera and starts it.

### close()

```python
def close()
```

Close the camera and terminate the process. Sets the running status to False.

