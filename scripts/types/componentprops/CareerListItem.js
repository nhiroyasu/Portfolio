export default class CareerListItem {
  /**
   * title
   * @type {String}
   */
  title: String
  /**
   * subtitle: nullable
   * @type {String}
   */
  subTitle: String
  /**
   * date
   * @type {String}
   */
  date: String

  /**
   * CareerListItem
   * @param {String} title
   * @param {String} date
   * @param {String} subTitle nullable
   */
  constructor(title, date, subTitle) {
    this.title = title
    this.date = date
    this.subTitle = subTitle === undefined ? null : subTitle
  }
}
