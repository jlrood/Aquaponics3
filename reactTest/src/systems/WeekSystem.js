import Phaser from 'phaser'

export const WEEK_CHANGED = 'week-changed'
export const WEEK_ENDED = 'week-ended'

export default class WeekSystem extends Phaser.Events.EventEmitter {
  constructor(scene, maxWeeks = 6) {
    super()
    this.scene = scene
    this.maxWeeks = maxWeeks
    let start = scene.registry.get('week')
    if (start === undefined) start = 0
    scene.registry.set('week', start)

    scene.registry.set('week', start)
  }

  get week() {
    return this.scene.registry.get('week')
  }

  set week(v) {
    this.scene.registry.set('week', v)
    this.emit(WEEK_CHANGED, v)
  }

  nextWeek() {
    if (this.week >= this.maxWeeks) return false
    this.emit(WEEK_ENDED, this.week)
    this.week = this.week + 1
    return true
  }

  isFinalWeek() {
    return this.week >= this.maxWeeks
  }

  reset() {
    this.week = 1
  }
}
