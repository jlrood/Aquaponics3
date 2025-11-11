
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Journal extends Phaser.Scene {

	constructor() {
		super("Journal");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// journal_box
		const journal_box = this.add.rectangle(334, 412, 465, 478);
		journal_box.isFilled = true;
		journal_box.isStroked = true;
		journal_box.strokeColor = 0;
		journal_box.lineWidth = 3;

		// whiteout_box
		const whiteout_box = this.add.rectangle(103, 382, 8, 75);
		whiteout_box.isFilled = true;
		whiteout_box.strokeColor = 0;
		whiteout_box.lineWidth = 3;

		// rectangle_5
		const rectangle_5 = this.add.rectangle(318.5, 412, 381, 422);
		rectangle_5.isStroked = true;
		rectangle_5.strokeColor = 0;
		rectangle_5.lineWidth = 2;

		// left_menu
		const left_menu = this.add.container(65, 370.9837155707536);

		// tasks_button
		const tasks_button = this.add.text(0, -129.98373750765813, "", {});
		tasks_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 49, 15), Phaser.Geom.Rectangle.Contains);
		tasks_button.setOrigin(0.5, 0.5);
		tasks_button.visible = false;
		tasks_button.text = "TASKS";
		tasks_button.setStyle({ "color": "#000000ff", "resolution": 5 });
		left_menu.add(tasks_button);

		// shop_button
		const shop_button = this.add.text(0, -64.98373750765813, "", {});
		shop_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 39, 15), Phaser.Geom.Rectangle.Contains);
		shop_button.setOrigin(0.5, 0.5);
		shop_button.visible = false;
		shop_button.text = "SHOP";
		shop_button.setStyle({ "color": "#000000ff", "resolution": 5 });
		left_menu.add(shop_button);

		// journal_button
		const journal_button = this.add.text(0, 0.016262492341866164, "", {});
		journal_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 68, 15), Phaser.Geom.Rectangle.Contains);
		journal_button.setOrigin(0.5, 0.5);
		journal_button.visible = false;
		journal_button.text = "JOURNAL";
		journal_button.setStyle({ "color": "#000000ff", "resolution": 5 });
		left_menu.add(journal_button);

		// mail_button
		const mail_button = this.add.text(0, 65.01626249234187, "", {});
		mail_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 39, 15), Phaser.Geom.Rectangle.Contains);
		mail_button.setOrigin(0.5, 0.5);
		mail_button.visible = false;
		mail_button.text = "MAIL";
		mail_button.setStyle({ "color": "#000000ff", "resolution": 5 });
		left_menu.add(mail_button);

		// system_button
		const system_button = this.add.text(0, 130.01626586914062, "", {});
		system_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 58, 15), Phaser.Geom.Rectangle.Contains);
		system_button.setOrigin(0.5, 0.5);
		system_button.visible = false;
		system_button.text = "SYSTEM";
		system_button.setStyle({ "color": "#000000ff", "resolution": 5 });
		left_menu.add(system_button);

		// task_icon
		const task_icon = this.add.image(0, -130, "task icon");
		task_icon.setInteractive(new Phaser.Geom.Rectangle(0, 0, 64, 64), Phaser.Geom.Rectangle.Contains);
		task_icon.scaleX = 2;
		task_icon.scaleY = 2;
		left_menu.add(task_icon);

		// shop_icon
		const shop_icon = this.add.image(0, -61, "shop icon");
		shop_icon.setInteractive(new Phaser.Geom.Rectangle(0, 0, 64, 64), Phaser.Geom.Rectangle.Contains);
		shop_icon.scaleX = 2;
		shop_icon.scaleY = 2;
		left_menu.add(shop_icon);

		// journal_icon
		const journal_icon = this.add.image(0, 8, "journal icon");
		journal_icon.setInteractive(new Phaser.Geom.Rectangle(0, 0, 64, 64), Phaser.Geom.Rectangle.Contains);
		journal_icon.scaleX = 2;
		journal_icon.scaleY = 2;
		left_menu.add(journal_icon);

		// mail_icon
		const mail_icon = this.add.image(0, 77, "mail icon");
		mail_icon.setInteractive(new Phaser.Geom.Rectangle(0, 0, 64, 64), Phaser.Geom.Rectangle.Contains);
		mail_icon.scaleX = 2;
		mail_icon.scaleY = 2;
		left_menu.add(mail_icon);

		// system_icon
		const system_icon = this.add.image(0, 146, "system icon");
		system_icon.setInteractive(new Phaser.Geom.Rectangle(0, 0, 64, 64), Phaser.Geom.Rectangle.Contains);
		system_icon.scaleX = 2;
		system_icon.scaleY = 2;
		left_menu.add(system_icon);

		// rectangle
		const rectangle = this.add.rectangle(319, 322, 354, 110);
		rectangle.isStroked = true;
		rectangle.strokeColor = 0;
		rectangle.lineWidth = 2;

		// bitmaptext_1
		const bitmaptext_1 = this.add.bitmapText(141, 214, "pixelmix_32", "WEEK []");
		bitmaptext_1.text = "WEEK []";
		bitmaptext_1.fontSize = 32;

		// bitmaptext_2
		const bitmaptext_2 = this.add.bitmapText(150, 279, "pixelmix_16", "FILTER LEVEL:");
		bitmaptext_2.text = "FILTER LEVEL:";
		bitmaptext_2.fontSize = 16;

		// bitmaptext
		const bitmaptext = this.add.bitmapText(150, 308, "pixelmix_16", "TEMP:");
		bitmaptext.text = "TEMP:";
		bitmaptext.fontSize = 16;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(228, 499, 171, 217);
		rectangle_1.isStroked = true;
		rectangle_1.strokeColor = 0;
		rectangle_1.lineWidth = 2;

		// rectangle_2
		const rectangle_2 = this.add.rectangle(411, 499, 171, 217);
		rectangle_2.isStroked = true;
		rectangle_2.strokeColor = 0;
		rectangle_2.lineWidth = 2;

		// bitmaptext_4
		const bitmaptext_4 = this.add.bitmapText(152, 404, "pixelmix_32", "pH:");
		bitmaptext_4.text = "pH:";
		bitmaptext_4.fontSize = 32;

		// bitmaptext_3
		const bitmaptext_3 = this.add.bitmapText(152, 456, "pixelmix_32", "NO:");
		bitmaptext_3.text = "NO:";
		bitmaptext_3.fontSize = 32;

		// bitmaptext_5
		const bitmaptext_5 = this.add.bitmapText(152, 508, "pixelmix_32", "NO:");
		bitmaptext_5.text = "NO:";
		bitmaptext_5.fontSize = 32;

		// bitmaptext_6
		const bitmaptext_6 = this.add.bitmapText(152, 560, "pixelmix_32", "TEMP:");
		bitmaptext_6.text = "TEMP:";
		bitmaptext_6.fontSize = 32;

		// bitmaptext_8
		const bitmaptext_8 = this.add.bitmapText(194.5, 538, "pixelmix_16", "2");
		bitmaptext_8.text = "2";
		bitmaptext_8.fontSize = 16;

		// bitmaptext_7
		const bitmaptext_7 = this.add.bitmapText(194.5, 486, "pixelmix_16", "3");
		bitmaptext_7.text = "3";
		bitmaptext_7.fontSize = 16;

		this.tasks_button = tasks_button;
		this.shop_button = shop_button;
		this.journal_button = journal_button;
		this.mail_button = mail_button;
		this.system_button = system_button;
		this.task_icon = task_icon;
		this.shop_icon = shop_icon;
		this.journal_icon = journal_icon;
		this.mail_icon = mail_icon;
		this.system_icon = system_icon;

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
	/** @type {Phaser.GameObjects.Image} */
	task_icon;
	/** @type {Phaser.GameObjects.Image} */
	shop_icon;
	/** @type {Phaser.GameObjects.Image} */
	journal_icon;
	/** @type {Phaser.GameObjects.Image} */
	mail_icon;
	/** @type {Phaser.GameObjects.Image} */
	system_icon;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();

		this.journal_icon.on("pointerdown", () => {
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
