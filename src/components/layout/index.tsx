import { Container } from "@mui/material"
import React from "react"
import Header from "./Header/Header"
import { Outlet } from "react-router-dom"
import Footer from "./Footer/Footer"

const Layout: React.FC = (): JSX.Element => {
    return (
        <>
            <Header />

            <Container maxWidth={'xl'}>
                <Outlet />
            </Container>

            <Footer />
        </>
    )
}

export default Layout