import { GlobalStyles, Stack, ThemeProvider } from "@mui/material"
import { theme } from "./styles/matrial"
import { GlobalStyled } from "./styles/global"
import { CacheProvider } from "@emotion/react"
import { cacheRtl } from "./styles/cacheRtl"

const App: React.FC = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={GlobalStyled}>
        <CacheProvider value={cacheRtl}>


          <Stack>سامانه نوبت دهی پزشکیار </Stack>
        </CacheProvider>
      </GlobalStyles>
    </ThemeProvider>
  )
}

export default App
