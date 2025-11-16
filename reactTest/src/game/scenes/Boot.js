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
        this.registry.set('items', [
            {id: 'tilapiaLarvae', playerHas: 0, price: 1, shopText: "Tilapia\nLarvae", sprite: 'larvae'},
            {id: 'tilapiaFingerling', playerHas: 0, price: 2, shopText: "Tilapia\nFingerling", sprite: 'fingerling'},
            {id: 'tilapiaJuvenile', playerHas: 0, price: 5, shopText: "Tilapia\nJuvenile", sprite: 'juvenile'},
            {id: 'tilapiaAdult', playerHas: 0, price: 10, shopText: "Tilapia\nAdult", sprite: 'tilapia_new'},
            {id: 'barramundiLarvae', playerHas: 0, price: 2, shopText: "Barramundi\nLarvae"},
            {id: 'barramundiFingerling', playerHas: 0, price: 5, shopText: "Barramundi\nFingerling"},
            {id: 'barramundiJuvenile', playerHas: 0, price: 10, shopText: "Barramundi\nJuvenile"},
            {id: 'barramundiAdult', playerHas: 0, price: 20, shopText: "Barramundi\nAdult"},
            {id: 'parrisIslandRomaineSeeds', playerHas: 0, price: 1, shopText: "Romaine\nLettuce\nSprout"},
            {id: 'parrisIslandRomaineGrown', playerHas: 0, price: 5, shopText: "Romaine\nLettuce"},
            {id: 'growBed', playerHas: 0, price: 20, shopText: "Grow Bed"},
            {id: 'fluorescentLight', playerHas: 0, price: 15, shopText: "F. Light"},
            {id: 'tankSensor', playerHas: 0, price: 20, shopText: "Tank\nSensor"},
            {id: 'regTank', playerHas: 0, price: 30, shopText: "Fish Tank"},
            {id: 'premiumTank', playerHas: 0, price: 80, shopText: "Premium\nFish Tank"},
            {id: 'plantTray', playerHas: 0, price: 10, shopText: "Plant\nTray"},
            {id: 'pHMeter', playerHas: 0, price: 5, shopText: "pH Meter"}
        ]);
        this.scene.start('Preloader');
    }
}
