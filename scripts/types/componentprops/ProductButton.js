export default class ProductButton {
  title
  description
  date
  icon

  /**
   * ProductButton
   * @param {String} title
   * @param {String} description
   * @param {String} date
   * @param {String} icon
   */
  constructor(title, description, date, icon) {
    this.title = title
    this.description = description
    this.icon = icon
  }
}
