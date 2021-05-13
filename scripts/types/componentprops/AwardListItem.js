export default class AwardListItem {
  /**
   * contest name
   * コンテストの名前
   * @type {String}
   */
  contestName: String
  /**
   * the link of contest web page
   * コンテストのWebページのリンク
   * @type {String}
   */
  contestLink: String
  /**
   * awarded things of contest
   * コンテストで受賞したもの
   * @type {Array<String>}
   */
  awards: Array<String>
  /**
   * date held of contest
   * @type {String}
   */
  date: String

  /**
   * AwardListItem
   * @param {String} contestName
   * @param {String} contestLink
   * @param {Array<String>} awards
   * @param {String} date
   */
  constructor(contestName, contestLink, awards, date) {
    this.contestName = contestName
    this.contestLink = contestLink
    this.awards = awards
    this.date = date
  }
}
