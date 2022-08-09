import styled from 'styled-components'
import { SectionBaseStyle } from '../../styles'

export const CheckoutOrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`

export const FormSectionContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border-radius: 0.375rem 2.75rem;
`
export const FormSectionInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const FormSectionSelectPayment = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
`

export const PaymentMethodOptions = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
`
