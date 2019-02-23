import React, { useState, useLayoutEffect } from "react";
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
// Classnames module
import classNames from "classnames";

const MyNavbar = () => {
  const [state, setState] = useState({ isOpen: false, affix: false });

  // @description   Handles navbar collapse in small screens
  const toggle = () =>
    setState(prevState => ({ ...state, isOpen: !prevState.isOpen }));

  // Handles navbar's affix mode
  const handleScroll = () => {
    window.scrollY > 200
      ? setState({ ...state, affix: true })
      : setState({ ...state, affix: false });
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [state.affix]);

  return (
    <Navbar
      dark
      expand="xs"
      className={classNames("bg-yellow", {
        "animated slideInDown fixed-top": state.affix
      })}
    >
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

export default React.memo(MyNavbar);
