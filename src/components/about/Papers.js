import React, {useState} from 'react'
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap'
import Underline from '../shared/Underline'
import { GoPrimitiveDot } from 'react-icons/go'

function Papers() {
  const [expand, setExpand] = useState(false)

  const handleExpand = () => {
    setExpand(!expand)
  }
  return (
    <Container className="pt-5 mt-md-3 courses">
      <h3 className="mb-0 display-6 text-gray-blue text-uppercase">Peer review articles</h3>
      <Underline />
      <Row 
        className="overflow-hidden"
        style={{maxHeight: expand ? 'max-content' : '400px'}}>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item><GoPrimitiveDot /> “Niqula Ghabriyal, Abhath al-Mujtahidin” in Christian-Muslim Relations, vol. 18 The Ottoman Empire (1800-1914), (Leiden: Brill). Co-authored with Simon A. Wood, Classics and Religious Studies, 2021</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “al-Tamimi l-Dari and Al-sayf al-saqil” in Christian-Muslim Relations, vol.18, (Leiden: Brill). Co-authored with Simon A. Wood, Classics and Religious Studies, 2021</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Book review: Arab cooking on a prairie Homestead and Recollections from a Syrian Pioneer. In. Great Plains Quarterly. Lincoln: Center for Great Plains Studies. Vol: 38. No: 4. 2018</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “The Queen of Sheba: Would rethinking the Quranic story support female public leadership In Islam?”. In: Analize: peer-reviewed international journal. The Romanian Society for Feminist Analyses. Issue No: 7(21), 2016</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “The Quranic story of Mary: Does rethinking the text support women prophethood?”. In: Ar-Raniry: peer reviewed international journal of Islamic Studies. The State Islamic University (UIN). Vol: 3. No: 1. 2016</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Scientific language credibility: a philosophical investigation”. In: Dirasat Wa Abhath: an international peer reviewed research journal. University of Djelfa. N: 20, Sep, 2015</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “The individual-group transformation: a triple academic approach to understanding social human nature”. In: Jil: an international peer reviewed journal. Jil research center. ISSN 2311-5181. No: 11. September, 2015</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Defending backwards causation against the objection form the ignorance condition”. In: Disputatio: an international peer reviewed journal of philosophy. Philosophy center of the University of Lisbon. Vol: VI. No: 39. November, 2014</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Physicalism: a critical approach”. In: Jil: an international peer reviewed journal. Jil research center. ISSN 2311-5181. No: 3. October, 2014</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Psychological backwards causation”. In: Al-Manarah: peer reviewed journal. Al-al Bayt University. Vol: 20. No: 2. February, 2014</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Plato’s antifeminism: A new dualistic approach". In: E-logos. ISSN 1211-0442. University of Economics. Prague. 2012</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Indexical Dependence”. In: Dirasat Wa Abhath: an international peer reviewed research journal. ISSN: 9751-1112. N: 12. University of Djelfa. Sep, 2013</ListGroup.Item>
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

export default Papers