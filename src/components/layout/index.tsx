import { Container } from "@mui/material"
import React from "react"
import Header from "./Header/Header"
import { Outlet } from "react-router-dom"
import Footer from "./Footer/Footer"

const Layout: React.FC = (): JSX.Element => {
    return (
        <Container maxWidth={'xl'}>
            <Header />

            <Outlet />

            <Footer />
        </Container>
    )
}

export default Layout