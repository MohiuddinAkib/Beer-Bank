import React, { useState } from "react";
// Reactstrap imports
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

// React router imports
import { NavLink as RRDNavLink } from "react-router-dom";

const MyNavbar = () => {
  const [state, setState] = useState({ isOpen: false });

  // @description   Handles navbar collapse in small screens
  const toggle = () =>
    setState(prevState => ({ ...state, isOpen: !prevState.isOpen }));

  return (
    <Navbar color="primary" dark expand="md">
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink exact to="/" tag={RRDNavLink}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/favorite" tag={RRDNavLink}>
              Favourite
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default MyNavbar;
