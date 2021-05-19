/**
 * 期間を表すクラス
 */
export default class Duration {
  /**
   * 期間のはじめ
   * @type {Date}
   */
  start

  /**
   * 期間のおわり
   * @type {Date}
   * @Nullable
   */
  end

  /**
   * Duration
   * @param {Date} start
   * @param {Date} end
   */
  constructor(start, end) {
    this.start = start
    this.end = end
  }
}
