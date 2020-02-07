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
                        {/* <figure>
                            <img src="../img/btc.png" alt="port-1" style="width:100%"></img>
                            <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
                        </figure> */}
                    {/* <figcaption>Text Below Image</figcaption> */}
                    <p>Text at bottom of image</p>
                    </div>
                    <div className={portfolioStyles.portfolio2}>
                    {/* <figcaption>Text Below Image</figcaption> */}
                    <p>Text at bottom of image</p>
                    </div>
                    <div className={portfolioStyles.portfolio3}>
                    {/* <figcaption>Text Below Image</figcaption> */}
                    <p>Text at bottom of image</p>
                    </div>
                    <div className={portfolioStyles.portfolio4}>
                    {/* <figcaption>Text Below Image</figcaption> */}
                    <p>Text at bottom of image</p>
                    </div>
                </div>
            </div>
        </Layout>       
    )
}

export default Portfolio