import { Navbar, Nav, NavbarBrand, NavLink } from "react-bootstrap";
import StyledLink from "./styledLink";

function navbar() {
  return (
    <Navbar bg="light" expand="lg">
      <NavbarBrand href="/">CATS</NavbarBrand>
      <Navbar.Toggle aria-controls="my-nav" />
      <Navbar.Collapse id="my-nav">
        <Nav className="mr-auto">
          <StyledLink href="/">Home</StyledLink>
          <StyledLink href="/members">Members</StyledLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navbar;
