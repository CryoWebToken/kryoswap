import { TranslateFunction } from 'contexts/Localization/types'
import { SalesSectionProps } from '.'

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Say hello to YoCoin!'),
  bodyText: t(
    'A Safe, Secure, Eco-Friendly, DeFi Cryptocurrency Engineered with the Lowest Trading Fees Available as well as Automatic Rewards for Life!',
  ),
  reverse: true,
  primaryButton: {
    to: '/swap?outputCurrency=0xDd17629D05E068A9D118ee35d11101d4140D0586',
    text: t('Buy Yoco!'),
    external: false,
  },
  secondaryButton: {
    to: 'https://yoco.finance',
    text: t('Learn More'),
    external: true,
  },
  primaryButton2: {
    to: 'https://github.com/CryoWebToken/audits/blob/main/yocoin_audit.pdf',
    text: t('YoCo Audit'),
    external: false,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [{ src: 'pie', alt: t('YoCoin') }],
  },
})

export const cakeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Cryogen is our first fully vetted, audited & doxxed project to list here.'),

  bodyText: t(
    'Cryogen has MANY use-cases already deployed along with a strong team & community. Earn $Cake on all transactions just by holding 200bn or more Cryogen.',
  ),
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x6A73A99fAC60c265863307c5A40abf32F0a040aC',
    text: t('Buy Cryogen'),
    external: false,
  },
  secondaryButton: {
    to: 'https://cryogen.life',
    text: t('Learn More'),
    external: true,
  },
  primaryButton2: {
    to: 'https://cryogen.life/audit.pdf',
    text: t('Cryogen Audit'),
    external: false,
  },
  images: {
    path: 'https://cryogen.life/images/',
    attributes: [{ src: '', alt: t('Cryogen') }],
  },
})
