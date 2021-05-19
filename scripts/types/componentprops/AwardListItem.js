import Duration from '@/scripts/types/commons/Duration'

export default class AwardListItem {
  /**
   * 大会の期間
   * @type Duration
   */
  duration

  /**
   * 大会の名前
   * @type String
   */
  contest

  /**
   * 受賞リスト
   * @type Array<String>
   */
  awards

  /**
   * コンテストのサイトリンク
   * @type String
   */
  contestLink

  /**
   * Award
   * @param {Duration} duration
   * @param {String} contest
   * @param {Array<String>} awards
   * @param {String} contestLink
   */
  constructor(duration, contest, awards, contestLink) {
    this.duration = duration
    this.contest = contest
    this.awards = awards
    this.contestLink = contestLink
  }
}
