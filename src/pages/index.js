import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const galleries = data.allContentfulGallery.edges
  galleries.map(gallery => console.log(gallery))
  return (
    <Layout>
      <SEO title="Home" />
      <Heading>FN Photography</Heading>
      <TextContainer>
        <Paragraph>
          Writing an introduction to photography is like writing an introduction
          to words; as amazing and important as it is, photography can be almost
          limitlessly complex. What separates inspiring photographs from
          ordinary ones, and how can you improve the quality of your own work?
        </Paragraph>
      </TextContainer>
      <Grid>
        {galleries.map(gallery => (
          <Link to={`/${gallery.node.slug}`} key={gallery.node.id}>
            <GridImage
              image={getImage(gallery.node.homepageImage.gatsbyImageData)}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A Gatsby astronaut"
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
          id
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
  padding-top: 5rem;
  padding-bottom: 5rem;
  font-size: 3rem;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  max-width: 80rem;
  padding-bottom: 5rem;
`
const Paragraph = styled.article`
  font-size: 1.6rem;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const Grid = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-bottom: 10rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  justify-items: start;
  align-items: center;

  > :nth-child(2n + 1) {
    justify-self: end;
  }

  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    > :nth-child(2n + 1) {
      justify-self: center;
    }
  }
`
const GridImage = styled(GatsbyImage)`
  height: 30rem;
  width: 30rem;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  padding: 14px 80px 18px 36px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
  }

  @media screen and (max-width: 1024px) {
    height: 20rem;
    width: 20rem;
  }

  @media screen and (max-width: 650px) {
    height: 20rem;
    width: 20rem;
  }
`
