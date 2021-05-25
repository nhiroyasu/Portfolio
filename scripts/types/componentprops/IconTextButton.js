export default class IconTextButton {
  /**
   * @type {String}
   */
  title

  /**
   * @type {String}
   */
  icon

  /**
   * @type {String}
   */
  link

  /**
   * IconTextButton
   * @param {String} title
   * @param {String} icon
   * @param {String} link
   */
  constructor(title, icon, link) {
    this.title = title
    this.icon = icon
    this.link = link
  }
}
