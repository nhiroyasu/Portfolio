export default class AwardListItem {
  /**
   * contest name
   * コンテストの名前
   * @type {String}
   */
  contestName
  /**
   * the link of contest web page
   * コンテストのWebページのリンク
   * @type {String}
   */
  contestLink
  /**
   * awarded things of contest
   * コンテストで受賞したもの
   * @type {Array<String>}
   */
  awards
  /**
   * date held of contest
   * @type {String}
   */
  date

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
