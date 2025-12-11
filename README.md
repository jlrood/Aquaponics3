# Grow 'n Flow Frontend Tutorial

Simple overview of use/purpose.

## Description

Our pixel art frontend tutorial for Grow 'n Flow! Built using React and Phaser.

## Getting Started

### Dependencies

* node.js/npm is required

### Installing

* Simply clone the repo and follow the steps below.

### Executing and Modifying the Game

There are two ways to execute (and modify) the game. 

The easiest way, and the one that we've used for most of this project is to use Phaser Editor. Phaser Editor is a 
paid program, which offeres a free trial. After that it's ~$10 a month. It's not necessary, but it makes the development
process far simpler, allowing you to simply drag, drop, and otherwise pre-visualize scenes and assets. These changes are
made to the .scene files, and they help autogenerate the non-user code. To run the game, simply press the play icon in
the corner, and it will start the server and open a browser window.

The other way, is using Phaser Launcher, or any other IDE of your choosing. In these cases, the .scene files are not necessary.
All changes to the layout of the game must take place directly in the .js file. I would still keep the .scene files around in case
you want to upgrade to Phaser Editor at some point in the future, but they won't be updated to match your changes in the JS. In this
case, you're going to need to manually install node.js/npm. Then, navigate to the "reactTest" directory, and use
```
npm run dev
```
to start the server. At this point, you can simply navigate to a browser and head to ```http://localhost:8080/```

## Help

The help we provide in this section may be relevant only to Phaser Editor, as that is the IDE that we used to develop the game. Phaser
Launcher or other IDEs may require different methods.

### Creating New Scenes
To create a new scene in Phaser Editor, right click the scenes directory and hit create new scene file. This will create a .scene and
a corresponding .js file. However, there are a few more steps. You will need to navigate to the main.js file within the scene folder and
add your scene as an import at the top, and to the scene list in the config. For example, if we have a scene named NewScene, you would import

```
import NewScene from './scenes/NewScene';
```
and then add it to the list of scenes in the config

```
    scene: [
        Boot,
        Preloader,
        MainMenu,
        Game,
        GameOver,
        System,
        Shop,
        Tasks,
        Mail,
        Journal,
        Cycle,
        TankZoom,
        BedZoom,
        Login,
        SetupTut,
        NewScene
    ],
```

In the case of Phase Launcher or other non-graphical IDE, simply manually create a new .js file with a layout based on an existing scene.js, and
follow the rest of the steps to add it to your main.js.

### Adding Images

### Making Buttons Clickable

## Authors

* Marissa Hirakawa
* Andrew Pham
* Niobe Schumer
* Jack Gartman
* Jack Rood
