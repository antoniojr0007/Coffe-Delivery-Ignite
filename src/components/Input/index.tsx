import { forwardRef, InputHTMLAttributes } from 'react'
import { Text } from '../Typography'
import { InputContainer, InputText, InputWrapper, RightText } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rightText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, rightText, className, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputContainer hasError={!!error}>
          <InputText ref={ref} {...props} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputContainer>
        {error && <Text fs={12}>{error}</Text>}
      </InputWrapper>
    )
  },
)
