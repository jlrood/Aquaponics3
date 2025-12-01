export default class Week2Tut extends Phaser.Scene {
  constructor() {
    super('Week2Tut');
  }

  create() {
    const w = this.scale.width;
    const h = this.scale.height;

    const dim = this.add.rectangle(0, 0, w, h, 0x000000, 0.4)
      .setOrigin(0, 0);

    const panel = this.add.rectangle(w / 2, h / 2, 640, 260, 0xfff1c4)
      .setStrokeStyle(3, 0x3b3131);

    const title = this.add.bitmapText(
      w / 2,
      h / 2 - 90,
      'pixelmix_24',
      'Week 2 event'
    ).setOrigin(0.5);

    const body = this.add.bitmapText(
      w / 2 - 280,
      h / 2 - 50,
      'pixelmix_16',
      'The water pH dropped below 6.\n\n' +
      '1. Open the System screen.\n' +
      '2. Tap "Test pH" to check the water.\n' +
      '3. Tap "Add pH Up" to fix it.\n\n' +
      'Your goal is to bring pH back\ninto the safe range (6.5–7.5).'
    );
    body.maxWidth = 560;

    const btn = this.add.rectangle(
      w / 2,
      h / 2 + 80,
      180,
      48,
      0xf0c060
    ).setInteractive({ useHandCursor: true });
    btn.setStrokeStyle(2, 0x3b3131);

    const btnText = this.add.bitmapText(
      w / 2,
      h / 2 + 80,
      'pixelmix_16',
      'Got it'
    ).setOrigin(0.5);

    const close = () => {
      this.scene.stop();
    };

    btn.on('pointerdown', close);
    dim.on('pointerdown', close);
  }
}
