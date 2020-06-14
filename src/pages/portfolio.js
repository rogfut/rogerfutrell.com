import React from "react"
import Layout from '../components/layout'
import { Link } from 'gatsby'
import portfolioStyles from '../components/portfolio.module.scss'
// import img1 from "../img/1.png"
// import img2 from "../img/2.png"
// import img3 from "../img/3.png"
// import img4 from "../img/4.png"

const Portfolio = () => {
    return (
        <Layout>
            <div className={portfolioStyles.portfolioMain}>
                {/* <h1 className={portfolioStyles.portfolioHeader}>Portfolio</h1> */}
                <div className={portfolioStyles.portfolioParent}>
                    <div className={portfolioStyles.portfolioItem1}>
                        <a href="https://github.com/rogfut" target="_blank">
                        <div  className={portfolioStyles.item1Description}>Description of item 1</div>
                        <div className={portfolioStyles.item1Header}>Item 1</div>
                        {/* <img className={portfolioStyles.portfolioImage} src={img1} alt="portfolio-item 1"></img> */}
                        </a>
                    </div>
                    <div className={portfolioStyles.portfolioItem2}>
                        <a href="https://github.com/rogfut" target="_blank">
                        <div className={portfolioStyles.item2Description}>Description of item 2</div>
                        <div className={portfolioStyles.item2Header}>Item 2</div>
                        {/* <img className={portfolioStyles.portfolioImage} src={img2} alt="portfolio-item 2"></img> */}
                        </a>
                    </div>
                    <div className={portfolioStyles.portfolioItem3}>
                        <a href="https://github.com/rogfut" target="_blank">
                        <div className={portfolioStyles.item3Description}>Description of item 4</div>
                        <div className={portfolioStyles.item3Header}>Item 3</div>
                        {/* <img className={portfolioStyles.portfolioImage} src={img3} alt="portfolio-item 3"></img> */}
                        </a>
                    </div>
                    <div className={portfolioStyles.portfolioItem4}>
                        <a href="https://github.com/rogfut" target="_blank">
                        <div className={portfolioStyles.item4Description}>Description of item 4</div>
                        <div className={portfolioStyles.item4Header}>Item 4</div>
                        {/* <img className={portfolioStyles.portfolioImage} src={img4} alt="portfolio-item 4"></img> */}
                        </a>
                    </div>
                </div>
            </div>
        </Layout>       
    )
}

export default Portfolio