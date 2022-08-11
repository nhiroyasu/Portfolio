import InductionButton from '@/scripts/types/componentprops/InductionButton'

/**
 * Induction link data
 * @type {Array<InductionButton>}
 */
export const inductionLinkData = [
  new InductionButton(
    'About',
    '"HIROYASU"について',
    require('@/assets/logos/cyan/logo.svg'),
    '/about'
  ),
  new InductionButton(
    'Applications',
    '開発したアプリ',
    require('@/assets/icons/colors/apps.svg'),
    '/apps'
  ),
  new InductionButton(
    'SNS',
    '制作物の紹介や技術的な話を発信中',
    require('@/assets/icons/colors/sns.svg'),
    '/sns'
  ),
]
