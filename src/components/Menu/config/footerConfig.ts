import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.kryoswap.com/contact-us',
        isHighlighted: true,
      },
      {
        label: t('Brand'),
        href: 'https://docs.kryoswap.com/brand',
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/kryoswap',
      },
      {
        label: t('Community'),
        href: 'https://docs.kryoswap.com/contact-us/telegram',
      },
      {
        label: t('Litepaper'),
        href: 'https://litepaper.kryoswap.com/',
      },
      {
        label: '—',
      },
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
        href: 'https://docs.kryoswap.com/contact-us/customer-support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.kryoswap.com/help/troubleshooting',
      },
      {
        label: t('Guides'),
        href: 'https://docs.kryoswap.com/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/cryowebtoken',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.kryoswap.com',
      },
      {
        label: t('Audits'),
        href: 'https://docs.kryoswap.com/kryoswap-audit',
      },
      {
        label: t('Careers'),
        href: 'https://docs.kryoswap.com/hiring/work-for-kryoswap',
      },
    ],
  },
]
