export default function createWeekOverlay(scene, { title = 'Week complete', message = 'Review your system, then continue' } = {}) {
  const w = scene.scale.width
  const h = scene.scale.height

  const root = scene.add.container(0, 0)
  root.setDepth(9999)

  const dim = scene.add.rectangle(0, 0, w, h, 0x000000, 0.6).setOrigin(0, 0)
  const panel = scene.add.rectangle(w / 2, h / 2, 460, 240, 0x263238)
  const titleTxt = scene.add.text(w / 2, h / 2 - 80, title, { color: '#fff', fontSize: '26px' }).setOrigin(0.5)
  const bodyTxt = scene.add.text(w / 2, h / 2 - 20, message, { color: '#ddd', fontSize: '16px', align: 'center', wordWrap: { width: 400 } }).setOrigin(0.5)

  const btn = scene.add.rectangle(w / 2, h / 2 + 70, 160, 40, 0x1e88e5).setInteractive({ useHandCursor: true })
  const btnTxt = scene.add.text(w / 2, h / 2 + 70, 'Continue', { color: '#fff', fontSize: '16px' }).setOrigin(0.5)

  root.add([dim, panel, titleTxt, bodyTxt, btn, btnTxt])

  return new Promise(resolve => {
    const finish = () => { root.destroy() ; resolve(true) }
    btn.on('pointerup', finish)
    dim.on('pointerup', finish)
  })
}
