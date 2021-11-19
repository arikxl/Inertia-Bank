import React from 'react';
import styled from 'styled-components';
import bg from '../assets/images/bg.svg';
import HeaderContent from './HeaderContent';
import Navbar from './Navbar';

console.log('test')
const AppHeader = () => {
    return (
        <HeaderStyled>
            <div className="header-content">
                <Navbar />
                <HeaderContent />
            </div>
        </HeaderStyled>
    )
};

const HeaderStyled = styled.header`
    height: 100vh;
    width: 100%;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 100%;
    .header-content{
        padding: 0 10rem;
    }
`;

export default AppHeader;

