
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Shop extends Phaser.Scene {

	constructor() {
		super("Shop");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// text_1
		const text_1 = this.add.text(640, 360, "", {});
		text_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 271, 45), Phaser.Geom.Rectangle.Contains);
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "SHOP PAGE";
		text_1.setStyle({ "color": "#818181ff", "fontSize": "50px", "resolution": 2 });

		this.text_1 = text_1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	text_1;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.text_1.on("pointerdown", () => {
            this.scene.start('MainMenu'); // Still works!
        });
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
