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

        this.load.spritesheet(

            'tilapia_new',
            'assets/life/tilapia_new.png',
            {
            frameWidth: 64,   // width of one fish in pixels
            frameHeight: 64   // height of one fish in pixels
            }
        );

    }

    create ()
    {
        this.registry.set('money', 100);
        this.registry.set('water_use', 0);
        this.registry.set('energy_use', 0);
        this.registry.set('fish_amount', 0);
        this.registry.set('plant_amount', 0);
        this.registry.set('items', [
            {id: 'tilapiaLarvae', type: 'fish', playerHas: 0, price: 1, shopText: "Tilapia\nLarvae", shopSellText: "Tilapia Larvae", sprite: 'larvae'},
            {id: 'tilapiaFingerling', type: 'fish', playerHas: 0, price: 2, shopText: "Tilapia\nFingerling", shopSellText: "Tilapia Fingerling", sprite: 'fingerling'},
            {id: 'tilapiaJuvenile', type: 'fish', playerHas: 0, price: 5, shopText: "Tilapia\nJuvenile", shopSellText: "Tilapia Juvenile", sprite: 'juvenile'},
            {id: 'tilapiaAdult', type: 'fish', playerHas: 0, price: 10, shopText: "Tilapia\nAdult", shopSellText: "Tilapia Adult", sprite: 'tilapia_new'},
            {id: 'barramundiLarvae', type: 'fish', playerHas: 0, price: 2, shopText: "Barramundi\nLarvae", shopSellText: "Barramundi Larvae"},
            {id: 'barramundiFingerling', type: 'fish', playerHas: 0, price: 5, shopText: "Barramundi\nFingerling", shopSellText: "Barramundi Fingerling"},
            {id: 'barramundiJuvenile', type: 'fish', playerHas: 0, price: 10, shopText: "Barramundi\nJuvenile", shopSellText: "Barramundi Juvenile"},
            {id: 'barramundiAdult', type: 'fish', playerHas: 0, price: 20, shopText: "Barramundi\nAdult", shopSellText: "Barramundi Adult"},
            {id: 'romaineSeed', type: 'plant', playerHas: 0, price: 1, shopText: "Romaine\nLettuce\nSeed", shopSellText: "Romaine Lettuce Seed", sprite: 'seed'},
            {id: 'romaineSprout', type: 'plant', playerHas: 0, price: 1, shopText: "Romaine\nLettuce\nSprout", shopSellText: "Romaine Lettuce Sprout", sprite: 'sprout'},
            {id: 'romaineSeedling', type: 'plant', playerHas: 0, price: 2, shopText: "Romaine\nLettuce\nSeedling", shopSellText: "Romaine Lettuce Seedling", sprite: 'seedling'},
            {id: 'romaineYoung', type: 'plant', playerHas: 0, price: 3, shopText: "Romaine\nLettuce\nYoung", shopSellText: "Romaine Lettuce Young", sprite: 'young'},
            {id: 'romaineHead', type: 'plant', playerHas: 0, price: 5, shopText: "Romaine\nLettuce\nHead", shopSellText: "Romaine Lettuce Head", sprite: 'lettuce'},
            {id: 'growBed', type: 'system', playerHas: 0, price: 20, shopText: "Grow Bed", shopSellText: "Grow Bed"},
            {id: 'fluorescentLight', type: 'system', playerHas: 0, price: 15, shopText: "F. Light", shopSellText: "Fluorescent Light"},
            {id: 'tankSensor', type: 'system', playerHas: 0, price: 20, shopText: "Tank\nSensor", shopSellText: "Tank Sensor"},
            {id: 'regTank', type: 'system', playerHas: 0, price: 30, shopText: "Fish Tank", shopSellText: "Fish Tank"},
            {id: 'premiumTank', type: 'system', playerHas: 0, price: 80, shopText: "Premium\nFish Tank", shopSellText: "Premium Fish Tank"},
            {id: 'plantTray', type: 'system', playerHas: 0, price: 10, shopText: "Plant\nTray", shopSellText: "Plant Tray"},
            {id: 'pHMeter', type: 'equip', playerHas: 0, price: 5, shopText: "pH Meter", shopSellText: "pH Meter"},
        ]);
        this.scene.start('Preloader');
        this.registry.set('plantBed', [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null]
        ]);
    }
}
