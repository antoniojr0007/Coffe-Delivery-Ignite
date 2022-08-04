import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import Latte from '../../../../assets/coffees/latte.svg'
import Button from '../../../../components/Button'
import { Text, TitleText } from '../../../../components/Typography'
import {
  CardDescription,
  CardImage,
  CardShipping,
  CardShippingCar,
  CardShippingPrice,
  CardShippingQtda,
  CardShippingQtdaSpan,
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
          <Text fs={12} lw="ss">
            R$
          </Text>
          <TitleText fs={18} color="text" as="strong">
            9.99
          </TitleText>
        </CardShippingPrice>
        <CardShippingQtda>
          <Button>
            <Minus size={20} />
          </Button>
          <CardShippingQtdaSpan>10</CardShippingQtdaSpan>
          <Button>
            <Plus size={20} />
          </Button>
          <CardShippingCar>
            <Button color="base-purple">
              <ShoppingCart size={20} />
            </Button>
          </CardShippingCar>
        </CardShippingQtda>
      </CardShipping>
    </CoffeeCardContainer>
  )
}
