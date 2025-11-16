
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class BedZoom extends Phaser.Scene {

	constructor() {
		super("BedZoom");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(0, 0, 1280, 720);
		rectangle_1.setOrigin(0, 0);
		rectangle_1.isFilled = true;

		// bitmaptext
		const bitmaptext = this.add.bitmapText(462, 297, "pixelmix_32", "BedZoom Screen");
		bitmaptext.setInteractive(new Phaser.Geom.Rectangle(0, 0, 332, 32), Phaser.Geom.Rectangle.Contains);
		bitmaptext.text = "BedZoom Screen";
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
