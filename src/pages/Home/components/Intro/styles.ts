import { rgba } from 'polished'
import styled from 'styled-components'
import BackgroundImg from '../../../../assets/Background.png'
import { SubTitleText, TitleText } from '../../../../components/Typography'

export const IntroContainer = styled.div`
  width: 100%;
  height: 34rem;
  background: ${({ theme }) => `url(${BackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors['base-white']} 0%,
        ${rgba(theme.colors['base-background'], 0.2)} 50%,
        ${theme.colors['base-background']} 100%
      )`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`
export const IntroBox = styled.div``

export const IntroBoxTitle = styled.section`
  width: 37rem;
  height: 12rem;
`

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`

export const IntroSubTitle = styled(SubTitleText)`
  margin-bottom: 1rem;
`

export const IntroBoxItem = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`
export const IntroImg = styled.div`
  width: 29.75rem;
  height: 22.5rem;
  align-items: center;
  justify-content: center;
`
