import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const galleries = data.allContentfulGallery.edges.map(gallery => (
    gallery.node.slug
  ))
  
  return(
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    {galleries.map(gallery => (
      <p>
        <Link to={`/${gallery.slug}`}>{gallery}</Link>
      </p>
    ))}
    
  </Layout>
  )
  }

export default IndexPage

export const pageQuery = graphql`
  query {
    allContentfulGallery {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`