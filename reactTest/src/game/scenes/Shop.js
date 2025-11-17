
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

		// all_background
		const all_background = this.add.rectangle(0, 0, 1280, 720);
		all_background.setOrigin(0, 0);
		all_background.isFilled = true;
		all_background.fillColor = 12113847;

		// header2_background
		const header2_background = this.add.image(999, 73, "text_box_empty");
		header2_background.scaleX = 0.5;
		header2_background.scaleY = 0.5;

		// header1_background
		const header1_background = this.add.image(386, 71, "text_box_empty");
		header1_background.scaleX = 0.5;
		header1_background.scaleY = 0.5;

		// Title
		const title = this.add.bitmapText(340, 55, "pixelmix_32", "Shop");
		title.text = "Shop";
		title.fontSize = 32;

		// content1_box
		const content1_box = this.add.rectangle(40, 220, 698, 466);
		content1_box.setOrigin(0, 0);
		content1_box.isFilled = true;
		content1_box.fillColor = 16114844;
		content1_box.isStroked = true;
		content1_box.strokeColor = 0;

		// Scroll
		const scroll = this.add.rectangle(670, 240, 40, 420);
		scroll.setOrigin(0, 0);
		scroll.isFilled = true;
		scroll.isStroked = true;
		scroll.strokeColor = 0;

		// option_container
		const option_container = this.add.container(60, 240);

		// option_box_1
		const option_box_1 = this.add.rectangle(0, 0, 120, 120);
		option_box_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 120, 120), Phaser.Geom.Rectangle.Contains);
		option_box_1.setOrigin(0, 0);
		option_box_1.isFilled = true;
		option_box_1.isStroked = true;
		option_box_1.strokeColor = 0;
		option_container.add(option_box_1);

		// option_box_2
		const option_box_2 = this.add.rectangle(140, 0, 120, 120);
		option_box_2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 120, 120), Phaser.Geom.Rectangle.Contains);
		option_box_2.setOrigin(0, 0);
		option_box_2.isFilled = true;
		option_box_2.isStroked = true;
		option_box_2.strokeColor = 0;
		option_container.add(option_box_2);

		// option_box_3
		const option_box_3 = this.add.rectangle(280, 0, 120, 120);
		option_box_3.setInteractive(new Phaser.Geom.Rectangle(0, 0, 120, 120), Phaser.Geom.Rectangle.Contains);
		option_box_3.setOrigin(0, 0);
		option_box_3.isFilled = true;
		option_box_3.isStroked = true;
		option_box_3.strokeColor = 0;
		option_container.add(option_box_3);

		// option_box_4
		const option_box_4 = this.add.rectangle(420, 0, 120, 120);
		option_box_4.setInteractive(new Phaser.Geom.Rectangle(0, 0, 120, 120), Phaser.Geom.Rectangle.Contains);
		option_box_4.setOrigin(0, 0);
		option_box_4.isFilled = true;
		option_box_4.isStroked = true;
		option_box_4.strokeColor = 0;
		option_container.add(option_box_4);

		// option_box_5
		const option_box_5 = this.add.rectangle(0, 140, 120, 120);
		option_box_5.setInteractive(new Phaser.Geom.Rectangle(0, 0, 120, 120), Phaser.Geom.Rectangle.Contains);
		option_box_5.setOrigin(0, 0);
		option_box_5.isFilled = true;
		option_box_5.isStroked = true;
		option_box_5.strokeColor = 0;
		option_container.add(option_box_5);

		// option_box_6
		const option_box_6 = this.add.rectangle(140, 140, 120, 120);
		option_box_6.setInteractive(new Phaser.Geom.Rectangle(0, 0, 120, 120), Phaser.Geom.Rectangle.Contains);
		option_box_6.setOrigin(0, 0);
		option_box_6.isFilled = true;
		option_box_6.isStroked = true;
		option_box_6.strokeColor = 0;
		option_container.add(option_box_6);

		// option_box_7
		const option_box_7 = this.add.rectangle(280, 140, 120, 120);
		option_box_7.setInteractive(new Phaser.Geom.Rectangle(0, 0, 120, 120), Phaser.Geom.Rectangle.Contains);
		option_box_7.setOrigin(0, 0);
		option_box_7.isFilled = true;
		option_box_7.isStroked = true;
		option_box_7.strokeColor = 0;
		option_container.add(option_box_7);

		// option_box_8
		const option_box_8 = this.add.rectangle(420, 140, 120, 120);
		option_box_8.setInteractive(new Phaser.Geom.Rectangle(0, 0, 120, 120), Phaser.Geom.Rectangle.Contains);
		option_box_8.setOrigin(0, 0);
		option_box_8.isFilled = true;
		option_box_8.isStroked = true;
		option_box_8.strokeColor = 0;
		option_container.add(option_box_8);

		// option_box_9
		const option_box_9 = this.add.rectangle(0, 280, 120, 120);
		option_box_9.setInteractive(new Phaser.Geom.Rectangle(0, 0, 120, 120), Phaser.Geom.Rectangle.Contains);
		option_box_9.setOrigin(0, 0);
		option_box_9.isFilled = true;
		option_box_9.isStroked = true;
		option_box_9.strokeColor = 0;
		option_container.add(option_box_9);

		// option_box_10
		const option_box_10 = this.add.rectangle(140, 280, 120, 120);
		option_box_10.setInteractive(new Phaser.Geom.Rectangle(0, 0, 120, 120), Phaser.Geom.Rectangle.Contains);
		option_box_10.setOrigin(0, 0);
		option_box_10.isFilled = true;
		option_box_10.isStroked = true;
		option_box_10.strokeColor = 0;
		option_container.add(option_box_10);

		// option_box_11
		const option_box_11 = this.add.rectangle(280, 280, 120, 120);
		option_box_11.setInteractive(new Phaser.Geom.Rectangle(0, 0, 120, 120), Phaser.Geom.Rectangle.Contains);
		option_box_11.setOrigin(0, 0);
		option_box_11.isFilled = true;
		option_box_11.isStroked = true;
		option_box_11.strokeColor = 0;
		option_container.add(option_box_11);

		// option_box_12
		const option_box_12 = this.add.rectangle(420, 280, 120, 120);
		option_box_12.setInteractive(new Phaser.Geom.Rectangle(0, 0, 120, 120), Phaser.Geom.Rectangle.Contains);
		option_box_12.setOrigin(0, 0);
		option_box_12.isFilled = true;
		option_box_12.isStroked = true;
		option_box_12.strokeColor = 0;
		option_container.add(option_box_12);

		// tab_container
		const tab_container = this.add.container(40, 120);

		// Fish_Box
		const fish_Box = this.add.rectangle(0, 0, 167, 74);
		fish_Box.setInteractive(new Phaser.Geom.Rectangle(0, 0, 167, 74), Phaser.Geom.Rectangle.Contains);
		fish_Box.setOrigin(0, 0);
		fish_Box.isFilled = true;
		fish_Box.fillColor = 428544;
		fish_Box.isStroked = true;
		fish_Box.strokeColor = 0;
		tab_container.add(fish_Box);

		// Equip_Box
		const equip_Box = this.add.rectangle(531, 0, 167, 74);
		equip_Box.setInteractive(new Phaser.Geom.Rectangle(0, 0, 167, 74), Phaser.Geom.Rectangle.Contains);
		equip_Box.setOrigin(0, 0);
		equip_Box.isFilled = true;
		equip_Box.isStroked = true;
		equip_Box.strokeColor = 0;
		tab_container.add(equip_Box);

		// System_Box
		const system_Box = this.add.rectangle(354, 0, 167, 74);
		system_Box.setInteractive(new Phaser.Geom.Rectangle(0, 0, 167, 74), Phaser.Geom.Rectangle.Contains);
		system_Box.setOrigin(0, 0);
		system_Box.isFilled = true;
		system_Box.isStroked = true;
		system_Box.strokeColor = 0;
		tab_container.add(system_Box);

		// Plant_Box
		const plant_Box = this.add.rectangle(177, 0, 167, 74);
		plant_Box.setInteractive(new Phaser.Geom.Rectangle(0, 0, 167, 74), Phaser.Geom.Rectangle.Contains);
		plant_Box.setOrigin(0, 0);
		plant_Box.isFilled = true;
		plant_Box.isStroked = true;
		plant_Box.strokeColor = 0;
		tab_container.add(plant_Box);

		// Fish_Text
		const fish_Text = this.add.bitmapText(84, 20, "pixelmix_32", "Fish\n");
		fish_Text.setOrigin(0.5, 0);
		fish_Text.text = "Fish\n";
		fish_Text.fontSize = 32;
		tab_container.add(fish_Text);

		// Plants_Text
		const plants_Text = this.add.bitmapText(263, 20, "pixelmix_32", "Plants");
		plants_Text.setOrigin(0.5, 0);
		plants_Text.text = "Plants";
		plants_Text.fontSize = 30;
		tab_container.add(plants_Text);

		// Systems_Text
		const systems_Text = this.add.bitmapText(360, 20, "pixelmix_32", "Systems");
		systems_Text.text = "Systems";
		systems_Text.fontSize = 30;
		tab_container.add(systems_Text);

		// Equips_Text
		const equips_Text = this.add.bitmapText(555, 20, "pixelmix_32", "Equips");
		equips_Text.text = "Equips";
		equips_Text.fontSize = 30;
		tab_container.add(equips_Text);

		// back_container
		const back_container = this.add.container(31, 41);

		// Back_Button
		const back_Button = this.add.ellipse(19, 9, 128, 128);
		back_Button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		back_Button.scaleX = 0.5;
		back_Button.scaleY = 0.5;
		back_Button.isFilled = true;
		back_Button.isStroked = true;
		back_Button.strokeColor = 0;
		back_container.add(back_Button);

		// BackText
		const backText = this.add.bitmapText(-2, -2, "pixelmix_8", "Back");
		backText.text = "Back";
		backText.fontSize = 15;
		back_container.add(backText);

		// back_button
		const back_button = this.add.image(19, 9, "back button");
		back_button.scaleX = 2;
		back_button.scaleY = 2;
		back_container.add(back_button);

		// system_container
		const system_container = this.add.container(760, 45);

		// content2_box
		const content2_box = this.add.rectangle(0, 75, 484, 565);
		content2_box.setOrigin(0, 0);
		content2_box.isFilled = true;
		content2_box.fillColor = 16114844;
		content2_box.isStroked = true;
		content2_box.strokeColor = 0;
		system_container.add(content2_box);

		// Header2_Text
		const header2_Text = this.add.bitmapText(241, 10, "pixelmix_32", "Sale at Market");
		header2_Text.setOrigin(0.5, 0);
		header2_Text.text = "Sale at Market";
		header2_Text.fontSize = 32;
		system_container.add(header2_Text);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(120, 343, 116, 30);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 10246716;
		rectangle_1.isStroked = true;
		rectangle_1.strokeColor = 0;

		// rectangle_2
		const rectangle_2 = this.add.rectangle(260, 343, 116, 30);
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 10246716;
		rectangle_2.isStroked = true;
		rectangle_2.strokeColor = 0;

		// rectangle_3
		const rectangle_3 = this.add.rectangle(400, 343, 116, 30);
		rectangle_3.isFilled = true;
		rectangle_3.fillColor = 10246716;
		rectangle_3.isStroked = true;
		rectangle_3.strokeColor = 0;

		// rectangle_4
		const rectangle_4 = this.add.rectangle(540, 343, 116, 30);
		rectangle_4.isFilled = true;
		rectangle_4.fillColor = 10246716;
		rectangle_4.isStroked = true;
		rectangle_4.strokeColor = 0;

		// rectangle_5
		const rectangle_5 = this.add.rectangle(120, 483, 116, 30);
		rectangle_5.isFilled = true;
		rectangle_5.fillColor = 10246716;
		rectangle_5.isStroked = true;
		rectangle_5.strokeColor = 0;

		// rectangle_6
		const rectangle_6 = this.add.rectangle(260, 483, 116, 30);
		rectangle_6.isFilled = true;
		rectangle_6.fillColor = 10246716;
		rectangle_6.isStroked = true;
		rectangle_6.strokeColor = 0;

		// rectangle_7
		const rectangle_7 = this.add.rectangle(400, 483, 116, 30);
		rectangle_7.isFilled = true;
		rectangle_7.fillColor = 10246716;
		rectangle_7.isStroked = true;
		rectangle_7.strokeColor = 0;

		// rectangle_8
		const rectangle_8 = this.add.rectangle(540, 483, 116, 30);
		rectangle_8.isFilled = true;
		rectangle_8.fillColor = 10246716;
		rectangle_8.isStroked = true;
		rectangle_8.strokeColor = 0;

		// rectangle_11
		const rectangle_11 = this.add.rectangle(400, 623, 116, 30);
		rectangle_11.isFilled = true;
		rectangle_11.fillColor = 10246716;
		rectangle_11.isStroked = true;
		rectangle_11.strokeColor = 0;

		// rectangle_12
		const rectangle_12 = this.add.rectangle(540, 623, 116, 30);
		rectangle_12.isFilled = true;
		rectangle_12.fillColor = 10246716;
		rectangle_12.isStroked = true;
		rectangle_12.strokeColor = 0;

		// rectangle_10
		const rectangle_10 = this.add.rectangle(260, 623, 116, 30);
		rectangle_10.isFilled = true;
		rectangle_10.fillColor = 10246716;
		rectangle_10.isStroked = true;
		rectangle_10.strokeColor = 0;

		// rectangle_9
		const rectangle_9 = this.add.rectangle(120, 623, 116, 30);
		rectangle_9.isFilled = true;
		rectangle_9.fillColor = 10246716;
		rectangle_9.isStroked = true;
		rectangle_9.strokeColor = 0;

		// option2_text
		const option2_text = this.add.bitmapText(260, 283, "pixelmix_16", "Tilapia\nFingerling");
		option2_text.setOrigin(0.5, 0.5);
		option2_text.text = "Tilapia\nFingerling";
		option2_text.fontSize = 16;
		option2_text.align = 1;

		// option1_text
		const option1_text = this.add.bitmapText(117, 286, "pixelmix_16", "Tilapia\nLarvae");
		option1_text.setOrigin(0.5, 0.5);
		option1_text.text = "Tilapia\nLarvae";
		option1_text.fontSize = 16;
		option1_text.align = 1;

		// option3_text
		const option3_text = this.add.bitmapText(401, 285, "pixelmix_16", "Tilapia\nJuvenille");
		option3_text.setOrigin(0.5, 0.5);
		option3_text.text = "Tilapia\nJuvenille";
		option3_text.fontSize = 16;
		option3_text.align = 1;

		// option4_text
		const option4_text = this.add.bitmapText(539, 282, "pixelmix_16", "Tilapia\nAdult");
		option4_text.setOrigin(0.5, 0.5);
		option4_text.text = "Tilapia\nAdult";
		option4_text.fontSize = 16;
		option4_text.align = 1;

		// option6_text
		const option6_text = this.add.bitmapText(260, 424, "pixelmix_16", "Barramundi\nFingerling");
		option6_text.setOrigin(0.5, 0.5);
		option6_text.text = "Barramundi\nFingerling";
		option6_text.fontSize = 16;
		option6_text.align = 1;

		// option5_text
		const option5_text = this.add.bitmapText(120, 424, "pixelmix_16", "Barramundi\nLarvae");
		option5_text.setOrigin(0.5, 0.5);
		option5_text.text = "Barramundi\nLarvae";
		option5_text.fontSize = 16;
		option5_text.align = 1;

		// option7_text
		const option7_text = this.add.bitmapText(401, 421, "pixelmix_16", "Barramundi\nJuvenille");
		option7_text.setOrigin(0.5, 0.5);
		option7_text.text = "Barramundi\nJuvenille";
		option7_text.fontSize = 16;
		option7_text.align = 1;

		// option8_text
		const option8_text = this.add.bitmapText(540, 421, "pixelmix_16", "Barramundi\nAdult");
		option8_text.setOrigin(0.5, 0.5);
		option8_text.text = "Barramundi\nAdult";
		option8_text.fontSize = 16;
		option8_text.align = 1;

		// option9_text
		const option9_text = this.add.bitmapText(120, 560, "pixelmix_16", "");
		option9_text.setOrigin(0.5, 0.5);
		option9_text.fontSize = 16;
		option9_text.align = 1;

		// option10_text
		const option10_text = this.add.bitmapText(261, 560, "pixelmix_16", "");
		option10_text.setOrigin(0.5, 0.5);
		option10_text.fontSize = 16;
		option10_text.align = 1;

		// option11_text
		const option11_text = this.add.bitmapText(401, 560, "pixelmix_16", "");
		option11_text.setOrigin(0.5, 0.5);
		option11_text.fontSize = 16;
		option11_text.align = 1;

		// option12_text
		const option12_text = this.add.bitmapText(540, 560, "pixelmix_16", "");
		option12_text.setOrigin(0.5, 0.5);
		option12_text.fontSize = 16;
		option12_text.align = 1;

		// option1_price
		const option1_price = this.add.bitmapText(71, 343, "pixelmix_16", "$ 0.00");
		option1_price.setOrigin(0, 0.5);
		option1_price.text = "$ 0.00";
		option1_price.fontSize = 16;

		// option2_price
		const option2_price = this.add.bitmapText(211, 343, "pixelmix_16", "$ 0.00");
		option2_price.setOrigin(0, 0.5);
		option2_price.text = "$ 0.00";
		option2_price.fontSize = 16;

		// option3_price
		const option3_price = this.add.bitmapText(351, 343, "pixelmix_16", "$ 0.00");
		option3_price.setOrigin(0, 0.5);
		option3_price.text = "$ 0.00";
		option3_price.fontSize = 16;

		// option4_price
		const option4_price = this.add.bitmapText(491, 343, "pixelmix_16", "$ 0.00");
		option4_price.setOrigin(0, 0.5);
		option4_price.text = "$ 0.00";
		option4_price.fontSize = 16;

		// option5_price
		const option5_price = this.add.bitmapText(71, 483, "pixelmix_16", "$ 0.00");
		option5_price.setOrigin(0, 0.5);
		option5_price.text = "$ 0.00";
		option5_price.fontSize = 16;

		// option6_price
		const option6_price = this.add.bitmapText(211, 483, "pixelmix_16", "$ 0.00");
		option6_price.setOrigin(0, 0.5);
		option6_price.text = "$ 0.00";
		option6_price.fontSize = 16;

		// option7_price
		const option7_price = this.add.bitmapText(351, 483, "pixelmix_16", "$ 0.00");
		option7_price.setOrigin(0, 0.5);
		option7_price.text = "$ 0.00";
		option7_price.fontSize = 16;

		// option8_price
		const option8_price = this.add.bitmapText(491, 483, "pixelmix_16", "$ 0.00");
		option8_price.setOrigin(0, 0.5);
		option8_price.text = "$ 0.00";
		option8_price.fontSize = 16;

		// option9_price
		const option9_price = this.add.bitmapText(71, 623, "pixelmix_16", "$ 0.00");
		option9_price.setOrigin(0, 0.5);
		option9_price.text = "$ 0.00";
		option9_price.fontSize = 16;

		// option10_price
		const option10_price = this.add.bitmapText(211, 623, "pixelmix_16", "$ 0.00");
		option10_price.setOrigin(0, 0.5);
		option10_price.text = "$ 0.00";
		option10_price.fontSize = 16;

		// option11_price
		const option11_price = this.add.bitmapText(351, 623, "pixelmix_16", "$ 0.00");
		option11_price.setOrigin(0, 0.5);
		option11_price.text = "$ 0.00";
		option11_price.fontSize = 16;

		// option12_price
		const option12_price = this.add.bitmapText(491, 623, "pixelmix_16", "$ 0.00");
		option12_price.setOrigin(0, 0.5);
		option12_price.text = "$ 0.00";
		option12_price.fontSize = 16;

		// money_background
		const money_background = this.add.image(186, 676, "text_box_empty");
		money_background.scaleX = 0.5;
		money_background.scaleY = 0.5;

		// money_text
		const money_text = this.add.bitmapText(30, 675, "pixelmix_32", "$ ");
		money_text.setOrigin(0, 0.5);
		money_text.text = "$ ";
		money_text.fontSize = 32;

		// buy_page_button
		const buy_page_button = this.add.ellipse(0, 360, 256, 256);
		buy_page_button.setInteractive(new Phaser.Geom.Ellipse(128, 128, 256, 256), Phaser.Geom.Ellipse.Contains);
		buy_page_button.visible = false;
		buy_page_button.isFilled = true;
		buy_page_button.fillColor = 428544;
		buy_page_button.isStroked = true;
		buy_page_button.strokeColor = 0;

		// buy_page_icon
		const buy_page_icon = this.add.bitmapText(14, 360, "pixelmix_32", "%");
		buy_page_icon.setOrigin(0, 0.5);
		buy_page_icon.visible = false;
		buy_page_icon.text = "%";
		buy_page_icon.fontSize = 128;

		// systemImage
		const systemImage = this.add.image(1010, 427, "bg (1)");
		systemImage.scaleX = 0.25;
		systemImage.scaleY = 0.25;
		systemImage.visible = false;

		// sell_page_button
		const sell_page_button = this.add.ellipse(1280, 360, 256, 256);
		sell_page_button.setInteractive(new Phaser.Geom.Ellipse(128, 128, 256, 256), Phaser.Geom.Ellipse.Contains);
		sell_page_button.visible = false;
		sell_page_button.isFilled = true;
		sell_page_button.fillColor = 428544;
		sell_page_button.isStroked = true;
		sell_page_button.strokeColor = 0;

		// sell_page_icon
		const sell_page_icon = this.add.bitmapText(1179, 360, "pixelmix_32", "$");
		sell_page_icon.setOrigin(0, 0.5);
		sell_page_icon.visible = false;
		sell_page_icon.text = "$";
		sell_page_icon.fontSize = 128;

		// option1_lock
		const option1_lock = this.add.image(60, 240, "Lock");
		option1_lock.setInteractive(new Phaser.Geom.Rectangle(0, 0, 120, 120), Phaser.Geom.Rectangle.Contains);
		option1_lock.setOrigin(0, 0);
		option1_lock.visible = false;

		// option2_lock
		const option2_lock = this.add.image(200, 240, "Lock");
		option2_lock.setInteractive(new Phaser.Geom.Rectangle(0, 0, 120, 120), Phaser.Geom.Rectangle.Contains);
		option2_lock.setOrigin(0, 0);
		option2_lock.visible = false;

		// option3_lock
		const option3_lock = this.add.image(340, 240, "Lock");
		option3_lock.setInteractive(new Phaser.Geom.Rectangle(0, 0, 120, 120), Phaser.Geom.Rectangle.Contains);
		option3_lock.setOrigin(0, 0);
		option3_lock.visible = false;

		// option4_lock
		const option4_lock = this.add.image(480, 240, "Lock");
		option4_lock.setInteractive(new Phaser.Geom.Rectangle(0, 0, 120, 120), Phaser.Geom.Rectangle.Contains);
		option4_lock.setOrigin(0, 0);
		option4_lock.visible = false;

		// option5_lock
		const option5_lock = this.add.image(60, 380, "Lock");
		option5_lock.setInteractive(new Phaser.Geom.Rectangle(0, 0, 120, 120), Phaser.Geom.Rectangle.Contains);
		option5_lock.setOrigin(0, 0);
		option5_lock.visible = false;

		// option6_lock
		const option6_lock = this.add.image(200, 380, "Lock");
		option6_lock.setInteractive(new Phaser.Geom.Rectangle(0, 0, 120, 120), Phaser.Geom.Rectangle.Contains);
		option6_lock.setOrigin(0, 0);
		option6_lock.visible = false;

		// option7_lock
		const option7_lock = this.add.image(340, 380, "Lock");
		option7_lock.setInteractive(new Phaser.Geom.Rectangle(0, 0, 120, 120), Phaser.Geom.Rectangle.Contains);
		option7_lock.setOrigin(0, 0);
		option7_lock.visible = false;

		// option8_lock
		const option8_lock = this.add.image(480, 380, "Lock");
		option8_lock.setInteractive(new Phaser.Geom.Rectangle(0, 0, 120, 120), Phaser.Geom.Rectangle.Contains);
		option8_lock.setOrigin(0, 0);
		option8_lock.visible = false;

		// option9_lock
		const option9_lock = this.add.image(60, 520, "Lock");
		option9_lock.setInteractive(new Phaser.Geom.Rectangle(0, 0, 120, 120), Phaser.Geom.Rectangle.Contains);
		option9_lock.setOrigin(0, 0);
		option9_lock.visible = false;

		// option10_lock
		const option10_lock = this.add.image(200, 520, "Lock");
		option10_lock.setInteractive(new Phaser.Geom.Rectangle(0, 0, 120, 120), Phaser.Geom.Rectangle.Contains);
		option10_lock.setOrigin(0, 0);
		option10_lock.visible = false;

		// option11_lock
		const option11_lock = this.add.image(340, 520, "Lock");
		option11_lock.setInteractive(new Phaser.Geom.Rectangle(0, 0, 120, 120), Phaser.Geom.Rectangle.Contains);
		option11_lock.setOrigin(0, 0);
		option11_lock.visible = false;

		// option12_lock
		const option12_lock = this.add.image(480, 520, "Lock");
		option12_lock.setInteractive(new Phaser.Geom.Rectangle(0, 0, 120, 120), Phaser.Geom.Rectangle.Contains);
		option12_lock.setOrigin(0, 0);
		option12_lock.visible = false;

		// til_lrv
		const til_lrv = this.add.image(121, 298, "larvae", 0);
		til_lrv.scaleX = 1.9;
		til_lrv.scaleY = 1.9;

		// til_fin
		const til_fin = this.add.image(286, 286, "fingerling", 0);
		til_fin.scaleX = 1.9;
		til_fin.scaleY = 1.9;

		// til_juv
		const til_juv = this.add.image(418, 287, "juvenile", 0);
		til_juv.scaleX = 1.9;
		til_juv.scaleY = 1.9;

		// til_re
		const til_re = this.add.image(541, 283, "tilapia_new", 0);
		til_re.scaleX = 1.9;
		til_re.scaleY = 1.9;

		// ltt_h
		const ltt_h = this.add.image(263, 297, "lettuce");
		ltt_h.scaleX = 3;
		ltt_h.scaleY = 3;

		// ltt_spr
		const ltt_spr = this.add.image(125, 297, "sprout");
		ltt_spr.scaleX = 3;
		ltt_spr.scaleY = 3;

		this.scroll = scroll;
		this.option_box_1 = option_box_1;
		this.option_box_2 = option_box_2;
		this.option_box_3 = option_box_3;
		this.option_box_4 = option_box_4;
		this.option_box_5 = option_box_5;
		this.option_box_6 = option_box_6;
		this.option_box_7 = option_box_7;
		this.option_box_8 = option_box_8;
		this.option_box_9 = option_box_9;
		this.option_box_10 = option_box_10;
		this.option_box_11 = option_box_11;
		this.option_box_12 = option_box_12;
		this.fish_Box = fish_Box;
		this.equip_Box = equip_Box;
		this.system_Box = system_Box;
		this.plant_Box = plant_Box;
		this.back_Button = back_Button;
		this.header2_Text = header2_Text;
		this.rectangle_1 = rectangle_1;
		this.rectangle_2 = rectangle_2;
		this.rectangle_3 = rectangle_3;
		this.rectangle_4 = rectangle_4;
		this.rectangle_5 = rectangle_5;
		this.rectangle_6 = rectangle_6;
		this.rectangle_7 = rectangle_7;
		this.rectangle_8 = rectangle_8;
		this.rectangle_11 = rectangle_11;
		this.rectangle_12 = rectangle_12;
		this.rectangle_10 = rectangle_10;
		this.rectangle_9 = rectangle_9;
		this.option2_text = option2_text;
		this.option1_text = option1_text;
		this.option3_text = option3_text;
		this.option4_text = option4_text;
		this.option6_text = option6_text;
		this.option5_text = option5_text;
		this.option7_text = option7_text;
		this.option8_text = option8_text;
		this.option9_text = option9_text;
		this.option10_text = option10_text;
		this.option11_text = option11_text;
		this.option12_text = option12_text;
		this.option1_price = option1_price;
		this.option2_price = option2_price;
		this.option3_price = option3_price;
		this.option4_price = option4_price;
		this.option5_price = option5_price;
		this.option6_price = option6_price;
		this.option7_price = option7_price;
		this.option8_price = option8_price;
		this.option9_price = option9_price;
		this.option10_price = option10_price;
		this.option11_price = option11_price;
		this.option12_price = option12_price;
		this.money_text = money_text;
		this.buy_page_button = buy_page_button;
		this.buy_page_icon = buy_page_icon;
		this.systemImage = systemImage;
		this.sell_page_button = sell_page_button;
		this.sell_page_icon = sell_page_icon;
		this.option1_lock = option1_lock;
		this.option2_lock = option2_lock;
		this.option3_lock = option3_lock;
		this.option4_lock = option4_lock;
		this.option5_lock = option5_lock;
		this.option6_lock = option6_lock;
		this.option7_lock = option7_lock;
		this.option8_lock = option8_lock;
		this.option9_lock = option9_lock;
		this.option10_lock = option10_lock;
		this.option11_lock = option11_lock;
		this.option12_lock = option12_lock;
		this.til_lrv = til_lrv;
		this.til_fin = til_fin;
		this.til_juv = til_juv;
		this.til_re = til_re;
		this.ltt_h = ltt_h;
		this.ltt_spr = ltt_spr;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	scroll;
	/** @type {Phaser.GameObjects.Rectangle} */
	option_box_1;
	/** @type {Phaser.GameObjects.Rectangle} */
	option_box_2;
	/** @type {Phaser.GameObjects.Rectangle} */
	option_box_3;
	/** @type {Phaser.GameObjects.Rectangle} */
	option_box_4;
	/** @type {Phaser.GameObjects.Rectangle} */
	option_box_5;
	/** @type {Phaser.GameObjects.Rectangle} */
	option_box_6;
	/** @type {Phaser.GameObjects.Rectangle} */
	option_box_7;
	/** @type {Phaser.GameObjects.Rectangle} */
	option_box_8;
	/** @type {Phaser.GameObjects.Rectangle} */
	option_box_9;
	/** @type {Phaser.GameObjects.Rectangle} */
	option_box_10;
	/** @type {Phaser.GameObjects.Rectangle} */
	option_box_11;
	/** @type {Phaser.GameObjects.Rectangle} */
	option_box_12;
	/** @type {Phaser.GameObjects.Rectangle} */
	fish_Box;
	/** @type {Phaser.GameObjects.Rectangle} */
	equip_Box;
	/** @type {Phaser.GameObjects.Rectangle} */
	system_Box;
	/** @type {Phaser.GameObjects.Rectangle} */
	plant_Box;
	/** @type {Phaser.GameObjects.Ellipse} */
	back_Button;
	/** @type {Phaser.GameObjects.BitmapText} */
	header2_Text;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_1;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_2;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_3;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_4;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_5;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_6;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_7;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_8;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_11;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_12;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_10;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_9;
	/** @type {Phaser.GameObjects.BitmapText} */
	option2_text;
	/** @type {Phaser.GameObjects.BitmapText} */
	option1_text;
	/** @type {Phaser.GameObjects.BitmapText} */
	option3_text;
	/** @type {Phaser.GameObjects.BitmapText} */
	option4_text;
	/** @type {Phaser.GameObjects.BitmapText} */
	option6_text;
	/** @type {Phaser.GameObjects.BitmapText} */
	option5_text;
	/** @type {Phaser.GameObjects.BitmapText} */
	option7_text;
	/** @type {Phaser.GameObjects.BitmapText} */
	option8_text;
	/** @type {Phaser.GameObjects.BitmapText} */
	option9_text;
	/** @type {Phaser.GameObjects.BitmapText} */
	option10_text;
	/** @type {Phaser.GameObjects.BitmapText} */
	option11_text;
	/** @type {Phaser.GameObjects.BitmapText} */
	option12_text;
	/** @type {Phaser.GameObjects.BitmapText} */
	option1_price;
	/** @type {Phaser.GameObjects.BitmapText} */
	option2_price;
	/** @type {Phaser.GameObjects.BitmapText} */
	option3_price;
	/** @type {Phaser.GameObjects.BitmapText} */
	option4_price;
	/** @type {Phaser.GameObjects.BitmapText} */
	option5_price;
	/** @type {Phaser.GameObjects.BitmapText} */
	option6_price;
	/** @type {Phaser.GameObjects.BitmapText} */
	option7_price;
	/** @type {Phaser.GameObjects.BitmapText} */
	option8_price;
	/** @type {Phaser.GameObjects.BitmapText} */
	option9_price;
	/** @type {Phaser.GameObjects.BitmapText} */
	option10_price;
	/** @type {Phaser.GameObjects.BitmapText} */
	option11_price;
	/** @type {Phaser.GameObjects.BitmapText} */
	option12_price;
	/** @type {Phaser.GameObjects.BitmapText} */
	money_text;
	/** @type {Phaser.GameObjects.Ellipse} */
	buy_page_button;
	/** @type {Phaser.GameObjects.BitmapText} */
	buy_page_icon;
	/** @type {Phaser.GameObjects.Image} */
	systemImage;
	/** @type {Phaser.GameObjects.Ellipse} */
	sell_page_button;
	/** @type {Phaser.GameObjects.BitmapText} */
	sell_page_icon;
	/** @type {Phaser.GameObjects.Image} */
	option1_lock;
	/** @type {Phaser.GameObjects.Image} */
	option2_lock;
	/** @type {Phaser.GameObjects.Image} */
	option3_lock;
	/** @type {Phaser.GameObjects.Image} */
	option4_lock;
	/** @type {Phaser.GameObjects.Image} */
	option5_lock;
	/** @type {Phaser.GameObjects.Image} */
	option6_lock;
	/** @type {Phaser.GameObjects.Image} */
	option7_lock;
	/** @type {Phaser.GameObjects.Image} */
	option8_lock;
	/** @type {Phaser.GameObjects.Image} */
	option9_lock;
	/** @type {Phaser.GameObjects.Image} */
	option10_lock;
	/** @type {Phaser.GameObjects.Image} */
	option11_lock;
	/** @type {Phaser.GameObjects.Image} */
	option12_lock;
	/** @type {Phaser.GameObjects.Image} */
	til_lrv;
	/** @type {Phaser.GameObjects.Image} */
	til_fin;
	/** @type {Phaser.GameObjects.Image} */
	til_juv;
	/** @type {Phaser.GameObjects.Image} */
	til_re;
	/** @type {Phaser.GameObjects.Image} */
	ltt_h;
	/** @type {Phaser.GameObjects.Image} */
	ltt_spr;

	/* START-USER-CODE */

	toggleBoxColor(box) {
    	box.fillColor = 0x428544;
		this.time.delayedCall(500, () => {
			box.fillColor = 0xffffff;
		})
	}

	/*switchScreen(str) {
		if (str == 's') {
			this.sell_page_button.setVisible(false);
			this.sell_page_icon.setVisible(false);
			this.buy_page_button.setVisible(true);
			this.buy_page_icon.setVisible(true);
			this.systemImage.setVisible(false);
			this.header2_Text.text = "Current Prices";
		}
		else {
			this.sell_page_button.setVisible(true);
			this.sell_page_icon.setVisible(true);
			this.buy_page_button.setVisible(false);
			this.buy_page_icon.setVisible(false);
			this.systemImage.setVisible(true);
			this.header2_Text.text = "System";
		}
	}*/

	setListPrice(boxNum, textObj, itemObj) {
		textObj.text = "$ " + itemObj.price;
		this.shopTable[boxNum] = itemObj;
	}

	updateMoney(intChange) {
		let curMoney = this.registry.get('money');
		let newMoney = curMoney + intChange;
		if (newMoney < 0)
			return false;
		this.registry.set('money', newMoney);
		this.money_text.text = "$ " + newMoney;
		return true;
	}

	getItemIndexbyID(strID, itemsArr) {
		let i = 0;
		while (i < itemsArr.length) {
			if (itemsArr[i].id == strID) {
				break;
			}
			i += 1;
		}
		return i;
	}

	buyItem(itemID) {
		let items = this.registry.get('items');
		const itemIndex = this.getItemIndexbyID(itemID, items);
		// Modify the value you want
		items[itemIndex].playerHas += 1;
		// Write it back to the registry so the change is recognized globally
		this.registry.set('items', items);
		console.log(items[itemIndex]);
		this.updateSellMenu();
	}

	sellItem(itemID) {
		let items = this.registry.get('items');
		const itemIndex = this.getItemIndexbyID(itemID, items);
		items[itemIndex].playerHas -= 1;
		this.registry.set('items', items);
		console.log(items[itemIndex]);
		this.updateSellMenu();
	}

	destroyAllSellBoxes() {
		for (let i = 0; this.sellDestroyList[i] != null; i++) {
			this.sellDestroyList[i].destroy();
			this.sellDestroyList[i] = null;
		}
		this.sellDestroyListIndex = 0;
	}

	addToDestroyList(obj) {
		this.sellDestroyList[this.sellDestroyListIndex] = obj;
		this.sellDestroyListIndex += 1;
	}

	updateSellMenu() {
		this.destroyAllSellBoxes();
		let items = this.registry.get('items');
		let adjust = 0;
		for (let i = 0; i < items.length; i++) {
			if (items[i].playerHas == 0)
				continue;

			const sell_item_bar = this.add.rectangle(780, 140 + adjust, 444, 40);
			sell_item_bar.setOrigin(0, 0);
			sell_item_bar.isFilled = true;
			sell_item_bar.fillColor = 15465709;
			sell_item_bar.isStroked = true;
			sell_item_bar.strokeColor = 4473924;
			sell_item_bar.lineWidth = 1;
			this.addToDestroyList(sell_item_bar);

			const sell_item_name = this.add.bitmapText(800, 160 + adjust, "pixelmix_16", items[i].shopSellText);
			sell_item_name.setOrigin(0, 0.5);
			this.addToDestroyList(sell_item_name);

			const sell_item_button = this.add.rectangle(1120, 145 + adjust, 98, 30);
			sell_item_button.setOrigin(0, 0);
			sell_item_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 98, 30), Phaser.Geom.Rectangle.Contains);
			sell_item_button.isFilled = true;
			sell_item_button.fillColor = 0x9c5a3c;
			sell_item_button.isStroked = true;
			sell_item_button.strokeColor = 4473924;
			sell_item_button.lineWidth = 1;
			this.addToDestroyList(sell_item_button);

			const sell_text = this.add.bitmapText(1169, 160 + adjust, "pixelmix_16", "SELL");
			sell_text.setOrigin(0.5, 0.5);
			this.addToDestroyList(sell_text);

			const sell_amount = this.add.bitmapText(1110, 160 + adjust, "pixelmix_16", "x" + items[i].playerHas);
			sell_amount.setOrigin(1, 0.5);
			this.addToDestroyList(sell_amount);

			sell_item_button.on("pointerdown", () => {
				this.updateMoney(items[i].price)
				this.sellItem(items[i].id);
			})

			adjust += 40;
		}
	}

	setupFishShop() {
		this.fish_Box.fillColor = 0x428544;
		this.plant_Box.fillColor = 0xffffff;
		this.system_Box.fillColor = 0xffffff;
		this.equip_Box.fillColor = 0xffffff;
		this.wipeOptions();

		let itemsArr = this.registry.get('items');
		this.option1_text.text = "";
		this.option2_text.text = "";
		this.option3_text.text = "";
		this.option4_text.text = "";
		this.option5_text.text = itemsArr[4].shopText;
		this.option6_text.text = itemsArr[5].shopText;
		this.option7_text.text = itemsArr[6].shopText;
		this.option8_text.text = itemsArr[7].shopText;
		this.option9_text.text = "";
		this.option10_text.text = "";
		this.option11_text.text = "";
		this.option12_text.text = "";

		this.setListPrice(1, this.option1_price, itemsArr[0]);
		this.setListPrice(2, this.option2_price, itemsArr[1]);
		this.setListPrice(3, this.option3_price, itemsArr[2]);
		this.setListPrice(4, this.option4_price, itemsArr[3]);
		this.setListPrice(5, this.option5_price, itemsArr[4]);
		this.setListPrice(6, this.option6_price, itemsArr[5]);
		this.setListPrice(7, this.option7_price, itemsArr[6]);
		this.setListPrice(8, this.option8_price, itemsArr[7]);
		this.option9_price.text = "";
		this.option10_price.text = "";
		this.option11_price.text = "";
		this.option12_price.text = "";

		this.rectangle_1.setVisible(true);
		this.rectangle_2.setVisible(true);
		this.rectangle_3.setVisible(true);
		this.rectangle_4.setVisible(true);
		this.rectangle_5.setVisible(true);
		this.rectangle_6.setVisible(true);
		this.rectangle_7.setVisible(true);
		this.rectangle_8.setVisible(true);
		this.rectangle_9.setVisible(false);
		this.rectangle_10.setVisible(false);
		this.rectangle_11.setVisible(false);
		this.rectangle_12.setVisible(false);

		this.option_box_1.setVisible(true);
		this.option_box_2.setVisible(true);
		this.option_box_3.setVisible(true);
		this.option_box_4.setVisible(true);
		this.option_box_5.setVisible(true);
		this.option_box_6.setVisible(true);
		this.option_box_7.setVisible(true);
		this.option_box_8.setVisible(true);
		this.option_box_9.setVisible(false);
		this.option_box_10.setVisible(false);
		this.option_box_11.setVisible(false);
		this.option_box_12.setVisible(false);

		this.til_fin.setVisible(true);
		this.til_re.setVisible(true);
		this.til_lrv.setVisible(true);
		this.til_juv.setVisible(true);
		this.ltt_h.setVisible(false);
		this.ltt_spr.setVisible(false);

		this.option5_lock.setVisible(true);
		this.option6_lock.setVisible(true);
		this.option7_lock.setVisible(true);
		this.option8_lock.setVisible(true);

		this.scroll.setVisible(false);
	}

	setupPlantShop() {
		this.fish_Box.fillColor = 0xffffff;
		this.plant_Box.fillColor = 0x428544;
		this.system_Box.fillColor = 0xffffff;
		this.equip_Box.fillColor = 0xffffff;
		this.wipeOptions();

		let itemsArr = this.registry.get('items');
		this.option1_text.text = "";
		this.option2_text.text = "";
		this.option3_text.text = "";
		this.option4_text.text = "";
		this.option5_text.text = "";
		this.option6_text.text = "";
		this.option7_text.text = "";
		this.option8_text.text = "";
		this.option9_text.text = "";
		this.option10_text.text = "";
		this.option11_text.text = "";
		this.option12_text.text = "";

		this.setListPrice(1, this.option1_price, itemsArr[9]);
		this.setListPrice(2, this.option2_price, itemsArr[12]);
		this.option3_price.text = "";
		this.option4_price.text = "";
		this.option5_price.text = "";
		this.option6_price.text = "";
		this.option7_price.text = "";
		this.option8_price.text = "";
		this.option9_price.text = "";
		this.option10_price.text = "";
		this.option11_price.text = "";
		this.option12_price.text = "";

		this.rectangle_1.setVisible(true);
		this.rectangle_2.setVisible(true);
		this.rectangle_3.setVisible(false);
		this.rectangle_4.setVisible(false);
		this.rectangle_5.setVisible(false);
		this.rectangle_6.setVisible(false);
		this.rectangle_7.setVisible(false);
		this.rectangle_8.setVisible(false);
		this.rectangle_9.setVisible(false);
		this.rectangle_10.setVisible(false);
		this.rectangle_11.setVisible(false);
		this.rectangle_12.setVisible(false);

		this.option_box_1.setVisible(true);
		this.option_box_2.setVisible(true);
		this.option_box_3.setVisible(false);
		this.option_box_4.setVisible(false);
		this.option_box_5.setVisible(false);
		this.option_box_6.setVisible(false);
		this.option_box_7.setVisible(false);
		this.option_box_8.setVisible(false);
		this.option_box_9.setVisible(false);
		this.option_box_10.setVisible(false);
		this.option_box_11.setVisible(false);
		this.option_box_12.setVisible(false);

		this.til_fin.setVisible(false);
		this.til_re.setVisible(false);
		this.til_lrv.setVisible(false);
		this.til_juv.setVisible(false);
		this.ltt_h.setVisible(true);
		this.ltt_spr.setVisible(true);

		this.option5_lock.setVisible(false);
		this.option6_lock.setVisible(false);
		this.option7_lock.setVisible(false);
		this.option8_lock.setVisible(false);

		this.scroll.setVisible(false);
	}

	setupSystemsShop() {
		this.fish_Box.fillColor = 0xffffff;
		this.plant_Box.fillColor = 0xffffff;
		this.system_Box.fillColor = 0x428544;
		this.equip_Box.fillColor = 0xffffff;
		this.wipeOptions();

		let itemsArr = this.registry.get('items');
		this.option1_text.text = itemsArr[13].shopText;
		this.option2_text.text = itemsArr[14].shopText;
		this.option3_text.text = itemsArr[15].shopText;
		this.option4_text.text = itemsArr[16].shopText;
		this.option5_text.text = itemsArr[17].shopText;
		this.option6_text.text = itemsArr[18].shopText;
		this.option7_text.text = "";
		this.option8_text.text = "";
		this.option9_text.text = "";
		this.option10_text.text = "";
		this.option11_text.text = "";
		this.option12_text.text = "";

		this.setListPrice(1, this.option1_price, itemsArr[13]);
		this.setListPrice(2, this.option2_price, itemsArr[14]);
		this.setListPrice(3, this.option3_price, itemsArr[15]);
		this.setListPrice(4, this.option4_price, itemsArr[16]);
		this.setListPrice(5, this.option5_price, itemsArr[17]);
		this.setListPrice(6, this.option6_price, itemsArr[18]);
		this.option7_price.text = "";
		this.option8_price.text = "";
		this.option9_price.text = "";
		this.option10_price.text = "";
		this.option11_price.text = "";
		this.option12_price.text = "";

		this.rectangle_1.setVisible(true);
		this.rectangle_2.setVisible(true);
		this.rectangle_3.setVisible(true);
		this.rectangle_4.setVisible(true);
		this.rectangle_5.setVisible(true);
		this.rectangle_6.setVisible(true);
		this.rectangle_7.setVisible(false);
		this.rectangle_8.setVisible(false);
		this.rectangle_9.setVisible(false);
		this.rectangle_10.setVisible(false);
		this.rectangle_11.setVisible(false);
		this.rectangle_12.setVisible(false);

		this.option_box_1.setVisible(true);
		this.option_box_2.setVisible(true);
		this.option_box_3.setVisible(true);
		this.option_box_4.setVisible(true);
		this.option_box_5.setVisible(true);
		this.option_box_6.setVisible(true);
		this.option_box_7.setVisible(false);
		this.option_box_8.setVisible(false);
		this.option_box_9.setVisible(false);
		this.option_box_10.setVisible(false);
		this.option_box_11.setVisible(false);
		this.option_box_12.setVisible(false);

		this.til_fin.setVisible(false);
		this.til_re.setVisible(false);
		this.til_lrv.setVisible(false);
		this.til_juv.setVisible(false);
		this.ltt_h.setVisible(false);
		this.ltt_spr.setVisible(false);

		this.option5_lock.setVisible(false);
		this.option6_lock.setVisible(false);
		this.option7_lock.setVisible(false);
		this.option8_lock.setVisible(false);

		this.scroll.setVisible(false);
	}

	setupEquipShop() {
		this.fish_Box.fillColor = 0xffffff;
		this.plant_Box.fillColor = 0xffffff;
		this.system_Box.fillColor = 0xffffff;
		this.equip_Box.fillColor = 0x428544;
		this.wipeOptions();

		let itemsArr = this.registry.get('items');
		this.option1_text.text = itemsArr[19].shopText;
		this.option2_text.text = "";
		this.option3_text.text = "";
		this.option4_text.text = "";
		this.option5_text.text = "";
		this.option6_text.text = "";
		this.option7_text.text = "";
		this.option8_text.text = "";
		this.option9_text.text = "";
		this.option10_text.text = "";
		this.option11_text.text = "";
		this.option12_text.text = "";

		this.setListPrice(1, this.option1_price, itemsArr[19]);
		this.option2_price.text = "";
		this.option3_price.text = "";
		this.option4_price.text = "";
		this.option5_price.text = "";
		this.option6_price.text = "";
		this.option7_price.text = "";
		this.option8_price.text = "";
		this.option9_price.text = "";
		this.option10_price.text = "";
		this.option11_price.text = "";
		this.option12_price.text = "";

		this.rectangle_1.setVisible(true);
		this.rectangle_2.setVisible(false);
		this.rectangle_3.setVisible(false);
		this.rectangle_4.setVisible(false);
		this.rectangle_5.setVisible(false);
		this.rectangle_6.setVisible(false);
		this.rectangle_7.setVisible(false);
		this.rectangle_8.setVisible(false);
		this.rectangle_9.setVisible(false);
		this.rectangle_10.setVisible(false);
		this.rectangle_11.setVisible(false);
		this.rectangle_12.setVisible(false);

		this.option_box_1.setVisible(true);
		this.option_box_2.setVisible(false);
		this.option_box_3.setVisible(false);
		this.option_box_4.setVisible(false);
		this.option_box_5.setVisible(false);
		this.option_box_6.setVisible(false);
		this.option_box_7.setVisible(false);
		this.option_box_8.setVisible(false);
		this.option_box_9.setVisible(false);
		this.option_box_10.setVisible(false);
		this.option_box_11.setVisible(false);
		this.option_box_12.setVisible(false);

		this.til_fin.setVisible(false);
		this.til_re.setVisible(false);
		this.til_lrv.setVisible(false);
		this.til_juv.setVisible(false);
		this.ltt_h.setVisible(false);
		this.ltt_spr.setVisible(false);

		this.option5_lock.setVisible(false);
		this.option6_lock.setVisible(false);
		this.option7_lock.setVisible(false);
		this.option8_lock.setVisible(false);

		this.scroll.setVisible(false);
	}

	wipeOptions() {
		this.option_box_1.fillColor = 0xffffff;
		this.option_box_2.fillColor = 0xffffff;
		this.option_box_3.fillColor = 0xffffff;
		this.option_box_4.fillColor = 0xffffff;
		this.option_box_5.fillColor = 0xffffff;
		this.option_box_6.fillColor = 0xffffff;
		this.option_box_7.fillColor = 0xffffff;
		this.option_box_8.fillColor = 0xffffff;
		this.option_box_9.fillColor = 0xffffff;
		this.option_box_10.fillColor = 0xffffff;
		this.option_box_11.fillColor = 0xffffff;
		this.option_box_12.fillColor = 0xffffff;
	}

	// Write your code here

	create() {

		this.editorCreate();
		this.shopTable = new Array(13);
		this.sellDestroyList = new Array(256);
		this.sellDestroyListIndex = 0;
		this.updateMoney(0);
		this.setupFishShop();

		this.back_Button.on("pointerdown", () => {
            this.scene.start('MainMenu'); // Still works!
        });

		this.fish_Box.on("pointerdown", () => {
			this.setupFishShop();
        });

		this.plant_Box.on("pointerdown", () => {
            this.setupPlantShop();
        });

		this.system_Box.on("pointerdown", () => {
            this.setupSystemsShop();
        });

		this.equip_Box.on("pointerdown", () => {
            this.setupEquipShop();
        });

		this.option_box_1.on("pointerdown", () => {
			this.toggleBoxColor(this.option_box_1);
			if (this.updateMoney(this.shopTable[1].price * -1))
				this.buyItem(this.shopTable[1].id);
		})

		this.option_box_2.on("pointerdown", () => {
			this.toggleBoxColor(this.option_box_2);
			if (this.updateMoney(this.shopTable[2].price * -1))
				this.buyItem(this.shopTable[2].id);
		})

		this.option_box_3.on("pointerdown", () => {
			this.toggleBoxColor(this.option_box_3);
			if (this.updateMoney(this.shopTable[3].price * -1))
				this.buyItem(this.shopTable[3].id);
		})

		this.option_box_4.on("pointerdown", () => {
			this.toggleBoxColor(this.option_box_4);
			if (this.updateMoney(this.shopTable[4].price * -1))
				this.buyItem(this.shopTable[4].id);
		})

		this.option_box_5.on("pointerdown", () => {
			this.toggleBoxColor(this.option_box_5);
			if (this.updateMoney(this.shopTable[5].price * -1))
				this.buyItem(this.shopTable[5].id);
		})

		this.option_box_6.on("pointerdown", () => {
			this.toggleBoxColor(this.option_box_6);
			if (this.updateMoney(this.shopTable[6].price * -1))
				this.buyItem(this.shopTable[6].id);
		})

		this.option_box_7.on("pointerdown", () => {
			this.toggleBoxColor(this.option_box_7);
			if (this.updateMoney(this.shopTable[7].price * -1))
				this.buyItem(this.shopTable[7].id);
		})

		this.option_box_8.on("pointerdown", () => {
			this.toggleBoxColor(this.option_box_8);
			if (this.updateMoney(this.shopTable[8].price * -1))
				this.buyItem(this.shopTable[8].id);
		})

		this.option_box_9.on("pointerdown", () => {
			this.toggleBoxColor(this.option_box_9);
			if (this.updateMoney(this.shopTable[9].price * -1))
				this.buyItem(this.shopTable[9].id);
		})

		this.option_box_10.on("pointerdown", () => {
			this.toggleBoxColor(this.option_box_10);
			if (this.updateMoney(this.shopTable[10].price * -1))
				this.buyItem(this.shopTable[10].id);
		})

		this.option_box_11.on("pointerdown", () => {
			this.toggleBoxColor(this.option_box_11);
			if (this.updateMoney(this.shopTable[11].price * -1))
				this.buyItem(this.shopTable[11].id);
		})

		this.option_box_12.on("pointerdown", () => {
			this.toggleBoxColor(this.option_box_12);
			if (this.updateMoney(this.shopTable[12].price * -1))
				this.buyItem(this.shopTable[12].id);
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here



