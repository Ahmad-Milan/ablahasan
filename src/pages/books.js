import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import Books from '../components/books/Books'

function BooksPage() {
  return (
    <Layout>
      <Seo title="Books" />
      <section className="hero books-hero mb-5 d-flex align-items-end">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-normal display-4 text-gray-blue mb-5 pb-md-2">BOOKS</h1>
            </Col>
          </Row>
        </Container>
      </section>
      <Books />
    </Layout>
  )
}

export default BooksPage