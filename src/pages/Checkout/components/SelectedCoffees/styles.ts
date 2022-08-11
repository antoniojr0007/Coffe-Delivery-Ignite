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

  > button {
    height: 3rem;
    border-radius: 1rem;
  }
`
export const DetailTotalContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
`
