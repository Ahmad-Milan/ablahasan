import React, {useState} from 'react'
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap'
import Underline from '../shared/Underline'
import { GoPrimitiveDot } from 'react-icons/go'

function Talks() {
  const [expand, setExpand] = useState(false)

  const handleExpand = () => {
    setExpand(!expand)
  }
  return (
    <Container className="pt-5 mt-md-3 courses">
      <h3 className="mb-0 display-6 text-gray-blue text-uppercase">Invited lectures &amp; Talks</h3>
      <Underline />
      <Row 
        className="overflow-hidden"
        style={{maxHeight: expand ? 'max-content' : '400px'}}>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item><GoPrimitiveDot /> Invited virtual lecture: Marriage in the Qur’an. Hastings College. Texas. April 27, 2022.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Invited virtual talk: the 2022 American College Personnel Association International Colloquium session "Intersecting identities of international faculty: challenges and well-being”. A panel hosted by Commission for Global Dimensions of Student Development. April 15, 2022. </ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Invited guest speaker. Dr. Max Mueller (Classics and Religious Studies). Nebraska University. <a href="https://www.youtube.com/watch?v=moEzRSkCICY&t=751s" className="text-gray-blue" target="_blank" rel="noreferrer">See a link to the lecture: Why does not God stop evil people?</a>  A new book reading. March 31, 2022. </ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Gender Equity Conference: Globalizing Gender Equity Panel. Panel presentation. Nebraska University. November 11, 2021. </ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Decoding the Egalitarianism of the Qur’an” an invited book reading event. The Osher Lifelong Learning Institute at University of Nebraska-Lincoln. Monday Sep 13, 2021. </ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> "Truth about 4:34 -- The Quran's Most Controversial &amp; Misunderstood Verse". The Women's Mosque of America (Located in Los Angeles, CA). Friday, July 30th, 2021. <a href="https://www.youtube.com/watch?v=qQN7Zl-pnsI" className="text-gray-blue" target="_blank" rel="noreferrer">A link to the talk</a></ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> The Queen of Sheba in Muslim tradition. An invited zoom lecture. University of Houston. Texas. 6/28/2021. </ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Role of Islam in Moroccan culture. The Osher Lifelong Learning Institute at University of Nebraska-Lincoln. Invited Talk. 4/14/2021. </ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Rethinking (Q: 4:34): Ending 14 centuries of domestic violence held in the name of Islam. Kansas University MSA. Invited talk. 3/8/2021. <a href="https://www.youtube.com/watch?v=uoElXE-Bxa0" className="text-gray-blue" target="_blank" rel="noreferrer">A link to the talk</a></ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Culture and COVID-19 in an international comparative context. Panel discussion. Wesleyan University, Nebraska. Feb23, 2021. <a href="https://nebrwesleyan.digication.com/culture_covid_conversation/culture-and-covid-19-in-an-international-compara-1" className="text-gray-blue" target="_blank" rel="noreferrer">A link to the talk</a></ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Quran’s most controversial 4:34: a new interpretation”, DISC supplementary invited talk, Penn-State University, State-College, March 2, 2020.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> Worship and wisdom. Invited talk. “Five myths about Islam” First Plymouth Church. Sep 4th, 2019. <a href="https://www.youtube.com/watch?v=tVuhwBJPKwU" className="text-gray-blue" target="_blank" rel="noreferrer">A link to the talk</a> </ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Teaching Islam vs. preaching Islam in the classroom: how to teach an ideology-free course on Religion”, DISC supplementary invited talk, Rutgers University, Digital Islamic curriculum, Rutgers University. New Brunswick, New Jersey April 11, 2019. <a href="https://www.youtube.com/watch?v=DzPIFcE-Vy4&t=582s" className="text-gray-blue" target="_blank" rel="noreferrer">A link to the lecture</a></ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> DISC Round Table discussion, Mellon Foundation Digital Islamic Studies Curriculum, Chicago, May10, 2018. </ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “The Lost Gender Egalitarian Voice of the Qur’an”. Invited Talk. Digital Islamic curriculum, Rutgers University. New Brunswick, New Jersey, Feb 19, 2018.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “The Muslim Ban: Patriotism or Xenophobia”. Featured Guest. UNL Ethics Center. Lincoln. January 24, 2018. </ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Faith and Feminism”. Panel discussion. Wesleyan University. Lincoln. October 24, 2017. </ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> "Between Allah and Me (and Everyone Else)". A film screening and a panel discussion. The Mary Riepma Ross Media Center. Sep, 2017. </ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Understanding Islam: what it's like to be Muslim in the Midwest”. An invited talk. Hastings College, French Memorial Chapel. Hastings. April 28, 2017. <a href="https://www.youtube.com/watch?v=edTiKUM7g-Q&t=1375s" className="text-gray-blue" target="_blank" rel="noreferrer">A link to the talk</a></ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “A reading and a reflection from the Story of Mary in the Quran”. An invited talk. Saint Paul United Methodist Church. Lincoln. April, 18, 2017. </ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “World Religions Panel: Wisdom from Diverse Voices”. Panel discussion. Heckman Auditorium. Doane College. Crete. April 6, 2017. <a href="https://www.youtube.com/watch?v=wJ8cQmT_ZSk&t=1544s " className="text-gray-blue" target="_blank" rel="noreferrer">A link to the panel</a></ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Strength in Solidarity”. Keynote speaker. Women’s Week 2017: The 11th annual Women’s History Month Banquet, The University of Nebraska Women’s Center. Champion's Club. March 15, 2017. </ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Syrian conflict and refugee crisis”. An invited talk. UNL Global studies Global Café .Nebraska union. Colonial A. January 26, 2017.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “The meanings of gratitude”. Keynote speaker. Interfaith Thanksgiving Service. South Street Temple. November 20, 2016.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “The Muslim Jesus”. An invited lecture. First- Plymouth. Nov 13, 2016. </ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Women in the Quran”. An invited lecture. First- Plymouth: Mayflower Hall. October 29, 2016.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Embrace diversity”. Panel discussion. Bryan Health College. Lincoln. October 24, 2016.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “What is the Quran?” An invited lecture. First- Plymouth: Mayflower Hall. September 28, 2016. </ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Women in the Middle East: Hopes and challenges”. Women's Salad Supper. First-Plymouth. June 15, 2016. </ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “The Muslim Mary”. An invited talk. First-Plymouth. June 12, 2016.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “How do we get to Haven?” An invited talk. First-Plymouth East at Kloefkorn Elementary. June 12, 2016.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Women in Islam”. Nebraska citizens for science. Saint. Paul Church. April 21, 2016.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Symposium: Understanding and Embracing Individuals from the Middle East”. Unitarian Church. Lincoln. March 17, 2016.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Identifying Stereotypes”. Keynote speaker. Doan Collage. Multicultural Support Services Crete. March 14, 2016.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Women issues in the Arabic culture”. Heartland Association: Nebraska Conference. United Church of Christ. Spring meeting. March 13, 2016. </ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Puddin”. Panel discussion. Child hunger in the community. The Johnny Carson School of Theatre and Film. March 12, 2016. </ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “The Quran”. First Lutheran Church. Lincoln. Feb 9, 2016. </ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “A Syrian Immigrant's Experience”. The Faith Coalition of Lancaster County. The community heath endowment. Lincoln. Feb, 2016.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Syria: An ongoing journey into the unknown”. Featured discussion leader. UNL Ethics Center. Gaughan Multicultural Center. Jan 20, 2016. </ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “The Syrian Crisis”. St. Matthew's Episcopal Church. Lincoln. Dec, 2015.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Syria and ISIS: The Human Cost”. Panel discussion. UNL: Nebraska Union Auditorium. Dec, 2015. </ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Perspectives in Feminism”. Panel discussion. Wesleyan University. Nov 19, 2015. </ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Syria: ways to help”. An invited talk. St. Mark’s Episcopal Church. Lincoln, Nov 15, 2015.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “On Muslim Christian relations”. An invited talk.Vine Congregational United Church of Christ. Lincoln. Nov 11, 2015.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Refugee Migration Crisis”. Panel discussion. Union college. Sep 24, 2015.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Jesus: A symposium”. Panel discussion. Doan College (school of graduate professional studies). July 16, 2015.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Islam and Christianity”. An invited talk. First-Plymouth East. June28, 2015.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Religions' Attitude towards the Material World”. Panel discussion. Union College. Ortner Center. April 6, 2015.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Women of the Middle East”. Panel discussion. UNL women Center. March 17th, 2015.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Women in Religion”. Panel discussion. Union College. Ortner Center. Feb 9, 2015.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “Women in religion”. Panel discussion. UNL women Center. March 17th, 2014</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “How can I find God?”  Symposium. Doane College. Lincoln. 2012.</ListGroup.Item>
            <ListGroup.Item><GoPrimitiveDot /> “God, the Qur'an and the Prophet”. Symposium. Doane College. Lincoln. 2012</ListGroup.Item>
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

export default Talks