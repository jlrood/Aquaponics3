
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Cycle extends Phaser.Scene {

	constructor() {
		super("Cycle");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		const background = this.add.rectangle(640, 360, 1280, 720);
		background.setInteractive(new Phaser.Geom.Rectangle(0, 0, 1280, 720), Phaser.Geom.Rectangle.Contains);
		background.isFilled = true;
		background.fillColor = 14609917;

		// plant_img
		const plant_img = this.add.image(640, 360, "21");
		plant_img.scaleX = 0.6666666666666666;
		plant_img.scaleY = 0.6666666666666666;
		plant_img.visible = false;

		// cycle
		const cycle = this.add.image(640, 277, "cycle");
		cycle.scaleX = 0.5;
		cycle.scaleY = 0.5;
		cycle.visible = false;

		// page1
		const page1 = this.add.container(640, 310);
		page1.visible = false;

		// tilapia_new0
		const tilapia_new0 = this.add.image(3, 0, "tilapia_new", 0);
		tilapia_new0.scaleX = 3;
		tilapia_new0.scaleY = 3;
		page1.add(tilapia_new0);

		// tb1
		const tb1 = this.add.container(0, 305);
		page1.add(tb1);

		// text_box_empty
		const text_box_empty = this.add.image(0, 0, "text_box_empty");
		text_box_empty.scaleX = 0.85;
		text_box_empty.scaleY = 0.85;
		tb1.add(text_box_empty);

		// bitmaptext_1
		const bitmaptext_1 = this.add.bitmapText(0, 0, "pixelmix_16", "Welcome to Grow n' Flow!");
		bitmaptext_1.setOrigin(0.5, 0.5);
		bitmaptext_1.text = "Welcome to Grow n' Flow!";
		bitmaptext_1.fontSize = 16;
		tb1.add(bitmaptext_1);

		// page2
		const page2 = this.add.container(583, 202);
		page2.visible = false;

		// tilapia_new
		const tilapia_new = this.add.image(60, 108, "tilapia_new", 0);
		tilapia_new.scaleX = 3;
		tilapia_new.scaleY = 3;
		page2.add(tilapia_new);

		// tb2
		const tb2 = this.add.container(57, 413);
		page2.add(tb2);

		// text_box_empty_1
		const text_box_empty_1 = this.add.image(0, 0, "text_box_empty");
		text_box_empty_1.scaleX = 0.85;
		text_box_empty_1.scaleY = 0.85;
		tb2.add(text_box_empty_1);

		// bitmaptext
		const bitmaptext = this.add.bitmapText(0, 0, "pixelmix_16", "Let's introduce the wonderful world of aquaponics.");
		bitmaptext.setOrigin(0.5, 0.5);
		bitmaptext.text = "Let's introduce the wonderful world of aquaponics.";
		bitmaptext.fontSize = 16;
		tb2.add(bitmaptext);

		// page3
		const page3 = this.add.container(358, 123);
		page3.visible = false;

		// text_box_empty_2
		const text_box_empty_2 = this.add.image(0, 0, "text_box_empty");
		text_box_empty_2.scaleX = 0.85;
		text_box_empty_2.scaleY = 0.85;
		page3.add(text_box_empty_2);

		// bitmaptext_2
		const bitmaptext_2 = this.add.bitmapText(0, 0, "pixelmix_16", "In a basic sense, aquaponics is a form of\nagriculture that combines  two key concept...");
		bitmaptext_2.setOrigin(0.5, 0.5);
		bitmaptext_2.text = "In a basic sense, aquaponics is a form of\nagriculture that combines  two key concept...";
		bitmaptext_2.fontSize = 16;
		page3.add(bitmaptext_2);

		// page4
		const page4 = this.add.container(640, 337);
		page4.visible = false;

		// text_box_empty_3
		const text_box_empty_3 = this.add.image(253, 0, "text_box_empty");
		text_box_empty_3.scaleX = 0.85;
		text_box_empty_3.scaleY = 0.85;
		page4.add(text_box_empty_3);

		// bitmaptext_3
		const bitmaptext_3 = this.add.bitmapText(253, 0, "pixelmix_16", "...Aquaculture, controlled farming of aquatic life");
		bitmaptext_3.setOrigin(0.5, 0.5);
		bitmaptext_3.text = "...Aquaculture, controlled farming of aquatic life";
		bitmaptext_3.fontSize = 16;
		page4.add(bitmaptext_3);

		// juvenile0
		const juvenile0 = this.add.image(0, 58, "juvenile", 0);
		juvenile0.scaleX = 3;
		juvenile0.scaleY = 3;
		page4.add(juvenile0);

		// page5
		const page5 = this.add.container(363, 544);
		page5.visible = false;

		// text_box_empty_4
		const text_box_empty_4 = this.add.image(0, 0, "text_box_empty");
		text_box_empty_4.scaleX = 0.85;
		text_box_empty_4.scaleY = 0.85;
		page5.add(text_box_empty_4);

		// bitmaptext_4
		const bitmaptext_4 = this.add.bitmapText(0, 0, "pixelmix_16", "...and Hydroponics, growing plants without soil");
		bitmaptext_4.setOrigin(0.5, 0.5);
		bitmaptext_4.text = "...and Hydroponics, growing plants without soil";
		bitmaptext_4.fontSize = 16;
		page5.add(bitmaptext_4);

		// lettuce
		const lettuce = this.add.image(290, 38, "lettuce");
		lettuce.scaleX = 3;
		lettuce.scaleY = 3;
		page5.add(lettuce);

		// page6
		const page6 = this.add.container(636, 167);
		page6.visible = false;

		// text_box_empty_5
		const text_box_empty_5 = this.add.image(0, 0, "text_box_empty");
		text_box_empty_5.scaleX = 0.85;
		text_box_empty_5.scaleY = 0.85;
		page6.add(text_box_empty_5);

		// bitmaptext_5
		const bitmaptext_5 = this.add.bitmapText(0, 0, "pixelmix_16", "By connecting these two concepts, we can create\na thriving, sustainable environment.");
		bitmaptext_5.setOrigin(0.5, 0.5);
		bitmaptext_5.text = "By connecting these two concepts, we can create\na thriving, sustainable environment.";
		bitmaptext_5.fontSize = 16;
		bitmaptext_5.align = 1;
		page6.add(bitmaptext_5);

		// page7
		const page7 = this.add.container(636, 388);
		page7.visible = false;

		// text_box_empty_6
		const text_box_empty_6 = this.add.image(0, 0, "text_box_empty");
		text_box_empty_6.scaleX = 0.85;
		text_box_empty_6.scaleY = 0.85;
		page7.add(text_box_empty_6);

		// bitmaptext_6
		const bitmaptext_6 = this.add.bitmapText(0, 0, "pixelmix_16", "But how does the process actually work?");
		bitmaptext_6.setOrigin(0.5, 0.5);
		bitmaptext_6.text = "But how does the process actually work?";
		bitmaptext_6.fontSize = 16;
		page7.add(bitmaptext_6);

		// page8
		const page8 = this.add.container(636, 610);
		page8.visible = false;

		// text_box_empty_7
		const text_box_empty_7 = this.add.image(0, 0, "text_box_empty");
		text_box_empty_7.scaleX = 0.85;
		text_box_empty_7.scaleY = 0.85;
		page8.add(text_box_empty_7);

		// bitmaptext_7
		const bitmaptext_7 = this.add.bitmapText(0, 0, "pixelmix_16", "Well, the idea is quite simple");
		bitmaptext_7.setOrigin(0.5, 0.5);
		bitmaptext_7.text = "Well, the idea is quite simple";
		bitmaptext_7.fontSize = 16;
		page8.add(bitmaptext_7);

		// page9
		const page9 = this.add.container(640, 611);
		page9.visible = false;

		// text_box_empty_8
		const text_box_empty_8 = this.add.image(0, 0, "text_box_empty");
		text_box_empty_8.scaleX = 0.85;
		text_box_empty_8.scaleY = 0.85;
		page9.add(text_box_empty_8);

		// bitmaptext_8
		const bitmaptext_8 = this.add.bitmapText(0, 0, "pixelmix_16", "In a controlled tank, fish eat and produce waste,\nwhich goes into the water system.");
		bitmaptext_8.setOrigin(0.5, 0.5);
		bitmaptext_8.text = "In a controlled tank, fish eat and produce waste,\nwhich goes into the water system.";
		bitmaptext_8.fontSize = 16;
		bitmaptext_8.align = 1;
		page9.add(bitmaptext_8);

		// page10
		const page10 = this.add.container(497, 611);
		page10.visible = false;

		// text_box_empty_9
		const text_box_empty_9 = this.add.image(143, 0, "text_box_empty");
		text_box_empty_9.scaleX = 0.85;
		text_box_empty_9.scaleY = 0.85;
		page10.add(text_box_empty_9);

		// bitmaptext_9
		const bitmaptext_9 = this.add.bitmapText(143, 0, "pixelmix_16", "Bacteria in the filters converts waste from\ntoxic");
		bitmaptext_9.setOrigin(0.5, 0.5);
		bitmaptext_9.text = "Bacteria in the filters converts waste from\ntoxic";
		bitmaptext_9.fontSize = 16;
		page10.add(bitmaptext_9);

		// bitmaptext_10
		const bitmaptext_10 = this.add.bitmapText(0, 8, "pixelmix_16", "ammonia");
		bitmaptext_10.setOrigin(0.5, 0.5);
		bitmaptext_10.tintFill = true;
		bitmaptext_10.tintTopLeft = 15597568;
		bitmaptext_10.tintTopRight = 15597568;
		bitmaptext_10.tintBottomLeft = 15597568;
		bitmaptext_10.tintBottomRight = 15597568;
		bitmaptext_10.text = "ammonia";
		bitmaptext_10.fontSize = 16;
		page10.add(bitmaptext_10);

		// bitmaptext_11
		const bitmaptext_11 = this.add.bitmapText(60, 8, "pixelmix_16", "to");
		bitmaptext_11.setOrigin(0.5, 0.5);
		bitmaptext_11.tintTopLeft = 15597568;
		bitmaptext_11.tintTopRight = 15597568;
		bitmaptext_11.tintBottomLeft = 15597568;
		bitmaptext_11.tintBottomRight = 15597568;
		bitmaptext_11.text = "to";
		bitmaptext_11.fontSize = 16;
		page10.add(bitmaptext_11);

		// bitmaptext_12
		const bitmaptext_12 = this.add.bitmapText(120, 8, "pixelmix_16", "nitrate");
		bitmaptext_12.setOrigin(0.5, 0.5);
		bitmaptext_12.tintFill = true;
		bitmaptext_12.tintTopLeft = 60928;
		bitmaptext_12.tintTopRight = 60928;
		bitmaptext_12.tintBottomLeft = 60928;
		bitmaptext_12.tintBottomRight = 60928;
		bitmaptext_12.text = "nitrate";
		bitmaptext_12.fontSize = 16;
		page10.add(bitmaptext_12);

		// bitmaptext_13
		const bitmaptext_13 = this.add.bitmapText(290, 8, "pixelmix_16", ", a nutrient for plants.");
		bitmaptext_13.setOrigin(0.5, 0.5);
		bitmaptext_13.tintTopLeft = 15597568;
		bitmaptext_13.tintTopRight = 15597568;
		bitmaptext_13.tintBottomLeft = 15597568;
		bitmaptext_13.tintBottomRight = 15597568;
		bitmaptext_13.text = ", a nutrient for plants.";
		bitmaptext_13.fontSize = 16;
		page10.add(bitmaptext_13);

		// page11
		const page11 = this.add.container(640, 611);
		page11.visible = false;

		// text_box_empty_10
		const text_box_empty_10 = this.add.image(0, 0, "text_box_empty");
		text_box_empty_10.scaleX = 0.85;
		text_box_empty_10.scaleY = 0.85;
		page11.add(text_box_empty_10);

		// bitmaptext_14
		const bitmaptext_14 = this.add.bitmapText(0, 0, "pixelmix_16", "Filtered water is pumped through the plants tank,\nwhere the roots absorb          .");
		bitmaptext_14.setOrigin(0.5, 0.5);
		bitmaptext_14.text = "Filtered water is pumped through the plants tank,\nwhere the roots absorb          .";
		bitmaptext_14.fontSize = 16;
		bitmaptext_14.align = 1;
		page11.add(bitmaptext_14);

		// bitmaptext_15
		const bitmaptext_15 = this.add.bitmapText(128, 8, "pixelmix_16", "nitrates");
		bitmaptext_15.setOrigin(0.5, 0.5);
		bitmaptext_15.tintFill = true;
		bitmaptext_15.tintTopLeft = 60928;
		bitmaptext_15.tintTopRight = 60928;
		bitmaptext_15.tintBottomLeft = 60928;
		bitmaptext_15.tintBottomRight = 60928;
		bitmaptext_15.text = "nitrates";
		bitmaptext_15.fontSize = 16;
		bitmaptext_15.align = 1;
		page11.add(bitmaptext_15);

		// page12
		const page12 = this.add.container(600, 595);
		page12.visible = false;

		// text_box_empty_11
		const text_box_empty_11 = this.add.image(40, 16, "text_box_empty");
		text_box_empty_11.scaleX = 0.85;
		text_box_empty_11.scaleY = 0.85;
		page12.add(text_box_empty_11);

		// bitmaptext_16
		const bitmaptext_16 = this.add.bitmapText(40, 16, "pixelmix_16", "This prevents           from accumulating to\n harmful levels, which can hurt fish if not\n properly monitored.");
		bitmaptext_16.setOrigin(0.5, 0.5);
		bitmaptext_16.text = "This prevents           from accumulating to\n harmful levels, which can hurt fish if not\n properly monitored.";
		bitmaptext_16.fontSize = 16;
		bitmaptext_16.align = 1;
		page12.add(bitmaptext_16);

		// bitmaptext_17
		const bitmaptext_17 = this.add.bitmapText(0, 0, "pixelmix_16", "nitrates");
		bitmaptext_17.setOrigin(0.5, 0.5);
		bitmaptext_17.tintFill = true;
		bitmaptext_17.tintTopLeft = 60928;
		bitmaptext_17.tintTopRight = 60928;
		bitmaptext_17.tintBottomLeft = 60928;
		bitmaptext_17.tintBottomRight = 60928;
		bitmaptext_17.text = "nitrates";
		bitmaptext_17.fontSize = 16;
		bitmaptext_17.align = 1;
		page12.add(bitmaptext_17);

		// page13
		const page13 = this.add.container(640, 611);
		page13.visible = false;

		// text_box_empty_12
		const text_box_empty_12 = this.add.image(0, 0, "text_box_empty");
		text_box_empty_12.scaleX = 0.85;
		text_box_empty_12.scaleY = 0.85;
		page13.add(text_box_empty_12);

		// bitmaptext_18
		const bitmaptext_18 = this.add.bitmapText(0, 0, "pixelmix_16", "Finally, the cleaned water is pumped back \nto the fish tank, completing the cycle.");
		bitmaptext_18.setOrigin(0.5, 0.5);
		bitmaptext_18.text = "Finally, the cleaned water is pumped back \nto the fish tank, completing the cycle.";
		bitmaptext_18.fontSize = 16;
		bitmaptext_18.align = 1;
		page13.add(bitmaptext_18);

		// page14
		const page14 = this.add.container(640, 611);
		page14.visible = false;

		// text_box_empty_13
		const text_box_empty_13 = this.add.image(0, 0, "text_box_empty");
		text_box_empty_13.scaleX = 0.85;
		text_box_empty_13.scaleY = 0.85;
		page14.add(text_box_empty_13);

		// bitmaptext_19
		const bitmaptext_19 = this.add.bitmapText(0, 0, "pixelmix_16", "Now that we know how the cycle works, \nlet's move onto the system that holds it!");
		bitmaptext_19.setOrigin(0.5, 0.5);
		bitmaptext_19.text = "Now that we know how the cycle works, \nlet's move onto the system that holds it!";
		bitmaptext_19.fontSize = 16;
		bitmaptext_19.align = 1;
		page14.add(bitmaptext_19);

		// page15
		const page15 = this.add.container(358, 124);
		page15.visible = false;

		// text_box_empty_14
		const text_box_empty_14 = this.add.image(0, 0, "text_box_empty");
		text_box_empty_14.scaleX = 0.85;
		text_box_empty_14.scaleY = 0.85;
		page15.add(text_box_empty_14);

		// bitmaptext_20
		const bitmaptext_20 = this.add.bitmapText(0, 0, "pixelmix_16", "There are several types of aquaponics systems\nwidely used across the world.");
		bitmaptext_20.setOrigin(0.5, 0.5);
		bitmaptext_20.text = "There are several types of aquaponics systems\nwidely used across the world.";
		bitmaptext_20.fontSize = 16;
		bitmaptext_20.align = 1;
		page15.add(bitmaptext_20);

		// page16
		const page16 = this.add.container(893, 338);
		page16.visible = false;

		// text_box_empty_15
		const text_box_empty_15 = this.add.image(0, 0, "text_box_empty");
		text_box_empty_15.scaleX = 0.85;
		text_box_empty_15.scaleY = 0.85;
		page16.add(text_box_empty_15);

		// bitmaptext_21
		const bitmaptext_21 = this.add.bitmapText(0, 0, "pixelmix_16", "Media Based, Nutrient Film Technique, etc...");
		bitmaptext_21.setOrigin(0.5, 0.5);
		bitmaptext_21.text = "Media Based, Nutrient Film Technique, etc...";
		bitmaptext_21.fontSize = 16;
		bitmaptext_21.align = 1;
		page16.add(bitmaptext_21);

		// page17
		const page17 = this.add.container(358, 561);
		page17.visible = false;

		// text_box_empty_16
		const text_box_empty_16 = this.add.image(0, 0, "text_box_empty");
		text_box_empty_16.scaleX = 0.85;
		text_box_empty_16.scaleY = 0.85;
		page17.add(text_box_empty_16);

		// bitmaptext_22
		const bitmaptext_22 = this.add.bitmapText(0, 0, "pixelmix_16", "Factors like efficiency, durability, and scale will\neffect which system is best for you.");
		bitmaptext_22.setOrigin(0.5, 0.5);
		bitmaptext_22.text = "Factors like efficiency, durability, and scale will\neffect which system is best for you.";
		bitmaptext_22.fontSize = 16;
		bitmaptext_22.align = 1;
		page17.add(bitmaptext_22);

		// page18
		const page18 = this.add.container(640, 167);
		page18.visible = false;

		// text_box_empty_17
		const text_box_empty_17 = this.add.image(0, 0, "text_box_empty");
		text_box_empty_17.scaleX = 0.85;
		text_box_empty_17.scaleY = 0.85;
		page18.add(text_box_empty_17);

		// bitmaptext_23
		const bitmaptext_23 = this.add.bitmapText(0, 0, "pixelmix_16", "Grow n' Flow focuses on Deep Water Culture(DWC)");
		bitmaptext_23.setOrigin(0.5, 0.5);
		bitmaptext_23.text = "Grow n' Flow focuses on Deep Water Culture(DWC)";
		bitmaptext_23.fontSize = 16;
		bitmaptext_23.align = 1;
		page18.add(bitmaptext_23);

		// page19
		const page19 = this.add.container(177, 249);
		page19.visible = false;

		// text_box_empty_18
		const text_box_empty_18 = this.add.image(463, 141, "text_box_empty");
		text_box_empty_18.scaleX = 0.85;
		text_box_empty_18.scaleY = 0.85;
		page19.add(text_box_empty_18);

		// bitmaptext_24
		const bitmaptext_24 = this.add.bitmapText(463, 141, "pixelmix_16", "Plants are grown on floating rafts, instead of in\ngrowing media,");
		bitmaptext_24.setOrigin(0.5, 0.5);
		bitmaptext_24.text = "Plants are grown on floating rafts, instead of in\ngrowing media,";
		bitmaptext_24.fontSize = 16;
		bitmaptext_24.align = 1;
		page19.add(bitmaptext_24);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(0, 0, 274, 209);
		rectangle_2.angle = -12;
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 10246716;
		page19.add(rectangle_2);

		// plant_ss_1
		const plant_ss_1 = this.add.image(1, 0, "plant_ss_1");
		plant_ss_1.scaleX = 0.3;
		plant_ss_1.scaleY = 0.3;
		plant_ss_1.angle = -12;
		page19.add(plant_ss_1);

		// page20
		const page20 = this.add.container(640, 448);
		page20.visible = false;

		// text_box_empty_19
		const text_box_empty_19 = this.add.image(0, 163, "text_box_empty");
		text_box_empty_19.scaleX = 0.85;
		text_box_empty_19.scaleY = 0.85;
		page20.add(text_box_empty_19);

		// bitmaptext_25
		const bitmaptext_25 = this.add.bitmapText(0, 163, "pixelmix_16", "And their roots hang in water,\nreceiving nutrients directly.");
		bitmaptext_25.setOrigin(0.5, 0.5);
		bitmaptext_25.text = "And their roots hang in water,\nreceiving nutrients directly.";
		bitmaptext_25.fontSize = 16;
		bitmaptext_25.align = 1;
		page20.add(bitmaptext_25);

		// rectangle
		const rectangle = this.add.rectangle(451, 0, 213, 281);
		rectangle.angle = 6;
		rectangle.isFilled = true;
		rectangle.fillColor = 10246716;
		page20.add(rectangle);

		// plant_ss_2
		const plant_ss_2 = this.add.image(451, 0, "plant_ss_2");
		plant_ss_2.scaleX = 0.3;
		plant_ss_2.scaleY = 0.3;
		plant_ss_2.angle = 6;
		page20.add(plant_ss_2);

		// page21
		const page21 = this.add.container(640, 310);

		// tilapia_new_1
		const tilapia_new_1 = this.add.image(3, 0, "tilapia_new", 0);
		tilapia_new_1.scaleX = 3;
		tilapia_new_1.scaleY = 3;
		page21.add(tilapia_new_1);

		// tb
		const tb = this.add.container(0, 305);
		page21.add(tb);

		// text_box_empty_20
		const text_box_empty_20 = this.add.image(0, 0, "text_box_empty");
		text_box_empty_20.scaleX = 0.85;
		text_box_empty_20.scaleY = 0.85;
		tb.add(text_box_empty_20);

		// bitmaptext_26
		const bitmaptext_26 = this.add.bitmapText(0, 0, "pixelmix_16", "Using your knowledge of aquaponics,\n let's step towards building\n your own virtual aquaponics system!");
		bitmaptext_26.setOrigin(0.5, 0.5);
		bitmaptext_26.text = "Using your knowledge of aquaponics,\n let's step towards building\n your own virtual aquaponics system!";
		bitmaptext_26.fontSize = 16;
		bitmaptext_26.align = 1;
		tb.add(bitmaptext_26);

		this.background = background;
		this.cycle = cycle;
		this.page1 = page1;
		this.page2 = page2;
		this.page3 = page3;
		this.page4 = page4;
		this.page5 = page5;
		this.page6 = page6;
		this.page7 = page7;
		this.page8 = page8;
		this.page9 = page9;
		this.page10 = page10;
		this.page11 = page11;
		this.page12 = page12;
		this.page13 = page13;
		this.page14 = page14;
		this.page15 = page15;
		this.page16 = page16;
		this.page17 = page17;
		this.page18 = page18;
		this.page19 = page19;
		this.page20 = page20;
		this.page21 = page21;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	background;
	/** @type {Phaser.GameObjects.Image} */
	cycle;
	/** @type {Phaser.GameObjects.Container} */
	page1;
	/** @type {Phaser.GameObjects.Container} */
	page2;
	/** @type {Phaser.GameObjects.Container} */
	page3;
	/** @type {Phaser.GameObjects.Container} */
	page4;
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
	/** @type {Phaser.GameObjects.Container} */
	page11;
	/** @type {Phaser.GameObjects.Container} */
	page12;
	/** @type {Phaser.GameObjects.Container} */
	page13;
	/** @type {Phaser.GameObjects.Container} */
	page14;
	/** @type {Phaser.GameObjects.Container} */
	page15;
	/** @type {Phaser.GameObjects.Container} */
	page16;
	/** @type {Phaser.GameObjects.Container} */
	page17;
	/** @type {Phaser.GameObjects.Container} */
	page18;
	/** @type {Phaser.GameObjects.Container} */
	page19;
	/** @type {Phaser.GameObjects.Container} */
	page20;
	/** @type {Phaser.GameObjects.Container} */
	page21;

	/* START-USER-CODE */

	// Write your code here

	pg_counter = 1;
	max_pages = 21;
	// Define which pages should stay visible when advancing
	persistentPages = [3, 4, 5, 6, 7, 8, 15, 16, 17, 18, 19, 20];
	clearPersistent = [5, 8, 17, 20];
	showCycle = [9, 10, 11, 12, 13, 14];

create() {
    this.editorCreate();

	this.pg_counter = 1;
	this.max_pages = 21;

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
        this.advance_tut();
    });
}

advance_tut() {
    if (this.pg_counter < this.max_pages) {
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

		if (this.showCycle.includes(this.pg_counter + 1)) {
			this.cycle.setVisible(true);
		}
		else
		{
			this.cycle.setVisible(false);
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

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
