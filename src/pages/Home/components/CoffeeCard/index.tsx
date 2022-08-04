import { ShoppingCart } from 'phosphor-react'
import Latte from '../../../../assets/coffees/latte.svg'
import { QuantityInput } from '../../../../components/QuantityInput'
import { Text, TitleText } from '../../../../components/Typography'
import {
  CardAddButton,
  CardDescription,
  CardImage,
  CardShipping,
  CardShippingPrice,
  CardShippingQuantity,
  CardTags,
  CardTagSpan,
  CardTitle,
  CoffeeCardContainer
} from './styles'

export default function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <CardImage>
        <img src={Latte} alt="" />
      </CardImage>
      <CardTags>
        <CardTagSpan>Tradicional</CardTagSpan>
        <CardTagSpan>Especial</CardTagSpan>
        <CardTagSpan>Especial</CardTagSpan>
      </CardTags>
      <CardTitle>Latte</CardTitle>
      <CardDescription>
        Uma dose de café expresso com o {'\n'} dobro de leite e espuma cremosa
      </CardDescription>
      <CardShipping>
        <CardShippingPrice>
          <Text fs={12} lh="ss">
            R$
          </Text>
          <TitleText fs={32} color="text" as="strong">
            9.99
          </TitleText>
        </CardShippingPrice>
        <CardShippingQuantity>
          <QuantityInput />
          <CardAddButton>
            <ShoppingCart size={22} />
          </CardAddButton>
        </CardShippingQuantity>
      </CardShipping>
    </CoffeeCardContainer>
  )
}
