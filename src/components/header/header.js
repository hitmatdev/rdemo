import React from "react";
import { FaBeer } from 'react-icons/fa';
import {
  BsFillBellFill,
  BsFillChatDotsFill,
  BsFillPersonFill,
  BsPower,
  BsFillPeopleFill,
  BsSearch
}
 from 'react-icons/bs';

import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse
} from "shards-react";

import '../../css/custom.css'
 
 class Header extends React.Component 
 {
  
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false
    };
  }

  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen
      }
    });
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }

  render() {
    return (
      
      <Navbar type="dark" className="navbar-custom" expand="lg">
     
          <FaBeer className="d-lg-none"/><NavbarBrand href="/home" className="h1-custom d-none d-lg-block">React-Bootstrap</NavbarBrand>
      
          
            <Nav navbar className="search-box">
              <InputGroup size="sm" seamless>
                <InputGroupAddon type="prepend">
                  <InputGroupText>
                    <BsSearch />
                  </InputGroupText>
                </InputGroupAddon>
                <FormInput className="border-3" placeholder="Search..." />
              </InputGroup>
            </Nav>
            <NavbarToggler onClick={this.toggleNavbar} />
            <Collapse open={this.state.collapseOpen} navbar>
            <Nav navbar className="ml-auto">
              <NavItem className="nav-item">
                  <NavLink active className="hover-underline-animation" href="/home">Home</NavLink>
              </NavItem>
              <NavItem className="nav-item">
                  <NavLink className="hover-underline-animation" href="/about">About</NavLink>
              </NavItem>
              <NavItem className="nav-item">
                  <NavLink className="hover-underline-animation" href="/services">Services</NavLink>
              </NavItem>
              <NavItem className="nav-item">
                  <NavLink className="hover-underline-animation" href="/products">Product</NavLink>
              </NavItem>
              <NavItem className="nav-item">
                  <NavLink className="hover-underline-animation" href="/contact">Contact</NavLink>
              </NavItem>
              <Dropdown
                open={this.state.dropdownOpen}
                toggle={this.toggleDropdown}
              >
                <DropdownToggle nav caret id="dropdownMenuButton" data-toggle="dropdown">
                  More
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem className="d-flex justify-content-between align-items-center">Notifications <BsFillBellFill/><span className="badge badge-primary badge-pill">14</span></DropdownItem>
                  <DropdownItem className="d-flex justify-content-between align-items-center">Messages <BsFillChatDotsFill/><span className="badge badge-primary badge-pill">10</span></DropdownItem>
                  <DropdownItem className="d-flex justify-content-between align-items-center">Groups<BsFillPeopleFill/><span className="badge badge-primary badge-pill">3</span></DropdownItem>
                  <DropdownItem className="d-flex justify-content-between align-items-center">My Account <BsFillPersonFill/></DropdownItem>
                  <DropdownItem className="d-flex justify-content-between align-items-center">Logout <BsPower/></DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Nav>
          </Collapse>
    </Navbar>
    );
  }
}

export default Header;