/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import Phaser from 'phaser'
import { EventBus } from '../EventBus';
import WeekSystem, { WEEK_CHANGED } from '../../systems/WeekSystem'
import createWeekOverlay from '../../ui/WeekOverlay'
import AgingSystem from '../../systems/AgingSystem';
/* END-USER-IMPORTS */

export default class MainMenu extends Phaser.Scene {

	constructor() {
		super("MainMenu");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// bg
		const bg = this.add.sprite(640, 360, "bg", 0);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(65, 376, 72, 350);
		rectangle_1.isFilled = true;
		rectangle_1.isStroked = true;
		rectangle_1.strokeColor = 0;
		rectangle_1.lineWidth = 3;

		// ellipse_1
		const ellipse_1 = this.add.ellipse(65, 70, 96, 96);
		ellipse_1.visible = false;
		ellipse_1.isStroked = true;
		ellipse_1.strokeColor = 0;
		ellipse_1.lineWidth = 3;

		// ellipse
		const ellipse = this.add.ellipse(1177, 70, 70, 70);
		ellipse.visible = false;
		ellipse.isStroked = true;
		ellipse.strokeColor = 0;
		ellipse.lineWidth = 3;

		// ellipse_2
		const ellipse_2 = this.add.ellipse(1072, 70, 70, 70);
		ellipse_2.visible = false;
		ellipse_2.isStroked = true;
		ellipse_2.strokeColor = 0;
		ellipse_2.lineWidth = 3;

		// achievement_box
		const achievement_box = this.add.container(892, 187);

		// rectangle
		const rectangle = this.add.rectangle(35.125, 0.25, 201, 148);
		rectangle.visible = false;
		rectangle.isFilled = true;
		rectangle.fillColor = 8239586;
		rectangle.strokeColor = 0;
		rectangle.lineWidth = 3;
		achievement_box.add(rectangle);

		// text_1
		const text_1 = this.add.bitmapText(-22.875, -7.25, "pixelmix_16", "ACHIEVEMENTS");
		text_1.visible = false;
		text_1.text = "ACHIEVEMENTS";
		text_1.fontSize = 15;
		achievement_box.add(text_1);

		// plant_bed
		const plant_bed = this.add.container(444, 303);
		plant_bed.visible = false;

		// plant_box
		const plant_box = this.add.rectangle(37.5625, 3.1875, 330, 182);
		plant_box.isFilled = true;
		plant_box.fillColor = 10413212;
		plant_bed.add(plant_box);

		// bitmaptext_2
		const bitmaptext_2 = this.add.bitmapText(37.5625, 3.1875, "pixelmix_16", "PLANT BED");
		bitmaptext_2.setOrigin(0.5, 0.5);
		bitmaptext_2.text = "PLANT BED";
		bitmaptext_2.fontSize = 16;
		plant_bed.add(bitmaptext_2);

		// fish_tank
		const fish_tank = this.add.container(892, 471);
		fish_tank.visible = false;

		// fish_box
		const fish_box = this.add.rectangle(36.125, 3.375, 330, 182);
		fish_box.isFilled = true;
		fish_box.fillColor = 8891617;
		fish_tank.add(fish_box);

		// fish_box_label
		const fish_box_label = this.add.text(36.125, 3.375, "", {});
		fish_box_label.setOrigin(0.5, 0.5);
		fish_box_label.text = "FISH TANK";
		fish_box_label.setStyle({ "color": "#000000ff", "resolution": 2 });
		fish_tank.add(fish_box_label);

		// filter
		const filter = this.add.container(425.5, 552.5);
		filter.visible = false;

		// filter_box
		const filter_box = this.add.rectangle(0, 0, 117, 198);
		filter_box.isStroked = true;
		filter_box.strokeColor = 0;
		filter_box.lineWidth = 2;
		filter.add(filter_box);

		// filter_box_label
		const filter_box_label = this.add.text(0, 0, "", {});
		filter_box_label.setOrigin(0.5, 0.5);
		filter_box_label.text = "FILTER";
		filter_box_label.setStyle({ "color": "#000000ff", "resolution": 2 });
		filter.add(filter_box_label);

		// left_menu
		const left_menu = this.add.container(65, 370.9837155707536);

		// tasks_button
		const tasks_button = this.add.text(0, -129.98373750765813, "", {});
		tasks_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 49, 15), Phaser.Geom.Rectangle.Contains);
		tasks_button.setOrigin(0.5, 0.5);
		tasks_button.visible = false;
		tasks_button.text = "TASKS";
		tasks_button.setStyle({ "color": "#000000ff", "resolution": 5 });
		left_menu.add(tasks_button);

		// shop_button
		const shop_button = this.add.text(0, -64.98373750765813, "", {});
		shop_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 39, 15), Phaser.Geom.Rectangle.Contains);
		shop_button.setOrigin(0.5, 0.5);
		shop_button.visible = false;
		shop_button.text = "SHOP";
		shop_button.setStyle({ "color": "#000000ff", "resolution": 5 });
		left_menu.add(shop_button);

		// journal_button
		const journal_button = this.add.text(0, 0.016262492341866164, "", {});
		journal_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 68, 15), Phaser.Geom.Rectangle.Contains);
		journal_button.setOrigin(0.5, 0.5);
		journal_button.visible = false;
		journal_button.text = "JOURNAL";
		journal_button.setStyle({ "color": "#000000ff", "resolution": 5 });
		left_menu.add(journal_button);

		// mail_button
		const mail_button = this.add.text(0, 65.01626249234187, "", {});
		mail_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 39, 15), Phaser.Geom.Rectangle.Contains);
		mail_button.setOrigin(0.5, 0.5);
		mail_button.visible = false;
		mail_button.text = "MAIL";
		mail_button.setStyle({ "color": "#000000ff", "resolution": 5 });
		left_menu.add(mail_button);

		// system_button
		const system_button = this.add.text(0, 130.01626586914062, "", {});
		system_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 58, 15), Phaser.Geom.Rectangle.Contains);
		system_button.setOrigin(0.5, 0.5);
		system_button.visible = false;
		system_button.text = "SYSTEM";
		system_button.setStyle({ "color": "#000000ff", "resolution": 5 });
		left_menu.add(system_button);

		// task_icon
		const task_icon = this.add.image(0, -130, "task icon");
		task_icon.setInteractive(new Phaser.Geom.Rectangle(0, 0, 64, 64), Phaser.Geom.Rectangle.Contains);
		task_icon.scaleX = 2;
		task_icon.scaleY = 2;
		left_menu.add(task_icon);

		// shop_icon
		const shop_icon = this.add.image(0, -61, "shop icon");
		shop_icon.setInteractive(new Phaser.Geom.Rectangle(0, 0, 64, 64), Phaser.Geom.Rectangle.Contains);
		shop_icon.scaleX = 2;
		shop_icon.scaleY = 2;
		left_menu.add(shop_icon);

		// journal_icon
		const journal_icon = this.add.image(0, 8, "journal icon");
		journal_icon.setInteractive(new Phaser.Geom.Rectangle(0, 0, 64, 64), Phaser.Geom.Rectangle.Contains);
		journal_icon.scaleX = 2;
		journal_icon.scaleY = 2;
		left_menu.add(journal_icon);

		// mail_icon
		const mail_icon = this.add.image(0, 77, "mail icon");
		mail_icon.setInteractive(new Phaser.Geom.Rectangle(0, 0, 64, 64), Phaser.Geom.Rectangle.Contains);
		mail_icon.scaleX = 2;
		mail_icon.scaleY = 2;
		left_menu.add(mail_icon);

		// system_icon
		const system_icon = this.add.image(0, 146, "system icon");
		system_icon.setInteractive(new Phaser.Geom.Rectangle(0, 0, 64, 64), Phaser.Geom.Rectangle.Contains);
		system_icon.scaleX = 2;
		system_icon.scaleY = 2;
		left_menu.add(system_icon);

		// advance_button
		const advance_button = this.add.container(1192, 603);
		advance_button.visible = false;

		// rectangle_2
		const rectangle_2 = this.add.rectangle(0, 41, 115, 86);
		rectangle_2.isStroked = true;
		rectangle_2.strokeColor = 0;
		rectangle_2.lineWidth = 3;
		advance_button.add(rectangle_2);

		// triangle_1
		const triangle_1 = this.add.triangle(72, 0, 40, 128, 64, 80, 88, 128);
		triangle_1.angle = 90;
		triangle_1.isFilled = true;
		triangle_1.fillColor = 0;
		triangle_1.isStroked = true;
		triangle_1.strokeColor = 0;
		triangle_1.lineWidth = 3;
		advance_button.add(triangle_1);

		// triangle
		const triangle = this.add.triangle(97, 0, 40, 128, 64, 80, 88, 128);
		triangle.angle = 90;
		triangle.isFilled = true;
		triangle.fillColor = 0;
		triangle.isStroked = true;
		triangle.strokeColor = 0;
		triangle.lineWidth = 3;
		advance_button.add(triangle);

		// advance
		const advance = this.add.image(1192, 644, "advance");
		advance.name = "advance";
		advance.setInteractive(new Phaser.Geom.Rectangle(0, 0, 32, 32), Phaser.Geom.Rectangle.Contains);
		advance.scaleX = 4;
		advance.scaleY = 4;

		// profile
		const profile = this.add.image(65, 69, "profile");
		profile.scaleX = 4;
		profile.scaleY = 4;

		// help
		const help = this.add.image(1072, 70, "help");
		help.visible = false;

		// settings
		const settings = this.add.image(1177, 70, "settings");
		settings.scaleX = 2;
		settings.scaleY = 2;

		// question
		const question = this.add.image(1092, 70, "question");
		question.scaleX = 2;
		question.scaleY = 2;

		// text_box_empty
		this.add.image(628, 591, "text_box_empty");

		// bitmaptext_1
		const bitmaptext_1 = this.add.bitmapText(628, 591, "pixelmix_16", "Welcome to Grow n' Flow!");
		bitmaptext_1.setOrigin(0.5, 0.5);
		bitmaptext_1.text = "Welcome to Grow n' Flow!";
		bitmaptext_1.fontSize = 16;

		// multiplayer_icon
		const multiplayer_icon = this.add.image(64, 665, "multiplayer icon");
		multiplayer_icon.scaleX = 1.5;
		multiplayer_icon.scaleY = 1.5;

		// tank_screen_trigger
		const tank_screen_trigger = this.add.image(958, 468, "transparent");
		tank_screen_trigger.setInteractive(new Phaser.Geom.Ellipse(150, 150, 300, 300), Phaser.Geom.Ellipse.Contains);
		tank_screen_trigger.scaleX = 1.66;
		tank_screen_trigger.scaleY = 1.05;

		// bed_screen_trigger
		const bed_screen_trigger = this.add.image(432, 335, "transparent");
		bed_screen_trigger.setInteractive(new Phaser.Geom.Rectangle(0, 0, 300, 300), Phaser.Geom.Rectangle.Contains);
		bed_screen_trigger.scaleX = 1.5;
		bed_screen_trigger.scaleY = 0.41;

		this.bg = bg;
		this.tasks_button = tasks_button;
		this.shop_button = shop_button;
		this.journal_button = journal_button;
		this.mail_button = mail_button;
		this.system_button = system_button;
		this.task_icon = task_icon;
		this.shop_icon = shop_icon;
		this.journal_icon = journal_icon;
		this.mail_icon = mail_icon;
		this.system_icon = system_icon;
		this.advance = advance;
		this.tank_screen_trigger = tank_screen_trigger;
		this.bed_screen_trigger = bed_screen_trigger;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Sprite} */
	bg;
	/** @type {Phaser.GameObjects.Text} */
	tasks_button;
	/** @type {Phaser.GameObjects.Text} */
	shop_button;
	/** @type {Phaser.GameObjects.Text} */
	journal_button;
	/** @type {Phaser.GameObjects.Text} */
	mail_button;
	/** @type {Phaser.GameObjects.Text} */
	system_button;
	/** @type {Phaser.GameObjects.Image} */
	task_icon;
	/** @type {Phaser.GameObjects.Image} */
	shop_icon;
	/** @type {Phaser.GameObjects.Image} */
	journal_icon;
	/** @type {Phaser.GameObjects.Image} */
	mail_icon;
	/** @type {Phaser.GameObjects.Image} */
	system_icon;
	/** @type {Phaser.GameObjects.Image} */
	advance;
	/** @type {Phaser.GameObjects.Image} */
	tank_screen_trigger;
	/** @type {Phaser.GameObjects.Image} */
	bed_screen_trigger;

	/* START-USER-CODE */

	/** @type {Phaser.GameObjects.Rectangle} */
	tankHighlight;

	// Write your code here

	create() {

		this.editorCreate();

		this.cameras.main.setBackgroundColor('#ffffff')

		// base cursor for this scene
		this.input.setDefaultCursor('default');

		this.mailGlow = null;
		this.tankGlow = null;

		// Change to hand cursor when you hover over interactable icons.
		const handify = o => {
			if (!o) return;

			// If it already has input, keep its hitArea.
			if (!o.input) {
				o.setInteractive({ useHandCursor: true });
			}

			// hand only while over this object
			o.input.cursor = 'pointer';
		};

		// Icons are visible, so start with these
		[this.task_icon,
		this.shop_icon,
		this.journal_icon,
		this.mail_icon,
		this.system_icon,
		this.advance,
		this.tank_screen_trigger,
		this.bed_screen_trigger,
		].forEach(handify);

		// If you later show the text buttons, fix their hit areas then handify
		[this.tasks_button,
		this.shop_button,
		this.journal_button,
		this.mail_button,
		this.system_button,
		].forEach(handify);

		// small warning box above the tank trigger
		this.phWarningBox = this.add.rectangle(
			this.tank_screen_trigger.x,
			this.tank_screen_trigger.y - 180,
			260,
			60,
			0xffe08a,
			1
		)
			.setStrokeStyle(2, 0x000000)
			.setDepth(900)
			.setVisible(false)

		this.phWarningText = this.add.bitmapText(
			this.tank_screen_trigger.x,
			this.tank_screen_trigger.y - 180,
			'pixelmix_16',
			'      pH is low!\n Zoom in on the Tank!'
		)
			.setOrigin(0.5, 0.5)
			.setDepth(901)
			.setVisible(false)

		this.tankHighlight = this.add.ellipse(
			this.tank_screen_trigger.x + 8,
			this.tank_screen_trigger.y + 5,
			this.tank_screen_trigger.displayWidth * 1,
			this.tank_screen_trigger.displayHeight * 1,
			0xff0000,
			0.25
		)
			.setDepth(1)
			.setVisible(false);
		this.children.list.forEach(child => {
			if (
				child instanceof Phaser.GameObjects.Image &&
				child.texture &&
				child.texture.key === 'text_box_empty'
			) {
				child.setDepth(10);           // box frame
			}
			if (
				child instanceof Phaser.GameObjects.BitmapText &&
				child.text.includes("Welcome to Grow n' Flow")
			) {
				child.setDepth(11);           // bottom text
			}
		});

		// week system
		this.week = new WeekSystem(this, 6)

		// aging system
		this.ageSystem = new AgingSystem(this);


		// store current week for other scenes
		this.registry.set('currentWeek', this.week.week)

		// allows me to change the text without adding / hiding pages
		this.chatText = null
		this.children.list.forEach(child => {
			if (
				child instanceof Phaser.GameObjects.BitmapText &&
				child.text === 'Welcome to Grow n\' Flow!'
			) {
				this.chatText = child
			}
		})


		this.weekBackground = this.add.rectangle(
			this.scale.width - 12,
			20,
			100,
			32,
			0xfff1c4,
			1
		)
			.setOrigin(1, 0.5)
			.setStrokeStyle(2, 0x3b3131)
			.setDepth(998)

		this.weekText = this.add.bitmapText(
			this.scale.width - 24,
			20,
			"pixelmix_16",
			`Week ${this.week.week}`,
			16
		)
			.setOrigin(1, 0.5)
			.setDepth(999)

		// lock flag
		this.advanceLocked = false

		// advance click handler
		if (this.advance) {
			this.advance.on('pointerdown', async () => {
				if (this.advanceLocked) return
				if (this.week.isFinalWeek()) return

				await this.showWeekOverlay({ week: this.week.week })
				this.week.nextWeek()
			})
		}

		// react to week changes
		this.week.on(WEEK_CHANGED, wk => {
			this.weekText.setText(`Week ${wk}`)
			this.applyWeekPHDrop(wk);
			this.applyWeekNitrateDrop(wk)
			this.applyWeekRules(wk);
			if (this.ageSystem) {
				this.ageSystem.advanceWeek();
			}
		})

		this.applyWeekRules(this.week.week)


		// React bridge
		EventBus.emit('current-scene-ready', this)


		this.shop_icon.on("pointerdown", () => {
			this.scene.start('Shop');
		});

		this.system_icon.on("pointerdown", () => {
			this.scene.pause();
			this.scene.launch('System');
		});

		this.task_icon.on("pointerdown", () => {
			// Pause the main menu logic
			this.scene.pause();
			// Launch the overlay scene on top
			this.scene.launch('Tasks');
		});

		this.mail_icon.on("pointerdown", () => {
			this.scene.pause();
			this.scene.launch('Mail');
		});

		this.journal_icon.on("pointerdown", () => {
			this.scene.pause();
			this.scene.launch('Journal');
		});

		if (!this.anims.exists('bg')) {
			this.anims.create({
				key: 'bg',
				frames: this.anims.generateFrameNumbers('bg', {
					start: 0,
					end: 3
				}),
				frameRate: 1,
				repeat: -1
			});
		}

		this.tank_screen_trigger.on("pointerdown", () => {
			this.scene.start('TankZoom');
		})

		this.bed_screen_trigger.on("pointerdown", () => {
			this.scene.start('BedZoom');
		})

		// Play the background bubbles
		this.bg.play('bg');

		// initial pH warning state
		this.updateTankPHWarning();


	}


	changeScene() {
		if (this.logoTween) {
			this.logoTween.stop();
			this.logoTween = null;
		}

		this.scene.pause();
		this.scene.start('Cycle');
	}

	changeSceneSetup() {
		if (this.logoTween) {
			this.logoTween.stop();
			this.logoTween = null;
		}

		this.scene.pause();
		this.scene.launch('SetupTut');
	}


	moveLogo(reactCallback) {
		if (this.logoTween) {
			if (this.logoTween.isPlaying()) {
				this.logoTween.pause();
			}
			else {
				this.logoTween.play();
			}
		}
		else {
			this.logoTween = this.tweens.add({
				targets: this.logo,
				x: { value: 750, duration: 3000, ease: 'Back.easeInOut' },
				y: { value: 80, duration: 1500, ease: 'Sine.easeOut' },
				yoyo: true,
				repeat: -1,
				onUpdate: () => {
					if (reactCallback) {
						reactCallback({
							x: Math.floor(this.logo.x),
							y: Math.floor(this.logo.y)
						});
					}
				}
			});
		}
	}




	// week rules
	applyWeekRules(wk) {

		this.registry.set('currentWeek', wk)

		if (wk === 0) {
			if (this.advance) {
				this.advanceLocked = false
				this.advance.setTint(0x777777)
			}
			if (this.chatText) {
				this.chatText.setText('         Welcome to Grow n\' Flow!\nClick "Begin Setup Tutorial" to start.')
			}

			// no week-1 mail while in week 0
			this.registry.set('tutorialWeek1MailPending', false)
			this.updateMailIconNotification()
			return
		}
		//unlocks the advance button
		if (this.advance) {
			this.advanceLocked = false
			this.advance.clearTint()
		}

		// Week 1, fish + plants arrive by mail
		if (wk === 1) {

			if (!this.registry.get('tutorialWeek1MailReceived')) {
				this.registry.set('tutorialWeek1MailPending', true)

				if (this.chatText) {
					this.chatText.setText('         Great! You have completed the setup tutorial.\nCheck your mail for your first fish and plant arrivals.')
				}

			}
			if (this.advance) {
				this.advanceLocked = true
				this.advance.setTint(0x777777)
			}
			this.updateMailIconNotification()
		}
		//unlocks the advance button
		if (this.advance) {
			this.advanceLocked = false
			this.advance.clearTint()
		}
		if (wk === 2) {
			if (this.chatText) {
				this.chatText.setText(' Oh no! Your water pH has dropped significantly this week.\n '
					+ '                    Quick!! Save your Fish')
			}
		}
		if (wk === 3) {
			if (this.chatText) {
				this.chatText.setText(
					'Nitrate levels dropped.\nVisit the tank and feed the fish.'
				)
			}
		}
		this.updateMailIconNotification()
	}

	showWeekOverlay(data) {
		return createWeekOverlay(this, {
			title: `Week ${data.week} complete`,
			message: 'New actions unlocked next week.'
		})
	}

	updateMailIconNotification() {
		if (!this.mail_icon) return

		const hasMail = !!this.registry.get('tutorialWeek1MailPending')

		if (hasMail) {
			this.mail_icon.setTint(0xffff66)

			if (!this.mailGlow) {
				this.mailGlow = this.tweens.add({
					targets: this.mail_icon,
					alpha: { from: 1, to: 0.4 },
					duration: 500,
					yoyo: true,
					repeat: -1
				})
			}
		} else {
			this.mail_icon.clearTint()
			this.mail_icon.alpha = 1

			if (this.mailGlow) {
				this.mailGlow.stop()
				this.mailGlow.remove()
				this.mailGlow = null
			}
		}
	}

	updateTankPHWarning() {
		if (!this.tank_screen_trigger) return

		const ph = this.registry.get('waterPH')
		const low = typeof ph === 'number' && ph < 6.5

		if (low) {
			if (this.tankHighlight) this.tankHighlight.setVisible(true)

			if (!this.tankGlow && this.tankHighlight) {
				this.tankGlow = this.tweens.add({
					targets: this.tankHighlight,
					alpha: { from: 0.9, to: 0.3 },
					duration: 600,
					yoyo: true,
					repeat: -1
				})
			}

			if (this.phWarningBox) this.phWarningBox.setVisible(true)
			if (this.phWarningText) this.phWarningText.setVisible(true)
		} else {
			if (this.tankHighlight) {
				this.tankHighlight.setVisible(false)
				this.tankHighlight.alpha = 0.9
			}

			if (this.tankGlow) {
				this.tankGlow.stop()
				this.tankGlow.remove()
				this.tankGlow = null
			}

			if (this.phWarningBox) this.phWarningBox.setVisible(false)
			if (this.phWarningText) this.phWarningText.setVisible(false)
		}
	}

	// helper func because
	// pH drop is being used every time you exit in and out of the tank zoom
	applyWeekPHDrop(wk) {
		let ph = this.registry.get('waterPH')
		if (typeof ph !== 'number') ph = 7.5

		// count total tilapia
		const items = this.registry.get('items') || []
		const fishIds = ['tilapiaLarvae', 'tilapiaFingerling', 'tilapiaJuvenile', 'tilapiaAdult']
		let fishCount = 0
		for (const id of fishIds) {
			const it = items.find(i => i.id === id)
			if (it && typeof it.playerHas === 'number') {
				fishCount += it.playerHas
			}
		}

		// one-time drop for week 2
		if (wk === 2) {
			ph = ph - 2.0;
		} else if (wk >= 3) {
			const drop = 0.25 + 0.02 * fishCount
			ph = Math.max(5, ph - drop)
		}

		this.registry.set('waterPH', ph)
		this.updateTankPHWarning()
	}
	// similar helper func as ph
	applyWeekNitrateDrop(wk) {
		let nitrate = this.registry.get('waterNitrate')
		if (typeof nitrate !== 'number') nitrate = 5.0

		if (wk === 3) {
			nitrate = nitrate - 3.0
		}

		this.registry.set('waterNitrate', nitrate)
		this.updateTankNitrateWarning()
	}

	updateTankNitrateWarning() {
		const nitrate = this.registry.get('waterNitrate')
		if (typeof nitrate !== 'number') return

		// nitrate target range is 5 to 15
		const safe = nitrate >= 5 && nitrate <= 15

		if (!safe) {
			// show nitrate tutorial bubble or highlight the tank
			this.showTankNitrateBubble = true
		} else {
			this.showTankNitrateBubble = false
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
