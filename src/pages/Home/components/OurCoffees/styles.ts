import styled from 'styled-components'
import { TitleText } from '../../../../components/Typography'

export const OurCoffeesContainer = styled.section`
  width: 100%;
  margin-top: 2rem;
`
export const OurCoffeesTitle = styled(TitleText)`
  margin-bottom: 2rem;
`
export const OurCoffeesCardsList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;
`
