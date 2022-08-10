import styled, { css } from 'styled-components'

interface ButtonProps {
  variant?: string
}

export const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 2.3rem;
  height: 2.3rem;
  border: none;
  border-radius: 0.375rem;
  padding: 0 0.5rem;
  position: relative;
  font-size: ${(props) => props.theme.sizes[18]};
  ${({ variant, theme }) => css`
    background: ${theme.colors[`${variant}`]};
    span {
      background-color: ${theme.colors[`${variant}`]};
    }
  `}

  &:hover {
    ${({ variant, theme }) => css`
      border-bottom: 3px solid ${theme.colors[`${variant}`]};
    `}
  }

  &.active {
    ${({ variant, theme }) => css`
      color: ${theme.colors[`${variant}`]};
    `}
  }
`
