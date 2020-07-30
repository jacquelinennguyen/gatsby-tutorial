import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
    /*const data = useStaticQuery(graphql`
    query {
        site {
          siteMetaData {
            author
          }
        }
      }
    `)
    */

    return (
        <footer>
            <p>Created by Jacqueline Nguyen, © 2020</p>
        </footer>
    )
}

export default Footer