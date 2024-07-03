import { GlobalStyles, ThemeProvider } from "@mui/material"
import { theme } from "./styles/matrial"
import { GlobalStyled } from "./styles/global"
import { CacheProvider } from "@emotion/react"
import { cacheRtl } from "./styles/cacheRtl"
import { BrowserRouter } from "react-router-dom"


const App: React.FC = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={GlobalStyled}>
        <CacheProvider value={cacheRtl}>
        <BrowserRouter>
          
        </BrowserRouter>
        </CacheProvider>
      </GlobalStyles>
    </ThemeProvider>
  )
}

export default App
