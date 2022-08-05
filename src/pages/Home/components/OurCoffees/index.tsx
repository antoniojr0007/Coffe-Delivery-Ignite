import { coffees } from '../../../../data/coffees'
import CoffeeCard from '../CoffeeCard'
import {
  OurCoffeesCardsList,
  OurCoffeesContainer,
  OurCoffeesTitle,
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
        {coffees.map((coffees) => {
          return (
            <CoffeeCard
              key={coffees.id}
              name={coffees.name}
              photo={coffees.photo}
              description={coffees.description}
              price={coffees.price}
            />
          )
        })}
      </OurCoffeesCardsList>
    </OurCoffeesContainer>
  )
}
