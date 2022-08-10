import { TitleText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCartList'
import { CoffeeCartCard } from '../CoffeeCartCard'
import { PaymentTotal } from '../PaymentTotal'
import { DetailContainer, SelectedCoffeesContainer } from './styles'

export function SelectedCoffees() {
  const { cartItems } = useCart()
  return (
    <SelectedCoffeesContainer>
      <TitleText fs={18} color="subtitle">
        Cafés selecionados
      </TitleText>
      <DetailContainer>
        {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item} />
        ))}
        <PaymentTotal />
      </DetailContainer>
    </SelectedCoffeesContainer>
  )
}
