import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Container className="mt-4">
      <Row>
        <Col lg={6}>
          <div className="mb-4">
            <h1 className="display-3 mb-4">Dr. Abla Hasan</h1>
            <h2 className="display-6 mb-4 text">Associate Prof of practice of Arabic language and culture </h2>
            <h3 className="h2 fw-light text">- Nebraska University</h3>
          </div>
        </Col>
        <Col lg={6}>
          <div className="text-center">
            <StaticImage
              src="../images/abla-hasan-02.jpg"
              width={500}
              quality={95}
              formats={["auto", "webp"]}
              alt="Dr. Abla Hasan Home Page"
              style={{ marginBottom: `1.45rem` }}
              className="shadow-sm rounded"
            />
          </div>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
