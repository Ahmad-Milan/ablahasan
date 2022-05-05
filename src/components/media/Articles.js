import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Col, Container, Row, Card } from 'react-bootstrap'
import Underline from '../shared/Underline'

function Articles() {
  return (
    <Container id="articles" className="mt-5 pt-md-4">
      <h2 className="mb-0 display-5 text-gray-blue">Articles</h2>
      <Underline />
      <Row className="justify-content-center">
        <Col md={6} lg={4} className="mb-3">
          <a href="https://www.dailynebraskan.com/news/gender-is-one-aspect-of-a-whole-identity-a-look-at-2021-gender-equity-conference/article_3f8d17e6-4359-11ec-a689-0b82942374ac.html" 
            rel="noreferrer" className="text-decoration-none" target="_blank">
            <Card className="shadow-sm">
              <figure className="text-center mb-0 overflow-hidden">
                <StaticImage
                  src="../../images/media/gender-equality-conf.webp"
                  height={265}
                  quality={95}
                  formats={["auto", "webp"]}
                  alt="Gender Equity"
                  className="shadow-sm rounded w-100"
                />
              </figure>
              <Card.Body>
                <Card.Title>'Gender is one aspect of a whole identity': a look at...</Card.Title>
                <Card.Text className="text">
                  A panel of UNL professors spoke about gender equity representation in different world regions at the Gender Equity conference in the Swanson Auditorium of Nebraska Union...
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>

        <Col md={6} lg={4} className="mb-3">
          <a href="https://www.arabamerica.com/professor-teaches-course-on-love-in-arabic-cultures/" 
            rel="noreferrer" className="text-decoration-none" target="_blank">
            <Card className="shadow-sm">
              <figure className="text-center mb-0 overflow-hidden">
                <StaticImage
                  src="../../images/media/love-in-arabic-culture.webp"
                  quality={95}
                  formats={["auto", "webp"]}
                  alt="Love in Arabic Cultures"
                  className="shadow-sm rounded w-100"
                />
              </figure>
              <Card.Body>
                <Card.Title>Professor Teaches Course on Love in Arabic Cultures</Card.Title>
                <Card.Text className="text">
                  Americans may be familiar with the romantic tragedy of “Romeo and Juliet,” but few know about “Antar and Abla,” a pre-Islamic Arabic story chronicling the budding and controversial...
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>

        <Col md={6} lg={4} className="mb-3">
          <a href="https://www.dailynebraskan.com/news/women-in-the-qur-an-class-virtually-connects-unl-with/article_a6c75c9e-fcba-11e7-8386-c735839177dc.html" 
            rel="noreferrer" className="text-decoration-none" target="_blank">
            <Card className="shadow-sm">
              <figure className="text-center mb-0 overflow-hidden">
                <StaticImage
                  src="../../images/media/women-in-quran.webp"
                  quality={95}
                  formats={["auto", "webp"]}
                  alt="Women in the Qur’an"
                  className="shadow-sm rounded w-100"
                />
              </figure>
              <Card.Body>
                <Card.Title>‘Women in the Qur’an’ class virtually connects UNL with...</Card.Title>
                <Card.Text className="text">
                A new virtual exchange course at the University of Nebraska-Lincoln is looking to build relationships between students separated by thousands of miles, all through the lens of a...
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>

        <Col md={6} lg={4} className="mb-3">
          <a href="https://nebraska.tv/news/local/hastings-church-aims-to-bridge-gap-in-religios-divide" 
            rel="noreferrer" className="text-decoration-none" target="_blank">
            <Card className="shadow-sm">
              <figure className="text-center mb-0 overflow-hidden">
                <StaticImage
                  src="../../images/media/hastings-church.webp"
                  quality={95}
                  formats={["auto", "webp"]}
                  alt="Hastings church hopes to bridge gap in religious divide"
                  className="shadow-sm rounded w-100"
                />
              </figure>
              <Card.Body>
                <Card.Title>Hastings church hopes to bridge gap in religious divide</Card.Title>
                <Card.Text className="text">
                First Presbytarian Church in Hastings, gather to hear UNL Professor, Abla Hasan PhD, speak about religious relations. Hastings College French Memorial Chapel. (NTV)...
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>

        <Col md={6} lg={4} className="mb-3">
          <a href="https://www.dailynebraskan.com/news/unl-s-the-big-arabic-day-emphasizes-the-realities-of-hijab/article_6bc36ac0-fca2-11e6-ae18-532bdd462eeb.html" 
            rel="noreferrer" className="text-decoration-none" target="_blank">
            <Card className="shadow-sm">
              <figure className="text-center mb-0 overflow-hidden">
                <StaticImage
                  src="../../images/media/The-Big-Arabic-Day.webp"
                  quality={95}
                  formats={["auto", "webp"]}
                  alt="The Big Arabic Day"
                  className="shadow-sm rounded w-100"
                />
              </figure>
              <Card.Body>
                <Card.Title>UNL’s “The Big Arabic Day” emphasizes the realities of...</Card.Title>
                <Card.Text className="text">
                Caryn Friesen is a born and raised Nebraskan; she grew up in Hebron, a town of less than 1,600 people. Friesen is a junior studying French, with minors in history...
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>

        <Col md={6} lg={4} className="mb-3">
          <a href="https://www.dailynebraskan.com/arts_and_entertainment/arabic-conversation-tables-connect-language-culture/article_dbdbddd4-4e8e-11e4-a465-001a4bcf6878.html" 
            rel="noreferrer" className="text-decoration-none" target="_blank">
            <Card className="shadow-sm">
              <figure className="text-center mb-0 overflow-hidden">
                <StaticImage
                  src="../../images/media/arabic-conversation-tables.jpg"
                  quality={95}
                  formats={["auto", "webp"]}
                  alt="The Big Arabic Day"
                  className="shadow-sm rounded w-100"
                />
              </figure>
              <Card.Body>
                <Card.Title>Arabic conversation tablbbhg connect language, culture</Card.Title>
                <Card.Text className="text">
                At first, Eric Curran was nervous about the idea of learning the Arabic language. He had previously graduated from Midland University in Fremont, Nebraska with...
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>

        <Col md={6} lg={4} className="mb-3">
          <a href="https://manlymiles.wordpress.com/2017/03/30/unl-muslim-professor-tells-her-story/" 
            rel="noreferrer" className="text-decoration-none" target="_blank">
            <Card className="shadow-sm">
              <figure className="text-center mb-0 overflow-hidden">
                <StaticImage
                  src="../../images/Abla-Hasan-03.webp"
                  quality={95}
                  formats={["auto", "webp"]}
                  alt="The Big Arabic Day"
                  className="shadow-sm rounded w-100"
                />
              </figure>
              <Card.Body>
                <Card.Title>UNL Muslim professor tells her story</Card.Title>
                <Card.Text className="text">
                As a young Muslim woman in Damascus, Syria, Abla Hasan would walk down the Hamidiah Market, visiting the sweet and carved wood vendors housed in cragged...
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
      </Row>
    </Container>
  )
}

export default Articles