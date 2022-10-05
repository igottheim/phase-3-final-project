import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtnLink, NavBtn } from './NavbarElements';

const Navbar = () => {
  return (
    <>
        <Nav>

            <NavLink to="/">

                <img src={require('../../tf.png')} alt="logo"/>
                
            </NavLink>

            <Bars />

            <NavMenu>

                <NavLink to="/about" activeStyle>
                    About
                </NavLink>

                <NavLink to="/services" activeStyle>
                    Services
                </NavLink>

                <NavLink to="/contactus" activeStyle>
                    Contact Us
                </NavLink>

                <NavLink to="/signup" activeStyle>
                    Sign Up
                </NavLink>

            </NavMenu>

            <NavBtn>

                <NavBtnLink to="/login">
                    Login
                </NavBtnLink>

            </NavBtn>

        </Nav>
    </>
  );
};

export default Navbar;