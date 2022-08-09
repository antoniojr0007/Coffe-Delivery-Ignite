import { Text } from '../../../../components/Typography'
import { PaymentTotalContainer, PaymentTotalText } from './styles'

export function PaymentTotal() {
  return (
    <PaymentTotalContainer>
      <PaymentTotalText>
        <Text fs={14}>Total de itens</Text>
        <Text fs={14}>R$ 29,70</Text>
      </PaymentTotalText>
      <PaymentTotalText>
        <Text fs={14}>Entrega</Text>
        <Text fs={14}>R$ 3,50</Text>
      </PaymentTotalText>
      <PaymentTotalText>
        <Text fs={20} fw="b">
          Total
        </Text>
        <Text fs={20} fw="b">
          R$ 33,20
        </Text>
      </PaymentTotalText>
    </PaymentTotalContainer>
  )
}
