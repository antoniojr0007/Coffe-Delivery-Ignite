import { Trash } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { QuantityInput } from '../../../../components/QuantityInput'
import { Text } from '../../../../components/Typography'
import { CartItem } from '../../../../contexts/CartContext'
import { useCart } from '../../../../hooks/useCartList'
import { formatMoney } from '../../../../Util/formatMoney'

import {
  ActionContainer,
  ButtonRemover,
  CoffeeCardContainer,
  CoffeeCardImage,
  CoffeeCardInfo
} from './styles'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, handleRemoveCartItem } = useCart()
  const coffeeTotal = coffee.price * coffee.quantity
  const formattedPrice = formatMoney(coffeeTotal)
  const { colors } = useTheme()

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemoveItem() {
    handleRemoveCartItem(coffee.id)
  }
  return (
    <CoffeeCardContainer>
      <CoffeeCardImage>
        <img src={`/coffees/${coffee.photo}`} alt={coffee.description} />
      </CoffeeCardImage>
      <CoffeeCardInfo>
        <Text color="subtitle">{coffee.name}</Text>
        <ActionContainer>
          <QuantityInput
            size="small"
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={coffee.quantity}
          />
          <ButtonRemover onClick={handleRemoveItem}>
            <Trash size={16} color={colors['base-purple']} />
            REMOVER
          </ButtonRemover>
        </ActionContainer>
      </CoffeeCardInfo>
      <Text fw="b">R$ {formattedPrice}</Text>
    </CoffeeCardContainer>
  )
}
