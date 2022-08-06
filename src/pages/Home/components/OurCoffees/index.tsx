import { coffees } from '../../../../data/coffees'
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
        {coffees.map((coffee) => {
          return <CoffeeCard key={coffee.id} coffee={coffee} />
        })}
      </OurCoffeesCardsList>
    </OurCoffeesContainer>
  )
}
