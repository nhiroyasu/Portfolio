export default class AwardListItem {
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
