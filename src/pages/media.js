import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import YouTubeChannel from "../components/media/YouTubeChannel"
import Articles from "../components/media/Articles"
import Podcasts from "../components/media/Podcasts"
import Playlist from "../components/media/Playlist"


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
      <Playlist />
      <YouTubeChannel />
      <Articles />
      <Podcasts />
    </Layout>
  )
}

export default MediaPage
