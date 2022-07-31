import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import Banner from '../../../../assets/Banner.png'
import {
  IntroBoxItem,
  IntroBoxTitle,
  IntroContainer,
  IntroContent,
  IntroImg,
  IntroItem,
  IntroItemIcon,
  IntroItemSpan,
  IntroSubTitle,
  IntroTitle
} from './styles'

export default function Intro() {
  return (
    <IntroContainer>
      <IntroContent>
        <IntroBoxTitle>
          <IntroTitle>
            Encontre o café perfeito {'\n'} para qualquer hora do dia
          </IntroTitle>
          <IntroSubTitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a {'\n'}{' '}
            qualquer hora
          </IntroSubTitle>
        </IntroBoxTitle>
        <IntroBoxItem>
          <IntroItem>
            <IntroItemIcon>
              <ShoppingCart size={24} />
            </IntroItemIcon>
            <IntroItemSpan>Compra simples e segura</IntroItemSpan>
          </IntroItem>
          <IntroItem>
            <IntroItemIcon>
              <Package size={24} />
            </IntroItemIcon>
            <IntroItemSpan>Embalagem mantém o café intacto</IntroItemSpan>
          </IntroItem>
          <IntroItem>
            <IntroItemIcon>
              <Timer size={24} />
            </IntroItemIcon>
            <IntroItemSpan>Entrega rápida e rastreada</IntroItemSpan>
          </IntroItem>
          <IntroItem>
            <IntroItemIcon>
              <Coffee size={24} />
            </IntroItemIcon>
            <IntroItemSpan>O café chega fresquinho até você</IntroItemSpan>
          </IntroItem>
        </IntroBoxItem>
      </IntroContent>
      <IntroImg>
        <img src={Banner} alt="" />
      </IntroImg>
    </IntroContainer>
  )
}
