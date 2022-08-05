import styled from 'styled-components'
import Button from '../../../../components/Button'
import { Text, TitleText } from '../../../../components/Typography'

export const CoffeeCardContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0;
  text-align: center;
`
export const CardImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -1.25rem;
`
export const CardTags = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
`
export const CardTagItem = styled.div`
  width: 5rem;
  height: 1.375rem;
  border-radius: 1rem;
  margin: 0.25rem;
  background: ${(props) => props.theme.colors['base-yellow-light']};
  text-align: center;
`
export const CardTagSpan = styled.span`
  background: ${(props) => props.theme.colors['base-yellow-light']};
  color: ${(props) => props.theme.colors['base-yellow-dark']};
  font-size: ${(props) => props.theme.sizes[12]};
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  font-weight: 700;
`
export const CardTitle = styled(TitleText).attrs({
  lh: 'regular',
  fw: 'sb',
  color: 'subtitle',
})`
  text-align: center;
  margin-bottom: 0.5rem;
`
export const CardDescription = styled(Text).attrs({
  lh: 'regular',
  fw: 'r',
  color: 'label',
  ff: 'regular',
})`
  margin-bottom: 2rem;
`
export const CardShipping = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const CardShippingPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1875rem;
`
export const CardShippingQuantity = styled.div`
  width: 7.5rem;
  display: flex;
`

export const CardAddButton = styled(Button).attrs({
  color: 'base-purple-dark',
})`
  width: 2.375rem;
  height: 2.375rem;
  border: none;
  color: ${({ theme }) => theme.colors['base-card']};
  margin-left: 0.3rem;
  transition: 0.4s;

  &:hover {
    background: ${({ theme }) => theme.colors['base-purple']};
  }
`
