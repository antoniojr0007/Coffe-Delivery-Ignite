import { Trash } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { QuantityInput } from '../../../../components/QuantityInput'
import { Text } from '../../../../components/Typography'
import {
  ActionContainer,
  ButtonRemover,
  CoffeeCardContainer,
  CoffeeCardImage,
  CoffeeCardInfo
} from './styles'

export function CoffeeCardSelected() {
  const { colors } = useTheme()
  return (
    <CoffeeCardContainer>
      <CoffeeCardImage>
        <img
          src={`https://coffe-delivery-ignite.vercel.app/coffees/expresso.svg`}
        />
      </CoffeeCardImage>
      <CoffeeCardInfo>
        <Text color="subtitle">Expresso Tradicional </Text>
        <ActionContainer>
          <QuantityInput size="small" />
          <ButtonRemover>
            <Trash size={16} color={colors['base-purple']} />
            REMOVER
          </ButtonRemover>
        </ActionContainer>
      </CoffeeCardInfo>
      <Text fw="b">R$ 9,90 </Text>
    </CoffeeCardContainer>
  )
}
