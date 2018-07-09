# Robot-Kinematic-Simulator
A JavaScript based Kinematics Simulator

This is a package containing a collection of HTML5/Javascript implementations for teaching robot kinematics, control, decision making, and dynamics and is derived from <a href="http://ohseejay.org/">Prof. Chad Jenkins</a> work on the emulator.

To see kineval in action, open home.html in a web browser.  Firefox 29.0 through 41.0 works for sure.  Chrome and Opera will throw security errors when loading local files from JavaScript (which feels like forcing people into the cloud).

Press "V" to open the controls/help dialogue

## Controls:

- W/A/S/D - move forward/backward and turn right/left
- Q/R - strafe left right
- U/I - control current joint to rotate forward/backward
- H/J/K/L - switch control to parent/child/sibling joint
- O - servo all joints based on seconds of the system clock
- P - perform inverse kinematics iteration (hold down for continual motion)
- R/F - move inverse kinematics target up/down
- M - execute RRT planner
- N/B - set robot configuration to next/previous configuration in generated RRT plan

## Robots and Worlds:

The subdirectories "robots" and "worlds" contains descriptions of various robots and worlds as js files that can be used with KinEval.  These robots and worlds can be included by including the appropriate js files in home.html.  For example:

<script src="robots/fetch/fetch.urdf.js"></script> 
<script src="worlds/world_random.js"></script>


## Options for Robots/Worlds directly from the URL

#### Adding New Worlds
To add a world file directly from the URL, you can just add the following at the end of the URL
```html
?world=worlds/<world_name>.js
  ```
where ```<world_name>``` can be one of the following (all files in the worlds folder)
* world_barrier
* world_empty
* world_basic
* world_local_minima
* world_random
* world_s


#### Adding New Robots
To add a robot URDF file directly from the URL, you can just add the following at the end of the URL
```html
?robot=robots/<robot_name>.js
  ```
where ```<robot_name>``` can be one of the following (all files in the robots folder)
* robot_mr2
* robot_55473250
* robot_crawler
* robot_urdf_example
* fetch/fetch.urdf

#### Adding both world and robot
You can append the robot and world tags as described above to the end of the URL as follows:
```html
?robot=robots/<robot_name>.js?world=worlds/<world_name>.js
  ```
which in turn makes the URL look somewhat as follows:
```html
/home.html?robot=robots/fetch/fetch.urdf.js?world=worlds/world_random.js
```
