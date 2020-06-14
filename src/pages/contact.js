import React from "react"
import Layout from '../components/layout'
import contactStyles from '../components/contact.module.scss'
import { Link } from "gatsby"
import linkedin from "../img/LI-Logo.png"
import github from "../img/gh-black.png"
import email from "../img/email.png"


const Contact = () => {
    return (
        <Layout>
            <div className={contactStyles.main}>
                {/* <h1>Contact</h1> */}
                <h3>You can find me on <a href="https://www.linkedin.com/in/rogerfutrell">LinkedIn</a> or email me at <a href="mailto: rfut@outlook.com">rfut@outlook.com</a></h3>
                <div className={contactStyles.logos}>
                    <div className={contactStyles.linkedin}>
                        <img src={linkedin}></img>
                    </div>
                    <div className={contactStyles.email}>
                        <img src={email}></img>
                    </div>
                    <div className={contactStyles.github}>
                        <img src={github}></img>
                    </div>
                </div>
            </div>
            
        </Layout>    
    )
}

export default Contact