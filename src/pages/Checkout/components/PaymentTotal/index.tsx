import Button from '../../../../components/Button'
import { Text } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCartList'
import { formatMoney } from '../../../../Util/formatMoney'
import { PaymentTotalContainer, PaymentTotalText } from './styles'

const DELIVERY_CART = 3.5

export function PaymentTotal() {
  const { cartItemsTotal, cartQuantity } = useCart()
  const totalDelivery = cartItemsTotal ? DELIVERY_CART : 0.0
  const total = cartItemsTotal + totalDelivery
  const totalItemsFormatted = formatMoney(cartItemsTotal)
  const totalEntregaFormatted = formatMoney(totalDelivery)
  const totalFormatted = formatMoney(total)
  return (
    <PaymentTotalContainer>
      <PaymentTotalText>
        <Text fs={14}>Total de itens</Text>
        <Text fs={14}>R$ {totalItemsFormatted}</Text>
      </PaymentTotalText>
      <PaymentTotalText>
        <Text fs={14}>Entrega</Text>
        <Text fs={14}>R$ {totalEntregaFormatted}</Text>
      </PaymentTotalText>
      <PaymentTotalText>
        <Text fs={20} fw="b">
          Total
        </Text>
        <Text fs={20} fw="b">
          R$ {totalFormatted}
        </Text>
      </PaymentTotalText>
      <Button color="base-yellow" disabled={cartQuantity <= 0} type="submit">
        Confirmar pedido
      </Button>
    </PaymentTotalContainer>
  )
}
