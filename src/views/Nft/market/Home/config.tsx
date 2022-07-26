import { LinkExternal } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config = (t: ContextApi['t']) => {
  return [
    {
      title: t('I sold an NFT, where’s my BNB?'),
      description: [
        t(
          'Trades are settled in WBNB, which is a wrapped version of BNB used on BNB Smart Chain. That means that when you sell an item, WBNB is sent to your wallet instead of BNB.',
        ),
        t('You can instantly swap your WBNB for BNB with no trading fees on KryoSwap.'),
      ],
    },
    {
      title: t('How can I list my NFT collection?'),
      description: [
        t('Collections must be whitelisted before they may be listed.'),
        t('We are now accepting applications from NFT collection owners seeking to list their collections.'),
        <LinkExternal href="#">{t('Please apply here')}</LinkExternal>,
      ],
    },
    {
      title: t('What are the fees?'),
      description: [
        t(
          '100% of all platform fees taken by KryoSwap from sales are used to buy back and BURN Cryogen tokens in our weekly Cryogen burns. Later, when we introduce KRYOS Token we will switch to that burn protocol',
        ),

        t(
          'Platform fees: 2% is subtracted from NFT sales on the market. Subject to change. Collection fees: Additional fees may be taken by collection creators, once those collections are live. These will not contribute to the Cryogen burns.',
        ),
      ],
    },
  ]
}

export default config
