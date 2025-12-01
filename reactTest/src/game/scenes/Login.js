
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Login extends Phaser.Scene {

	constructor() {
		super("Login");

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
		const help = this.add.image(1141, 48, "question");
		help.scaleX = 2;
		help.scaleY = 2;

		// title
		const title = this.add.image(653, 148, "title");
		title.scaleX = 2;
		title.scaleY = 2;

		// settings
		const settings = this.add.image(1218, 47, "settings");
		settings.scaleX = 2;
		settings.scaleY = 2;

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
