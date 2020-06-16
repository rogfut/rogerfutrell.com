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
                        <p>JAMSTACK static site hosted on Azure Storage.</p>
                        <h4>ROGERFUTRELL.COM</h4>
                        </a>
                    </div>
                    <div className={portfolioStyles.portfolioItem2}>
                        <a href="https://github.com/rogfut" target="_blank">
                        <p>Serverless bot that buys btc for me.</p>
                        <h4>BUY BTC BOT</h4>
                        </a>
                    </div>
                    <div className={portfolioStyles.portfolioItem3}>
                        <a href="https://github.com/rogfut" target="_blank">
                        <p>Coming soon! What could it be?</p>
                        <h4>Myster Project :)</h4>
                        </a>
                    </div>
                    <div className={portfolioStyles.portfolioItem4}>
                        <a href="https://github.com/rogfut" target="_blank">
                        <p>Coming soon! Stay tuned to find out :)</p>
                        <h4>Mystery Project :)</h4>
                        </a>
                    </div>
                </div>
            </div>
        </Layout>       
    )
}

export default Portfolio