import { Clock, CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'
import Delivery from '../../assets/Delivery.svg'
import { InfoWhithIcon } from '../../components/InfoWhithIcon'
import { Text, TitleText } from '../../components/Typography'
import { CheckoutData } from '../Checkout'
import { paymentMethods } from '../Checkout/components/PlaymentMethod/PaymentMethodOptions'
import {
  DeliveryContainer,
  SectionContainer,
  SuccessContainer,
  TitleContainer
} from './styles'

interface LocationType {
  state: CheckoutData
}

export function Success() {
  const { colors } = useTheme()

  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])

  if (!state) return <></>
  return (
    <SuccessContainer className="container">
      <TitleContainer>
        <TitleText fs={32} fw="eb" lh="regular">
          Uhu! Pedido confirmado
        </TitleText>
        <Text fs={20} color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </Text>
      </TitleContainer>
      <DeliveryContainer>
        <SectionContainer>
          <InfoWhithIcon
            icon={<MapPinLine size={20} />}
            text={
              <Text>
                Entrega em <strong>{state.street}</strong>
                <br />
                {state.district} - {state.city}, {state.uf}
              </Text>
            }
            color={colors['base-purple']}
          />
          <InfoWhithIcon
            icon={<Clock size={20} />}
            text={
              <Text>
                Previsão de entrega <strong>20 min - 30 min</strong>
              </Text>
            }
            color={colors['base-yellow']}
          />
          <InfoWhithIcon
            icon={<CurrencyDollar size={20} />}
            text={
              <Text>
                Pagamento na entrega
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </Text>
            }
            color={colors['base-yellow-dark']}
          />
        </SectionContainer>
        <img src={Delivery} alt="" />
      </DeliveryContainer>
    </SuccessContainer>
  )
}
