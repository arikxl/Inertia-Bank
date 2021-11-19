import React from 'react'
import styled from 'styled-components';

import logo from '../assets/images/logo.svg';
import ButtonPrimary from './ButtonPrimary';


const Navbar = () => {
    return (
        <NavbarStyled>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#features">Features</a>
                </li>
                <li>
                    <a href="#pricing">Pricing</a>
                </li>
            </ul>
            <ButtonPrimary title={"Sign Up"} />
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    min-height: 10vh;
    align-items: center;

    ul{
        display: flex;
        justify-content: space-between;
        width: 40%;
    }

`;

export default Navbar;
