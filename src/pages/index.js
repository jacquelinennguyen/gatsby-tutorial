import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello!</h1>
      <h2>I'm Jacqueline, a recent UCLA grad living in the Bay Area.</h2>
      <p>Need a developer? <Link to="/contact">Contact me.</Link> </p>
    </Layout>
  )
}

export default IndexPage