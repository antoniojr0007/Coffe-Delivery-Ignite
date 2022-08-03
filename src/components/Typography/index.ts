import styled from 'styled-components'

interface SizeProps {
  fs?: 48 | 32 | 24 | 20 | 19 | 18 | 16 | 14 | 12 | 10
  color?:
    | 'title'
    | 'subtitle'
    | 'text'
    | 'label'
    | 'white'
    | 'card'
    | 'hover'
    | 'error'
  ff?: 'title' | 'regular'
  fw?: 'r' | 'b' | 'eb'
  lh?: 'regular' | 'bold'
}

export const TitleText = styled.h1<SizeProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'title'}`]};
  font-family: ${({ theme, ff }) => theme.fonts[`${ff ?? 'regular'}`]};
  font-size: ${({ theme, fs }) => theme.textSizes[`${fs ?? 20}`]};
  font-weight: ${({ theme, fw }) => theme.textSizes[`${fw ?? 'r'}`]};
  line-height: ${({ theme, lh }) => theme.textSizes[`${lh ?? 'regular'}`]};
`
