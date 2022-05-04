import * as React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ContactForm from '../components/contact/Form'

import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => (
  <Layout>
    <Seo title="Contact" />
    <section className="hero contact-hero mb-5 d-flex align-items-end">
      <Container>
        <Row>
          <Col>
            <h1 className="fw-normal display-4 text-gray-blue">CONTACT</h1>
            <h2 className="fw-normal mb-5 pb-md-2 text-gray-blue">Porfessor Abla Hasan</h2>
          </Col>
        </Row>
      </Container>
    </section>

    <ContactForm />
  </Layout>
)

export default ContactPage
