
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class System extends Phaser.Scene {

	constructor() {
		super("System");

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
		background.fillColor = 29709;
		background.isStroked = true;
		background.strokeColor = 0;

		// back_container
		const back_container = this.add.container(151, 120);

		// back_button
		const back_button = this.add.ellipse(19, 10, 128, 128);
		back_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		back_button.scaleX = 0.5;
		back_button.scaleY = 0.5;
		back_button.isFilled = true;
		back_button.isStroked = true;
		back_button.strokeColor = 0;
		back_container.add(back_button);

		// back_text
		const back_text = this.add.text(0, 0, "", {});
		back_text.text = "Back";
		back_text.setStyle({ "color": "#000000ff" });
		back_container.add(back_text);

		// week_container
		const week_container = this.add.container(674, 190);

		// week_button
		const week_button = this.add.rectangle(0, 0, 145, 60);
		week_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 145, 60), Phaser.Geom.Rectangle.Contains);
		week_button.setOrigin(0, 0);
		week_button.isFilled = true;
		week_button.isStroked = true;
		week_button.strokeColor = 0;
		week_container.add(week_button);

		// week_text
		const week_text = this.add.text(72, 30, "", {});
		week_text.setOrigin(0.5, 0.5);
		week_text.text = "Week";
		week_text.setStyle({ "color": "#000000ff", "fontSize": "32px" });
		week_container.add(week_text);

		// month_container
		const month_container = this.add.container(829, 190);

		// month_button
		const month_button = this.add.rectangle(0, 0, 145, 60);
		month_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 145, 60), Phaser.Geom.Rectangle.Contains);
		month_button.setOrigin(0, 0);
		month_button.isFilled = true;
		month_button.isStroked = true;
		month_button.strokeColor = 0;
		month_container.add(month_button);

		// month_text
		const month_text = this.add.text(72, 30, "", {});
		month_text.setOrigin(0.5, 0.5);
		month_text.text = "Month";
		month_text.setStyle({ "color": "#000000ff", "fontSize": "32px" });
		month_container.add(month_text);

		// year_container
		const year_container = this.add.container(984, 190);

		// year_button
		const year_button = this.add.rectangle(0, 0, 145, 60);
		year_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 145, 60), Phaser.Geom.Rectangle.Contains);
		year_button.setOrigin(0, 0);
		year_button.isFilled = true;
		year_button.isStroked = true;
		year_button.strokeColor = 0;
		year_container.add(year_button);

		// year_text
		const year_text = this.add.text(72, 30, "", {});
		year_text.setOrigin(0.5, 0.5);
		year_text.text = "Year";
		year_text.setStyle({ "color": "#000000ff", "fontSize": "32px" });
		year_container.add(year_text);

		// stat_container
		const stat_container = this.add.container(150, 190);

		// stat_box
		const stat_box = this.add.rectangle(0, 0, 500, 150);
		stat_box.setOrigin(0, 0);
		stat_box.isFilled = true;
		stat_box.isStroked = true;
		stat_box.strokeColor = 0;
		stat_container.add(stat_box);

		// divider
		const divider = this.add.rectangle(250, 75, 5, 128);
		divider.isFilled = true;
		divider.fillColor = 0;
		stat_container.add(divider);

		// money_value
		const money_value = this.add.text(50, 38, "", {});
		money_value.setOrigin(0, 0.5);
		money_value.text = "[Money Value]";
		money_value.setStyle({ "color": "#000000ff", "fontSize": "24px" });
		stat_container.add(money_value);

		// fish_amount
		const fish_amount = this.add.text(50, 75, "", {});
		fish_amount.setOrigin(0, 0.5);
		fish_amount.text = "[Fish Amount]";
		fish_amount.setStyle({ "color": "#000000ff", "fontSize": "24px" });
		stat_container.add(fish_amount);

		// plant_amount
		const plant_amount = this.add.text(50, 112, "", {});
		plant_amount.setOrigin(0, 0.5);
		plant_amount.text = "[Plant Amount]";
		plant_amount.setStyle({ "color": "#000000ff", "fontSize": "24px" });
		stat_container.add(plant_amount);

		// text_3
		const text_3 = this.add.text(14, 30, "", {});
		text_3.text = "[I]";
		text_3.setStyle({ "color": "#000000ff" });
		stat_container.add(text_3);

		// text_4
		const text_4 = this.add.text(12, 107, "", {});
		text_4.text = "[I]";
		text_4.setStyle({ "color": "#000000ff" });
		stat_container.add(text_4);

		// text_5
		const text_5 = this.add.text(15, 66, "", {});
		text_5.text = "[I]";
		text_5.setStyle({ "color": "#000000ff" });
		stat_container.add(text_5);

		// energy_rate
		const energy_rate = this.add.text(300, 50, "", {});
		energy_rate.setOrigin(0, 0.5);
		energy_rate.text = "[Energy Rate]";
		energy_rate.setStyle({ "color": "#000000ff", "fontSize": "24px" });
		stat_container.add(energy_rate);

		// water_rate
		const water_rate = this.add.text(300, 100, "", {});
		water_rate.setOrigin(0, 0.5);
		water_rate.text = "[Water Rate]";
		water_rate.setStyle({ "color": "#000000ff", "fontSize": "24px" });
		stat_container.add(water_rate);

		// text_6
		const text_6 = this.add.text(262, 44, "", {});
		text_6.text = "[I]";
		text_6.setStyle({ "color": "#000000ff" });
		stat_container.add(text_6);

		// text_7
		const text_7 = this.add.text(263, 90, "", {});
		text_7.text = "[I]";
		text_7.setStyle({ "color": "#000000ff" });
		stat_container.add(text_7);

		// system_container
		const system_container = this.add.container(150, 363);

		// system_graph_box
		const system_graph_box = this.add.rectangle(0, 0, 500, 190);
		system_graph_box.setInteractive(new Phaser.Geom.Rectangle(0, 0, 500, 190), Phaser.Geom.Rectangle.Contains);
		system_graph_box.setOrigin(0, 0);
		system_graph_box.isFilled = true;
		system_graph_box.isStroked = true;
		system_graph_box.strokeColor = 0;
		system_container.add(system_graph_box);

		// system_header
		const system_header = this.add.text(250, 210, "", {});
		system_header.setOrigin(0.5, 0);
		system_header.text = "System";
		system_header.setStyle({ "color": "#000000ff", "fontSize": "32px" });
		system_container.add(system_header);

		// production_container
		const production_container = this.add.container(674, 273);

		// production_graph_box
		const production_graph_box = this.add.rectangle(0, 0, 455, 280);
		production_graph_box.setInteractive(new Phaser.Geom.Rectangle(0, 0, 455, 280), Phaser.Geom.Rectangle.Contains);
		production_graph_box.setOrigin(0, 0);
		production_graph_box.isFilled = true;
		production_graph_box.isStroked = true;
		production_graph_box.strokeColor = 0;
		production_container.add(production_graph_box);

		// production_header
		const production_header = this.add.text(227, 300, "", {});
		production_header.setOrigin(0.5, 0);
		production_header.text = "Production";
		production_header.setStyle({ "color": "#000000ff", "fontSize": "32px" });
		production_container.add(production_header);

		this.back_button = back_button;
		this.week_button = week_button;
		this.month_button = month_button;
		this.year_button = year_button;
		this.money_value = money_value;
		this.fish_amount = fish_amount;
		this.plant_amount = plant_amount;
		this.energy_rate = energy_rate;
		this.water_rate = water_rate;
		this.system_graph_box = system_graph_box;
		this.production_graph_box = production_graph_box;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Ellipse} */
	back_button;
	/** @type {Phaser.GameObjects.Rectangle} */
	week_button;
	/** @type {Phaser.GameObjects.Rectangle} */
	month_button;
	/** @type {Phaser.GameObjects.Rectangle} */
	year_button;
	/** @type {Phaser.GameObjects.Text} */
	money_value;
	/** @type {Phaser.GameObjects.Text} */
	fish_amount;
	/** @type {Phaser.GameObjects.Text} */
	plant_amount;
	/** @type {Phaser.GameObjects.Text} */
	energy_rate;
	/** @type {Phaser.GameObjects.Text} */
	water_rate;
	/** @type {Phaser.GameObjects.Rectangle} */
	system_graph_box;
	/** @type {Phaser.GameObjects.Rectangle} */
	production_graph_box;

	/* START-USER-CODE */

	/**
	 * This should get our graph of production, depending
	 * on the setting that the user chose.
	 */
	getProdGraph(str) {
		if (str == 'w') {
			//Retrieve week graph
		}
		else if (str == 'm') {
			//Retrieve month graph
		}
		else {
			//Retrieve year graph
		}
	}

	/**
	 * This should get all the values needed for display
	 * and retrieve our graph of energy and water.
	 * 
	 * It should also assign these values to the appropriate
	 * text objects.
	 */
	populateSystemGraphAndValues() {
		//Part 1: Retrieval - TODO
		//Tests for now
		let money = this.registry.get('money');
		let water = this.registry.get('water_use');
        let energy = this.registry.get('energy_use');
        let fish = this.registry.get('fish_amount');
        let plants = this.registry.get('plant_amount');
		//Part 2: Assigning
		this.money_value.text = money;
		this.fish_amount.text = fish;
		this.plant_amount.text = plants;
		this.energy_rate.text = water;
		this.water_rate.text = energy;
	}

	create() {

		this.editorCreate();

		this.populateSystemGraphAndValues();

		this.back_button.on("pointerdown", () => {
			// Stop this overlay scene
            this.scene.stop();
            // Resume the underlying main scene
            this.scene.resume('MainMenu');
		})

		this.week_button.on("pointerdown", () => {
            this.week_button.fillColor = 0x428544;
			this.month_button.fillColor = 0xffffff;
			this.year_button.fillColor = 0xffffff;
			this.getProdGraph('w');
        });

		this.month_button.on("pointerdown", () => {
            this.week_button.fillColor = 0xffffff;
			this.month_button.fillColor = 0x428544;
			this.year_button.fillColor = 0xffffff;
			this.getProdGraph('m');
        });

		this.year_button.on("pointerdown", () => {
            this.week_button.fillColor = 0xffffff;
			this.month_button.fillColor = 0xffffff;
			this.year_button.fillColor = 0x428544;
			this.getProdGraph('y');
        });
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */