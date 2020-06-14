import React from "react"
import Layout from '../components/layout'
import { Link } from 'gatsby'
import portfolioStyles from '../components/portfolio.module.scss'
import img1 from "../img/1.png"
import img2 from "../img/2.png"
import img3 from "../img/3.png"
import img4 from "../img/4.png"

const Portfolio = () => {
    return (
        <Layout>
            <div className={portfolioStyles.portfolioMain}>
                {/* <h1 className={portfolioStyles.portfolioHeader}>Portfolio</h1> */}
                <div className={portfolioStyles.portfolioParent}>
                    <div className={portfolioStyles.portfolioItem}>
                        <a className={portfolioStyles.portfolioItem1} href="https://github.com/rogfut" target="_blank">
                        <img className={portfolioStyles.portfolioImage} src={img1} alt="portfolio-item 1"></img>
                        </a>
                    </div>
                    <div className={portfolioStyles.portfolioItem}>
                        <a className={portfolioStyles.portfolioItem2} href="https://github.com/rogfut" target="_blank">
                        <img className={portfolioStyles.portfolioImage} src={img2} alt="portfolio-item 2"></img>
                        </a>
                    </div>
                    <div className={portfolioStyles.portfolioItem}>
                        <a className={portfolioStyles.portfolioItem3} href="https://github.com/rogfut" target="_blank">
                        <img className={portfolioStyles.portfolioImage} src={img3} alt="portfolio-item 3"></img>
                        </a>
                    </div>
                    <div className={portfolioStyles.portfolioItem}>
                        <a className={portfolioStyles.portfolioItem4} href="https://github.com/rogfut" target="_blank">
                        <img className={portfolioStyles.portfolioImage} src={img4} alt="portfolio-item 4"></img>
                        </a>
                    </div>
                </div>
            </div>
        </Layout>       
    )
}

export default Portfolio