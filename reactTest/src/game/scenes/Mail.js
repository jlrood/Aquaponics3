
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
		background.fillColor = 10144758;
		background.isStroked = true;
		background.strokeColor = 0;

		// back_container
		const back_container = this.add.container(161, 120);

		// back_button
		const back_button = this.add.ellipse(14, 10, 128, 128);
		back_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		back_button.scaleX = 0.5;
		back_button.scaleY = 0.5;
		back_button.isFilled = true;
		back_button.isStroked = true;
		back_button.strokeColor = 0;
		back_container.add(back_button);

		// back_text
		const back_text = this.add.bitmapText(-7, 1, "pixelmix_8", "Back");
		back_text.text = "Back";
		back_text.fontSize = 15;
		back_container.add(back_text);

		// back_button_1
		const back_button_1 = this.add.image(14, 10, "back button");
		back_button_1.scaleX = 2;
		back_button_1.scaleY = 2;
		back_container.add(back_button_1);

		// mail_container
		const mail_container = this.add.container(478, 120);

		// mail_button
		const mail_button = this.add.rectangle(0, 0, 145, 60);
		mail_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 145, 60), Phaser.Geom.Rectangle.Contains);
		mail_button.setOrigin(0, 0);
		mail_button.isFilled = true;
		mail_button.isStroked = true;
		mail_button.strokeColor = 0;
		mail_container.add(mail_button);

		// mail_text
		const mail_text = this.add.bitmapText(72, 30, "pixelmix_16", "Mail");
		mail_text.setOrigin(0.5, 0.5);
		mail_text.text = "Mail";
		mail_text.fontSize = 30;
		mail_container.add(mail_text);

		// maintenance_container
		const maintenance_container = this.add.container(624, 119);

		// maintenance_button
		const maintenance_button = this.add.rectangle(0, 1, 145, 60);
		maintenance_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 145, 60), Phaser.Geom.Rectangle.Contains);
		maintenance_button.scaleX = 1.7712428090515089;
		maintenance_button.setOrigin(0, 0);
		maintenance_button.isFilled = true;
		maintenance_button.isStroked = true;
		maintenance_button.strokeColor = 0;
		maintenance_container.add(maintenance_button);

		// maintenance_text
		const maintenance_text = this.add.bitmapText(128, 31, "pixelmix_16", "Maintenance");
		maintenance_text.setOrigin(0.5, 0.5);
		maintenance_text.text = "Maintenance";
		maintenance_text.fontSize = 30;
		maintenance_container.add(maintenance_text);

		// updates_container
		const updates_container = this.add.container(882, 120);

		// updates_button
		const updates_button = this.add.rectangle(0, 0, 145, 60);
		updates_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 145, 60), Phaser.Geom.Rectangle.Contains);
		updates_button.scaleX = 1.25;
		updates_button.setOrigin(0, 0);
		updates_button.isFilled = true;
		updates_button.isStroked = true;
		updates_button.strokeColor = 0;
		updates_container.add(updates_button);

		// updates_text
		const updates_text = this.add.bitmapText(88, 30, "pixelmix_16", "Updates");
		updates_text.setOrigin(0.5, 0.5);
		updates_text.text = "Updates";
		updates_text.fontSize = 30;
		updates_container.add(updates_text);

		// large_mail_container
		const large_mail_container = this.add.container(-20, -10);
		large_mail_container.scaleX = 1.0255356539154903;
		large_mail_container.scaleY = 1.0420164561418845;

		// large_mail_menu
		const large_mail_menu = this.add.rectangle(772, 379, 128, 128);
		large_mail_menu.scaleX = 4.806313073706209;
		large_mail_menu.scaleY = 2.902128220575247;
		large_mail_menu.isFilled = true;
		large_mail_menu.isStroked = true;
		large_mail_menu.strokeColor = 0;
		large_mail_menu.lineWidth = 0.5;
		large_mail_container.add(large_mail_menu);

		// mail_item_container_1
		const mail_item_container_1 = this.add.container(0, 0);
		large_mail_container.add(mail_item_container_1);

		// mail_item_1
		const mail_item_1 = this.add.rectangle(774, 234, 128, 128);
		mail_item_1.scaleX = 4.575648467010909;
		mail_item_1.scaleY = 0.43131116787969503;
		mail_item_1.isFilled = true;
		mail_item_1.isStroked = true;
		mail_item_1.strokeColor = 0;
		mail_item_1.lineWidth = 2;
		mail_item_container_1.add(mail_item_1);

		// icon_1
		const icon_1 = this.add.ellipse(506, 236, 128, 128);
		icon_1.scaleX = 0.1;
		icon_1.scaleY = 0.1;
		icon_1.isFilled = true;
		icon_1.fillColor = 8500087;
		icon_1.isStroked = true;
		icon_1.strokeColor = 0;
		mail_item_container_1.add(icon_1);

		// mail_text_1
		const mail_text_1 = this.add.bitmapText(528, 221, "pixelmix_16", "Fish Delivery! (1)");
		mail_text_1.text = "Fish Delivery! (1)";
		mail_text_1.fontSize = 30;
		mail_item_container_1.add(mail_text_1);

		// check_circle_1
		const check_circle_1 = this.add.ellipse(1037, 236, 128, 128);
		check_circle_1.setInteractive(new Phaser.Geom.Ellipse(64, 64, 128, 128), Phaser.Geom.Ellipse.Contains);
		check_circle_1.scaleX = 0.19049010132085792;
		check_circle_1.scaleY = 0.20133064841509496;
		check_circle_1.isFilled = true;
		check_circle_1.isStroked = true;
		check_circle_1.strokeColor = 0;
		check_circle_1.lineWidth = 3;
		mail_item_container_1.add(check_circle_1);

		// mail_item_container_2
		const mail_item_container_2 = this.add.container(0, 0);
		large_mail_container.add(mail_item_container_2);

		// mail_item_2
		const mail_item_2 = this.add.rectangle(773, 305, 128, 128);
		mail_item_2.scaleX = 4.575648467010909;
		mail_item_2.scaleY = 0.43131116787969503;
		mail_item_2.isFilled = true;
		mail_item_2.isStroked = true;
		mail_item_2.strokeColor = 0;
		mail_item_2.lineWidth = 2;
		mail_item_container_2.add(mail_item_2);

		// mail_text_2
		const mail_text_2 = this.add.bitmapText(529, 289, "pixelmix_16", "You've got mail!");
		mail_text_2.text = "You've got mail!";
		mail_text_2.fontSize = 30;
		mail_item_container_2.add(mail_text_2);

		// icon_2
		const icon_2 = this.add.ellipse(506, 305, 128, 128);
		icon_2.scaleX = 0.1;
		icon_2.scaleY = 0.1;
		icon_2.isFilled = true;
		icon_2.fillColor = 8500087;
		icon_2.isStroked = true;
		icon_2.strokeColor = 0;
		mail_item_container_2.add(icon_2);

		// check_circle_2
		const check_circle_2 = this.add.ellipse(1037.6808404735332, 305.08071324922764, 128, 128);
		check_circle_2.setInteractive(new Phaser.Geom.Ellipse(64, 64, 128, 128), Phaser.Geom.Ellipse.Contains);
		check_circle_2.scaleX = 0.19049010132085792;
		check_circle_2.scaleY = 0.20133064841509496;
		check_circle_2.isFilled = true;
		check_circle_2.isStroked = true;
		check_circle_2.strokeColor = 0;
		check_circle_2.lineWidth = 3;
		mail_item_container_2.add(check_circle_2);

		// mail_item_container_3
		const mail_item_container_3 = this.add.container(0, 0);
		large_mail_container.add(mail_item_container_3);

		// mail_item_3
		const mail_item_3 = this.add.rectangle(774, 377, 128, 128);
		mail_item_3.scaleX = 4.575648467010909;
		mail_item_3.scaleY = 0.43131116787969503;
		mail_item_3.isFilled = true;
		mail_item_3.isStroked = true;
		mail_item_3.strokeColor = 0;
		mail_item_3.lineWidth = 2;
		mail_item_container_3.add(mail_item_3);

		// mail_text_3
		const mail_text_3 = this.add.bitmapText(529, 362, "pixelmix_16", "You've got mail!");
		mail_text_3.text = "You've got mail!";
		mail_text_3.fontSize = 30;
		mail_item_container_3.add(mail_text_3);

		// icon_3
		const icon_3 = this.add.ellipse(506, 377, 128, 128);
		icon_3.scaleX = 0.1;
		icon_3.scaleY = 0.1;
		icon_3.isFilled = true;
		icon_3.fillColor = 8500087;
		icon_3.isStroked = true;
		icon_3.strokeColor = 0;
		mail_item_container_3.add(icon_3);

		// check_circle_3
		const check_circle_3 = this.add.ellipse(1038.344675122114, 377.3759385008788, 128, 128);
		check_circle_3.setInteractive(new Phaser.Geom.Ellipse(64, 64, 128, 128), Phaser.Geom.Ellipse.Contains);
		check_circle_3.scaleX = 0.19049010132085792;
		check_circle_3.scaleY = 0.20133064841509496;
		check_circle_3.isFilled = true;
		check_circle_3.isStroked = true;
		check_circle_3.strokeColor = 0;
		check_circle_3.lineWidth = 3;
		mail_item_container_3.add(check_circle_3);

		// mail_item_container_4
		const mail_item_container_4 = this.add.container(0, 0);
		large_mail_container.add(mail_item_container_4);

		// mail_item_4
		const mail_item_4 = this.add.rectangle(774, 447, 128, 128);
		mail_item_4.scaleX = 4.575648467010909;
		mail_item_4.scaleY = 0.43131116787969503;
		mail_item_4.isFilled = true;
		mail_item_4.isStroked = true;
		mail_item_4.strokeColor = 0;
		mail_item_4.lineWidth = 2;
		mail_item_container_4.add(mail_item_4);

		// mail_text_4
		const mail_text_4 = this.add.bitmapText(528, 433, "pixelmix_16", "You've got mail!");
		mail_text_4.text = "You've got mail!";
		mail_text_4.fontSize = 30;
		mail_item_container_4.add(mail_text_4);

		// icon_4
		const icon_4 = this.add.ellipse(506, 449, 128, 128);
		icon_4.scaleX = 0.1;
		icon_4.scaleY = 0.1;
		icon_4.isFilled = true;
		icon_4.fillColor = 8500087;
		icon_4.isStroked = true;
		icon_4.strokeColor = 0;
		mail_item_container_4.add(icon_4);

		// check_circle_4
		const check_circle_4 = this.add.ellipse(1038.9920835233388, 446.75605543853453, 128, 128);
		check_circle_4.setInteractive(new Phaser.Geom.Ellipse(64, 64, 128, 128), Phaser.Geom.Ellipse.Contains);
		check_circle_4.scaleX = 0.19049010132085792;
		check_circle_4.scaleY = 0.20133064841509496;
		check_circle_4.isFilled = true;
		check_circle_4.isStroked = true;
		check_circle_4.strokeColor = 0;
		check_circle_4.lineWidth = 3;
		mail_item_container_4.add(check_circle_4);

		// mail_item_container_5
		const mail_item_container_5 = this.add.container(0, 0);
		large_mail_container.add(mail_item_container_5);

		// mail_item_5
		const mail_item_5 = this.add.rectangle(774, 518, 128, 128);
		mail_item_5.scaleX = 4.575648467010909;
		mail_item_5.scaleY = 0.43131116787969503;
		mail_item_5.isFilled = true;
		mail_item_5.isStroked = true;
		mail_item_5.strokeColor = 0;
		mail_item_5.lineWidth = 2;
		mail_item_container_5.add(mail_item_5);

		// mail_text_5
		const mail_text_5 = this.add.bitmapText(528, 502, "pixelmix_16", "You've got mail!");
		mail_text_5.text = "You've got mail!";
		mail_text_5.fontSize = 30;
		mail_item_container_5.add(mail_text_5);

		// icon_5
		const icon_5 = this.add.ellipse(506, 518, 128, 128);
		icon_5.scaleX = 0.1;
		icon_5.scaleY = 0.1;
		icon_5.isFilled = true;
		icon_5.fillColor = 8500087;
		icon_5.isStroked = true;
		icon_5.strokeColor = 0;
		mail_item_container_5.add(icon_5);

		// check_circle_5
		const check_circle_5 = this.add.ellipse(1039.6233037387638, 518.3385865434293, 128, 128);
		check_circle_5.setInteractive(new Phaser.Geom.Ellipse(64, 64, 128, 128), Phaser.Geom.Ellipse.Contains);
		check_circle_5.scaleX = 0.19049010132085792;
		check_circle_5.scaleY = 0.20133064841509496;
		check_circle_5.isFilled = true;
		check_circle_5.isStroked = true;
		check_circle_5.strokeColor = 0;
		check_circle_5.lineWidth = 3;
		mail_item_container_5.add(check_circle_5);

		// announcements_container
		const announcements_container = this.add.container(0, 0);

		// announcement_1
		const announcement_1 = this.add.rectangle(284.0733947753906, 245.9158935546875, 128, 128);
		announcement_1.scaleX = 1.9313435329452338;
		announcement_1.scaleY = 1.023622721338591;
		announcement_1.isFilled = true;
		announcement_1.fillColor = 11006586;
		announcement_1.isStroked = true;
		announcement_1.strokeColor = 0;
		announcement_1.lineWidth = 2;
		announcements_container.add(announcement_1);

		// announcement_2_container
		const announcement_2_container = this.add.container(280, 544);
		announcements_container.add(announcement_2_container);

		// announcement_2
		const announcement_2 = this.add.rectangle(3.09893798828125, -0.1597900390625, 128, 128);
		announcement_2.scaleX = 1.9313435329452338;
		announcement_2.scaleY = 1.023622721338591;
		announcement_2.isFilled = true;
		announcement_2.fillColor = 1946604;
		announcement_2.isStroked = true;
		announcement_2.strokeColor = 0;
		announcement_2.lineWidth = 2;
		announcement_2_container.add(announcement_2);

		// announcement_icon_2
		const announcement_icon_2 = this.add.image(3, -1, "sillouette");
		announcement_icon_2.scaleX = 3;
		announcement_icon_2.scaleY = 3;
		announcement_2_container.add(announcement_icon_2);

		// bitmaptext_1
		const bitmaptext_1 = this.add.bitmapText(-102, -57, "pixelmix_16", "BARRAMUNDI UPDATE");
		bitmaptext_1.tintFill = true;
		bitmaptext_1.tintTopLeft = 15654108;
		bitmaptext_1.tintTopRight = 16776958;
		bitmaptext_1.tintBottomRight = 16448250;
		bitmaptext_1.text = "BARRAMUNDI UPDATE";
		bitmaptext_1.fontSize = 16;
		bitmaptext_1.align = 1;
		announcement_2_container.add(bitmaptext_1);

		// bitmaptext
		const bitmaptext = this.add.bitmapText(-64, 43, "pixelmix_16", "COMING SOON");
		bitmaptext.tintFill = true;
		bitmaptext.tintTopLeft = 15654108;
		bitmaptext.tintTopRight = 16776958;
		bitmaptext.tintBottomRight = 16448250;
		bitmaptext.text = "COMING SOON";
		bitmaptext.fontSize = 16;
		bitmaptext.align = 1;
		announcement_2_container.add(bitmaptext);

		// announcement_1_container
		const announcement_1_container = this.add.container(1, -149);
		announcements_container.add(announcement_1_container);

		// announcement_3
		const announcement_3 = this.add.rectangle(283.09893798828125, 542.7225341796875, 128, 128);
		announcement_3.scaleX = 1.9313435329452338;
		announcement_3.scaleY = 1.023622721338591;
		announcement_3.isFilled = true;
		announcement_3.fillColor = 7513837;
		announcement_3.isStroked = true;
		announcement_3.strokeColor = 0;
		announcement_3.lineWidth = 2;
		announcement_1_container.add(announcement_3);

		// star
		const star = this.add.image(286, 543, "star");
		star.scaleX = 2;
		star.scaleY = 2;
		star.angle = 15;
		star.alpha = 0.75;
		star.alphaTopLeft = 0.75;
		star.alphaTopRight = 0.75;
		star.alphaBottomLeft = 0.75;
		star.alphaBottomRight = 0.75;
		announcement_1_container.add(star);

		// bitmaptext_3
		const bitmaptext_3 = this.add.bitmapText(246, 563, "pixelmix_24", "ADDED");
		bitmaptext_3.tintFill = true;
		bitmaptext_3.text = "ADDED";
		bitmaptext_3.fontSize = 24;
		announcement_1_container.add(bitmaptext_3);

		// bitmaptext_2
		const bitmaptext_2 = this.add.bitmapText(166, 494, "pixelmix_24", "TILAPIA LARVAE");
		bitmaptext_2.tintFill = true;
		bitmaptext_2.text = "TILAPIA LARVAE";
		bitmaptext_2.fontSize = 24;
		announcement_1_container.add(bitmaptext_2);

		// larvae0
		const larvae0 = this.add.image(293, 557, "larvae", 0);
		larvae0.scaleX = 3;
		larvae0.scaleY = 3;
		announcement_1_container.add(larvae0);

		// Fact
		const fact = this.add.bitmapText(172, 189, "pixelmix_16", "I love fish!");
		fact.tintFill = true;
		fact.tintTopLeft = 11602047;
		fact.tintTopRight = 7436822;
		fact.tintBottomLeft = 1924874;
		fact.tintBottomRight = 395104;
		fact.text = "I love fish!";
		fact.fontSize = 16;
		fact.maxWidth = 240;

		// get fun facts from facts.txt
		//TODO: THIS NEEDS TO BE MOVED UNDER
		const raw = this.cache.text.get("facts");
		const lines = raw.split(/\r?\n/).filter(l => l.trim().length > 0);
		const randomLine = Phaser.Utils.Array.GetRandom(lines);

		fact.setText(randomLine);

		this.back_button = back_button;
		this.mail_button = mail_button;
		this.maintenance_button = maintenance_button;
		this.updates_button = updates_button;
		this.mail_item_1 = mail_item_1;
		this.check_circle_1 = check_circle_1;
		this.check_circle_2 = check_circle_2;
		this.check_circle_3 = check_circle_3;
		this.check_circle_4 = check_circle_4;
		this.check_circle_5 = check_circle_5;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Ellipse} */
	back_button;
	/** @type {Phaser.GameObjects.Rectangle} */
	mail_button;
	/** @type {Phaser.GameObjects.Rectangle} */
	maintenance_button;
	/** @type {Phaser.GameObjects.Rectangle} */
	updates_button;
	/** @type {Phaser.GameObjects.Rectangle} */
	mail_item_1;
	/** @type {Phaser.GameObjects.Ellipse} */
	check_circle_1;
	/** @type {Phaser.GameObjects.Ellipse} */
	check_circle_2;
	/** @type {Phaser.GameObjects.Ellipse} */
	check_circle_3;
	/** @type {Phaser.GameObjects.Ellipse} */
	check_circle_4;
	/** @type {Phaser.GameObjects.Ellipse} */
	check_circle_5;

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

		this.mail_button.on("pointerdown", () => {
			this.mail_button.fillColor = 0x428544;
			this.maintenance_button.fillColor = 0xffffff;
			this.updates_button.fillColor = 0xffffff;
			this.getProdGraph('w');
		});

		this.maintenance_button.on("pointerdown", () => {
			this.mail_button.fillColor = 0xffffff;
			this.maintenance_button.fillColor = 0x428544;
			this.updates_button.fillColor = 0xffffff;
			this.getProdGraph('w');
		});

		this.updates_button.on("pointerdown", () => {
			this.mail_button.fillColor = 0xffffff;
			this.maintenance_button.fillColor = 0xffffff;
			this.updates_button.fillColor = 0x428544;
			this.getProdGraph('w');
		});

		//Now that week 1 started, I'm going to wipe all the mail text.
		//Fish delivery! Row
		// -------------------------
		// Week 1 mail rows
		// -------------------------

		const currentWeek = this.registry.get('currentWeek') || 0
		const week1Received = this.registry.get('tutorialWeek1MailReceived')
		this.fishMailRow = null
		this.detailText = null
		this.detailBg = null
		const mailRowTexts = this.findMailRowTexts()

		if (currentWeek === 1 && mailRowTexts.length) {
			this.fishMailRow = mailRowTexts.find(t =>
				t.text && t.text.startsWith('Fish Delivery')
			)

			if (this.fishMailRow) {
				// clear all other rows
				mailRowTexts.forEach(t => {
					if (t !== this.fishMailRow) {
						t.setText('')
					}
				})

				this.fishMailRow.fontSize = 18
				this.fishMailRow.maxWidth = 460

				if (!week1Received) {
					// before claim
					this.fishMailRow.setText('Starter fish and plants, click to claim')
					this.fishMailRow.setInteractive({ useHandCursor: true })
					this.fishMailRow.on('pointerdown', () => {
						this.handleFishDeliveryClick()
					})
				} else {
					// after claim, show no-mail text and no click
					this.fishMailRow.setText('You have no mail. :(')
					this.fishMailRow.disableInteractive()
				}
			}
			// For the rest of the weeks, no more mail i guess
			}else if(currentWeek > 1 && mailRowTexts.length){ {
				this.fishMailRow = mailRowTexts.find(t =>
					t.text && t.text.startsWith('Fish Delivery')
				)

				if (this.fishMailRow) {
					// clear all other rows
					mailRowTexts.forEach(t => {
						if (t !== this.fishMailRow) {
							t.setText('')
						}
					})
					this.fishMailRow.setText('You have no mail. :(')
					this.fishMailRow.disableInteractive()
				}
			}
			}




			this.check_circle_1.on("pointerdown", () => {
				if (this.check_circle_1.fillColor == 0x000000) {
					this.check_circle_1.fillColor = 0xffffff;
				}
				else {
					this.check_circle_1.fillColor = 0x428544;
				}
			});

			this.check_circle_2.on("pointerdown", () => {
				if (this.check_circle_2.fillColor == 0x000000) {
					this.check_circle_2.fillColor = 0xffffff;
				}
				else {
					this.check_circle_2.fillColor = 0x428544;
				}
			});

			this.check_circle_3.on("pointerdown", () => {
				if (this.check_circle_3.fillColor == 0x000000) {
					this.check_circle_3.fillColor = 0xffffff;
				}
				else {
					this.check_circle_3.fillColor = 0x428544;
				}
			});

			this.check_circle_4.on("pointerdown", () => {
				if (this.check_circle_4.fillColor == 0x000000) {
					this.check_circle_4.fillColor = 0xffffff;
				}
				else {
					this.check_circle_4.fillColor = 0x428544;
				}
			});

			this.check_circle_5.on("pointerdown", () => {
				if (this.check_circle_5.fillColor == 0x000000) {
					this.check_circle_5.fillColor = 0xffffff;
				}
				else {
					this.check_circle_5.fillColor = 0x428544;
				}
			});
		}


		handleFishDeliveryClick() {
			const currentWeek = this.registry.get('currentWeek') || 0
			if (currentWeek !== 1) return

			if (this.registry.get('tutorialWeek1MailReceived')) {
				return
			}

			const items = this.registry.get('items') || []

			const giveItem = (id, amount = 1) => {
				const it = items.find(i => i.id === id)
				if (!it) return
				if (typeof it.playerHas !== 'number') it.playerHas = 0
				it.playerHas += amount
			}

			// Week 1 starter package
			giveItem('tilapiaLarvae', 5)
			giveItem('romaineSprout', 3)

			this.registry.set('items', items)
			this.registry.set('tutorialWeek1MailReceived', true)
			this.registry.set('tutorialWeek1MailPending', false)

			// fill plant bed with the starter plants
			this.fillPlantBedWithStarterPlants('romaineSprout', 3)

			// turn off mail glow in MainMenu
			const mainMenu = this.scene.get('MainMenu')
			if (mainMenu && typeof mainMenu.updateMailIconNotification === 'function') {
				mainMenu.updateMailIconNotification()
			}

			// tick the first checkbox
			if (this.check_circle_1) {
				this.check_circle_1.fillColor = 0x428544
			}

			// list now shows empty inbox
			if (this.fishMailRow) {
				this.fishMailRow.setText('You have no mail.')
				this.fishMailRow.disableInteractive()
			}

			// popup background
			if (this.detailBg) {
				this.detailBg.destroy()
			}
			if (this.detailText) {
				this.detailText.destroy()
			}

			this.detailBg = this.add.rectangle(
				772,
				360,
				430,
				140,
				0xfff1c4
			)
			this.detailBg.setOrigin(0.5, 0.5)
			this.detailBg.setStrokeStyle(2, 0x3b3131)
			this.detailBg.setDepth(5)

			this.detailText = this.add.bitmapText(
				772,
				360,
				'pixelmix_16',
				'You received:\n5 larvae tilapia\n3 romaine lettuce sprout. \nThey are now in your system.',
				16
			)
			this.detailText.setOrigin(0.5, 0.5)
			this.detailText.setDepth(6)
		}




		// Finds all the mail text so that I can leave setuptut/week0 the same.
		findMailRowTexts() {
			const rows = []

			const visit = obj => {
				if (obj instanceof Phaser.GameObjects.BitmapText) {
					if (
						obj.text === 'Fish Delivery! (1)' ||
						obj.text === "You've got mail!"
					) {
						rows.push(obj)
					}
				}

				// recurse into containers
				if (obj.list && Array.isArray(obj.list)) {
					obj.list.forEach(visit)
				}
			}

			this.children.list.forEach(visit)
			return rows
		}

		fillPlantBedWithStarterPlants(plantId, amount) {
			let bedArr = this.registry.get('plantBed');

			if (!Array.isArray(bedArr) || bedArr.length === 0) {
				bedArr = [
					[null, null, null, null, null, null, null],
					[null, null, null, null, null, null, null],
					[null, null, null, null, null, null, null]
				];
			}

			let remaining = amount;

			for (let i = 0; i < 3 && remaining > 0; i++) {
				for (let j = 0; j < 7 && remaining > 0; j++) {
					if (bedArr[i][j] == null) {
						bedArr[i][j] = {
							id: plantId,
							stage: plantId === 'romaineSeedling' ? 'seedling' : 'sprout',
							weeksInStage: 0
						}
						remaining -= 1;
					}
				}
			}

			this.registry.set('plantBed', bedArr);
		}



		/* END-USER-CODE */
	}

/* END OF COMPILED CODE */

// You can write more code here
