import { Minus, Plus } from 'phosphor-react'
import {
  IconWrapper,
  QuantityInputContainer,
  QuantityInputText
} from './styles'

export function QuantityInput() {
  return (
    <QuantityInputContainer size="medium">
      <IconWrapper>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <QuantityInputText type="number" readOnly value={10} />
      <IconWrapper>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
