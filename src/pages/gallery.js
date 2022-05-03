import React from 'react'
import Gallery from '../components/gallery/Gallery'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
// import Carousel from 'react-gallery-carousel';
// import 'react-gallery-carousel/dist/index.css';

function GalleryPage() {
  return (
    <Layout>
      <Seo title="Books" />
      <section className="hero gallery-hero mb-5 d-flex align-items-end">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-normal display-4 text-gray-blue mb-5 pb-md-2">Gallery</h1>
            </Col>
          </Row>
        </Container>
      </section>
      <Gallery />
    </Layout>
  )
}

export default GalleryPage