
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

		// check_ph_text
		const check_ph_text = this.add.bitmapText(784, 565, "pixelmix_24", "");
		check_ph_text.setOrigin(0.5, 0.5);
		check_ph_text.tintFill = true;
		check_ph_text.tintTopLeft = 4473924;
		check_ph_text.tintTopRight = 4473924;
		check_ph_text.tintBottomLeft = 4473924;
		check_ph_text.tintBottomRight = 4473924;
		check_ph_text.fontSize = 24;

		// increase_ph_button
		const increase_ph_button = this.add.rectangle(785, 635, 264, 56);
		increase_ph_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 264, 56), Phaser.Geom.Rectangle.Contains);
		increase_ph_button.isFilled = true;
		increase_ph_button.isStroked = true;
		increase_ph_button.lineWidth = 5;

		// increase_ph_text
		const increase_ph_text = this.add.bitmapText(785, 635, "pixelmix_24", "Increase pH");
		increase_ph_text.setOrigin(0.5, 0.5);
		increase_ph_text.tintFill = true;
		increase_ph_text.tintTopLeft = 4473924;
		increase_ph_text.tintTopRight = 4473924;
		increase_ph_text.tintBottomLeft = 4473924;
		increase_ph_text.tintBottomRight = 4473924;
		increase_ph_text.text = "Increase pH";
		increase_ph_text.fontSize = 24;

		// status_text
		const status_text = this.add.bitmapText(655, 540, "pixelmix_16", "Status:");
		status_text.tintFill = true;
		status_text.text = "Status:";
		status_text.fontSize = 16;

		// ph_level
		const ph_level = this.add.bitmapText(655, 564, "pixelmix_16", "None");
		ph_level.tintFill = true;
		ph_level.text = "None";
		ph_level.fontSize = 16;

		this.back_button = back_button;
		this.cur_fish_name = cur_fish_name;
		this.zoom_out_button = zoom_out_button;
		this.change_fish_button = change_fish_button;
		this.selected_box = selected_box;
		this.increase_ph_button = increase_ph_button;
		this.ph_level = ph_level;

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
	/** @type {Phaser.GameObjects.Rectangle} */
	increase_ph_button;
	/** @type {Phaser.GameObjects.BitmapText} */
	ph_level;

	/* START-USER-CODE */

	/** @type {number} */
	currentPH;

	/**
	 * Moves the green selection box to be on the same
	 * origin as the current fish, and changes the
	 * current fish text to be the correct one.
	 */
	analyzeFish(posX, posY, index, item) {
		this.setFishArrIndex(index);

		const entry = this.fishArr[index];
		const fish = entry ? entry.icon : null;

		if (fish) {
			this.selected_box.setVisible(true);
			this.selected_box.setPosition(fish.x, fish.y);
		}

		this.cur_fish_name.text = item.shopText;
	}


	/**
	 * Called when pushing the "change fish" button.
	 * It iterates the fish array, and analyzes the new
	 * fish.
	 */
	changeFish() {
		this.fishArrIndex += 1;
		if (this.fishArr[this.fishArrIndex] == null) {
			this.fishArrIndex = 0;
		}
		const fish = this.fishArr[this.fishArrIndex].icon;
		const fishItem = this.fishArr[this.fishArrIndex].item;
		this.analyzeFish(fish.x, fish.y, this.fishArrIndex, fishItem);
	}

	//Sets the fish index.
	setFishArrIndex(i) {
		this.fishArrIndex = i;
	}

	/**
	 * Adds a single fish as a sprite to the scene,
	 * and gives it a handler function for if the user
	 * clicks on it.
	 * 
	 * Additionally, stores the fish in the array as it's
	 * graphical icon and it's item information.
	 */
	addFish(fishItem, fishIndex) {
		const x = Phaser.Math.Between(125, 1165)
		const y = Phaser.Math.Between(180, 485)

		const fish = this.add.sprite(x, y, fishItem.sprite)

		fish.scaleY = 2
		fish.scaleX = 2        // base size only

		fish.tint = 0x659bba
		fish.setInteractive(new Phaser.Geom.Rectangle(0, 0, 64, 64), Phaser.Geom.Rectangle.Contains)

		const speed = Phaser.Math.Between(40, 80)
		const dirX = Phaser.Math.Between(0, 1) === 0 ? -1 : 1

		fish.vx = speed * dirX
		fish.vy = Phaser.Math.Between(-15, 15)

		fish.play(`${fishItem.sprite}-swim`)

		fish.on("pointerdown", () => {
			this.analyzeFish(fish.x, fish.y, fishIndex, fishItem)
		})

		this.fishArr[fishIndex] = { icon: fish, item: fishItem }
	}



	/**
	 * Populates the tank with all the fish that the player has.
	 * It fills an array of all the player's fish so that
	 * the "change fish" button has an order to follow.
	 */
	populateTank() {
		let itemsArr = this.registry.get('items');
		let fishIndex = 0;
		//For each tilapia larvae...
		for (let i = 0; i < itemsArr[0].playerHas; i++) {
			this.addFish(itemsArr[0], fishIndex);
			fishIndex++;
		}
		//For each tilapia fingerling...
		for (let i = 0; i < itemsArr[1].playerHas; i++) {
			this.addFish(itemsArr[1], fishIndex);
			fishIndex++;
		}
		//For each tilapia juvenile...
		for (let i = 0; i < itemsArr[2].playerHas; i++) {
			this.addFish(itemsArr[2], fishIndex);
			fishIndex++;
		}
		//For each tilapia adult...
		for (let i = 0; i < itemsArr[3].playerHas; i++) {
			this.addFish(itemsArr[3], fishIndex);
			fishIndex++;
		}
	}

	updatePHDisplay(ph) {
		// text
		this.ph_level.text = `pH: ${ph.toFixed(1)}`

		// safe range 6.5 to 7.5
		const safe = ph >= 6.5 && ph <= 7.5

		if (safe) {
			// bright green, force-fill the bitmap text
			this.ph_level.setTintFill(0x00ff00)
		} else {
			// bright red
			this.ph_level.setTintFill(0xff0000)
		}
	}


	create() {

		this.editorCreate();
		this.fishArr = new Array(256);
		this.fishArrIndex = 0;

		this.back_button.on("pointerdown", () => {
			this.scene.start('MainMenu');
		})

		this.zoom_out_button.on("pointerdown", () => {
			this.scene.start('MainMenu');
		})

		this.change_fish_button.on("pointerdown", () => {
			this.changeFish();
		})

		this.anims.create({
			key: 'larvae-swim',
			frames: this.anims.generateFrameNumbers('larvae', { start: 0, end: 1 }), // adjust frame count
			frameRate: 4,
			repeat: -1, // -1 means loop forever
		})

		this.anims.create({
			key: 'fingerling-swim',
			frames: this.anims.generateFrameNumbers('fingerling', { start: 0, end: 1 }), // adjust frame count
			frameRate: 4,
			repeat: -1, // -1 means loop forever
		})

		this.anims.create({
			key: 'juvenile-swim',
			frames: this.anims.generateFrameNumbers('juvenile', { start: 0, end: 1 }), // adjust frame count
			frameRate: 4,
			repeat: -1, // -1 means loop forever
		})

		this.anims.create({
			key: 'tilapia_new-swim',
			frames: this.anims.generateFrameNumbers('tilapia_new', { start: 0, end: 2 }), // adjust frame count
			frameRate: 4,
			repeat: -1, // -1 means loop forever
		})

		this.populateTank();

		// pH setup
		let storedPH = this.registry.get('waterPH');

		if (typeof storedPH !== 'number') {
			// default value, you can change this
			storedPH = 7.0;
			this.registry.set('waterPH', storedPH);
		}

		this.currentPH = storedPH;
		this.updatePHDisplay(this.currentPH);

		// Increase pH button
		this.increase_ph_button.on('pointerdown', () => {
			// raise pH a bit
			this.currentPH += 0.5;
			if (this.currentPH > 8.5) {
				this.currentPH = 8.5;
			}

			this.registry.set('waterPH', this.currentPH);
			this.updatePHDisplay(this.currentPH);
		});
	}

	update(time, delta) {
		const left = 125
		const right = 1165
		const top = 180
		const bottom = 485

		const dt = delta / 1000

		for (let i = 0; i < this.fishArr.length; i++) {
			const entry = this.fishArr[i]
			if (!entry) continue

			const fish = entry.icon
			if (!fish) continue

			fish.x += fish.vx * dt
			fish.y += fish.vy * dt

			// horizontal bounce
			if (fish.x < left) {
				fish.x = left
				fish.vx = Math.abs(fish.vx)
			} else if (fish.x > right) {
				fish.x = right
				fish.vx = -Math.abs(fish.vx)
			}

			// vertical bounce
			if (fish.y < top) {
				fish.y = top
				fish.vy = Math.abs(fish.vy)
			} else if (fish.y > bottom) {
				fish.y = bottom
				fish.vy = -Math.abs(fish.vy)
			}

			// after the for-loop that moves all fish
			//it'll check/move the selected box as well.
			if (this.selected_box.visible) {
				const entry = this.fishArr[this.fishArrIndex];
				if (entry && entry.icon) {
					const fish = entry.icon;
					this.selected_box.setPosition(fish.x, fish.y);
				}
			}

			// face the direction of travel
			// your art faces LEFT when scaleX = +2, so invert:
			if (fish.vx > 0) {
				// moving right, flip horizontally
				fish.scaleX = -2
			} else if (fish.vx < 0) {
				// moving left, normal
				fish.scaleX = 2
			}
		}

		// sync pH text if something else changed waterPH
		const registryPH = this.registry.get('waterPH');
		if (typeof registryPH === 'number' && registryPH !== this.currentPH) {
			this.currentPH = registryPH;
			this.updatePHDisplay(this.currentPH);
		}

	}



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
