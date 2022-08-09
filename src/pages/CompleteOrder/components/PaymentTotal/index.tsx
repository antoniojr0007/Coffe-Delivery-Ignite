import {
  SubTitleText,
  Text
} from '../../../../components/Typography'
import { PaymentTotalContainer, PaymentTotalText } from './styles'

export function PaymentTotal() {
  return (
    <PaymentTotalContainer>
      <PaymentTotalText>
        <Text>Total de itens</Text>
        <Text>R$ 29,70</Text>
      </PaymentTotalText>
      <PaymentTotalText>
        <Text>Entrega</Text>
        <Text>R$ 3,50</Text>
      </PaymentTotalText>
      <PaymentTotalText>
        <SubTitleText>Total</SubTitleText>
        <SubTitleText>R$ 33,20</SubTitleText>
      </PaymentTotalText>
    </PaymentTotalContainer>
  )
}
