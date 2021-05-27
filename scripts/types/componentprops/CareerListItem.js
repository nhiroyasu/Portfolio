import Duration from '@/scripts/types/commons/Duration'
import { formatDate } from '@/scripts/functions/data-formatting'

export default class CareerListItem {
  /**
   * @type Duration
   */
  duration

  /**
   * キャリア内容
   * @type String
   */
  career

  /**
   * キャリア詳細
   * @type String
   * @Nullable
   */
  detail

  /**
   * Career
   * @param {Duration} duration
   * @param {String} career
   * @param {String} detail
   */
  constructor(duration, career, detail) {
    this.duration = duration
    this.career = career
    this.detail = detail
  }
}
