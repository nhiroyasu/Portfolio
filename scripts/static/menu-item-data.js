import MenuItem from '@/scripts/types/componentprops/MenuItem'

/**
 * Menu Item Values
 * @type {Array<MenuItem>}
 */
export const menuItemData = [
  new MenuItem('HOME', '/', require('@/assets/icons/commons/home.svg')),
  new MenuItem(
    'ABOUT',
    '/about',
    require('@/assets/icons/commons/cyan logo white.svg')
  ),
  new MenuItem(
    'APPLICATION',
    '/apps',
    require('@/assets/icons/commons/apps.svg')
  ),
  new MenuItem('SNS', '/sns', require('@/assets/icons/commons/chat.svg')),
]
