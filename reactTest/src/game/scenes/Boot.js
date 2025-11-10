import { Scene } from 'phaser';

export default class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.

        this.load.image('background', 'assets/bg.png');
    }

    create ()
    {
        this.registry.set('money', 100);
        this.registry.set('water_use', 0);
        this.registry.set('energy_use', 0);
        this.registry.set('fish_amount', 0);
        this.registry.set('plant_amount', 0);
        this.scene.start('Preloader');
    }
}
