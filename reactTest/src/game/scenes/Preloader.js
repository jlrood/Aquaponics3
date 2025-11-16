// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Preloader extends Phaser.Scene {

	constructor() {
		super("Preloader");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		const background = this.add.rectangle(493, 380, 1280, 720);
		background.setInteractive(new Phaser.Geom.Rectangle(0, 0, 1280, 720), Phaser.Geom.Rectangle.Contains);
		background.scaleX = 0.8535365312473634;
		background.scaleY = 1.037546494551729;
		background.isFilled = true;
		background.fillColor = 14609917;

		// progressBar
		const progressBar = this.add.rectangle(594, 342, 468, 32);
		progressBar.isFilled = true;
		progressBar.fillColor = 14737632;
		progressBar.isStroked = true;

		// text_1
		const text_1 = this.add.text(368, 305, "", {});
		text_1.text = "Populating Fishes...\n";
		text_1.setStyle({ "color": "#060404ff" });

		// tilapia_new0
		this.add.image(324, 327, "tilapia_new", 0);

		this.background = background;
		this.progressBar = progressBar;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	background;
	/** @type {Phaser.GameObjects.Rectangle} */
	progressBar;

	/* START-USER-CODE */

	// Write your code here
    init ()
    {
        this.editorCreate();

        //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
        const bar = this.add.rectangle(this.progressBar.x - this.progressBar.width / 2 + 4, this.progressBar.y, 4, 28, 0xffffff);

        //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
        this.load.on('progress', (progress) => {

            //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
            bar.width = 4 + (460 * progress);

        });


    }

    preload ()
    {
        // Use the 'pack' file to load in any assets you need for this scene
        this.load.pack('preload', 'assets/preload-asset-pack.json');
    }

    create ()
    {
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.

        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
        this.scene.start('Tutorial');
    }
        /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
