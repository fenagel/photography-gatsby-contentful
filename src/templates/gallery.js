import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SEO from "../components/seo"
import styled from "styled-components"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

export const query = graphql`
  query($slug: String!) {
    contentfulGallery(slug: { eq: $slug }) {
      title
      quote
      description {
        description
      }
      publishedDate(formatString: "Do MMMM, YYYY")
      images {
        id
        gatsbyImageData
      }
      featuredImages {
        gatsbyImageData
      }
    }
  }
`

const Gallery = ({ data }) => {
  const gallery = data.contentfulGallery
  const images = gallery.images.map(image => getImage(image.gatsbyImageData))
  const featuredImages = gallery.featuredImages.map(image =>
    getImage(image.gatsbyImageData)
  )

  var settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Layout>
      <Helmet>
        <title>{gallery.title} Photography Felix Nagel</title>
      </Helmet>
      <SEO title={gallery.title} />
      <FeaturedSection>
        {featuredImages.map((image, i) => (
          <FeaturedImage
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            image={image}
            alt={gallery.title}
            layout="constrained"
            key={i}
          />
        ))}
      </FeaturedSection>
      <Heading>{gallery.quote}</Heading>
      <Container>
        <StyledSlider {...settings}>
          {images.map((image, i) => (
            <SliderItem key={`${i}`}>
              <StyledImage
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                image={image}
                alt={gallery.title}
                layout="constrained"
              />
              <p className="legend">
                {gallery.title} Image {i}
              </p>
            </SliderItem>
          ))}
        </StyledSlider>
      </Container>
      {gallery.description && (
        <TextContainer>
          <Paragraph>{gallery.description.description}</Paragraph>
        </TextContainer>
      )}
      <Grid>
        {images.map((image, i) => (
          <GridImage
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            image={image}
            alt={gallery.title}
            layout="constrained"
            key={i}
          />
        ))}
      </Grid>
    </Layout>
  )
}

export default Gallery

const FeaturedSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  width: 100%;
`

const FeaturedImage = styled(GatsbyImage)`
  height: 35rem;
  @media screen and (max-width: 768px) {
    height: 20rem;
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

const Container = styled.div`
  width: 60rem;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 60%;
  }
`

const StyledSlider = styled(Slider)`
.slick-list {
  padding: 0;
}

.slick-slider {
  margin: 0 auto;
}

.slick-prev, .slick-next{
    width:5rem;
    height:5rem;
    background-color:var(--color-base);
}
.slick-prev:hover,.slick-prev:focus,.slick-next:hover,.slick-next:focus{
    color:var(--color-base);
    outline:none;
    background:var(--color-base);
}
.slick-prev:before,.slick-next:before{
    color:var(--color-accent);
    font-size: 4rem;
}
.slick-next{
    right:-6rem;
}
.slick-prev{
    left:-6rem;
}
}

.slick-dots{
    bottom:-2.5vw;
    li{
      @media screen and (max-width: 768px) {
      display:none;
    }
        button{
            width:20px;
            height:20px;
            border:1px solid var(--color-accent);
            border-radius: 20px;
            &:before{
                position:absolute;
                top:50%;
                left:50%;
                width:10px;
                height:10px;
                border-radius: 10px;
                content:"";
                text-align: center;
                opacity:.5;
                color:var(--color-secondary);
                background-color:var(--color-base);
                transform:translate(-50%, -50%);
                transition:all .3s ease-in-out;
            }
        }
        &.slick-active,
        &:hover{
            button{
                border-color: var(--color-accent);
                &:before{
                    background-color:var(--color-accent);
                    opacity:1;
                }
            }
        }
    }

`

const SliderItem = styled.div``

const StyledImage = styled(GatsbyImage)`
  height: 60rem;
  width: 100%;
  border-radius: 2px;
  @media screen and (max-width: 768px) {
    height: 25rem;
  }
}
`
const Grid = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
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
