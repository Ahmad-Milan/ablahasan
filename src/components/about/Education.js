import React from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import Underline from '../shared/Underline'
import { FaCircle } from 'react-icons/fa'

function Education() {
  return (
    <Container className="pt-5 awards">
      <h3 className="mb-0 display-6 text-gray-blue text-uppercase">Education</h3>
      <Underline />
      <Row>
        <Col lg={8} xl={6}>
          <ListGroup variant="flush">
            <ListGroup.Item><FaCircle /> PhD, Philosophy of language, University of Nebraska-Lincoln, May 2013.</ListGroup.Item>
            <ListGroup.Item><FaCircle /> MA, Philosophy, University of Nebraska-Lincoln, 2009.</ListGroup.Item>
            <ListGroup.Item><FaCircle /> Diploma of high studies in philosophy, Damascus University, 2001.</ListGroup.Item>
            <ListGroup.Item><FaCircle /> BA, Philosophy, Damascus University, 2000.</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Education