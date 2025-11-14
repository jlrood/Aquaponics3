/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import Phaser from 'phaser'
import WeekSystem, { WEEK_CHANGED } from '../systems/WeekSystem.js'
import createWeekOverlay from '../ui/WeekOverlay.js'
import { EventBus } from '../../EventBus.js'


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

		// rectangle_1
		const rectangle_1 = this.add.rectangle(65, 376, 72, 350);
		rectangle_1.isStroked = true;
		rectangle_1.strokeColor = 0;
		rectangle_1.lineWidth = 3;

		// ellipse_1
		const ellipse_1 = this.add.ellipse(65, 70, 96, 96);
		ellipse_1.isStroked = true;
		ellipse_1.strokeColor = 0;
		ellipse_1.lineWidth = 3;

		// ellipse
		const ellipse = this.add.ellipse(1177, 70, 70, 70);
		ellipse.isStroked = true;
		ellipse.strokeColor = 0;
		ellipse.lineWidth = 3;

		// ellipse_2
		const ellipse_2 = this.add.ellipse(1072, 70, 70, 70);
		ellipse_2.isStroked = true;
		ellipse_2.strokeColor = 0;
		ellipse_2.lineWidth = 3;

		// ellipse_3
		const ellipse_3 = this.add.ellipse(43, 683, 125, 125);
		ellipse_3.isStroked = true;
		ellipse_3.strokeColor = 0;
		ellipse_3.lineWidth = 3;

		// achievement_box
		const achievement_box = this.add.container(1094, 202);

		// rectangle
		const rectangle = this.add.rectangle(35.125, 0.25, 201, 148);
		rectangle.isFilled = true;
		rectangle.fillColor = 8239586;
		rectangle.strokeColor = 0;
		rectangle.lineWidth = 3;
		achievement_box.add(rectangle);

		// text_1
		const text_1 = this.add.text(-22.875, -7.25, "", {});
		text_1.text = "ACHIEVEMENTS";
		text_1.setStyle({ "color": "#000000ff", "resolution": 2 });
		achievement_box.add(text_1);

		// plant_bed
		const plant_bed = this.add.container(444, 303);

		// plant_box
		const plant_box = this.add.rectangle(36.125, 3.375, 330, 182);
		plant_box.isFilled = true;
		plant_box.fillColor = 10413212;
		plant_bed.add(plant_box);

		// plant_box_label
		const plant_box_label = this.add.text(36.125, 3.375, "", {});
		plant_box_label.setOrigin(0.5, 0.5);
		plant_box_label.text = "PLANT BED";
		plant_box_label.setStyle({ "color": "#000000ff", "resolution": 2 });
		plant_bed.add(plant_box_label);

		// fish_tank
		const fish_tank = this.add.container(892, 471);

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
		tasks_button.text = "TASKS";
		tasks_button.setStyle({ "color": "#000000ff", "resolution": 5 });
		left_menu.add(tasks_button);

		// shop_button
		const shop_button = this.add.text(0, -64.98373750765813, "", {});
		shop_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 39, 15), Phaser.Geom.Rectangle.Contains);
		shop_button.setOrigin(0.5, 0.5);
		shop_button.text = "SHOP";
		shop_button.setStyle({ "color": "#000000ff", "resolution": 5 });
		left_menu.add(shop_button);

		// journal_button
		const journal_button = this.add.text(0, 0.016262492341866164, "", {});
		journal_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 68, 15), Phaser.Geom.Rectangle.Contains);
		journal_button.setOrigin(0.5, 0.5);
		journal_button.text = "JOURNAL";
		journal_button.setStyle({ "color": "#000000ff", "resolution": 5 });
		left_menu.add(journal_button);

		// mail_button
		const mail_button = this.add.text(0, 65.01626249234187, "", {});
		mail_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 39, 15), Phaser.Geom.Rectangle.Contains);
		mail_button.setOrigin(0.5, 0.5);
		mail_button.text = "MAIL";
		mail_button.setStyle({ "color": "#000000ff", "resolution": 5 });
		left_menu.add(mail_button);

		// system_button
		const system_button = this.add.text(0, 130.01626249234187, "", {});
		system_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 58, 15), Phaser.Geom.Rectangle.Contains);
		system_button.setOrigin(0.5, 0.5);
		system_button.text = "SYSTEM";
		system_button.setStyle({ "color": "#000000ff", "resolution": 5 });
		left_menu.add(system_button);

		// container_2
		const container_2 = this.add.container(1192, 603);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(0, 41, 115, 86);
		rectangle_2.isStroked = true;
		rectangle_2.strokeColor = 0;
		rectangle_2.lineWidth = 3;
		container_2.add(rectangle_2);

		// triangle_1
		const triangle_1 = this.add.triangle(72, 0, 40, 128, 64, 80, 88, 128);
		triangle_1.angle = 90;
		triangle_1.isFilled = true;
		triangle_1.fillColor = 0;
		triangle_1.isStroked = true;
		triangle_1.strokeColor = 0;
		triangle_1.lineWidth = 3;
		container_2.add(triangle_1);

		// triangle
		const triangle = this.add.triangle(97, 0, 40, 128, 64, 80, 88, 128);
		triangle.angle = 90;
		triangle.isFilled = true;
		triangle.fillColor = 0;
		triangle.isStroked = true;
		triangle.strokeColor = 0;
		triangle.lineWidth = 3;
		container_2.add(triangle);

		// advance_button
		const advance_button = this.add.container(-14, 19);
		container_2.add(advance_button);
		
		// circleW2
		const circleW2 = this.add.ellipse(326, 90, 128, 128);
		circleW2.name = "circleW2";
		circleW2.visible = false;
		circleW2.isFilled = true;

		// squareW3
		const squareW3 = this.add.image(465, 48, "star");
		squareW3.name = "squareW3";
		squareW3.visible = false;

		this.tasks_button = tasks_button;
		this.shop_button = shop_button;
		this.journal_button = journal_button;
		this.mail_button = mail_button;
		this.system_button = system_button;
		this.advance_button = advance_button;

		this.events.emit("scene-awake");
	}

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
	/** @type {Phaser.GameObjects.Container} */
	advance_button;

	/* START-USER-CODE */

