import Boot from './scenes/Boot';
import Game from './scenes/Game';
import GameOver from './scenes/GameOver';
import Mail from './scenes/Mail';
import MainMenu from './scenes/MainMenu';
import Phaser from 'phaser';
import Preloader from './scenes/Preloader';
import System from './scenes/System';
import Shop from './scenes/Shop';
import Tasks from './scenes/Tasks';
import Journal from './scenes/Journal';
import Cycle from './scenes/Cycle';
import TankZoom from './scenes/TankZoom';
import BedZoom from './scenes/BedZoom';

// Find out more information about the Game Config at:
// https://docs.phaser.io/api-documentation/typedef/types-core#gameconfig
const config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'game-container',
        width: 1280,
        height: 720,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: '#ffffff',
    scene: [
        Boot,
        Preloader,
        MainMenu,
        Game,
        GameOver,
        System,
        Shop,
        Tasks,
        Mail,
        Journal,
        Cycle,
        TankZoom,
        BedZoom
    ],
    //This order, above, is the Photoshop layer order. Anything above MainMenu will layer below it.
    pixelArt: true
};

const StartGame = (parent) => {

    return new Phaser.Game({ ...config, parent });

}

export default StartGame;
