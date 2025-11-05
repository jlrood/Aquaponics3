
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

		// Title
		const title = this.add.text(336, 50, "", {});
		title.text = "SHOP";
		title.setStyle({ "color": "#000000ff", "fontSize": "48px" });

		// rectangle_3
		const rectangle_3 = this.add.rectangle(40, 220, 698, 466);
		rectangle_3.setOrigin(0, 0);
		rectangle_3.isFilled = true;
		rectangle_3.isStroked = true;
		rectangle_3.strokeColor = 0;

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
		const fish_Text = this.add.text(84, 20, "", {});
		fish_Text.setOrigin(0.5, 0);
		fish_Text.text = "Fish\n";
		fish_Text.setStyle({ "color": "#000000ff", "fontSize": "32px" });
		tab_container.add(fish_Text);

		// Plants_Text
		const plants_Text = this.add.text(261, 20, "", {});
		plants_Text.setOrigin(0.5, 0);
		plants_Text.text = "Plants";
		plants_Text.setStyle({ "color": "#000000ff", "fontSize": "32px" });
		tab_container.add(plants_Text);

		// Systems_Text
		const systems_Text = this.add.text(371, 20, "", {});
		systems_Text.text = "Systems";
		systems_Text.setStyle({ "color": "#000000ff", "fontSize": "32px" });
		tab_container.add(systems_Text);

		// Equips_Text
		const equips_Text = this.add.text(555, 20, "", {});
		equips_Text.text = "Equips";
		equips_Text.setStyle({ "color": "#000000ff", "fontSize": "32px" });
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
		const backText = this.add.text(0, 0, "", {});
		backText.text = "Back";
		backText.setStyle({ "color": "#000000ff" });
		back_container.add(backText);

		// system_container
		const system_container = this.add.container(760, 45);

		// rectangle_4
		const rectangle_4 = this.add.rectangle(0, 75, 484, 565);
		rectangle_4.setOrigin(0, 0);
		rectangle_4.isFilled = true;
		rectangle_4.isStroked = true;
		rectangle_4.strokeColor = 0;
		system_container.add(rectangle_4);

		// CurrentSys_Text
		const currentSys_Text = this.add.text(25, 0, "", {});
		currentSys_Text.text = "Current System";
		currentSys_Text.setStyle({ "color": "#000000ff", "fontSize": "50px" });
		system_container.add(currentSys_Text);

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

		this.events.emit("scene-awake");
	}

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

	/* START-USER-CODE */

	toggleBoxColor(box) {
    	box.fillColor = (box.fillColor === 0xffffff) ? 0x428544 : 0xffffff;
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

		this.back_Button.on("pointerdown", () => {
            this.scene.start('MainMenu'); // Still works!
        });

		this.fish_Box.on("pointerdown", () => {
            this.fish_Box.fillColor = 0x428544;
			this.plant_Box.fillColor = 0xffffff;
			this.system_Box.fillColor = 0xffffff;
			this.equip_Box.fillColor = 0xffffff;
			this.wipeOptions();
        });

		this.plant_Box.on("pointerdown", () => {
            this.fish_Box.fillColor = 0xffffff;
			this.plant_Box.fillColor = 0x428544;
			this.system_Box.fillColor = 0xffffff;
			this.equip_Box.fillColor = 0xffffff;
			this.wipeOptions();
        });

		this.system_Box.on("pointerdown", () => {
            this.fish_Box.fillColor = 0xffffff;
			this.plant_Box.fillColor = 0xffffff;
			this.system_Box.fillColor = 0x428544;
			this.equip_Box.fillColor = 0xffffff;
			this.wipeOptions();
        });

		this.equip_Box.on("pointerdown", () => {
            this.fish_Box.fillColor = 0xffffff;
			this.plant_Box.fillColor = 0xffffff;
			this.system_Box.fillColor = 0xffffff;
			this.equip_Box.fillColor = 0x428544;
			this.wipeOptions();
        });

		this.option_box_1.on("pointerdown", () => {
			this.toggleBoxColor(this.option_box_1);
		})

		this.option_box_2.on("pointerdown", () => {
			this.toggleBoxColor(this.option_box_2);
		})

		this.option_box_3.on("pointerdown", () => {
			this.toggleBoxColor(this.option_box_3);
		})

		this.option_box_4.on("pointerdown", () => {
			this.toggleBoxColor(this.option_box_4);
		})

		this.option_box_5.on("pointerdown", () => {
			this.toggleBoxColor(this.option_box_5);
		})

		this.option_box_6.on("pointerdown", () => {
			this.toggleBoxColor(this.option_box_6);
		})

		this.option_box_7.on("pointerdown", () => {
			this.toggleBoxColor(this.option_box_7);
		})

		this.option_box_8.on("pointerdown", () => {
			this.toggleBoxColor(this.option_box_8);
		})

		this.option_box_9.on("pointerdown", () => {
			this.toggleBoxColor(this.option_box_9);
		})

		this.option_box_10.on("pointerdown", () => {
			this.toggleBoxColor(this.option_box_10);
		})

		this.option_box_11.on("pointerdown", () => {
			this.toggleBoxColor(this.option_box_11);
		})

		this.option_box_12.on("pointerdown", () => {
			this.toggleBoxColor(this.option_box_12);
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here



