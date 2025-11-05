
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Tasks extends Phaser.Scene {

	constructor() {
		super("Tasks");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// image_1
		const image_1 = this.add.image(599, 359, "Screenshot 2025-11-05 150736");
		image_1.scaleX = 0.75;
		image_1.scaleY = 0.75;
		image_1.visible = false;

		// left_menu
		const left_menu = this.add.container(65, 370.9837155707536);

		// tasks_button
		const tasks_button = this.add.text(0, -129.98373750765813, "", {});
		tasks_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 49, 15), Phaser.Geom.Rectangle.Contains);
		tasks_button.setOrigin(0.5, 0.5);
		tasks_button.text = "TASKS";
		tasks_button.setStyle({ "color": "#000000ff", "resolution": 5 });
		left_menu.add(tasks_button);

		// shop_button
		const shop_button = this.add.text(0, -64.98373750765813, "", {});
		shop_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 39, 15), Phaser.Geom.Rectangle.Contains);
		shop_button.setOrigin(0.5, 0.5);
		shop_button.text = "SHOP";
		shop_button.setStyle({ "color": "#000000ff", "resolution": 5 });
		left_menu.add(shop_button);

		// journal_button
		const journal_button = this.add.text(0, 0.016262492341866164, "", {});
		journal_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 68, 15), Phaser.Geom.Rectangle.Contains);
		journal_button.setOrigin(0.5, 0.5);
		journal_button.text = "JOURNAL";
		journal_button.setStyle({ "color": "#000000ff", "resolution": 5 });
		left_menu.add(journal_button);

		// mail_button
		const mail_button = this.add.text(0, 65.01626249234187, "", {});
		mail_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 39, 15), Phaser.Geom.Rectangle.Contains);
		mail_button.setOrigin(0.5, 0.5);
		mail_button.text = "MAIL";
		mail_button.setStyle({ "color": "#000000ff", "resolution": 5 });
		left_menu.add(mail_button);

		// system_button
		const system_button = this.add.text(0, 130.01626249234187, "", {});
		system_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 58, 15), Phaser.Geom.Rectangle.Contains);
		system_button.setOrigin(0.5, 0.5);
		system_button.text = "SYSTEM";
		system_button.setStyle({ "color": "#000000ff", "resolution": 5 });
		left_menu.add(system_button);

		// rectangle_3
		const rectangle_3 = this.add.rectangle(0, 5.01629638671875, 72, 350);
		rectangle_3.isStroked = true;
		rectangle_3.strokeColor = 0;
		rectangle_3.lineWidth = 3;
		left_menu.add(rectangle_3);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(334, 412, 465, 478);
		rectangle_1.isFilled = true;
		rectangle_1.isStroked = true;
		rectangle_1.strokeColor = 0;
		rectangle_1.lineWidth = 3;

		// rectangle
		const rectangle = this.add.rectangle(103, 240, 8, 75);
		rectangle.isFilled = true;
		rectangle.strokeColor = 0;
		rectangle.lineWidth = 3;

		this.tasks_button = tasks_button;
		this.shop_button = shop_button;
		this.journal_button = journal_button;
		this.mail_button = mail_button;
		this.system_button = system_button;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	tasks_button;
	/** @type {Phaser.GameObjects.Text} */
	shop_button;
	/** @type {Phaser.GameObjects.Text} */
	journal_button;
	/** @type {Phaser.GameObjects.Text} */
	mail_button;
	/** @type {Phaser.GameObjects.Text} */
	system_button;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.tasks_button.on("pointerdown", () => {
            // Stop this overlay scene
            this.scene.stop();
            // Resume the underlying main scene
            this.scene.resume('MainMenu');
        });
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
