/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import { EventBus } from '../EventBus';
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

		// advance_button
		const advance_button = this.add.container(1192, 603);

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

		this.tasks_button = tasks_button;
		this.shop_button = shop_button;
		this.journal_button = journal_button;
		this.mail_button = mail_button;
		this.system_button = system_button;

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

	/* START-USER-CODE */

	// Write your code here
    create ()
    {

        this.editorCreate();

        EventBus.emit('current-scene-ready', this);

        this.shop_button.on("pointerdown", () => {
            this.scene.start('Shop'); // Still works!
        });

        this.system_button.on("pointerdown", () => {
            //this.scene.start('System'); // Still works!
			this.scene.pause();
			this.scene.launch('System');
        });

    }


    changeScene ()
    {
        if (this.logoTween)
        {
            this.logoTween.stop();
            this.logoTween = null;
        }

        this.scene.start('Game');
    }


    moveLogo (reactCallback)
    {
        if (this.logoTween)
        {
            if (this.logoTween.isPlaying())
            {
                this.logoTween.pause();
            }
            else
            {
                this.logoTween.play();
            }
        }
        else
        {
            this.logoTween = this.tweens.add({
                targets: this.logo,
                x: { value: 750, duration: 3000, ease: 'Back.easeInOut' },
                y: { value: 80, duration: 1500, ease: 'Sine.easeOut' },
                yoyo: true,
                repeat: -1,
                onUpdate: () => {
                    if (reactCallback)
                    {
                        reactCallback({
                            x: Math.floor(this.logo.x),
                            y: Math.floor(this.logo.y)
                        });
                    }
                }
            });
        }
    }

        /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
