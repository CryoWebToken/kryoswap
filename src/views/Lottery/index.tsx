import { useState } from 'react'
import styled from 'styled-components'
import { Box, Flex, Heading, Skeleton } from '@pancakeswap/uikit'
import { LotteryStatus } from 'config/constants/types'
import PageSection from 'components/PageSection'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { useFetchLottery, useLottery } from 'state/lottery/hooks'
import {
  TITLE_BG,
  GET_TICKETS_BG,
  FINISHED_ROUNDS_BG,
  FINISHED_ROUNDS_BG_DARK,
  CHECK_PRIZES_BG,
} from './pageSectionStyles'
import useGetNextLotteryEvent from './hooks/useGetNextLotteryEvent'
import useStatusTransitions from './hooks/useStatusTransitions'
import Hero from './components/Hero'
import NextDrawCard from './components/NextDrawCard'
import Countdown from './components/Countdown'
import HistoryTabMenu from './components/HistoryTabMenu'
import YourHistoryCard from './components/YourHistoryCard'
import AllHistoryCard from './components/AllHistoryCard'
import CheckPrizesSection from './components/CheckPrizesSection'
import HowToPlay from './components/HowToPlay'
import useShowMoreUserHistory from './hooks/useShowMoreUserRounds'
import { PageMeta } from '../../components/Layout/Page'

const LotteryPage = styled.div`
  min-height: calc(100vh - 64px);
`

const Lottery = () => {
  useFetchLottery()
  useStatusTransitions()
  const { t } = useTranslation()
  const { isDark, theme } = useTheme()
  const {
    currentRound: { status, endTime },
  } = useLottery()
  const [historyTabMenuIndex, setHistoryTabMenuIndex] = useState(0)
  const endTimeAsInt = parseInt(endTime, 10)
  const { nextEventTime, postCountdownText, preCountdownText } = useGetNextLotteryEvent(endTimeAsInt, status)
  const { numUserRoundsRequested, handleShowMoreUserRounds } = useShowMoreUserHistory()

  return (
    <>
      <PageMeta />
      <LotteryPage>
        <PageSection
          containerProps={{ style: { marginTop: '-30px' } }}
          background={GET_TICKETS_BG}
          concaveDivider
          clipFill={{ light: '#1BD1B1' }}
          dividerPosition="top"
          index={2}
        >
          <Flex alignItems="center" justifyContent="center" flexDirection="column" pt="24px">
            {status === LotteryStatus.OPEN && (
              <Heading scale="xl" color="#ffffff" mb="24px" textAlign="center">
                {t('Buy BNB With FIAT')}
              </Heading>
            )}

            <NextDrawCard />
          </Flex>
        </PageSection>
      </LotteryPage>
    </>
  )
}

export default Lottery
