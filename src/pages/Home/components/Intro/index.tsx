import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import Banner from '../../../../assets/Banner.svg'
import { InfoWhithIcon } from '../../../../components/InfoWhithIcon'
import {
  IntroBox,
  IntroBoxItem,
  IntroBoxTitle,
  IntroContainer,
  IntroContent,
  IntroImg,
  IntroSubTitle,
  IntroTitle,
} from './styles'

export default function Intro() {
  const { colors } = useTheme()
  return (
    <IntroContainer>
      <IntroContent className="container">
        <IntroBox>
          <IntroBoxTitle>
            <IntroTitle fs={48} ff="title" fw="eb" lh="bold">
              Encontre o café perfeito {'\n'} para qualquer hora do dia
            </IntroTitle>
            <IntroSubTitle
              fs={20}
              ff="regular"
              fw="r"
              lh="regular"
              color="subtitle"
              as="h3"
            >
              Com o Coffee Delivery você recebe seu café onde estiver, a {'\n'}
              qualquer hora
            </IntroSubTitle>
          </IntroBoxTitle>
          <IntroBoxItem>
            <InfoWhithIcon
              icon={<ShoppingCart />}
              text="Compra simples e segura"
              color={colors['base-yellow-dark']}
            />
            <InfoWhithIcon
              icon={<Package />}
              text="Embalagem mantém o café intacto"
              color={colors['base-text']}
            />
            <InfoWhithIcon
              icon={<Timer />}
              text="Entrega rápida e rastreada"
              color={colors['base-yellow']}
            />
            <InfoWhithIcon
              icon={<Coffee />}
              text="O café chega fresquinho até você"
              color={colors['base-purple']}
            />
          </IntroBoxItem>
        </IntroBox>
        <IntroImg>
          <img src={Banner} alt="" />
        </IntroImg>
      </IntroContent>
    </IntroContainer>
  )
}
