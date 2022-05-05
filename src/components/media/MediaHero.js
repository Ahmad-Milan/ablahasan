import React from 'react'
import { Container, Row, Col } from "react-bootstrap"

function MediaHero() {
  return (
    <section className="hero media-hero mb-5 d-flex align-items-end">
      <Container>
        <Row>
          <Col>
            <h1 className="fw-normal display-4 text-gray-blue mb-5 pb-md-2">Media</h1>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default MediaHero