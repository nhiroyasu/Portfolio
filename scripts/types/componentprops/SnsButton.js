export default class SnsButton {
  /**
   * sns name
   * @type {String}
   */
  name: String
  /**
   * sns icon image url
   * @type {String}
   */
  icon: String

  /**
   * SnsButton
   * @param name
   * @param icon
   */
  constructor(name, icon) {
    this.name = name
    this.icon = icon
  }
}
