import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Col, Container, Row, Card } from 'react-bootstrap'
import Underline from '../shared/Underline'
// import ReactAudioPlayer from 'react-audio-player';

function Podcasts() {

  return (
    <Container id="podcasts" className="mt-5 pt-md-4">
      <h2 className="mb-0 display-5 text-gray-blue">Podcasts</h2>
      <Underline />
      <Row className="justify-content-center">
        <Col md={6} lg={4} className="mb-3">
          <a href="https://anchor.fm/standingonpoints/episodes/Holy-Punctuation-A-Conversation-e1570ao" 
            rel="noreferrer" className="text-decoration-none" target="_blank">
            <Card className="shadow-sm">
              <figure className="text-center mb-0 overflow-hidden">
                <StaticImage
                  src="../../images/media/Standing-on-Points.webp"
                  height={265}
                  quality={95}
                  formats={["auto", "webp"]}
                  alt="Standing on Points"
                  className="shadow-sm rounded w-100"
                />
              </figure>
              <Card.Body>
                <Card.Title>Standing on Points: A Cultural History of Punctuation</Card.Title>
                <Card.Text className="text">
                  An interview with Dr. Florence Hazrat (University of Sheffield) in Standing on Points: A Cultural History of Punctuation podcast. July 29, 2021.
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>

        <Col md={6} lg={4} className="mb-3">
          <a href="https://newbooksnetwork.com/abla-hasan-decoding-the-egalitarianism-of-the-quran-retrieving-lost-voices-on-gender-lexington-books-2020/" 
            rel="noreferrer" className="text-decoration-none" target="_blank">
            <Card className="shadow-sm">
              <figure className="text-center mb-0 overflow-hidden">
                <StaticImage
                  src="../../images/media/Podcast-2.webp"
                  height={265}
                  quality={95}
                  formats={["auto", "webp"]}
                  alt="Decoding the Egalitarianism of the Qur’an Podcast"
                  className="shadow-sm rounded w-100"
                />
              </figure>
              <Card.Body>
                <Card.Title>Decoding the Egalitarianism of the Qur’an. Retrieving Lost Voices...</Card.Title>
                <Card.Text className="text">
                A book interview with Shehnaz Haqqani on New Books Network. October 2, 2020.
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
        {/* <Col md={6} lg={4} className="mb-3">
          <a href="https://anchor.fm/ahmad-saleh947/episodes/What-does-it-mean-to-read-the-Quran-as-a-woman-e1hucur" 
              rel="noreferrer" className="text-decoration-none" target="_blank">
            <Card className="shadow-sm">
              <figure className="text-center mb-0 overflow-hidden">
                <StaticImage
                  src="../../images/media/quran.webp"
                  height={265}
                  quality={95}
                  formats={["auto", "webp"]}
                  alt="Decoding the Egalitarianism of the Qur’an Podcast"
                  className="shadow-sm rounded w-100"
                />
              </figure>
              <Card.Body>
                <Card.Title>What does it mean to read the Qur’an as a woman?</Card.Title>
                <Card.Text className="text">
                Dr. Joud Alkorani <br /> Radboud University – Nijmegen – The Netherlands <br /> April 28, 2022
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col> */}
      </Row>
    </Container>
  )
}

export default Podcasts