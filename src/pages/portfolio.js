import React from "react"
import Layout from '../components/layout'
import { Link } from 'gatsby'
import portfolioStyles from '../components/portfolio.module.scss'


const Portfolio = () => {
    return (
        <Layout>
            <div>
                <h1 className={portfolioStyles.portfolioHeader}>Portfolio</h1>
                <div className={portfolioStyles.portfolioParent}>
                    <div className={portfolioStyles.portfolio1}>
                        <figcaption>Text Below Image</figcaption>
                    </div>
                    <div className={portfolioStyles.portfolio2}>
                    <figcaption>Text Below Image</figcaption>
                    </div>
                    <div className={portfolioStyles.portfolio3}>
                    <figcaption>Text Below Image</figcaption>
                    </div>
                    <div className={portfolioStyles.portfolio4}>
                    <figcaption>Text Below Image</figcaption>
                    </div>
                </div>
            </div>
        </Layout>       
    )
}

export default Portfolio