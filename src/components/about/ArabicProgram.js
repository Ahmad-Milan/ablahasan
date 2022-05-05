import React from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import Underline from '../shared/Underline'
import { GoPrimitiveDot } from 'react-icons/go'

function ArabicProgram() {

  return (
    <Container className="pt-5 mt-md-3 awards">
      <h3 className="mb-0 display-6 text-gray-blue text-uppercase">Arabic Program Development and Teaching Innovation:</h3>
      <Underline />
      <Row>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item><GoPrimitiveDot /> Proposed and developed the curriculum for all online asynchronous Arabic instruction for ARAB 101 and ARAB102. Instruction started by fall 2021.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Proposed and developed the curriculum for intensive summer Arabic all online. This intensive curriculum provides one year of Arabic in 10 weeks. The intensive program offered ARAB 101 and ARAB 102. Instruction started by summer 2020.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Proposed ARAB 391: Global Islam: Current Debates to be offered for fall 2021 with support from DMLL and UNL Center for Transformative Teaching Pedagogic Intervention.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Proposed ARAB 306 as a Digital Islamic Studies Course DISC. Through this partnership with DISC Nebraska’s “Women in the Qur’an” was offered to Rutgers, Penn State and Maryland Universities. See https://sites.lsa.umich.edu/digitalislam/</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Proposed ARAB 306 “Women in the Qur’an” as the first course taught at UNL through Nebraska’s Global Virtual Project. This course was offered by spring 2018 jointly with Nizwa University in Oman.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Proposed ARAB 306 (ACE 9): “Women in the Qur’an” to be taught for the first time at UNL. Approved</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Proposed ARAB 288 (ACE 9): “Exploring love, sexuality and femininity in the history of Arabic culture” to be taught for the first time at UNL. Approved</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Proposal of Minor in Arabic studies. Submitted by spring 2014. Approved and considered by fall 2014-2015.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> A proposal to introduce third year Arabic to UNL: ARAB 303 and ARAB 304 (Advanced Arabic). Submitted spring 2014. Approved by fall 2014-2015.</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default ArabicProgram