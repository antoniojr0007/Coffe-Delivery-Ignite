import styled, { css } from 'styled-components'

interface ItemProps {
  variant: 'brand-purple' | 'base-text' | 'brand-yellow' | 'brand-yellow-dark'
}

export const IntroContainer = styled.div`
  display: flex;
  width: 90rem;
  height: 34rem;
  margin: 3rem auto;
`

export const IntroContent = styled.div`
  margin: 0 5rem 0 5rem;
`
export const IntroImg = styled.div`
  width: 29.75rem;
  height: 22.5rem;
`
export const IntroBoxTitle = styled.div`
  width: 37rem;
  height: 12rem;
`

export const IntroTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.textSizes['title-title-xl']};
  font-weight: 1.3;
  line-height: 3.9rem;
  margin-bottom: 1rem;
`

export const IntroSubTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.textSizes['text-regular-l']};
  font-weight: 1.3;
  line-height: 1.625rem;
`

export const IntroBoxItem = styled.div`
  width: 37rem;
  height: 5.25rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 4.125rem;
  padding: 0.5rem;
  gap: 0.5rem;
`

export const IntroItemIcon = styled.div<ItemProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  padding: 0.125rem;
  display: flex;
  ${({ variant, theme }) => css`
    background: ${theme.colors[`${variant}`]};
  `}
`
export const IntroItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`
export const IntroItemSpan = styled.span`
  color: ${({ theme }) => theme.colors['base-text']};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
  font-weight: 1.3;
  line-height: 1.625rem;
`
