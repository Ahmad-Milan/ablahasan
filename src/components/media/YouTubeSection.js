import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import YouTube from "react-youtube"
import { Col, Container, Row, Card, Pagination } from 'react-bootstrap'
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

  const allVideos = youtubeData.allYoutubeVideo.edges
  const pagesCount = Math.ceil(allVideos.length / 6)
  const [pageToDisplay, setPageToDisplay] = useState(1)
  // Display the first 6 videos initially
  const [collection, setCollection] = useState(allVideos.slice(0, 6))

  const opts = {
    height: '280',
    width: '400'
  };

  let items = [];
  for (let number = 1; number <= pagesCount; number++) {
    items.push(
      <Pagination.Item 
        key={number} active={number === pageToDisplay} 
        onClick={() => handleClick(number)}>
        {number}
      </Pagination.Item>,
    );
  }
  const handleClick = number =>{
    setCollection(allVideos.slice(6 * (number - 1) , 6 * number))
    setPageToDisplay(number)
  }

  return (
    <Container>
      <h2 className="mb-0 display-5 text-gray-blue">YouTube</h2>
      <Underline />
      <Pagination>{items}</Pagination>
      <Row className="justify-content-center">
        {
          collection.map(video => (
            <Col key={video.node.videoId} md={6} lg={4} className="mb-3">
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
      <Pagination>{items}</Pagination>
    </Container>
  )
}

export default YouTubeSection