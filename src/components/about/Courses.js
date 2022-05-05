import React, {useState} from 'react'
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap'
import Underline from '../shared/Underline'
import { GoPrimitiveDot } from 'react-icons/go'

function Courses() {
  const [expand, setExpand] = useState(false)

  const handleExpand = () => {
    setExpand(!expand)
  }
  return (
    <Container className="pt-5 mt-md-3 courses">
      <h3 className="mb-0 display-6 text-gray-blue text-uppercase">Courses I have taught at UNL:</h3>
      <Underline />
      <Row 
        className="overflow-hidden"
        style={{maxHeight: expand ? 'max-content' : '400px'}}>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item><GoPrimitiveDot /> RELG 181 Judaism, Christianity and Islam</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> ARAB 101 Beginning Arabic 1</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> ARAB102 Beginning Arabic 2</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> ARAB 101 Beginning Arabic 1 intensive 5 week summer session (in person)</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> ARAB 102 Beginning Arabic 2 intensive 5 week summer session (in person)</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> ARAB 101 Beginning Arabic 1 intensive 5 week summer session (online)</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> ARAB 102 Beginning Arabic 2 intensive 5 week summer session (online)</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> MODL 491 Advanced Arabic through media and culture</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> ARAB 201 Second year Arabic 1</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> ARAB 202 Second year Arabic 2</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> ARAB 303 Advanced third year Arabic 1</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> ARAB 304 Advanced third year Arabic 2</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> MODL398 Independent Study: “Arab women writers”</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> MODL298 Special topics: Exploring love, sexuality and femininity in the History of rabic culture</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> MODL398 Independent study: “Readings in Arabic literature”</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> MODL 398 Women in the Qur’an</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> ARAB 288 Exploring love, sexuality and femininity in the History of the Arabic culture.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> ARAB 306 Women the in Qur’an</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> RELG/ENG 342 The Qur’an.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> ARAB 306 “Women in the Qur’an” as the first course taught at UNL through Nebraska’s Global Virtual Project. This course was offered by spring 2018 jointly with Nizwa University in Oman. The project is supported by the Aspen Institute’s Stevens Initiative and the U.S. Department of State’s Bureau of Educational and Cultural Affairs. A link to the course https://www.youtube.com/watch?v=znRATczGelk</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> ARAB 306 “ Women in the Qur’an” as the first UNL Digital Islamic shared curriculum (DISC) course offered by UNL through DISC and received by Rutgers University, Spring 2018 and Spring 2019.This course was also received by Penn State University by Spring 2020.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> WMNS 250 Sex and Gender around the Globe. Both in-Persona and online.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Honors 102 H “The science of you”.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> ARAB 391 Global Islam: Current Debates.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> ARAB 396 Independent study: Stories in the Qur’an.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> ARAB 396 Independent study: Themes in the Qur’an.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Honors MODL 189 H “Arab intellectuals on love and gender” ACE 5. A link to a video https://mediahub.unl.edu/media/12744</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row className="position-relative mt-3">
        {
          !expand && <div className="gradient-up position-absolute"></div>
        }
        <Button className="basic-btn mx-auto" onClick={handleExpand}>{expand ? 'Show less' : 'Show more'}</Button>
      </Row>
    </Container>
  )
}

export default Courses