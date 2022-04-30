import * as React from "react"
import YouTubeSection from '../components/media/YouTubeSection'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import Articles from "../components/media/Articles"
import Podcasts from "../components/media/Podcasts"


const MediaPage = () => {
  return (
    <Layout>
      <Seo title="Media" />
      <section className="hero media-hero mb-5 d-flex align-items-end">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-normal display-4 text-gray-blue mb-5 pb-md-2">Media</h1>
            </Col>
          </Row>
        </Container>
      </section>
      <YouTubeSection />
      <Articles />
      <Podcasts />
    </Layout>
  )
}

export default MediaPage
