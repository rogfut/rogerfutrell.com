import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <div>
            {/* <div className={layoutStyles.navContainer}> */}
            <Header />
            {/* </div> */}
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                {props.children}
            </div>
            <Footer />
        </div>
        </div>
    )
}

export default Layout