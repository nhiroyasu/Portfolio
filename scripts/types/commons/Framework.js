export default class Framework {
  /**
   * @type {String}
   */
  name

  /**
   * @type {String}
   */
  icon

  /**
   * max: 5
   * min: 1
   * @type {Number}
   */
  level

  constructor(name, icon, level) {
    this.name = name
    this.icon = icon
    this.level = level
  }
}
