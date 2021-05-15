import InductionButton from '@/scripts/types/componentprops/InductionButton'

/**
 * Induction link data
 * @type {Array<InductionButton>}
 */
export const inductionLinkData = [
  new InductionButton(
    'ABOUT',
    '"HIROYASU"について',
    require('@/assets/logos/cyan/logo.svg')
  ),
  new InductionButton(
    'APPLICATION',
    '開発したアプリ',
    require('@/assets/icons/colors/apps.svg')
  ),
  new InductionButton(
    'SNS',
    '制作物の紹介や技術的な話を発信してます',
    require('@/assets/icons/colors/sns.svg')
  ),
]
