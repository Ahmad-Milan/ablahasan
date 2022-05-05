import React from 'react'
import { Container, Row, Col } from "react-bootstrap"

function GalleryHero() {
  return (
    <section className="hero gallery-hero mb-5 d-flex align-items-end">
      <Container>
        <Row>
          <Col>
            <h1 className="fw-normal display-4 text-gray-blue mb-5 pb-md-2">Gallery</h1>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default GalleryHero