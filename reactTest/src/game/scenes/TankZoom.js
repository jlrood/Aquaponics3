
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class TankZoom extends Phaser.Scene {

	constructor() {
		super("TankZoom");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// back
		const back = this.add.rectangle(0, 0, 1280, 720);
		back.setOrigin(0, 0);
		back.isFilled = true;
		back.fillColor = 15465709;

		// back_button
		const back_button = this.add.image(50, 50, "back button");
		back_button.setInteractive(new Phaser.Geom.Ellipse(16, 16, 32, 32), Phaser.Geom.Ellipse.Contains);
		back_button.scaleX = 2;
		back_button.scaleY = 2;

		// title_back
		const title_back = this.add.image(640, 68, "text_box_empty");
		title_back.scaleX = 0.5;
		title_back.scaleY = 0.5;

		// title
		const title = this.add.bitmapText(640, 50, "pixelmix_32", "Tank Zoom");
		title.setOrigin(0.5, 0);
		title.text = "Tank Zoom";
		title.fontSize = 32;

		// tank_back
		const tank_back = this.add.rectangle(50, 140, 1180, 390);
		tank_back.setOrigin(0, 0);
		tank_back.isFilled = true;
		tank_back.fillColor = 6000018;
		tank_back.isStroked = true;
		tank_back.strokeColor = 4473924;
		tank_back.lineWidth = 10;

		// tool_bar
		const tool_bar = this.add.rectangle(50, 530, 1180, 140);
		tool_bar.setOrigin(0, 0);
		tool_bar.isFilled = true;
		tool_bar.fillColor = 4473924;
		tool_bar.isStroked = true;
		tool_bar.strokeColor = 4473924;
		tool_bar.lineWidth = 10;

		// divider_middle
		const divider_middle = this.add.rectangle(640, 600, 1, 120);
		divider_middle.isFilled = true;
		divider_middle.isStroked = true;
		divider_middle.lineWidth = 5;

		// divider_left
		const divider_left = this.add.rectangle(345, 600, 1, 120);
		divider_left.isFilled = true;
		divider_left.isStroked = true;
		divider_left.lineWidth = 5;

		// divider_right
		const divider_right = this.add.rectangle(935, 600, 1, 120);
		divider_right.isFilled = true;
		divider_right.isStroked = true;
		divider_right.lineWidth = 5;

		// tool1_header
		const tool1_header = this.add.bitmapText(197, 600, "pixelmix_24", "Fish Tank");
		tool1_header.setOrigin(0.5, 0.5);
		tool1_header.tintFill = true;
		tool1_header.text = "Fish Tank";
		tool1_header.fontSize = 24;

		// tool2_header
		const tool2_header = this.add.bitmapText(364, 540, "pixelmix_16", "Current Fish:");
		tool2_header.tintFill = true;
		tool2_header.text = "Current Fish:";
		tool2_header.fontSize = 16;

		// cur_fish_name
		const cur_fish_name = this.add.bitmapText(364, 564, "pixelmix_16", "None");
		cur_fish_name.tintFill = true;
		cur_fish_name.text = "None";
		cur_fish_name.fontSize = 16;

		// cur_fish_box
		const cur_fish_box = this.add.rectangle(572, 600, 100, 100);
		cur_fish_box.isFilled = true;
		cur_fish_box.fillColor = 4473924;
		cur_fish_box.isStroked = true;
		cur_fish_box.lineWidth = 5;

		// tool3_header
		const tool3_header = this.add.bitmapText(658, 540, "pixelmix_16", "Status:");
		tool3_header.tintFill = true;
		tool3_header.text = "Status:";
		tool3_header.fontSize = 16;

		// zoom_out_button
		const zoom_out_button = this.add.rectangle(1083, 565, 264, 56);
		zoom_out_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 264, 56), Phaser.Geom.Rectangle.Contains);
		zoom_out_button.isFilled = true;
		zoom_out_button.isStroked = true;
		zoom_out_button.lineWidth = 5;

		// change_fish_button
		const change_fish_button = this.add.rectangle(1083, 635, 264, 56);
		change_fish_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 264, 56), Phaser.Geom.Rectangle.Contains);
		change_fish_button.isFilled = true;
		change_fish_button.isStroked = true;
		change_fish_button.lineWidth = 5;

		// zoom_out_text
		const zoom_out_text = this.add.bitmapText(1083, 565, "pixelmix_24", "Zoom Out");
		zoom_out_text.setOrigin(0.5, 0.5);
		zoom_out_text.tintFill = true;
		zoom_out_text.tintTopLeft = 4473924;
		zoom_out_text.tintTopRight = 4473924;
		zoom_out_text.tintBottomLeft = 4473924;
		zoom_out_text.tintBottomRight = 4473924;
		zoom_out_text.text = "Zoom Out";
		zoom_out_text.fontSize = 24;

		// change_fish_text
		const change_fish_text = this.add.bitmapText(1083, 635, "pixelmix_24", "Change Fish");
		change_fish_text.setOrigin(0.5, 0.5);
		change_fish_text.tintFill = true;
		change_fish_text.tintTopLeft = 4473924;
		change_fish_text.tintTopRight = 4473924;
		change_fish_text.tintBottomLeft = 4473924;
		change_fish_text.tintBottomRight = 4473924;
		change_fish_text.text = "Change Fish";
		change_fish_text.fontSize = 24;

		// selected_box
		const selected_box = this.add.rectangle(662, 329, 128, 128);
		selected_box.visible = false;
		selected_box.isStroked = true;
		selected_box.strokeColor = 1893396;
		selected_box.lineWidth = 5;

		// bitmaptext
		const bitmaptext = this.add.bitmapText(734, 584, "pixelmix_32", "Fishy");
		bitmaptext.tintFill = true;
		bitmaptext.text = "Fishy";
		bitmaptext.fontSize = 32;

		this.back_button = back_button;
		this.cur_fish_name = cur_fish_name;
		this.zoom_out_button = zoom_out_button;
		this.change_fish_button = change_fish_button;
		this.selected_box = selected_box;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	back_button;
	/** @type {Phaser.GameObjects.BitmapText} */
	cur_fish_name;
	/** @type {Phaser.GameObjects.Rectangle} */
	zoom_out_button;
	/** @type {Phaser.GameObjects.Rectangle} */
	change_fish_button;
	/** @type {Phaser.GameObjects.Rectangle} */
	selected_box;

	/* START-USER-CODE */

	analyzeFish(posX, posY, index, item) {
		this.selected_box.setVisible(true);
		this.selected_box.setPosition(posX, posY);
		this.setFishArrIndex(index);
		this.cur_fish_name.text = item.shopText;
	}

	changeFish() {
		this.fishArrIndex += 1;
		if (this.fishArr[this.fishArrIndex] == null) {
			this.fishArrIndex = 0;
		}
		const fish = this.fishArr[this.fishArrIndex].icon;
		const fishItem = this.fishArr[this.fishArrIndex].item;
		this.analyzeFish(fish.x, fish.y, this.fishArrIndex, fishItem);
	}

	setFishArrIndex(i) {
		this.fishArrIndex = i;
	}

	addFish(fishItem, fishIndex) {
		const x = Phaser.Math.Between(125, 1165);
		const y = Phaser.Math.Between(180, 485);
		const fish = this.add.sprite(x, y, fishItem.sprite);
		fish.scale = 2;
		fish.setInteractive(new Phaser.Geom.Rectangle(0, 0, 64, 64), Phaser.Geom.Rectangle.Contains);
		fish.on("pointerdown", () => {
			this.analyzeFish(x, y, fishIndex, fishItem);
		})

		this.fishArr[fishIndex] = {icon: fish, item: fishItem};
	}

	populateTank() {
		let itemsArr = this.registry.get('items');
		let fishIndex = 0;
		for (let i = 0; i < itemsArr[0].playerHas; i++) {
			this.addFish(itemsArr[0], fishIndex);
			fishIndex++;
		}
		for (let i = 0; i < itemsArr[1].playerHas; i++) {
			this.addFish(itemsArr[1], fishIndex);
			fishIndex++;
		}
		for (let i = 0; i < itemsArr[2].playerHas; i++) {
			this.addFish(itemsArr[2], fishIndex);
			fishIndex++;
		}
		for (let i = 0; i < itemsArr[3].playerHas; i++) {
			this.addFish(itemsArr[3], fishIndex);
			fishIndex++;
		}
	}

	create() {

		this.editorCreate();
		this.fishArr = new Array(256);
		this.fishArrIndex = 0;
		this.populateTank();

		this.back_button.on("pointerdown", () => {
			this.scene.start('MainMenu');
		})

		this.zoom_out_button.on("pointerdown", () => {
			this.scene.start('MainMenu');
		})

		this.change_fish_button.on("pointerdown", () => {
			this.changeFish();
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
