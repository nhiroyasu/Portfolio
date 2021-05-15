export default class InductionButton {
  /**
   * @type {String}
   */
  title
  /**
   * @type {String}
   */
  description
  /**
   * @type {String}
   */
  icon

  /**
   * InductionButton
   * @param {String} title
   * @param {String} description
   * @param {String} icon
   */
  constructor(title, description, icon) {
    this.title = title
    this.description = description
    this.icon = icon
  }
}
