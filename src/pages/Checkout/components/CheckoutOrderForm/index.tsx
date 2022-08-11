import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money
} from 'phosphor-react'
import { useTheme } from 'styled-components'
import { TitleText } from '../../../../components/Typography'
import { AddressForm } from '../AddressForm'
import { PaymentMethodInput } from '../PlaymentMethodInput'
import { SectionTitle } from '../SectionTitle'
import {
  CheckoutOrderFormContainer,
  FormSectionContainer,
  FormSectionInput,
  FormSectionSelectPayment,
  PaymentMethodOptions
} from './styles'

export function CheckoutOrderForm() {
  const { colors } = useTheme()
  return (
    <CheckoutOrderFormContainer>
      <TitleText fs={18} color="subtitle">
        Complete seu pedido
      </TitleText>
      <FormSectionContainer>
        <SectionTitle
          icon={<MapPinLine size={22} color={colors['base-yellow-dark']} />}
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
        />
        <FormSectionInput>
          <AddressForm />
        </FormSectionInput>
      </FormSectionContainer>
      <FormSectionContainer>
        <SectionTitle
          icon={<CurrencyDollar size={22} color={colors['base-purple']} />}
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        />
        <FormSectionSelectPayment>
          <PaymentMethodOptions>
            <PaymentMethodInput
              icon={<CreditCard size={22} color={colors['base-purple']} />}
              title="Cartão de crédito"
              value="credit"
            />
            <PaymentMethodInput
              icon={<Bank size={22} color={colors['base-purple']} />}
              title="Cartão de débito"
              value="debit"
            />
            <PaymentMethodInput
              icon={<Money size={22} color={colors['base-purple']} />}
              title="Dinheiro"
              value="money"
            />
          </PaymentMethodOptions>
        </FormSectionSelectPayment>
      </FormSectionContainer>
    </CheckoutOrderFormContainer>
  )
}
