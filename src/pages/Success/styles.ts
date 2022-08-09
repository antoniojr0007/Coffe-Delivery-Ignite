import styled from 'styled-components'
import { SectionBaseStyle } from '../Checkout/styles'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;
`

export const TitleContainer = styled.div`
  > h1 {
    color: ${({ theme }) => theme.colors['base-yellow']};
  }
`

export const DeliveryContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const SectionContainer = styled(SectionBaseStyle)`
  padding: 2.5rem;
  border-radius: 0.375rem 2.75rem;
  background: ${({ theme }) => theme.colors['base-background']};
  width: 32.875rem;
  //height: 16.875rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 0.4375rem 2.3125rem;
    background: linear-gradient(
      102.89deg,
      ${({ theme }) => theme.colors['base-yellow']} 2.61%,
      ${({ theme }) => theme.colors['base-purple']} 98.76%
    );
  }
`
