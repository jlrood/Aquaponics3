import Boot from './scenes/Boot';
import Game from './scenes/Game';
import GameOver from './scenes/GameOver';
import MainMenu from './scenes/MainMenu';
import Phaser from 'phaser';
import Preloader from './scenes/Preloader';
import System from './scenes/System';
import Shop from './scenes/Shop';
import Tasks from './scenes/Tasks';

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
        Tasks
    ]
};

const StartGame = (parent) => {

    return new Phaser.Game({ ...config, parent });

}

export default StartGame;
