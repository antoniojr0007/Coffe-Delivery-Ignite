import styled, { css } from 'styled-components'

interface QuantityInputProps {
  size: 'small' | 'medium'
}

export const QuantityInputContainer = styled.div<QuantityInputProps>`
  flex: 1;
  background: ${({ theme }) => theme.colors['base-button']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  border-radius: 0.375rem;

  ${({ size }) =>
    size === 'medium' &&
    css`
      padding: 0.5rem;
    `}
  ${({ size }) =>
    size === 'small' &&
    css`
      padding: 0.3rem 0.5rem;
    `}
`

export const QuantityInputText = styled.input`
  text-align: center;
  width: 100%;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors['base-title']};
  &:focus {
    outline: none;
  }
`
export const IconWrapper = styled.button.attrs({
  type: 'button',
})`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors['base-purple']};
  transition: 0.4s;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors['base-purple-dark']};
  }
`
