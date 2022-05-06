import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import DownloadCV from './DownloadCV'

function Footer() {
  return (
    <footer className="mt-5 py-5">
      <Container>
        <Row>
          <Col className="mb-4 text-center" md={6} lg={4}>
            <a href="https://www.youtube.com/channel/UC5phB7T3bEO57WzffPKCBNw" rel="noreferrer" target="_blank">Dr. Abla Hasan YouTube Channel</a>
          </Col>
          <Col className="mb-4 text-center" md={6} lg={4}>
            <a href="https://www.youtube.com/channel/UCWUuSntbowhDJU9PdFA1CSQ" rel="noreferrer" target="_blank">UNL Arabic Program YouTube Channel</a>
          </Col>
          <Col className="mb-4 text-center" md={6} lg={4}>
            <a href="https://modlang.unl.edu/dr-abla-hasan" rel="noreferrer" target="_blank">My UNL Faculty Page</a>
          </Col>
          <Col className="mb-4 text-center" md={6} lg={4}>
            <a href="https://www.instagram.com/unlarabic/?hl=en" rel="noreferrer" target="_blank">UNL Arabic Instagram Page</a>
          </Col>
          <Col className="mb-4 text-center" md={6} lg={4}>
            <a href="https://www.facebook.com/UNLArabic/" rel="noreferrer" target="_blank">UNL Arabic Facebook Page</a>
          </Col>
          <Col className="mb-4 text-center" md={6} lg={4}>
            <DownloadCV color="light" />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <small>Copyright &copy; {new Date().getFullYear()} Abla Hasan</small>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer