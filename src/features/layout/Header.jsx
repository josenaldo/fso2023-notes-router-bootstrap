import { Link } from 'react-router-dom'

import { Container, Nav, Navbar, Stack } from 'react-bootstrap'

const Header = ({ user }) => {
  const padding = {
    padding: 5,
  }

  return (
    <Stack as="header" gap={3} className="mb-5">
      <Container className="mt-5">
        <h1>Notes Router Bootstrap</h1>
      </Container>

      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#" as="span">
                <Link style={padding} to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#" as="span">
                <Link style={padding} to="/notes">
                  Notes
                </Link>
              </Nav.Link>
              <Nav.Link href="#" as="span">
                <Link style={padding} to="/users">
                  Users
                </Link>
              </Nav.Link>
              <Nav.Link href="#" as="span">
                {user ? (
                  <em style={padding}>{user} logged in</em>
                ) : (
                  <Link style={padding} to="/login">
                    Login
                  </Link>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Stack>
  )
}

export default Header
