export default class InductionButton {
  title: String
  description: String
  icon: String

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
