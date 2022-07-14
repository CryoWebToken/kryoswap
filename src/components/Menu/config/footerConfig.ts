import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Online Store'),
        href: 'https://kryoswap.creator-spring.com/',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://t.me/cryowebtoken',
      },
    ],
  },
  {
    label: t('Projects'),
    items: [
      {
        label: 'Apply',
        href: '#',
      },
      {
        label: 'KryoSwap is a Cryogen Product',
        href: 'https://cryogen.life',
      },
    ],
  },
]
