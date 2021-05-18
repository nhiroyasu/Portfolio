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
   * @type {String}
   */
  pageLink

  /**
   * InductionButton
   * @param {String} title
   * @param {String} description
   * @param {String} icon
   * @param {String} pageLink
   */
  constructor(title, description, icon, pageLink) {
    this.title = title
    this.description = description
    this.icon = icon
    this.pageLink = pageLink
  }
}
