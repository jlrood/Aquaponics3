
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Week1Tut extends Phaser.Scene {

	constructor() {
		super("SetupTut");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		const background = this.add.rectangle(640, 360, 1280, 720);
		background.setInteractive(new Phaser.Geom.Rectangle(0, 0, 1280, 720), Phaser.Geom.Rectangle.Contains);
		background.fillAlpha = 0;

		// page1
		const page1 = this.add.container(628, 591);

		// text_box_empty
		const text_box_empty = this.add.image(0, 0, "text_box_empty");
		page1.add(text_box_empty);

		// bitmaptext_1
		const bitmaptext_1 = this.add.bitmapText(0, 0, "pixelmix_16", "Let's get you started with your first aquaponics system!");
		bitmaptext_1.setOrigin(0.5, 0.5);
		bitmaptext_1.text = "Let's get you started with your first aquaponics system!";
		bitmaptext_1.fontSize = 16;
		page1.add(bitmaptext_1);

		// page2
		const page2 = this.add.container(628, 591);
		page2.visible = false;

		// text_box_empty_1
		const text_box_empty_1 = this.add.image(0, 0, "text_box_empty");
		page2.add(text_box_empty_1);

		// bitmaptext
		const bitmaptext = this.add.bitmapText(0, 0, "pixelmix_16", "This is your system!");
		bitmaptext.setOrigin(0.5, 0.5);
		bitmaptext.text = "This is your system!";
		bitmaptext.fontSize = 16;
		page2.add(bitmaptext);

		// page3
		const page3 = this.add.container(628, 591);
		page3.visible = false;

		// text_box_empty_2
		const text_box_empty_2 = this.add.image(0, 0, "text_box_empty");
		page3.add(text_box_empty_2);

		// bitmaptext_2
		const bitmaptext_2 = this.add.bitmapText(0, 0, "pixelmix_16", "Each week, your fish and plants will grow, \nand new events will challenge your understanding\n of aquaponics.");
		bitmaptext_2.setOrigin(0.5, 0.5);
		bitmaptext_2.text = "Each week, your fish and plants will grow, \nand new events will challenge your understanding\n of aquaponics.";
		bitmaptext_2.fontSize = 16;
		bitmaptext_2.align = 1;
		page3.add(bitmaptext_2);

		// page4
		const page4 = this.add.container(628, 591);
		page4.visible = false;

		// text_box_empty_3
		const text_box_empty_3 = this.add.image(0, 0, "text_box_empty");
		page4.add(text_box_empty_3);

		// bitmaptext_3
		const bitmaptext_3 = this.add.bitmapText(0, 0, "pixelmix_16", "Thankfully, there are a variety of tools\n and tips at your disposal to help you succeed!");
		bitmaptext_3.setOrigin(0.5, 0.5);
		bitmaptext_3.text = "Thankfully, there are a variety of tools\n and tips at your disposal to help you succeed!";
		bitmaptext_3.fontSize = 16;
		bitmaptext_3.align = 1;
		page4.add(bitmaptext_3);

		// page5
		const page5 = this.add.container(628, 591);
		page5.visible = false;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(12, -231, 1280, 720);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 0;
		rectangle_1.fillAlpha = 0.3;
		page5.add(rectangle_1);

		// text_box_empty_4
		const text_box_empty_4 = this.add.image(0, 0, "text_box_empty");
		page5.add(text_box_empty_4);

		// bitmaptext_4
		const bitmaptext_4 = this.add.bitmapText(0, 0, "pixelmix_16", "Go ahead and select the tasks icon!");
		bitmaptext_4.setOrigin(0.5, 0.5);
		bitmaptext_4.text = "Go ahead and select the tasks icon!";
		bitmaptext_4.fontSize = 16;
		bitmaptext_4.align = 1;
		page5.add(bitmaptext_4);

		// task_icon
		const task_icon = this.add.image(-563, -350.01629638671875, "task icon");
		task_icon.setInteractive(new Phaser.Geom.Rectangle(0, 0, 64, 64), Phaser.Geom.Rectangle.Contains);
		task_icon.scaleX = 2;
		task_icon.scaleY = 2;
		page5.add(task_icon);

		// glowFx
		task_icon.postFX.addGlow(16777215, 4, 0, false, 0.1, 10);

		// page6
		const page6 = this.add.container(628, 591);
		page6.visible = false;

		// text_box_empty_5
		const text_box_empty_5 = this.add.image(286, 0, "text_box_empty");
		page6.add(text_box_empty_5);

		// bitmaptext_5
		const bitmaptext_5 = this.add.bitmapText(286, 0, "pixelmix_16", "This is the Tasks sidebar.");
		bitmaptext_5.setOrigin(0.5, 0.5);
		bitmaptext_5.text = "This is the Tasks sidebar.";
		bitmaptext_5.fontSize = 16;
		bitmaptext_5.align = 1;
		page6.add(bitmaptext_5);

		// page7
		const page7 = this.add.container(628, 591);
		page7.visible = false;

		// text_box_empty_6
		const text_box_empty_6 = this.add.image(286, 0, "text_box_empty");
		page7.add(text_box_empty_6);

		// bitmaptext_6
		const bitmaptext_6 = this.add.bitmapText(286, 0, "pixelmix_16", "Here, you will see the various tasks\n you must work on from week to week. \n");
		bitmaptext_6.setOrigin(0.5, 0.5);
		bitmaptext_6.text = "Here, you will see the various tasks\n you must work on from week to week. \n";
		bitmaptext_6.fontSize = 16;
		bitmaptext_6.align = 1;
		page7.add(bitmaptext_6);

		// page8
		const page8 = this.add.container(628, 591);
		page8.visible = false;

		// text_box_empty_7
		const text_box_empty_7 = this.add.image(286, 0, "text_box_empty");
		page8.add(text_box_empty_7);

		// bitmaptext_7
		const bitmaptext_7 = this.add.bitmapText(286, 0, "pixelmix_16", "When you complete a task, the icon will\n disappear from the Tasks bar.");
		bitmaptext_7.setOrigin(0.5, 0.5);
		bitmaptext_7.text = "When you complete a task, the icon will\n disappear from the Tasks bar.";
		bitmaptext_7.fontSize = 16;
		bitmaptext_7.align = 1;
		page8.add(bitmaptext_7);

		// page9
		const page9 = this.add.container(628, 591);
		page9.visible = false;

		// text_box_empty_8
		const text_box_empty_8 = this.add.image(286, 0, "text_box_empty");
		page9.add(text_box_empty_8);

		// bitmaptext_8
		const bitmaptext_8 = this.add.bitmapText(286, 0, "pixelmix_16", "Daily tasks grant money when they are completed,\n and Primary tasks must be completed if\n you want to progress to the next week.");
		bitmaptext_8.setOrigin(0.5, 0.5);
		bitmaptext_8.text = "Daily tasks grant money when they are completed,\n and Primary tasks must be completed if\n you want to progress to the next week.";
		bitmaptext_8.fontSize = 16;
		bitmaptext_8.align = 1;
		page9.add(bitmaptext_8);

		this.background = background;
		this.page1 = page1;
		this.page2 = page2;
		this.page3 = page3;
		this.page4 = page4;
		this.task_icon = task_icon;
		this.page5 = page5;
		this.page6 = page6;
		this.page7 = page7;
		this.page8 = page8;
		this.page9 = page9;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	background;
	/** @type {Phaser.GameObjects.Container} */
	page1;
	/** @type {Phaser.GameObjects.Container} */
	page2;
	/** @type {Phaser.GameObjects.Container} */
	page3;
	/** @type {Phaser.GameObjects.Container} */
	page4;
	/** @type {Phaser.GameObjects.Image} */
	task_icon;
	/** @type {Phaser.GameObjects.Container} */
	page5;
	/** @type {Phaser.GameObjects.Container} */
	page6;
	/** @type {Phaser.GameObjects.Container} */
	page7;
	/** @type {Phaser.GameObjects.Container} */
	page8;
	/** @type {Phaser.GameObjects.Container} */
	page9;

	/* START-USER-CODE */

	// Write your code here

	// pg_counter = 1;
	// max_pages = 11;
	// Define which pages should stay visible when advancing
	persistentPages = [];
	clearPersistent = [];

	// Define which pages the background click should NOT advance on
	noBGAdvance = [5, 11, 15, 17, 19, 22, 27];

	create() {

		this.editorCreate();

		this.pg_counter = 1;
		this.max_pages = 27;

		this.tutPages = [];
		for (let i = 1; i <= this.max_pages; i++) {
			const page = this[`page${i}`];

			if (page) {
				page.setVisible(i === 1);
				page.setDepth(1000);
				this.tutPages.push(page);
			}
		}

		this.background.on('pointerdown', (pointer) => {
			this.scene_handler();

			this.advance_tut(true);
		});

		this.task_icon.on('pointerdown', (pointer) => {
			this.scene.launch('Tasks');

			this.advance_tut(false);
		});

		this.shop_icon.on('pointerdown', (pointer) => {
			this.scene.launch('Shop');

			this.advance_tut(false);
		});

		this.fingerling_price.text =
			"$ " +
			this.getItemPricebyID('tilapiaFingerling', this.registry.get('items'))
			+ ".00";

		this.journal_icon.on('pointerdown', (pointer) => {
			this.scene.launch('Journal');

			this.advance_tut(false);
		});

		this.mail_icon.on('pointerdown', (pointer) => {
			this.scene.launch('Mail');

			this.advance_tut(false);
		});

		this.system_icon.on('pointerdown', (pointer) => {
			this.scene.launch('System');

			this.advance_tut(false);
		});

		this.fingerling_box.on('pointerdown', (pointer) => {
			// get our list of items from the registry
			let items = this.registry.get('items');

			// get the fingerling id
			const itemIndex = items.findIndex(item => item.id === 'tilapiaFingerling');

			if (itemIndex !== -1) {
				// Handle monetary transaction
				const itemPrice = items[itemIndex].price;
				let curMoney = this.registry.get('money');
				let newMoney = curMoney - itemPrice;

				// Check for enough money
				if (newMoney >= 0) {
					this.registry.set('money', newMoney);

					// Add fish to inventory
					items[itemIndex].playerHas += 1;
					this.registry.set('items', items);

					console.log('Purchased tilapia fingerling!');
				}
			}

			this.advance_tut(false);
		});

		this.advance.on('pointerdown', async () => {
			// Pull the week system from main menu
			const mainMenuScene = this.scene.get('MainMenu');

			// close tutorial and bring MainMenu back
			this.scene.stop();
			// unpauses MainMenu
			mainMenuScene.scene.resume();

			// show the week overlay ON MainMenu, which is now active
			await mainMenuScene.showWeekOverlay({ week: mainMenuScene.week.week });

			// after player clicks Continue, advance the week
			mainMenuScene.week.nextWeek();
		});

	}

	scene_handler() {
		// Shut the tasks panel for the user
		if (this.pg_counter == 10) {
			this.scene.stop('Tasks');
		}
		else if (this.pg_counter == 16) {
			this.scene.stop('Shop');
		}
		else if (this.pg_counter == 18) {
			this.scene.stop('Journal');
		}
		else if (this.pg_counter == 21) {
			this.scene.stop('Mail');
		}
		else if (this.pg_counter == 25) {
			this.scene.stop('System');
		}
	}

	advance_tut(isBackground) {
		if (this.noBGAdvance.includes(this.pg_counter) && isBackground) {
			// Do nothing
		}
		else if (this.pg_counter < this.max_pages) {
			this.tutPages[this.pg_counter - 1].setVisible(false);

			this.pg_counter++;
			this.tutPages[this.pg_counter - 1].setVisible(true);
		} else {
			this.tutPages[this.pg_counter - 1].setVisible(false);

			this.background.off('pointerdown');

			if (this.scene.isPaused('MainMenu')) {
				this.scene.resume('MainMenu');
			} else {
				this.scene.start('MainMenu');
			}
			this.scene.stop();
		}
	}

	getItemPricebyID(strID, itemsArr) {
		let i = 0;
		while (i < itemsArr.length) {
			if (itemsArr[i].id == strID) {
				break;
			}
			i += 1;
		}
		return itemsArr[i].price;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
