
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

		// task_box
		const task_box = this.add.rectangle(334, 412, 465, 478);
		task_box.isFilled = true;
		task_box.isStroked = true;
		task_box.strokeColor = 0;
		task_box.lineWidth = 3;

		// whiteout_box
		const whiteout_box = this.add.rectangle(103, 240, 8, 75);
		whiteout_box.isFilled = true;
		whiteout_box.strokeColor = 0;
		whiteout_box.lineWidth = 3;

		// ptask_container
		const ptask_container = this.add.container(158, 270);

		// ptask_box
		const ptask_box = this.add.rectangle(177.66665649414062, 18, 396, 69);
		ptask_box.isStroked = true;
		ptask_box.strokeColor = 0;
		ptask_box.lineWidth = 2;
		ptask_container.add(ptask_box);

		// bitmaptext_8
		const bitmaptext_8 = this.add.bitmapText(0, 0, "pixelmix_32", "PRIMARY TASK");
		bitmaptext_8.text = "PRIMARY TASK";
		bitmaptext_8.fontSize = 32;
		ptask_container.add(bitmaptext_8);

		// rtask_container
		const rtask_container = this.add.container(250, 216);

		// rtask_box
		const rtask_box = this.add.rectangle(85.66665649414062, 0, 396, 38);
		rtask_box.isStroked = true;
		rtask_box.strokeColor = 0;
		rtask_box.lineWidth = 2;
		rtask_container.add(rtask_box);

		// bitmaptext_7
		const bitmaptext_7 = this.add.bitmapText(0, 0, "pixelmix_16", "RANDOM EVENT TASK!");
		bitmaptext_7.setOrigin(0.5, 0.5);
		bitmaptext_7.text = "RANDOM EVENT TASK!";
		bitmaptext_7.fontSize = 16;
		rtask_container.add(bitmaptext_7);

		// dt_container
		const dt_container = this.add.container(251.5, 365);

		// rectangle_5
		const rectangle_5 = this.add.rectangle(84.16665649414062, 118, 396, 285);
		rectangle_5.isStroked = true;
		rectangle_5.strokeColor = 0;
		rectangle_5.lineWidth = 2;
		dt_container.add(rectangle_5);

		// bitmaptext_1
		const bitmaptext_1 = this.add.bitmapText(0, 0, "pixelmix_16", "DAILY TASKS 0/3");
		bitmaptext_1.setOrigin(0.5, 0.5);
		bitmaptext_1.text = "DAILY TASKS 0/3";
		bitmaptext_1.fontSize = 16;
		dt_container.add(bitmaptext_1);

		// dt3_container
		const dt3_container = this.add.container(0, 214);
		dt_container.add(dt3_container);

		// dt3_box
		const dt3_box = this.add.rectangle(84.16665649414062, 0, 355, 55);
		dt3_box.isStroked = true;
		dt3_box.strokeColor = 0;
		dt3_box.lineWidth = 2;
		dt3_container.add(dt3_box);

		// bitmaptext_3
		const bitmaptext_3 = this.add.bitmapText(0, 3, "pixelmix_16", "DAILY TASKS #3");
		bitmaptext_3.setOrigin(0.5, 0.5);
		bitmaptext_3.text = "DAILY TASKS #3";
		bitmaptext_3.fontSize = 16;
		dt3_container.add(bitmaptext_3);

		// bitmaptext_6
		const bitmaptext_6 = this.add.bitmapText(229.5, 3, "pixelmix_16", "$[]");
		bitmaptext_6.setOrigin(0.5, 0.5);
		bitmaptext_6.text = "$[]";
		bitmaptext_6.fontSize = 16;
		dt3_container.add(bitmaptext_6);

		// dt2_container
		const dt2_container = this.add.container(0, 139);
		dt_container.add(dt2_container);

		// dt2_box
		const dt2_box = this.add.rectangle(84.16665649414062, 0, 355, 55);
		dt2_box.isStroked = true;
		dt2_box.strokeColor = 0;
		dt2_box.lineWidth = 2;
		dt2_container.add(dt2_box);

		// bitmaptext_2
		const bitmaptext_2 = this.add.bitmapText(0, 2, "pixelmix_16", "DAILY TASKS #2");
		bitmaptext_2.setOrigin(0.5, 0.5);
		bitmaptext_2.text = "DAILY TASKS #2";
		bitmaptext_2.fontSize = 16;
		dt2_container.add(bitmaptext_2);

		// bitmaptext_5
		const bitmaptext_5 = this.add.bitmapText(229.5, 2, "pixelmix_16", "$[]");
		bitmaptext_5.setOrigin(0.5, 0.5);
		bitmaptext_5.text = "$[]";
		bitmaptext_5.fontSize = 16;
		dt2_container.add(bitmaptext_5);

		// dt1_container
		const dt1_container = this.add.container(0, 64);
		dt_container.add(dt1_container);

		// dt1_box
		const dt1_box = this.add.rectangle(84.16665649414062, 0, 355, 55);
		dt1_box.isStroked = true;
		dt1_box.strokeColor = 0;
		dt1_box.lineWidth = 2;
		dt1_container.add(dt1_box);

		// bitmaptext
		const bitmaptext = this.add.bitmapText(0, 1, "pixelmix_16", "DAILY TASKS #1");
		bitmaptext.setOrigin(0.5, 0.5);
		bitmaptext.text = "DAILY TASKS #1";
		bitmaptext.fontSize = 16;
		dt1_container.add(bitmaptext);

		// bitmaptext_4
		const bitmaptext_4 = this.add.bitmapText(229.5, 1, "pixelmix_16", "$[]");
		bitmaptext_4.setOrigin(0.5, 0.5);
		bitmaptext_4.text = "$[]";
		bitmaptext_4.fontSize = 16;
		dt1_container.add(bitmaptext_4);

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
		const task_icon = this.add.image(-0.15999755859375142, -129.98370361328125, "task icon");
		task_icon.setInteractive(new Phaser.Geom.Rectangle(0, 0, 64, 64), Phaser.Geom.Rectangle.Contains);
		task_icon.scaleX = 2;
		task_icon.scaleY = 2;
		left_menu.add(task_icon);

		// shop_icon
		const shop_icon = this.add.image(-0.15999755859375142, -60.98370361328125, "shop icon");
		shop_icon.setInteractive(new Phaser.Geom.Rectangle(0, 0, 64, 64), Phaser.Geom.Rectangle.Contains);
		shop_icon.scaleX = 2;
		shop_icon.scaleY = 2;
		left_menu.add(shop_icon);

		// journal_icon
		const journal_icon = this.add.image(-0.15999755859375142, 8.01629638671875, "journal icon");
		journal_icon.setInteractive(new Phaser.Geom.Rectangle(0, 0, 64, 64), Phaser.Geom.Rectangle.Contains);
		journal_icon.scaleX = 2;
		journal_icon.scaleY = 2;
		left_menu.add(journal_icon);

		// mail_icon
		const mail_icon = this.add.image(-0.15999755859375142, 77.01629638671875, "mail icon");
		mail_icon.setInteractive(new Phaser.Geom.Rectangle(0, 0, 64, 64), Phaser.Geom.Rectangle.Contains);
		mail_icon.scaleX = 2;
		mail_icon.scaleY = 2;
		left_menu.add(mail_icon);

		// system_icon
		const system_icon = this.add.image(-0.15999755859375142, 146.01629638671875, "system icon");
		system_icon.setInteractive(new Phaser.Geom.Rectangle(0, 0, 64, 64), Phaser.Geom.Rectangle.Contains);
		system_icon.scaleX = 2;
		system_icon.scaleY = 2;
		left_menu.add(system_icon);

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

		this.task_icon.on("pointerdown", () => {
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
