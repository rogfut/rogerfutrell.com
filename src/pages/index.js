import React from "react"
import Layout from '../components/layout'
import indexStyles from "../components/index.module.scss"
import { Link } from 'gatsby'

const Index = () => {
    var taglineStyle = {
        margin: '1rem 0 1rem 0'
    }   

    return (
        <Layout>
            <h1>Hello!</h1>
            <h3>I'm a DevOps Engineer living in the Greater Seattle area</h3>
            <h3>Check out my <Link to="/portfolio" className={indexStyles.link}>portfolio</Link> or <Link to="/contact" className={indexStyles.link}>contact</Link> me to say hi!</h3>
        </Layout>
    )
}

export default Index
