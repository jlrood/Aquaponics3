import Phaser from 'phaser'
import MainMenu from './scenes/MainMenu.js'
import Shop from './scenes/Shop.js'

const config = {
  type: Phaser.AUTO,
  parent: 'app',
  width: 1280,
  height: 720,
  backgroundColor: '#0b1b23',
  scene: [MainMenu, Shop],
  physics: { default: 'arcade' }
}
new Phaser.Game(config)
