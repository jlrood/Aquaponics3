
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
		background.fillColor = 13858434;
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
		const back_text = this.add.text(-5, 2, "", {});
		back_text.text = "Back";
		back_text.setStyle({ "color": "#000000ff" });
		back_container.add(back_text);

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
		const mail_text = this.add.text(72, 30, "", {});
		mail_text.setOrigin(0.5, 0.5);
		mail_text.text = "Mail";
		mail_text.setStyle({ "color": "#000000ff", "fontSize": "32px" });
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
		const maintenance_text = this.add.text(128, 31, "", {});
		maintenance_text.setOrigin(0.5, 0.5);
		maintenance_text.text = "Maintenance";
		maintenance_text.setStyle({ "color": "#000000ff", "fontSize": "32px" });
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
		const updates_text = this.add.text(88, 30, "", {});
		updates_text.setOrigin(0.5, 0.5);
		updates_text.text = "Updates";
		updates_text.setStyle({ "color": "#000000ff", "fontSize": "32px" });
		updates_container.add(updates_text);

		// large_mail_container
		const large_mail_container = this.add.container(0, 0);

		// large_mail_menu
		const large_mail_menu = this.add.rectangle(772, 379, 128, 128);
		large_mail_menu.scaleX = 4.806313073706209;
		large_mail_menu.scaleY = 2.902128220575247;
		large_mail_menu.isFilled = true;
		large_mail_menu.isStroked = true;
		large_mail_menu.strokeColor = 0;
		large_mail_menu.lineWidth = 0.5;
		large_mail_container.add(large_mail_menu);

		// mail_item_2
		const mail_item_2 = this.add.rectangle(773, 305, 128, 128);
		mail_item_2.scaleX = 4.575648467010909;
		mail_item_2.scaleY = 0.43131116787969503;
		mail_item_2.isFilled = true;
		mail_item_2.isStroked = true;
		mail_item_2.strokeColor = 0;
		mail_item_2.lineWidth = 0.5;
		large_mail_container.add(mail_item_2);

		// mail_item_1
		const mail_item_1 = this.add.rectangle(774, 236, 128, 128);
		mail_item_1.scaleX = 4.575648467010909;
		mail_item_1.scaleY = 0.43131116787969503;
		mail_item_1.isFilled = true;
		mail_item_1.isStroked = true;
		mail_item_1.strokeColor = 0;
		mail_item_1.lineWidth = 0.5;
		large_mail_container.add(mail_item_1);

		// mail_item_3
		const mail_item_3 = this.add.rectangle(774, 377, 128, 128);
		mail_item_3.scaleX = 4.575648467010909;
		mail_item_3.scaleY = 0.43131116787969503;
		mail_item_3.isFilled = true;
		mail_item_3.isStroked = true;
		mail_item_3.strokeColor = 0;
		mail_item_3.lineWidth = 0.5;
		large_mail_container.add(mail_item_3);

		// mail_item_5
		const mail_item_5 = this.add.rectangle(774, 518, 128, 128);
		mail_item_5.scaleX = 4.575648467010909;
		mail_item_5.scaleY = 0.43131116787969503;
		mail_item_5.isFilled = true;
		mail_item_5.isStroked = true;
		mail_item_5.strokeColor = 0;
		mail_item_5.lineWidth = 0.5;
		large_mail_container.add(mail_item_5);

		// mail_item_4
		const mail_item_4 = this.add.rectangle(774, 447, 128, 128);
		mail_item_4.scaleX = 4.575648467010909;
		mail_item_4.scaleY = 0.43131116787969503;
		mail_item_4.isFilled = true;
		mail_item_4.isStroked = true;
		mail_item_4.strokeColor = 0;
		mail_item_4.lineWidth = 0.5;
		large_mail_container.add(mail_item_4);

		// mail_text_1
		const mail_text_1 = this.add.text(528, 221, "", {});
		mail_text_1.text = "You've got mail!";
		mail_text_1.setStyle({ "color": "#000000ff", "fontSize": "32px" });
		large_mail_container.add(mail_text_1);

		// mail_text_2
		const mail_text_2 = this.add.text(529, 289, "", {});
		mail_text_2.text = "You've got mail!";
		mail_text_2.setStyle({ "color": "#000000ff", "fontSize": "32px" });
		large_mail_container.add(mail_text_2);

		// mail_text_3
		const mail_text_3 = this.add.text(529, 362, "", {});
		mail_text_3.text = "You've got mail!";
		mail_text_3.setStyle({ "color": "#000000ff", "fontSize": "32px" });
		large_mail_container.add(mail_text_3);

		// mail_text_4
		const mail_text_4 = this.add.text(528, 433, "", {});
		mail_text_4.text = "You've got mail!";
		mail_text_4.setStyle({ "color": "#000000ff", "fontSize": "32px" });
		large_mail_container.add(mail_text_4);

		// mail_text_5
		const mail_text_5 = this.add.text(528, 502, "", {});
		mail_text_5.text = "You've got mail!";
		mail_text_5.setStyle({ "color": "#000000ff", "fontSize": "32px" });
		large_mail_container.add(mail_text_5);

		// icon_1
		const icon_1 = this.add.ellipse(506, 236, 128, 128);
		icon_1.scaleX = 0.19049010132085792;
		icon_1.scaleY = 0.20133064841509496;
		icon_1.isFilled = true;
		icon_1.fillColor = 8500087;
		icon_1.isStroked = true;
		icon_1.strokeColor = 0;
		large_mail_container.add(icon_1);

		// icon_2
		const icon_2 = this.add.ellipse(506, 305, 128, 128);
		icon_2.scaleX = 0.19049010132085792;
		icon_2.scaleY = 0.20133064841509496;
		icon_2.isFilled = true;
		icon_2.fillColor = 8500087;
		icon_2.isStroked = true;
		icon_2.strokeColor = 0;
		large_mail_container.add(icon_2);

		// icon_3
		const icon_3 = this.add.ellipse(506, 377, 128, 128);
		icon_3.scaleX = 0.19049010132085792;
		icon_3.scaleY = 0.20133064841509496;
		icon_3.isFilled = true;
		icon_3.fillColor = 8500087;
		icon_3.isStroked = true;
		icon_3.strokeColor = 0;
		large_mail_container.add(icon_3);

		// icon_4
		const icon_4 = this.add.ellipse(506, 449, 128, 128);
		icon_4.scaleX = 0.19049010132085792;
		icon_4.scaleY = 0.20133064841509496;
		icon_4.isFilled = true;
		icon_4.fillColor = 8500087;
		icon_4.isStroked = true;
		icon_4.strokeColor = 0;
		large_mail_container.add(icon_4);

		// icon_5
		const icon_5 = this.add.ellipse(506, 518, 128, 128);
		icon_5.scaleX = 0.19049010132085792;
		icon_5.scaleY = 0.20133064841509496;
		icon_5.isFilled = true;
		icon_5.fillColor = 8500087;
		icon_5.isStroked = true;
		icon_5.strokeColor = 0;
		large_mail_container.add(icon_5);

		this.back_button = back_button;
		this.mail_button = mail_button;
		this.maintenance_button = maintenance_button;
		this.updates_button = updates_button;

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
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
