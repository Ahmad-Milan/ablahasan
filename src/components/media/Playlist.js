import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Card, Pagination } from 'react-bootstrap'
import Underline from '../shared/Underline'
import useYoutubePlaylist from '../../hooks/useYoutubePlaylist'

function Playlist() {

  const playlistItems = useYoutubePlaylist()

  const pagesCount = Math.ceil(playlistItems.length / 6)
  const [pageToDisplay, setPageToDisplay] = useState(1)
  const [collection, setCollection] = useState([])

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
    setCollection(playlistItems.slice(6 * (number - 1) , 6 * number))
    setPageToDisplay(number)
  }

  useEffect(() => {
    if(playlistItems.length) {
      // Display the first 6 videos initially
      setCollection(playlistItems.slice(0, 6))
    }
  }, [playlistItems])


  return (
    <Container>
      {
        collection.length && 
        <>
        <h2 className="mb-0 display-5 text-gray-blue">Featured Videos</h2>
        <Underline />
        <Pagination>{items}</Pagination>
        <Row className="justify-content-center">
          {
            collection.map(video => (
              <Col key={video.id} md={6} lg={4} className="mb-3">
                <Card className="shadow-sm">
                  {/* <YouTube videoId={video.snippet.resourceId.videoId} opts={opts} className="text-center mw-100" iframeClassName="w-100"  /> */}
                  <iframe
                    src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video"
                    style={{minHeight: '285px'}}
                  />
                  <Card.Body>
                    <Card.Title>{video.snippet.title.substring(0, 30) + "..."}</Card.Title>
                    <Card.Text className="text">
                      {video.snippet.description.substring(0, 180) + "..."}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
        <Pagination>{items}</Pagination>
        </>
      }
    </Container>
  )
}

export default Playlist