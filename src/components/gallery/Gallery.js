import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import GalleryModal from './GalleryModal'
import { AiOutlineZoomIn } from 'react-icons/ai'

function Gallery() {

  const [modalShow, setModalShow] = React.useState(false)
  const [activeIndex, setActiveIndex] = React.useState(0)
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
                height: 600
              )
            }
            relativePath
          }
        }
      }
    }
  `).allFile.edges

  const handleDisplayImage = (e, index) => {
    setModalShow(true)
    setActiveIndex(index)
  }
  const updateIndex = index => {
    setActiveIndex(index)
  }

  return (
    <section id="gallery">
      <Container>
        <Row>
          {
            localImagesData.map((photo, x) => (
            <Col key={x} md={6} lg={4}>
              <figure className="overflow-hidden position-relative text-center" onClick={e => handleDisplayImage(e, x)}>
                <GatsbyImage image={getImage(photo.node)} alt="photo gallery" />
                <span className="position-absolute w-100 h-100 d-flex zoom">
                  <AiOutlineZoomIn className="m-auto display-3" />
                </span>
              </figure>
            </Col>
            ))
          }
        </Row>
      </Container>
      <GalleryModal show={modalShow} onHide={() => setModalShow(false)} {...{localImagesData, activeIndex, updateIndex}} />
    </section>
  )
}

export default Gallery

