import React from "react"
import Layout from '../components/layout'
import { Link } from "gatsby"

const Contact = () => {
    return (
        <Layout>
            <h1>Contact</h1>
            <h3>You can find me on <Link to="linkedin.com/in/rogerfutrell">LinkedIn</Link> or email me at <a href="mailto: rfut@outlook.com">rfut@outlook.com</a></h3>
        </Layout>    
    )
}

export default Contact