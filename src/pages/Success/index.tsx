import { Clock, CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { InfoWhithIcon } from '../../components/InfoWhithIcon'
import { Text, TitleText } from '../../components/Typography'
import {
  DeliveryContainer,
  SectionContainer,
  SuccessContainer,
  TitleContainer,
} from './styles'

import Delivery from '../../assets/Delivery.svg'

export function Success() {
  const { colors } = useTheme()
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
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
                Pagamento na entrega <strong>Cartão de Crédito</strong>
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
