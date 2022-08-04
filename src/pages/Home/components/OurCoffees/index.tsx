import CoffeeCard from '../CoffeeCard'
import {
  OurCoffeesCardsList,
  OurCoffeesContainer,
  OurCoffeesTitle
} from './styles'
interface OurCoffeesProps {
  title: string
}

export function OurCoffees({ title }: OurCoffeesProps) {
  return (
    <OurCoffeesContainer>
      <OurCoffeesTitle fs={32} color="subtitle">
        {title}
      </OurCoffeesTitle>
      <OurCoffeesCardsList>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </OurCoffeesCardsList>
    </OurCoffeesContainer>
  )
}
