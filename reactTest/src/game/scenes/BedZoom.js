
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class BedZoom extends Phaser.Scene {

	constructor() {
		super("BedZoom");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// back
		const back = this.add.rectangle(0.001443850765797193, 0.036571545019831314, 1280, 720);
		back.setOrigin(0, 0);
		back.isFilled = true;
		back.fillColor = 15465709;

		// back_button
		const back_button = this.add.image(50.001443850765796, 50.03657154501983, "back button");
		back_button.setInteractive(new Phaser.Geom.Ellipse(16, 16, 32, 32), Phaser.Geom.Ellipse.Contains);
		back_button.scaleX = 2;
		back_button.scaleY = 2;

		// title_back
		const title_back = this.add.image(640.0014438507658, 68.03657154501983, "text_box_empty");
		title_back.scaleX = 0.5;
		title_back.scaleY = 0.5;

		// title
		const title = this.add.bitmapText(640.0014438507658, 50.03657154501983, "pixelmix_32", "Plant Bed Zoom");
		title.setOrigin(0.5, 0);
		title.text = "Plant Bed Zoom";
		title.fontSize = 32;

		// bed_back
		const bed_back = this.add.rectangle(50.001443850765796, 140.03657154501983, 1180, 390);
		bed_back.setOrigin(0, 0);
		bed_back.isFilled = true;
		bed_back.fillColor = 15794124;
		bed_back.isStroked = true;
		bed_back.strokeColor = 4473924;
		bed_back.lineWidth = 10;

		// tool_bar
		const tool_bar = this.add.rectangle(50.001443850765796, 530.0365715450198, 1180, 140);
		tool_bar.setOrigin(0, 0);
		tool_bar.isFilled = true;
		tool_bar.fillColor = 4473924;
		tool_bar.isStroked = true;
		tool_bar.strokeColor = 4473924;
		tool_bar.lineWidth = 10;

		// divider_middle
		const divider_middle = this.add.rectangle(640.0014438507658, 600.0365715450198, 1, 120);
		divider_middle.isFilled = true;
		divider_middle.isStroked = true;
		divider_middle.lineWidth = 5;

		// divider_left
		const divider_left = this.add.rectangle(345.0014438507658, 600.0365715450198, 1, 120);
		divider_left.isFilled = true;
		divider_left.isStroked = true;
		divider_left.lineWidth = 5;

		// divider_right
		const divider_right = this.add.rectangle(935.0014438507658, 600.0365715450198, 1, 120);
		divider_right.isFilled = true;
		divider_right.isStroked = true;
		divider_right.lineWidth = 5;

		// tool1_header
		const tool1_header = this.add.bitmapText(197.0014438507658, 600.0365715450198, "pixelmix_24", "Plant Bed");
		tool1_header.setOrigin(0.5, 0.5);
		tool1_header.tintFill = true;
		tool1_header.text = "Plant Bed";
		tool1_header.fontSize = 24;

		// tool2_header
		const tool2_header = this.add.bitmapText(364.0014438507658, 540.0365715450198, "pixelmix_16", "Current Plant:");
		tool2_header.tintFill = true;
		tool2_header.text = "Current Plant:";
		tool2_header.fontSize = 16;

		// cur_plant_name
		const cur_plant_name = this.add.bitmapText(364.0014438507658, 564.0365715450198, "pixelmix_16", "None");
		cur_plant_name.tintFill = true;
		cur_plant_name.text = "None";
		cur_plant_name.fontSize = 16;

		// cur_plant_box
		const cur_plant_box = this.add.rectangle(572.0014438507658, 600.0365715450198, 100, 100);
		cur_plant_box.isFilled = true;
		cur_plant_box.fillColor = 4473924;
		cur_plant_box.isStroked = true;
		cur_plant_box.lineWidth = 5;

		// tool3_header
		const tool3_header = this.add.bitmapText(658.0014438507658, 540.0365715450198, "pixelmix_16", "Status:");
		tool3_header.tintFill = true;
		tool3_header.text = "Status:";
		tool3_header.fontSize = 16;

		// zoom_out_button
		const zoom_out_button = this.add.rectangle(1083.0014438507658, 565.0365715450198, 264, 56);
		zoom_out_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 264, 56), Phaser.Geom.Rectangle.Contains);
		zoom_out_button.isFilled = true;
		zoom_out_button.isStroked = true;
		zoom_out_button.lineWidth = 5;

		// change_plant_button
		const change_plant_button = this.add.rectangle(1083.0014438507658, 635.0365715450198, 264, 56);
		change_plant_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 264, 56), Phaser.Geom.Rectangle.Contains);
		change_plant_button.isFilled = true;
		change_plant_button.isStroked = true;
		change_plant_button.lineWidth = 5;

		// zoom_out_text
		const zoom_out_text = this.add.bitmapText(1083.0014438507658, 565.0365715450198, "pixelmix_24", "Zoom Out");
		zoom_out_text.setOrigin(0.5, 0.5);
		zoom_out_text.tintFill = true;
		zoom_out_text.tintTopLeft = 4473924;
		zoom_out_text.tintTopRight = 4473924;
		zoom_out_text.tintBottomLeft = 4473924;
		zoom_out_text.tintBottomRight = 4473924;
		zoom_out_text.text = "Zoom Out";
		zoom_out_text.fontSize = 24;

		// change_plant_text
		const change_plant_text = this.add.bitmapText(1083.0014438507658, 635.0365715450198, "pixelmix_24", "Change Plant");
		change_plant_text.setOrigin(0.5, 0.5);
		change_plant_text.tintFill = true;
		change_plant_text.tintTopLeft = 4473924;
		change_plant_text.tintTopRight = 4473924;
		change_plant_text.tintBottomLeft = 4473924;
		change_plant_text.tintBottomRight = 4473924;
		change_plant_text.text = "Change Plant";
		change_plant_text.fontSize = 24;

		// selected_box
		const selected_box = this.add.rectangle(662.0014438507658, 329.03657154501985, 128, 128);
		selected_box.visible = false;
		selected_box.isStroked = true;
		selected_box.strokeColor = 1893396;
		selected_box.lineWidth = 5;

		// bitmaptext_1
		const bitmaptext_1 = this.add.bitmapText(734.0014438507658, 584.0365715450198, "pixelmix_32", "Green");
		bitmaptext_1.tintFill = true;
		bitmaptext_1.text = "Green";
		bitmaptext_1.fontSize = 32;

		this.back_button = back_button;
		this.cur_plant_name = cur_plant_name;
		this.zoom_out_button = zoom_out_button;
		this.change_plant_button = change_plant_button;
		this.selected_box = selected_box;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	back_button;
	/** @type {Phaser.GameObjects.BitmapText} */
	cur_plant_name;
	/** @type {Phaser.GameObjects.Rectangle} */
	zoom_out_button;
	/** @type {Phaser.GameObjects.Rectangle} */
	change_plant_button;
	/** @type {Phaser.GameObjects.Rectangle} */
	selected_box;

	/* START-USER-CODE */

	/**
	 * Moves the green selection box to be on the same
	 * origin as the current plant, and changes the
	 * current plant text to be the correct one.
	 */
	analyzePlant(posX, posY, index, item) {
		this.selected_box.setVisible(true);
		this.selected_box.setPosition(posX, posY);
		this.setPlantArrIndex(index);
		this.cur_plant_name.text = item.shopText;
	}

	/**
	 * Called when pushing the "change plant" button.
	 * It iterates the plant array, and analyzes the new
	 * plant.
	 */
	changePlant() {
		this.plantArrIndex += 1;
		if (this.plantArr[this.plantArrIndex] == null) {
			this.plantArrIndex = 0;
		}
		const plant = this.plantArr[this.plantArrIndex].icon;
		const plantItem = this.plantArr[this.plantArrIndex].item;
		this.analyzePlant(plant.x, plant.y, this.plantArrIndex, plantItem);
	}

	//Sets the plant index.
	setPlantArrIndex(i) {
		this.plantArrIndex = i;
	}

	/**
	 * Adds a single plant as a sprite to the scene,
	 * and gives it a handler function for if the user
	 * clicks on it.
	 * 
	 * Additionally, stores the plant in the array as it's
	 * graphical icon and it's item information.
	 */
	addPlant(plantItem, plantIndex) {
		const x = Phaser.Math.Between(125, 1165);
		const y = Phaser.Math.Between(180, 485);
		const plant = this.add.sprite(x, y, plantItem.sprite);
		plant.scale = 2;
		plant.setInteractive(new Phaser.Geom.Rectangle(0, 0, 64, 64), Phaser.Geom.Rectangle.Contains);
		plant.on("pointerdown", () => {
			this.analyzePlant(x, y, plantIndex, plantItem);
		})

		this.plantArr[plantIndex] = {icon: plant, item: plantItem};
	}

	/**
	 * Populates the bed with all the plants that the player has.
	 * It fills an array of all the player's plants so that
	 * the "change plant" button has an order to follow.
	 */
	populateBed() {
		let itemsArr = this.registry.get('items');
		let plantIndex = 0;
		//For each seed...
		for (let i = 0; i < itemsArr[8].playerHas; i++) {
			this.addPlant(itemsArr[8], plantIndex);
			plantIndex++;
		}
		//For each sprout...
		for (let i = 0; i < itemsArr[9].playerHas; i++) {
			this.addPlant(itemsArr[9], plantIndex);
			plantIndex++;
		}
		//For each seedling...
		for (let i = 0; i < itemsArr[10].playerHas; i++) {
			this.addPlant(itemsArr[10], plantIndex);
			plantIndex++;
		}
		//For each young...
		for (let i = 0; i < itemsArr[11].playerHas; i++) {
			this.addPlant(itemsArr[11], plantIndex);
			plantIndex++;
		}
		//For each head...
		for (let i = 0; i < itemsArr[12].playerHas; i++) {
			this.addPlant(itemsArr[12], plantIndex);
			plantIndex++;
		}
	}

	create() {

		this.editorCreate();
		this.plantArr = new Array(256);
		this.plantArrIndex = 0;
		this.populateBed();

		this.back_button.on("pointerdown", () => {
			this.scene.start('MainMenu');
		})

		this.zoom_out_button.on("pointerdown", () => {
			this.scene.start('MainMenu');
		})

		this.change_plant_button.on("pointerdown", () => {
			this.changePlant();
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
