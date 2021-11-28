import React from 'react';
import styled from 'styled-components';

import bg from '../assets/images/bg.svg';
import Navbar from './Navbar';
import HeaderContent from './HeaderContent';

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
    min-height: 100vh;
    width: 100%;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 100%;
    .header-content{
        padding: 0 18rem;
        @media screen and (max-width: 1347px){
            padding: 5rem 14rem;
        }
        @media screen and (max-width: 1186px){
            padding: 5rem 8rem;
        }
        @media screen and (max-width: 990px){
            padding: 5rem 4rem;
        }
    }
`;

export default AppHeader;