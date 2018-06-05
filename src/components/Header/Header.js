import React from 'react';
import Flexbox from 'flexbox-react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="header">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Company Logo</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/tokensale" className="nav-link">
                  Token Sale
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/roadmap" className="nav-link">
                  Roadmap
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/team" className="nav-link">
                  Team
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/faq" className="nav-link">
                  Faq
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/insights" className="nav-link">
                  Insights
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Whitepaper
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Whitepaper option1</DropdownItem>
                  <DropdownItem>Whitepaper option2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Whitepaper option3</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink to="/contactus" className="nav-link">
                  Contact Us
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
