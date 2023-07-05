import { Component } from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

class NavigasiBar extends Component {
  state = { isOpen: false };
  toggleCollapse = () => {};

  render() {
    const { isOpen } = this.state;
    return (
      <Navbar color="dark" dark expand="lg">
        <NavbarBrand href="/">Binar Academy</NavbarBrand>
        <NavbarToggler onClick={this.toggleCollapse} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="px-2">
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem className="px-2">
              <Link to="/about">About</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavigasiBar;
