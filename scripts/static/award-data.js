import Award from '@/scripts/types/Award'
import Duration from '~/scripts/types/commons/Duration'

/**
 * アワードデータ（テスト用？）
 * @type {Array<Award>}
 */
export const awardData = [
  new Award(
    new Duration(new Date(2019, 8, 6), null),
    'HACK U 2019 SENDAI',
    [],
    'https://hacku.yahoo.co.jp/hacku2019sendai/'
  ),
  new Award(
    new Duration(new Date(2019, 9, 26), new Date(2019, 9, 27)),
    'JPHacks Hack Day',
    [],
    'https://jphacks.com/2019/hackdays/'
  ),
  new Award(
    new Duration(new Date(2019, 10, 9), null),
    'JPHacks Award Day',
    ['イノベータ認定', 'ビズリーチ賞', 'リクルート賞'],
    'https://jphacks.com/2019/hackdays/award/'
  ),
  new Award(
    new Duration(new Date(2019, 11, 7), new Date(2019, 11, 8)),
    'KDDI 学生向けハッカソン 2019 WINTER',
    ['最優秀賞'],
    'https://www.kdghacks.com/'
  ),
  new Award(
    new Duration(new Date(2020, 4, 2), new Date(2020, 4, 4)),
    'TwoGate Dev Camp',
    [],
    'https://devcamp2020.twogate.com/'
  ),
  new Award(
    new Duration(new Date(2020, 8, 30), null),
    'Civictech Challenge Cup',
    [],
    'https://ccc2020.code4japan.org/'
  ),
  new Award(
    new Duration(new Date(2020, 9, 17), new Date(2020, 9, 19)),
    'KDG HACKS 2020 AUTUMN',
    ['優秀賞'],
    'https://www.kdghacks.com/'
  ),
]
