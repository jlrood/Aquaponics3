
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Tutorial extends Phaser.Scene {

	constructor() {
		super("Tutorial");

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
		background.fillColor = 5084783;

		// help
		this.add.image(1228, 45, "help");

		// title
		const title = this.add.image(653, 132, "title");
		title.scaleX = 1.8406697932199103;
		title.scaleY = 1.8503780327126584;

		this.background = background;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	background;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.showLoginForm()
	}

	showLoginForm() {
  	this.load.html('tutorialForm', 'assets/login/loginform.html')

  	this.load.once(Phaser.Loader.Events.COMPLETE, () => {
    const form = this.add.dom(640, 420).createFromCache('tutorialForm')

    form.addListener('click')

    form.on('click', event => {
  	if (event.target.name === 'loginButton') {
    	const username = form.getChildByName('username')
    	const password = form.getChildByName('password')

    if (username.value !== '' && password.value !== '') {

        form.setVisible(false)

        this.scene.start("MainMenu")
    }
	}

    })
  })

  this.load.start()
}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
