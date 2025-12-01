export default function createWeekOverlay(scene, { title = 'Week complete', message = 'Review your system, then continue' } = {}) {
  const w = scene.scale.width
  const h = scene.scale.height

  const root = scene.add.container(0, 0)
  root.setDepth(9999)

  const dim = scene.add.rectangle(0, 0, w, h, 0x000000, 0.6).setOrigin(0, 0)
  const panel = scene.add.rectangle(w / 2, h / 2, 460, 240, 0xfff1c4);
  panel.setStrokeStyle(4, 0x3b3131);
  const titleTxt = scene.add.bitmapText(w / 2, h / 2 - 80, 'pixelmix_16', title).setOrigin(0.5);titleTxt.setFontSize(24);titleTxt.setTint(0x3b3131);
  const bodyTxt = scene.add.bitmapText(w / 2, h / 2 - 20, 'pixelmix_16', message).setOrigin(0.5);bodyTxt.setFontSize(16);bodyTxt.setTint(0x3b3131);

  const btn = scene.add.rectangle(w / 2, h / 2 + 70, 180, 50, 0xffe08a).setInteractive({ useHandCursor: true })
  const btnTxt = scene.add.bitmapText(w / 2, h / 2 + 70, 'pixelmix_16', 'Continue').setOrigin(0.5);btnTxt.setFontSize(16);btnTxt.setTint(0x3b3131);
  root.add([dim, panel, titleTxt, bodyTxt, btn, btnTxt])

  return new Promise(resolve => {
    const finish = () => { root.destroy() ; resolve(true) }
    btn.on('pointerup', finish)
    dim.on('pointerup', finish)
  })
}
