import Career from '@/scripts/types/componentprops/CareerListItem'
import Duration from '~/scripts/types/commons/Duration'

/**
 * キャリアデータ（テスト用？）
 * @type {Array<Career>}
 */
export const careerData = [
  new Career(
    new Duration(new Date(2016, 3), new Date(2021, 2)),
    '福島工業高等専門学校',
    '電気工学科'
  ),
  new Career(new Duration(new Date(2021, 3), null), 'ITエンジニア'),
]
