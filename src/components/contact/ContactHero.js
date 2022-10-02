import React from 'react'
import { Container, Row, Col } from "react-bootstrap"

function ContactHero() {
  return (
    <section className="hero contact-hero mb-5 d-flex align-items-end">
      <Container>
        <Row>
          <Col>
            <h1 className="fw-bold display-4 text-shadow text-gray-blue">CONTACT</h1>
            <h2 className="fw-normal mb-5 pb-md-2 text-gray-blue">Dr. Abla Hasan</h2>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactHero