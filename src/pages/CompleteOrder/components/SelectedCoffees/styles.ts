import styled from 'styled-components'
import { SectionBaseStyle } from '../../styles'

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 30rem;
`

export const DetailContainer = styled(SectionBaseStyle)`
  border-radius: 0.375rem 2.75rem;
  display: flex;
  flex-direction: column;
  max-height: 36rem;
`
export const DetailTotalContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
`
