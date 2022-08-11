import { Minus, Plus } from 'phosphor-react'
import {
  IconWrapper,
  QuantityInputContainer,
  QuantityInputText
} from './styles'

interface QuantityInputProps {
  onIncrease?: () => void
  onDecrease?: () => void
  size?: 'small' | 'medium'
  quantity?: number
}

export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity = 1,
  size = 'medium',
}: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <QuantityInputText type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
