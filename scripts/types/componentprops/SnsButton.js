export default class SnsButton {
  /**
   * sns name
   * @type {String}
   */
  name
  /**
   * sns icon image url
   * @type {String}
   */
  icon

  /**
   * SnsButton
   * @param {String} name
   * @param {String} icon
   */
  constructor(name, icon) {
    this.name = name
    this.icon = icon
  }
}
