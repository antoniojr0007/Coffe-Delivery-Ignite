import { ShoppingCart } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { Text, TitleText } from '../../../../components/Typography'
import { formatMoney } from '../../../../Util/formatMoney'
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
  CoffeeCardContainer,
} from './styles'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export default function CoffeeCard({ coffee }: CoffeeProps) {
  const formattedPrice = formatMoney(coffee.price)
  return (
    <CoffeeCardContainer>
      <CardImage>
        <img src={`/coffees/${coffee.photo}.svg`} alt={coffee.description} />
      </CardImage>
      <CardTags>
        {coffee.tags.map((tag) => {
          return <CardTagSpan key={`${coffee.id}${tag}`}>{tag}</CardTagSpan>
        })}
      </CardTags>
      <CardTitle fs={32}>{coffee.name}</CardTitle>
      <CardDescription fs={12}>{coffee.description}</CardDescription>
      <CardShipping>
        <CardShippingPrice>
          <Text fs={12} lh="ss">
            R$
          </Text>
          <TitleText fs={32} color="text" as="strong">
            {formattedPrice}
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
