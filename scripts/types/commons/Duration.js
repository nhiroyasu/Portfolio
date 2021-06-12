import { formatDate } from '@/scripts/functions/data-formatting'

/**
 * 期間を表すクラス
 */
export default class Duration {
  /**
   * Duration
   * @param {Date} start
   * @param {Date} end
   */
  constructor(start, end) {
    this.start = start
    this.end = end
  }

  /**
   * 表示用の文字列を返す
   * ex) 2020/11/22 ~ 2021/05/03
   * @returns {String}
   */
  toStringForDisplay() {
    const format = 'yyyy年MM月dd日'
    const startDate = formatDate(this.start, format)
    const endDate =
      this.end !== null ? ` ~ ${formatDate(this.end, format)}` : ''
    return startDate + endDate
  }
}
