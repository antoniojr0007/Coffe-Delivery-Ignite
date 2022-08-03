import styled from 'styled-components'

export const HomeContainer = styled.div`
  //display: flex;
  //width: 100%;
  //height: 34rem;
  margin-bottom: 9.8rem;
  //flex-direction: column;
`
export const HomeCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`
export const HomeCardsTitle = styled.h1`
  font-size: ${(props) => props.theme.textSizes['title-title-xl']};
  color: ${(props) => props.theme.colors['base-title']};
  font-family: ${(props) => props.theme.fonts.title};
`
