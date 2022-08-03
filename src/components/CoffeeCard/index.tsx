import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import Latte from '../../assets/coffees/latte.svg'
import Button from '../Button'
import {
  CardDescription,
  CardImage,
  CardShipping,
  CardShippingCar,
  CardShippingPrice,
  CardShippingQtda,
  CardShippingQtdaSpan,
  CardTagItem,
  CardTags,
  CardTagSpan,
  CardTitle,
  CoffeeCardContainer,
} from './styles'

export default function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <CardImage>
        <img src={Latte} alt="" />
      </CardImage>
      <CardTags>
        <CardTagItem>
          <CardTagSpan>Tradicional</CardTagSpan>
        </CardTagItem>
        <CardTagItem>
          <CardTagSpan>Especial</CardTagSpan>
        </CardTagItem>
        <CardTagItem>
          <CardTagSpan>Especial</CardTagSpan>
        </CardTagItem>
      </CardTags>
      <CardTitle>Latte</CardTitle>
      <CardDescription>
        Uma dose de café expresso com o {'\n'} dobro de leite e espuma cremosa
      </CardDescription>
      <CardShipping>
        <CardShippingPrice>
          <span>R$</span>
          <strong>9.99</strong>
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
            <Button color="brand-purple">
              <ShoppingCart size={20} />
            </Button>
          </CardShippingCar>
        </CardShippingQtda>
      </CardShipping>
    </CoffeeCardContainer>
  )
}
