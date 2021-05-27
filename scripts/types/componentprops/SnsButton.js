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
   * sns link
   * @type {String}
   */
  link

  /**
   * SnsButton
   * @param {String} name
   * @param {String} icon
   * @param {String} link
   */
  constructor(name, icon, link) {
    this.name = name
    this.icon = icon
    this.link = link
  }
}
