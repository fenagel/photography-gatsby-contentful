import React from "react"
import { graphql, Link } from "gatsby"
import Helmet from 'react-helmet'
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    contentfulGallery(slug: {eq: $slug }) {
      title
      publishedDate(formatString: "Do MMMM, YYYY")
      images {
        id
        gatsbyImageData
      }
    }
  }
`

const Gallery = ({ data }) => {
  const gallery = data.contentfulGallery
  const images = gallery.images.map(image => (getImage(image.gatsbyImageData)))
  return (
    <Layout>
    <Helmet>
      <title>TEST</title>
    </Helmet>
      <SEO title={gallery.title} />
      <div style={ { minHeight: '80vh' }}>
        <h1>{gallery.title}</h1>
        {images.map((image) => (
          <GatsbyImage
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            image={image}
            alt={gallery.title}
            layout="constrained"
          />
        ))}
      </div>
    </Layout>
  )
}

export default Gallery