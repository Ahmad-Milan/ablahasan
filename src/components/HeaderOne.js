import * as React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Container, Navbar, Nav, Row } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({siteTitle}) => {
  return (
    <header>
      <Container className="pt-3">
        <Row>
          <div className="w-auto mx-auto">
            <StaticImage
              src="../images/logo.png"
              width={200}
              quality={95}
              formats={["auto", "webp"]}
              alt="Dr. Abla Hasan Website Logo"
            />
          </div>
        </Row>
      </Container>
      <Navbar collapseOnSelect expand="sm">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto py-1">
              <Link activeClassName="active-link" className="nav-link" to="/">HOME</Link>
              <Link activeClassName="active-link" className="nav-link" to="/about/">ABOUT</Link>
              <Link activeClassName="active-link" className="nav-link" to="/books/">BOOKS</Link>
              <Link activeClassName="active-link" className="nav-link" to="/media/">MEDIA</Link>
              <Link activeClassName="active-link" className="nav-link" to="/gallery/">GALLERY</Link>
              <Link activeClassName="active-link" className="nav-link" to="/contact/">CONTACT</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </header>
  )}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }
// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
