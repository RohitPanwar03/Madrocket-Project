import React from 'react'
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main style={{ height: '100%' }} >
                {children}
            </main>

            <Footer />
        </>
    )
}

export default Layout