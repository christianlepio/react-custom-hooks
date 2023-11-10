import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ search, setSearch, width }) => {
    return (
        <>
            <Nav 
                search={search}
                setSearch={setSearch}
                width={width}
            />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout