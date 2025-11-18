
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SetupTut extends Phaser.Scene {

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
		page1.visible = false;

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

		// page10
		const page10 = this.add.container(628, 591);
		page10.visible = false;

		// text_box_empty_9
		const text_box_empty_9 = this.add.image(286, 0, "text_box_empty");
		page10.add(text_box_empty_9);

		// bitmaptext_9
		const bitmaptext_9 = this.add.bitmapText(286, 0, "pixelmix_16", "Completing other tasks are recommended, \nbecause every uncompleted mission might\n have consequences for you later on...");
		bitmaptext_9.setOrigin(0.5, 0.5);
		bitmaptext_9.text = "Completing other tasks are recommended, \nbecause every uncompleted mission might\n have consequences for you later on...";
		bitmaptext_9.fontSize = 16;
		bitmaptext_9.align = 1;
		page10.add(bitmaptext_9);

		// page11
		const page11 = this.add.container(628, 591);
		page11.visible = false;

		// rectangle
		const rectangle = this.add.rectangle(12, -231, 1280, 720);
		rectangle.isFilled = true;
		rectangle.fillColor = 0;
		rectangle.fillAlpha = 0.3;
		page11.add(rectangle);

		// text_box_empty_10
		const text_box_empty_10 = this.add.image(0, 0, "text_box_empty");
		page11.add(text_box_empty_10);

		// bitmaptext_10
		const bitmaptext_10 = this.add.bitmapText(0, 0, "pixelmix_16", "Now let's check out the shop!");
		bitmaptext_10.setOrigin(0.5, 0.5);
		bitmaptext_10.text = "Now let's check out the shop!";
		bitmaptext_10.fontSize = 16;
		bitmaptext_10.align = 1;
		page11.add(bitmaptext_10);

		// shop_icon
		const shop_icon = this.add.image(-563, -281.01629638671875, "shop icon");
		shop_icon.setInteractive(new Phaser.Geom.Rectangle(0, 0, 64, 64), Phaser.Geom.Rectangle.Contains);
		shop_icon.scaleX = 2;
		shop_icon.scaleY = 2;
		page11.add(shop_icon);

		// glowFx_1
		shop_icon.postFX.addGlow(16777215, 4, 0, false, 0.1, 10);

		// page12
		const page12 = this.add.container(628, 591);
		page12.visible = false;

		// text_box_empty_11
		const text_box_empty_11 = this.add.image(0, 0, "text_box_empty");
		page12.add(text_box_empty_11);

		// bitmaptext_11
		const bitmaptext_11 = this.add.bitmapText(0, 0, "pixelmix_16", "In the shop, you can purchase the fish,\n plants, and equipment upgrades you need \nto keep your system running. ");
		bitmaptext_11.setOrigin(0.5, 0.5);
		bitmaptext_11.text = "In the shop, you can purchase the fish,\n plants, and equipment upgrades you need \nto keep your system running. ";
		bitmaptext_11.fontSize = 16;
		bitmaptext_11.align = 1;
		page12.add(bitmaptext_11);

		// page13
		const page13 = this.add.container(628, 591);
		page13.visible = false;

		// text_box_empty_12
		const text_box_empty_12 = this.add.image(0, 0, "text_box_empty");
		page13.add(text_box_empty_12);

		// bitmaptext_12
		const bitmaptext_12 = this.add.bitmapText(0, 0, "pixelmix_16", "Certain types of fish work with certain types of plants -\n make sure you know which go together before buying!");
		bitmaptext_12.setOrigin(0.5, 0.5);
		bitmaptext_12.text = "Certain types of fish work with certain types of plants -\n make sure you know which go together before buying!";
		bitmaptext_12.fontSize = 16;
		bitmaptext_12.align = 1;
		page13.add(bitmaptext_12);

		// page14
		const page14 = this.add.container(628, 591);
		page14.visible = false;

		// text_box_empty_13
		const text_box_empty_13 = this.add.image(0, 0, "text_box_empty");
		page14.add(text_box_empty_13);

		// bitmaptext_13
		const bitmaptext_13 = this.add.bitmapText(0, 0, "pixelmix_16", "You can see a representation of your current inventory\n to the right so you can see what you need to buy,\n and your total currency is held on the\n bottom left of the screen.");
		bitmaptext_13.setOrigin(0.5, 0.5);
		bitmaptext_13.text = "You can see a representation of your current inventory\n to the right so you can see what you need to buy,\n and your total currency is held on the\n bottom left of the screen.";
		bitmaptext_13.fontSize = 16;
		bitmaptext_13.align = 1;
		page14.add(bitmaptext_13);

		// page15
		const page15 = this.add.container(628, 591);
		page15.visible = false;

		// rectangle_2
		const rectangle_2 = this.add.rectangle(12, -231, 1280, 720);
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 0;
		rectangle_2.fillAlpha = 0.3;
		page15.add(rectangle_2);

		// text_box_empty_14
		const text_box_empty_14 = this.add.image(0, 0, "text_box_empty");
		page15.add(text_box_empty_14);

		// bitmaptext_14
		const bitmaptext_14 = this.add.bitmapText(0, 0, "pixelmix_16", "Try it now - Select the Tilapia fingerling icon to\n buy it and add it to your tank.");
		bitmaptext_14.setOrigin(0.5, 0.5);
		bitmaptext_14.text = "Try it now - Select the Tilapia fingerling icon to\n buy it and add it to your tank.";
		bitmaptext_14.fontSize = 16;
		bitmaptext_14.align = 1;
		page15.add(bitmaptext_14);

		// fingerling_box
		const fingerling_box = this.add.rectangle(-428, -351, 120, 120);
		fingerling_box.setInteractive(new Phaser.Geom.Rectangle(0, 0, 120, 120), Phaser.Geom.Rectangle.Contains);
		fingerling_box.setOrigin(0, 0);
		fingerling_box.isFilled = true;
		fingerling_box.isStroked = true;
		fingerling_box.strokeColor = 0;
		page15.add(fingerling_box);

		// glowFx_2
		fingerling_box.postFX.addGlow(16777215, 4, 0, false, 0.1, 10);

		// til_fin
		const til_fin = this.add.image(-342, -305, "fingerling", 0);
		til_fin.scaleX = 1.9;
		til_fin.scaleY = 1.9;
		page15.add(til_fin);

		// rectangle_3
		const rectangle_3 = this.add.rectangle(-368, -248, 116, 30);
		rectangle_3.isFilled = true;
		rectangle_3.fillColor = 10246716;
		rectangle_3.isStroked = true;
		rectangle_3.strokeColor = 0;
		page15.add(rectangle_3);

		// fingerling_price
		const fingerling_price = this.add.bitmapText(-417, -248, "pixelmix_16", "$ 0.00");
		fingerling_price.setOrigin(0, 0.5);
		fingerling_price.text = "$ 0.00";
		fingerling_price.fontSize = 16;
		page15.add(fingerling_price);

		// page16
		const page16 = this.add.container(628, 591);
		page16.visible = false;

		// text_box_empty_15
		const text_box_empty_15 = this.add.image(0, 0, "text_box_empty");
		page16.add(text_box_empty_15);

		// bitmaptext_15
		const bitmaptext_15 = this.add.bitmapText(0, 0, "pixelmix_16", "Perfect! Your fingerlings will arrive\n by mail in the coming week.");
		bitmaptext_15.setOrigin(0.5, 0.5);
		bitmaptext_15.text = "Perfect! Your fingerlings will arrive\n by mail in the coming week.";
		bitmaptext_15.fontSize = 16;
		bitmaptext_15.align = 1;
		page16.add(bitmaptext_15);

		// page17
		const page17 = this.add.container(628, 591);
		page17.visible = false;

		// rectangle_4
		const rectangle_4 = this.add.rectangle(12, -231, 1280, 720);
		rectangle_4.isFilled = true;
		rectangle_4.fillColor = 0;
		rectangle_4.fillAlpha = 0.3;
		page17.add(rectangle_4);

		// text_box_empty_16
		const text_box_empty_16 = this.add.image(0, 0, "text_box_empty");
		page17.add(text_box_empty_16);

		// bitmaptext_16
		const bitmaptext_16 = this.add.bitmapText(0, 0, "pixelmix_16", "Now go ahead and select the Journal icon.");
		bitmaptext_16.setOrigin(0.5, 0.5);
		bitmaptext_16.text = "Now go ahead and select the Journal icon.";
		bitmaptext_16.fontSize = 16;
		bitmaptext_16.align = 1;
		page17.add(bitmaptext_16);

		// journal_icon
		const journal_icon = this.add.image(-563, -212.01629638671875, "journal icon");
		journal_icon.setInteractive(new Phaser.Geom.Rectangle(0, 0, 64, 64), Phaser.Geom.Rectangle.Contains);
		journal_icon.scaleX = 2;
		journal_icon.scaleY = 2;
		page17.add(journal_icon);

		// glowFx_3
		journal_icon.postFX.addGlow(16777215, 4, 0, false, 0.1, 10);

		// page18
		const page18 = this.add.container(628, 591);
		page18.visible = false;

		// text_box_empty_17
		const text_box_empty_17 = this.add.image(286, 0, "text_box_empty");
		page18.add(text_box_empty_17);

		// bitmaptext_17
		const bitmaptext_17 = this.add.bitmapText(286, 0, "pixelmix_16", "The journal holds vital system information\n about the chemical levels of your tanks,\n which will affect how well your fish and plants thrive. \nKeep a close eye on these readings!");
		bitmaptext_17.setOrigin(0.5, 0.5);
		bitmaptext_17.text = "The journal holds vital system information\n about the chemical levels of your tanks,\n which will affect how well your fish and plants thrive. \nKeep a close eye on these readings!";
		bitmaptext_17.fontSize = 16;
		bitmaptext_17.align = 1;
		page18.add(bitmaptext_17);

		// page19
		const page19 = this.add.container(628, 591);
		page19.visible = false;

		// rectangle_5
		const rectangle_5 = this.add.rectangle(12, -231, 1280, 720);
		rectangle_5.isFilled = true;
		rectangle_5.fillColor = 0;
		rectangle_5.fillAlpha = 0.3;
		page19.add(rectangle_5);

		// text_box_empty_18
		const text_box_empty_18 = this.add.image(0, 0, "text_box_empty");
		page19.add(text_box_empty_18);

		// bitmaptext_18
		const bitmaptext_18 = this.add.bitmapText(0, 0, "pixelmix_16", "Now select the mail icon!");
		bitmaptext_18.setOrigin(0.5, 0.5);
		bitmaptext_18.text = "Now select the mail icon!";
		bitmaptext_18.fontSize = 16;
		bitmaptext_18.align = 1;
		page19.add(bitmaptext_18);

		// mail_icon
		const mail_icon = this.add.image(-563, -143.01629638671875, "mail icon");
		mail_icon.setInteractive(new Phaser.Geom.Rectangle(0, 0, 64, 64), Phaser.Geom.Rectangle.Contains);
		mail_icon.scaleX = 2;
		mail_icon.scaleY = 2;
		page19.add(mail_icon);

		// glowFx_4
		mail_icon.postFX.addGlow(16777215, 4, 0, false, 0.1, 10);

		// page20
		const page20 = this.add.container(628, 591);
		page20.visible = false;

		// text_box_empty_19
		const text_box_empty_19 = this.add.image(0, 0, "text_box_empty");
		page20.add(text_box_empty_19);

		// bitmaptext_19
		const bitmaptext_19 = this.add.bitmapText(0, 0, "pixelmix_16", "In the Mail tab, you can receive gifts of fish,\n plants, and cash, as well as receive important\n messages for a variety of other purposes. ");
		bitmaptext_19.setOrigin(0.5, 0.5);
		bitmaptext_19.text = "In the Mail tab, you can receive gifts of fish,\n plants, and cash, as well as receive important\n messages for a variety of other purposes. ";
		bitmaptext_19.fontSize = 16;
		bitmaptext_19.align = 1;
		page20.add(bitmaptext_19);

		// page21
		const page21 = this.add.container(628, 591);
		page21.visible = false;

		// text_box_empty_20
		const text_box_empty_20 = this.add.image(0, 0, "text_box_empty");
		page21.add(text_box_empty_20);

		// bitmaptext_20
		const bitmaptext_20 = this.add.bitmapText(0, 0, "pixelmix_16", "Messages remain in your Mail tab until you click\n the checkmark to mark them as read and move them\n to the bottom of the queue\n (don’t worry, they aren’t fully deleted!)");
		bitmaptext_20.setOrigin(0.5, 0.5);
		bitmaptext_20.text = "Messages remain in your Mail tab until you click\n the checkmark to mark them as read and move them\n to the bottom of the queue\n (don’t worry, they aren’t fully deleted!)";
		bitmaptext_20.fontSize = 16;
		bitmaptext_20.align = 1;
		page21.add(bitmaptext_20);

		// page22
		const page22 = this.add.container(628, 591);
		page22.visible = false;

		// rectangle_6
		const rectangle_6 = this.add.rectangle(12, -231, 1280, 720);
		rectangle_6.isFilled = true;
		rectangle_6.fillColor = 0;
		rectangle_6.fillAlpha = 0.3;
		page22.add(rectangle_6);

		// text_box_empty_21
		const text_box_empty_21 = this.add.image(0, 0, "text_box_empty");
		page22.add(text_box_empty_21);

		// bitmaptext_21
		const bitmaptext_21 = this.add.bitmapText(0, 0, "pixelmix_16", "Alright, last one, let's check out the systems page!");
		bitmaptext_21.setOrigin(0.5, 0.5);
		bitmaptext_21.text = "Alright, last one, let's check out the systems page!";
		bitmaptext_21.fontSize = 16;
		bitmaptext_21.align = 1;
		page22.add(bitmaptext_21);

		// system_icon
		const system_icon = this.add.image(-563, -74.01629638671875, "system icon");
		system_icon.setInteractive(new Phaser.Geom.Rectangle(0, 0, 64, 64), Phaser.Geom.Rectangle.Contains);
		system_icon.scaleX = 2;
		system_icon.scaleY = 2;
		page22.add(system_icon);

		// glowFx_5
		system_icon.postFX.addGlow(16777215, 4, 0, false, 0.1, 10);

		// page23
		const page23 = this.add.container(628, 591);

		// text_box_empty_22
		const text_box_empty_22 = this.add.image(0, 0, "text_box_empty");
		page23.add(text_box_empty_22);

		// bitmaptext_22
		const bitmaptext_22 = this.add.bitmapText(0, 0, "pixelmix_16", "The System tab offers more useful information\n about your system.");
		bitmaptext_22.setOrigin(0.5, 0.5);
		bitmaptext_22.text = "The System tab offers more useful information\n about your system.";
		bitmaptext_22.fontSize = 16;
		bitmaptext_22.align = 1;
		page23.add(bitmaptext_22);

		// page24
		const page24 = this.add.container(628, 591);

		// text_box_empty_23
		const text_box_empty_23 = this.add.image(0, 0, "text_box_empty");
		page24.add(text_box_empty_23);

		// bitmaptext_23
		const bitmaptext_23 = this.add.bitmapText(0, 0, "pixelmix_16", "For example, here you can see a graph of\npower and water consumption...");
		bitmaptext_23.setOrigin(0.5, 0.5);
		bitmaptext_23.text = "For example, here you can see a graph of\npower and water consumption...";
		bitmaptext_23.fontSize = 16;
		bitmaptext_23.align = 1;
		page24.add(bitmaptext_23);

		// page25
		const page25 = this.add.container(628, 591);

		// text_box_empty_24
		const text_box_empty_24 = this.add.image(0, 0, "text_box_empty");
		page25.add(text_box_empty_24);

		// bitmaptext_24
		const bitmaptext_24 = this.add.bitmapText(0, 0, "pixelmix_16", "...and on the right, projected fish and plant\n yield over day, month, and year time scale.");
		bitmaptext_24.setOrigin(0.5, 0.5);
		bitmaptext_24.text = "...and on the right, projected fish and plant\n yield over day, month, and year time scale.";
		bitmaptext_24.fontSize = 16;
		bitmaptext_24.align = 1;
		page25.add(bitmaptext_24);

		// page26
		const page26 = this.add.container(628, 591);

		// text_box_empty_25
		const text_box_empty_25 = this.add.image(0, 0, "text_box_empty");
		page26.add(text_box_empty_25);

		// bitmaptext_25
		const bitmaptext_25 = this.add.bitmapText(0, 0, "pixelmix_16", "The other buttons offer useful out of game features.\n including creating a profile,\n asking for help on Aquaponics topics,\n and accessing the settings of the game.");
		bitmaptext_25.setOrigin(0.5, 0.5);
		bitmaptext_25.text = "The other buttons offer useful out of game features.\n including creating a profile,\n asking for help on Aquaponics topics,\n and accessing the settings of the game.";
		bitmaptext_25.fontSize = 16;
		bitmaptext_25.align = 1;
		page26.add(bitmaptext_25);

		// page27
		const page27 = this.add.container(628, 591);

		// rectangle_7
		const rectangle_7 = this.add.rectangle(12, -231, 1280, 720);
		rectangle_7.isFilled = true;
		rectangle_7.fillColor = 0;
		rectangle_7.fillAlpha = 0.3;
		page27.add(rectangle_7);

		// text_box_empty_26
		const text_box_empty_26 = this.add.image(0, 0, "text_box_empty");
		page27.add(text_box_empty_26);

		// bitmaptext_26
		const bitmaptext_26 = this.add.bitmapText(0, 0, "pixelmix_16", "When you’re ready to begin, select the Next Week icon\n to move week by week and face new challenges.");
		bitmaptext_26.setOrigin(0.5, 0.5);
		bitmaptext_26.text = "When you’re ready to begin, select the Next Week icon\n to move week by week and face new challenges.";
		bitmaptext_26.fontSize = 16;
		bitmaptext_26.align = 1;
		page27.add(bitmaptext_26);

		// advance
		const advance = this.add.image(564, 53, "advance");
		advance.name = "advance";
		advance.setInteractive(new Phaser.Geom.Rectangle(0, 0, 32, 32), Phaser.Geom.Rectangle.Contains);
		advance.scaleX = 4;
		advance.scaleY = 4;
		page27.add(advance);

		// glowFx_6
		advance.preFX.addGlow(16777215, 4, 0, false);

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
		this.page10 = page10;
		this.shop_icon = shop_icon;
		this.page11 = page11;
		this.page12 = page12;
		this.page13 = page13;
		this.page14 = page14;
		this.fingerling_box = fingerling_box;
		this.til_fin = til_fin;
		this.rectangle_3 = rectangle_3;
		this.fingerling_price = fingerling_price;
		this.page15 = page15;
		this.page16 = page16;
		this.journal_icon = journal_icon;
		this.page17 = page17;
		this.page18 = page18;
		this.mail_icon = mail_icon;
		this.page19 = page19;
		this.page20 = page20;
		this.page21 = page21;
		this.system_icon = system_icon;
		this.page22 = page22;
		this.page23 = page23;
		this.page24 = page24;
		this.page25 = page25;
		this.page26 = page26;
		this.advance = advance;
		this.page27 = page27;

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
	/** @type {Phaser.GameObjects.Container} */
	page10;
	/** @type {Phaser.GameObjects.Image} */
	shop_icon;
	/** @type {Phaser.GameObjects.Container} */
	page11;
	/** @type {Phaser.GameObjects.Container} */
	page12;
	/** @type {Phaser.GameObjects.Container} */
	page13;
	/** @type {Phaser.GameObjects.Container} */
	page14;
	/** @type {Phaser.GameObjects.Rectangle} */
	fingerling_box;
	/** @type {Phaser.GameObjects.Image} */
	til_fin;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_3;
	/** @type {Phaser.GameObjects.BitmapText} */
	fingerling_price;
	/** @type {Phaser.GameObjects.Container} */
	page15;
	/** @type {Phaser.GameObjects.Container} */
	page16;
	/** @type {Phaser.GameObjects.Image} */
	journal_icon;
	/** @type {Phaser.GameObjects.Container} */
	page17;
	/** @type {Phaser.GameObjects.Container} */
	page18;
	/** @type {Phaser.GameObjects.Image} */
	mail_icon;
	/** @type {Phaser.GameObjects.Container} */
	page19;
	/** @type {Phaser.GameObjects.Container} */
	page20;
	/** @type {Phaser.GameObjects.Container} */
	page21;
	/** @type {Phaser.GameObjects.Image} */
	system_icon;
	/** @type {Phaser.GameObjects.Container} */
	page22;
	/** @type {Phaser.GameObjects.Container} */
	page23;
	/** @type {Phaser.GameObjects.Container} */
	page24;
	/** @type {Phaser.GameObjects.Container} */
	page25;
	/** @type {Phaser.GameObjects.Container} */
	page26;
	/** @type {Phaser.GameObjects.Image} */
	advance;
	/** @type {Phaser.GameObjects.Container} */
	page27;

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

		this.fingerling_box.on('pointerdown', (pointer) => {
			this.advance_tut(false);
		});

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

		this.advance.on('pointerdown', (pointer) => {
			this.advance_tut(false);
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
			// Only hide current page if it's not marked as persistent
			if (!this.persistentPages.includes(this.pg_counter)) {
				this.tutPages[this.pg_counter - 1].setVisible(false);
			}

			// If this page comes after a set of persistent, clear them
			if (this.clearPersistent.includes(this.pg_counter)) {
				this.tutPages[this.pg_counter - 1].setVisible(false);
				this.tutPages[this.pg_counter - 2].setVisible(false);
				this.tutPages[this.pg_counter - 3].setVisible(false);
			}

			this.pg_counter++;
			this.tutPages[this.pg_counter - 1].setVisible(true);
		} else {
			// Hide last page if not persistent
			if (!this.persistentPages.includes(this.pg_counter)) {
				this.tutPages[this.pg_counter - 1].setVisible(false);
			}

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
