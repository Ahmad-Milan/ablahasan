import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import YouTube from "react-youtube"
import { Col, Container, Row, Card } from 'react-bootstrap'
import Underline from '../shared/Underline'

function YouTubeSection() {

  const youtubeData = useStaticQuery(graphql`
    query YouTubeQuery {
      allYoutubeVideo {
        edges {
          node {
            title
            videoId
            description
          }
        }
      }
    }
  `)

  console.log(youtubeData.allYoutubeVideo.edges)

  const opts = {
    height: '280',
    width: '400'
  };

  return (
    <Container>
      <h2 className="mb-0 display-5 text-gray-blue">YouTube</h2>
      <Underline />
      <Row>
        {
          youtubeData.allYoutubeVideo.edges.map((video, x) => (
            <Col md={6} lg={4} className="mb-3">
              <Card className="shadow-sm">
                <YouTube videoId={video.node.videoId} opts={opts} className="text-center mw-100" iframeClassName="w-100"  />
                <Card.Body>
                  <Card.Title>{video.node.title.substring(0, 30) + "..."}</Card.Title>
                  <Card.Text className="text">
                    {video.node.description.substring(0, 180) + "..."}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

export default YouTubeSection