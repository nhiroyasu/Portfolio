export default class MenuItem {
  /**
   * menu item title
   * @type {String}
   */
  title

  /**
   * page link
   * @type {String}
   */
  link

  /**
   * menu item icon
   * @type {String}
   */
  icon

  /**
   * MenuItem
   * @param {String} title
   * @param {String} link
   * @param {String} icon
   */
  constructor(title, link, icon) {
    this.title = title
    this.link = link
    this.icon = icon
  }
}
