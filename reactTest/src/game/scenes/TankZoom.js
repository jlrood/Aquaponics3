
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class TankZoom extends Phaser.Scene {

	constructor() {
		super("TankZoom");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// back
		const back = this.add.rectangle(0, 0, 1280, 720);
		back.setOrigin(0, 0);
		back.isFilled = true;

		// bitmaptext
		const bitmaptext = this.add.bitmapText(476, 356, "pixelmix_32", "TankZoom Screen");
		bitmaptext.setInteractive(new Phaser.Geom.Rectangle(0, 0, 352, 32), Phaser.Geom.Rectangle.Contains);
		bitmaptext.text = "TankZoom Screen";
		bitmaptext.fontSize = 32;

		this.bitmaptext = bitmaptext;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.BitmapText} */
	bitmaptext;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.bitmaptext.on("pointerdown", () => {
			this.scene.start('MainMenu');
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
