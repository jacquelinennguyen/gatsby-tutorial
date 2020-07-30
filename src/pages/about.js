import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About</h1>
            <p>This is my bio.</p>
            <p>
                For contact information, click <Link to="/contact">here</Link>.
            </p>
        </Layout>
    )
}

export default AboutPage