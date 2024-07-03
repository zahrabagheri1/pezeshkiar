import { CacheProvider } from "@emotion/react"
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { cacheRtl } from "./styles/cacheRtl"
import { theme } from "./styles/matrial"
import { GlobalStyled } from "./styles/global"
import Layout from "./components/layout"


const App: React.FC = (): JSX.Element => {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={GlobalStyled} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>

            </Route>
          </Routes>
        </BrowserRouter>
        <CssBaseline />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
