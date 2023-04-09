import React, {useState} from 'react'
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap'
import Underline from '../shared/Underline'
import { GoPrimitiveDot } from 'react-icons/go'

function Awards() {
  const [expand, setExpand] = useState(false)

  const handleExpand = () => {
    setExpand(!expand)
  }
  return (
    <Container className="pt-5 awards">
      <h3 className="mb-0 display-6 text-gray-blue text-uppercase">Academic Grants &amp; Awards</h3>
      <Underline />
      <Row 
        className="overflow-hidden"
        style={{maxHeight: expand ? 'max-content' : '400px'}}>
        <Col>
          <ListGroup variant="flush"> 
            <ListGroup.Item><GoPrimitiveDot /> 2023 Rev. Dr. Michael Combs Award for Scholars of Equality and Justice</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Grant from the University of Michigan. Mellon Foundation Digital Islamic Studies Curriculum project (DISC)$9,000. Spring 2023</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Collage of Arts and Sciences Distinguished Teaching Award for 2022</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Grant from University of Michigan. Mellon Foundation Digital Islamic Studies Curriculum project (DISC), fall 2022, $14,371</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> UNL/DMLL summer student recruitment grant. $1500 “Why Arabic at UNL?” 2022</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> College of Arts and Sciences Research Impact and Engagement Grant. Fall 2021. $5000</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> UNL Center for Transformative Teaching Pedagogic Intervention Grant. $1000 for ARAB 391: Global Islam: Current Debates new course and curriculum development. Fall 2021</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> UNL/DMLL summer research grant. $500 for ARAB 391 Global Islam: Current Debates new course and curriculum development. Fall 2021</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Collage of Arts and Sciences Engagement Award for 2021</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Grant from University of Michigan. Mellon Foundation Digital Islamic Studies Curriculum project (DISC) to support UNL’s Arabic Studies Neighbors interfaith talk series, January, 2021. $750</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Interpreting Muslim Tradition: Struggle for Democracy, Gender Equality, and Minority Protection. UNK, UNL, UNO Grant proposal. CO-PI, 2021</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Forcibly Removed: Workshop and Symposia on the Lived Experiences of Displaced Persons. UNK, UNL, UNO Grant. CO-PI, $150,000, 2020-2021</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Grant from University of Michigan. Mellon Foundation Digital Islamic Studies Curriculum project (DISC) to support the Big Arabic Day, March 5th, 2020</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Forcibly removed: Homeland Detachments of International and Indigenous Refugees”. UNL-UNK collaboration initiative, CO-PI, $ 20,000, 2019</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Grant from University of Michigan. Mellon Foundation Digital Islamic Studies Curriculum project (DISC), fall 2019 and spring   $26,733, 2019-2020</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Grant from Middle East learning and cultural center (MELCC): Ames, Iowa to support the Big Arabic Day 2019</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Grant from the Saudi Arabian Cultural Mission to the U.S: Fairfax, Virginia to support the Big Arabic Day, 2019. $650</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Grant from University of Michigan. Mellon Foundation Digital Islamic Studies Curriculum project (DISC), spring, 2019. $15,843</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> ENHANCE College of Arts and sciences award for research, scholarship, and creative activities, spring 2018.$5000</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Grant from University of Michigan. Mellon Foundation Digital Islamic Studies Curriculum project (DISC), spring, 2018.$10,000</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> UNL peer review project fellowship, faculty development program, 2016-2017. $1000. <a href="https://digitalcommons.unl.edu/prtunl/30" className="text-gray-blue" target="_blank" rel="noreferrer">A link to the project portfolio</a></ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> UNL Certificate of recognition for contributions to students, UNL parents association, 2017</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> UNL Certificate of recognition for contributions to students, UNL parents association, 2016</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> UNL peer review project fellowship, faculty development program, 2015-2016. $500. <a href="https://digitalcommons.unl.edu/prtunl/18/" className="text-gray-blue" target="_blank" rel="noreferrer">A link to the project portfolio</a></ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> UNL parents’ association grant to support events at UNL, spring 2015. $150</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> UNL Convocations Committee award for funding a guest speaker, fall 2014-2015. $750</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> UNL peer review project fellowship, faculty development program, 2014-2015. $500. <a href="https://courseportfolio.org/peer/pages/index.jsp?what=portfolioObjectD&portfolioObjectId=510" className="text-gray-blue" target="_blank" rel="noreferrer">A link to the project portfolio</a></ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Pennsylvania STARTALK Fellowship for teachers of Arabic: A Professional Development Program for Teachers (Arabic), STARTALK Arabic Academy at Penn State, The training was covered by a fellowship that also covered ARAB 497G, Section 601: teaching Arabic, Pennsylvania, May 21 to July 21, 2014</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> UNL parents association grant to support events at UNL, spring 2014</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> UNL Certificate of recognition for contributions to students, UNL parents association, 2013</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> UNL Convocations Committee award for funding a guest speaker, fall 2013-2014. $750</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Nominated for the outstanding graduate teaching assistant award by the department of Classics and Religious studies ,University of Nebraska-Lincoln for the year 2012-13</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Damascus University scholarship for graduate study abroad, 2009</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> The Fulbright scholarship for the Master’s degree, 2007</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Al Basel award for Academic Excellency for the year 1998,( Damascus University) </ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Al Basel award for Academic Excellency for the year 1997,(Damascus University)</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row className="position-relative mt-3">
        {
          !expand && <div className="gradient-up position-absolute"></div>
        }
        <Button className="dark-btn mx-auto" onClick={handleExpand}>{expand ? 'Show less' : 'Show more'}</Button>
      </Row>
    </Container>
  )
}

export default Awards