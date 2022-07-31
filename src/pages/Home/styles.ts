import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  height: 34rem;
  flex-direction: column;
`
export const HomeCardsContainer = styled.div`
  display: flex;
`
export const HomeCardsTitle = styled.h1`
  font-size: ${(props) => props.theme.textSizes['title-title-xl']};
  color: ${(props) => props.theme.colors['base-title']};
  font-family: ${(props) => props.theme.fonts.title};
`
