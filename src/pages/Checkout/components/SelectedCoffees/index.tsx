import Button from '../../../../components/Button'
import { TitleText } from '../../../../components/Typography'
import { CoffeeCardSelected } from '../CoffeeCardSelected'
import { PaymentTotal } from '../PaymentTotal'
import { DetailContainer, SelectedCoffeesContainer } from './styles'

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <TitleText fs={18} color="subtitle">
        Cafés selecionados
      </TitleText>
      <DetailContainer>
        <CoffeeCardSelected />
        <CoffeeCardSelected />
        <CoffeeCardSelected />
        <PaymentTotal />
        <Button color="base-yellow">Confirmar pedido</Button>
      </DetailContainer>
    </SelectedCoffeesContainer>
  )
}
