import styled, { css } from 'styled-components'

interface HeaderButtonProps {
  variant: 'purple' | 'yellow'
}

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  background: ${({ theme }) => theme.colors['brand-background']};
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const HeaderButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 2.3rem;
  height: 2.3rem;
  border: none;
  border-radius: 6px;
  padding: 0 0.5rem;
  position: relative;
  font-size: ${(props) => props.theme.textSizes['text-regular-m']};
  ${({ variant, theme }) => css`
    background: ${theme.colors[`brand-${variant}-light`]};
  `}

  &:hover {
    ${({ variant, theme }) => css`
      border-bottom: 3px solid ${theme.colors[`brand-${variant}`]};
    `}
  }

  &.active {
    ${({ variant, theme }) => css`
      color: ${theme.colors[`brand-${variant}`]};
    `}
  }
`
