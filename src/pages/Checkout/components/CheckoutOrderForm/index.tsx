import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { TitleText } from '../../../../components/Typography'
import { AddressForm } from '../AddressForm'
import { PaymentMethodOptions } from '../PlaymentMethod/PaymentMethodOptions'

import { SectionTitle } from '../SectionTitle'
import { CheckoutOrderFormContainer, FormSectionContainer } from './styles'

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
        <AddressForm />
      </FormSectionContainer>
      <FormSectionContainer>
        <SectionTitle
          icon={<CurrencyDollar size={22} color={colors['base-purple']} />}
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        />
        <PaymentMethodOptions />
      </FormSectionContainer>
    </CheckoutOrderFormContainer>
  )
}
