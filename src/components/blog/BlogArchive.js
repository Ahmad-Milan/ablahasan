import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import Underline from "../shared/Underline"
import { Link } from "gatsby"

const BlogArchive = ({ posts }) => {
  return (
    <Container id="podcasts" className="mt-5 pt-md-4">
      <h2 className="mb-0 display-5 text-gray-blue">Blog Archive</h2>
      <Underline />
      <Row>
        {posts.map((post, index) => (
          <Col key={index} md={6} lg={4} className="mb-3">
            <Link to={post.slug} className="text-decoration-none">
              <Card className="shadow-sm">
                <figure className="text-center mb-0 overflow-hidden">
                  <img
                    src={post.image}
                    height={265}
                    formats={["auto", "webp"]}
                    alt="Hitting women in quran"
                    className="shadow-sm rounded w-100"
                  />
                </figure>
                <Card.Body className="text-end">
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text className="text">{post.excerpt}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                  <small>Dr. Abla Hasan</small>{" "}
                  <small className="float-end">{post.date}</small>
                </Card.Footer>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default BlogArchive
