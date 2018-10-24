import React from "react";

const Navbar = () => (
  <Navbar brand='logo' right>
    <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
    <NavItem href='components.html'>Components</NavItem>
  </Navbar>
);

export default Navbar;