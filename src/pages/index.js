import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const galleries = data.allContentfulGallery.edges

  return (
    <Layout>
      <SEO title="Home" />
      <Heading>Hi people</Heading>
      <Grid>
        {galleries.map(gallery => (
          <Link to={`/${gallery.node.slug}`}>
            <GatsbyImage
              src={gallery.node.homepageImage.gatsbyImageData}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A Gatsby astronaut"
              style={{ marginBottom: `1.45rem` }}
            />
          </Link>
        ))}
      </Grid>
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
          homepageImage {
            gatsbyImageData
          }
        }
      }
    }
  }
`

const Heading = styled.h1`
  width: 80%;
  margin: 0 auto;
  padding-top: 10rem;
  padding-bottom: 10rem;
  font-size: 3rem;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  max-width: 80rem;
  padding-top: 10rem;
  padding-bottom: 5rem;

  @media screen and (max-width: 768px) {
    padding-top: 5rem;
  }
`
const Paragraph = styled.article`
  font-size: 1.6rem;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const Grid = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const GridImage = styled(GatsbyImage)`
  height: 40rem;
  width: 100%;
  border-radius: 2px;

  @media screen and (max-width: 1024px) {
    height: 30rem;
  }

  @media screen and (max-width: 768px) {
      height: 20rem;
    }
}`
