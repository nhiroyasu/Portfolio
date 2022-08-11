import SnsButton from '~/scripts/types/componentprops/SnsButton'

export const snsData = [
  new SnsButton(
    'Qiita',
    require('@/assets/logos/qiita/qiita-logo.png'),
    'https://qiita.com/nhiroyasu'
  ),
  new SnsButton(
    'Twitter',
    require('@/assets/logos/twitter/twitter-logo.png'),
    'https://twitter.com/cyan_0FBCF9'
  ),
  new SnsButton(
    'Github',
    require('@/assets/logos/github/github-logo-black.png'),
    'https://github.com/nhiroyasu'
  ),
  new SnsButton(
    'CodePen',
    require('@/assets/logos/codepen/codepen-logo.png'),
    'https://codepen.io/nhiroyasu'
  ),
  new SnsButton(
    'Email: nhiro1109pri@gmail.com',
    require('@/assets/logos/email/email.svg'),
    'mailto:nhiro1109pri@gmail.com'
  ),
]
