import React from "react"
import { graphql, Link } from "gatsby"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SEO from "../components/seo"
import styled from "styled-components"
import { device } from "../utils/device"

export const query = graphql`
  query($slug: String!) {
    contentfulGallery(slug: { eq: $slug }) {
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
  const images = gallery.images.map(image => getImage(image.gatsbyImageData))

  const GalleryGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
    justify-content: center;
    gap: 1rem;
  `

  const StyledImage = styled(GatsbyImage)`
    width: 25rem;
    height: 25rem;
    border-radius: 5%;

    @media ${device.mobileL} {
      width: 25rem;
      height: 25rem;
    }
    @media ${device.tablet} {
      width: 20rem;
      height: 20rem;
    }
    @media ${device.laptop} {
      width: 20rem;
      height: 20rem;
    }
    @media ${device.laptopL} {
      width: 20rem;
      height: 20rem;
    }
    @media ${device.desktop} {
      width: 25rem;
      height: 25rem;
    }
  `

  return (
    <Layout>
      <Helmet>
        <title>TEST</title>
      </Helmet>
      <SEO title={gallery.title} />

      <h1>{gallery.title}</h1>
      <GalleryGrid>
        {images.map((image, i) => (
          <StyledImage
            key={`${i}`}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            image={image}
            alt={gallery.title}
            layout="constrained"
          />
        ))}
      </GalleryGrid>
    </Layout>
  )
}

export default Gallery
