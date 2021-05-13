export default class CareerListItem {
  /**
   * title
   * @type {String}
   */
  title
  /**
   * subtitle: nullable
   * @type {String}
   */
  subTitle
  /**
   * date
   * @type {String}
   */
  date

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
