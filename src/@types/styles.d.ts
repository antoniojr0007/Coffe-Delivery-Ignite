import 'styled-components'
import { defaultTheme } from '../styles/themes/default'
interface DefaultThemeProps {
  colors: string[]
  sizes: string[]
  fonts: string[]
  lineWeight: string[]
  lineHeight: string[]
}

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme<DefaultThemeProps> extends ThemeType {}
}
