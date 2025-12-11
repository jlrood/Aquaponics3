# Grow 'n Flow Frontend Tutorial

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

To add an image, like a background or a sprite in Phaser Editor, you're going to want to put it somehwhere in public/assets. From there you're free
to create a directory to group them in some way if you'd like, we have a few like backgrounds, bmFonts, buttons_boxes, etc. Then click on the asset,
and on the right side of the screen you should see a few buttons, letting you choose if you want to add it as an image, sprite, etc. Click which one
you want, and then it gives you the option of putting it in boot.js or preload.js. Generally putting things in preload.js works fine, although boot.js
may be needed for anything you want to show up on the preloading screen.

### Making Buttons Clickable

To make an image, shape, or other asset clickable in Phaser Editor, there are a few steps.

1. Change SCOPE (on the righthand bar) to CLASS

2. Change Shape (on the righthand bar under Hit Area) to anything other than NONE

3. Make a function inside of create() within your .js file along the lines of:
```
        this.buttonName.on("pointerdown", () => {
                //What it does
        }
```

### Adding Spritesheet Animation
Step 1: Open the Preloader.js file and paste the below code in the preload() function. Modify 'player' to what you want to refer to the sprite as, and modify the path to the actual location of your file, should be assets/your_file_name.png 

Then modify frameWidth and frameHeight to the size of your sprites on the sheet
```
    this.load.spritesheet('player', 'assets/player.png', {
        frameWidth: 32,   // width of each frame
        frameHeight: 32   // height of each frame
    });
```
Step 2: Drop the below code in the create() function of your desired scenes, below the call to this.editorCreate(); 

Modify the name of the animation, and change player to whatever you named your spritesheet in the first step. For start and end frames, a sprite sheet with 3 frames would be 0, 1, and 2
```
    if (!this.anims.exists('walk')) {
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('player', { 
                start: 0, 
                end: 7 
            }),
            frameRate: 10,
            repeat: -1
        });
    }
    
    // If you have a sprite created in the editor named 'player'
    this.player.play('walk');
```
Step 3: Create a new sprite in your scene with the editor, and name it to whatever you named your spritesheet in step 1. Give it CLASS scope in the editor so it can be accessed in your create() method.

### Phaser Editor Autogenerated Code

Phaser Editor regenerates everything which is not within the following comments.

```
/* START-USER-CODE */
/* END-USER-CODE */
```

If you write anything outside of these, it will be deleted if you update anything in the scene file. If you are not
using phaser editor, this should not be a concern.

### Phaser Registry

Phaser has a registry that we can keep all of our global variables in, and it can be accessed in any scene.

Example (in Boot.js):

```
create() {
    this.registry.set('money', 100);
}
```

In another screen:

```
let money = this.registry.get('money');
```

### Adding Items to the Shop

1. Go to Boot.js, and add a line ONTO THE END of the inventory array with all the proper attributes

2. Go to Shop.js and look for the setupShop() function applicable to your item.

3. For each of the line blocks in that function, change the next available box to be visible and assign the information from your item in itemsArr. (No need to mess with Shop.scene whatsoever unless your adding an icon)

### Overlaying Scenes

The below example shows how we would pause the main menu and bring up the tasks page as an overlay to the main menu. This assumes
you have an interactive button called task_icon, created in the manner discussed above.

```
    this.task_icon.on("pointerdown", () => {
        // Pause the main menu logic
        this.scene.pause();
        // Launch the overlay scene on top
        this.scene.launch('Tasks');
    });
```

Returning to the original scene, in this case MainMenu, works as follows.

```
    this.task_icon.on("pointerdown", () => {
        // Stop this overlay scene
        this.scene.stop();
        // Resume the underlying main scene
        this.scene.resume('MainMenu');
    });
```

## Known Issues

### Advance Button in Later Weeks

The fast forward to next week button is called advanceButton and I implemented two helper functions called
lockAdvanceButton() and unlockAdvanceButton() that is used at the top of create() and the goal of it is to basically have it check if user has clicked once then it should unlock the week advance button. So the user is suppose to read each message, click anywhere on the screen, and unlocks the week advance button to prevent people from spamming through.
However, you have to click multiple times randomly at the screen, I think the issue is that maybe it only unlocks when you click on interactable items such as the fishtank zoom and shop menu, but sometimes it works when you click on the chatbox which isnt interactable.

To remove this implementation, you can remove the entire "this.input.once('pointerdown', (pointer, targets) => {}" in handify.
Mainly this is used in the function applyWeekRules(wk), ideally we want each week past week1 to be implemented similar to SetupTut.js, but with the time constraint and listening to the evaluations, we prioritized the gameplay mechanics and didn't focus on guiding the users.

## Authors

* Marissa Hirakawa
* Andrew Pham
* Niobe Schumer
* Jack Gartman
* Jack Rood