create() {
  this.editorCreate();

	if (!this.advance_button) {
		// fallback if you missed the edit
  		this.advance_button = this.children.getByName && this.children.getByName('advance_button');
		}
	if (!this.advance_button) {
  console.error('advance_button missing');
  return;
	}

  	// initialize week system inside create()
  this.week = new WeekSystem(this, 6);

  // simple HUD
  this.weekText = this.add.text(20, 16, `Week ${this.week.week}`, { color: '#000', fontSize: '24px' });

  this.week.on(WEEK_CHANGED, wk => {
    this.weekText.setText(`Week ${wk}`);
    this.applyWeekRules(wk);
  });

// after this.editorCreate()

this.advance_button.setSize(115, 86);
this.advance_button.setInteractive({ useHandCursor: true });
this.advance_button.on('pointerdown', async () => {
  if (this.week.isFinalWeek()) return;
  await this.showWeekOverlay({ week: this.week.week });
  this.week.nextWeek();
});
this.advance_button.iterate?.(c => c.disableInteractive && c.disableInteractive());

  const adv = this.children.getByName?.('advance_button') || null;
  if (adv) {
    adv.setInteractive(new Phaser.Geom.Rectangle(0, 0, 115, 86), Phaser.Geom.Rectangle.Contains);
    adv.on('pointerdown', async () => {
      if (this.week.isFinalWeek()) return;
      await this.showWeekOverlay({ week: this.week.week });
      this.week.nextWeek();
    });
  }

  this.applyWeekRules(this.week.week);

  // existing button handlers
  EventBus.emit('current-scene-ready', this);
  this.shop_button.on('pointerdown', () => { this.scene.start('Shop'); });
  this.system_button.on('pointerdown', () => { this.scene.start('System'); });

// rectangle_2 advances the week
	const rect2 = this.children.getByName && this.children.getByName('rectangle_2')
	if (rect2) {
  		rect2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 115, 86), Phaser.Geom.Rectangle.Contains)
  		rect2.on('pointerdown', async () => {
    		if (this.week.isFinalWeek()) return
    		await this.showWeekOverlay({ week: this.week.week })
    		this.week.nextWeek()
  })

	}

	// pick up editor objects by name
this.circleW2 = this.children.getByName && this.children.getByName('circleW2') || this.circleW2
this.squareW3 = this.children.getByName && this.children.getByName('squareW3') || this.squareW3

// guard
if (!this.circleW2 || !this.squareW3) console.warn('week shapes not found')

// simple pop animation
this.popIn = go => {
  if (!go) return
  go.setScale(0.01).setVisible(true)
  this.tweens.add({ targets: go, scale: 1, duration: 280, ease: 'Back.Out' })
}






}

applyWeekRules(wk) {
  // examples of temporary per-week changes
  // Week 1 hide SYSTEM button, show from Week 2
  this.system_button.setVisible(wk >= 2)

  if (wk >= 2) {
    if (this.circleW2 && !this.circleW2.visible) this.popIn(this.circleW2)
  } else if (this.circleW2) {
    this.circleW2.setVisible(false)
  }

  if (wk >= 3) {
    if (this.squareW3 && !this.squareW3.visible) this.popIn(this.squareW3)
  } else if (this.squareW3) {
    this.squareW3.setVisible(false)
  }

   
  if (wk < 3) {

  } else {

  }

  // Week 5 remove tutorial circles
  const c1 = this.children.getByName?.('ellipse_1')
  const c2 = this.children.getByName?.('ellipse_2')
  if (wk >= 5) {
    c1?.destroy()
    c2?.destroy()
  }
}

showWeekOverlay(data) {
  return createWeekOverlay(this, {
    title: `Week ${data.week} complete`,
    message: 'Good work. New actions unlocked next week.'
  })
}


/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
