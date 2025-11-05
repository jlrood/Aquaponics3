
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Mail extends Phaser.Scene {

	constructor() {
		super("Mail");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// Background
		const background = this.add.rectangle(120, 80, 1040, 560);
		background.setOrigin(0, 0);
		background.isFilled = true;
		background.fillColor = 29709;
		background.isStroked = true;
		background.strokeColor = 0;

		// back_container
		const back_container = this.add.container(151, 120);
		
		// back_button
		const back_button = this.add.ellipse(19, 10, 128, 128);
		back_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		back_button.scaleX = 0.5;
		back_button.scaleY = 0.5;
		back_button.isFilled = true;
		back_button.isStroked = true;
		back_button.strokeColor = 0;
		back_container.add(back_button);

		// back_text
		const back_text = this.add.text(0, 0, "", {});
		back_text.text = "Back";
		back_text.setStyle({ "color": "#000000ff" });
		back_container.add(back_text);

		this.back_button = back_button;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Ellipse} */
	back_button;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.back_button.on("pointerdown", () => {
			// Stop this overlay scene
            this.scene.stop();
            // Resume the underlying main scene
            this.scene.resume('MainMenu');
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
