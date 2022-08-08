import { TitleText } from '../../../../components/Typography'
import { CoffeeCard } from '../CoffeeCard'
import { DetailContainer, SelectedCoffeesContainer } from './styles'

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <TitleText fs={18} color="subtitle">
        Cafés selecionados
      </TitleText>
      <DetailContainer>
        <CoffeeCard />
      </DetailContainer>
    </SelectedCoffeesContainer>
  )
}
