import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

function Gallery() {

  const localImagesData = useStaticQuery(graphql`
    query localImages {
      allFile(filter: {relativeDirectory: {eq: "gallery"}})  {
        edges {
          node {
            base
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                webpOptions: {quality: 90}
                quality: 90
              )
            }
            relativePath
          }
        }
      }
    }
  `).allFile.edges

  return (
    <Container id="gallery">
      {
        localImagesData.length && 
        <Row>
          {
            localImagesData.map((photo, x) => (
            <Col key={x} md={6} lg={4}>
              <figure className="overflow-hidden">
                <GatsbyImage image={getImage(photo.node)} alt="photo gallery" />
              </figure>
            </Col>
            ))
          }
        </Row>
      }
    </Container>
  )
}

export default Gallery

