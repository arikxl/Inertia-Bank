/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import styled from 'styled-components';

import { InnerLayout } from '../styles/layouts';
import logo from '../assets/images/logo.svg';

const AppFooter = () => {
    return (
        <FooterStyled>
            <InnerLayout >
                <div className="footer-container">
                    <div className="logo-container">
                        <div className="logo-wrapper">
                            <img src={logo} alt="" />
                            <p>
                                © Copyright arikxl {new Date().getFullYear()}
                            </p>
                        </div>
                    </div>
                    <ul className="bottom-nav">
                        <div className="links1">
                            <li>
                                <a href="#top">Team</a>
                            </li>
                            <li>
                                <a href="#top">Clients</a>
                            </li>
                            <li>
                                <a href="#top">System</a>
                            </li>
                        </div>
                        <div className="links2">
                            <li>
                                <a href="#top">Services</a>
                            </li>
                            <li>
                                <a href="#top">Projects</a>
                            </li>
                            <li>
                                <a href="#top">Press</a>
                            </li>
                        </div>
                        <div className="links3">
                            <li>
                                <a href="#top">Terms of use</a>
                            </li>
                            <li>
                                <a href="#top">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#top">contact us</a>
                            </li>
                        </div>
                    </ul>
                </div>
            </InnerLayout>
        </FooterStyled>
    )
};

const FooterStyled = styled.div`
    padding: 0 18rem;
    background-color: #DCE2F0;
    @media screen and (max-width: 1347px){
        padding: 5rem 14rem;
    }
    @media screen and (max-width: 1186px){
        padding: 5rem 8rem;
    }
    @media screen and (max-width: 990px){
        padding: 5rem 4rem;
    }
    .footer-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    .bottom-nav {
        display: flex;
        justify-content: space-between;
        li {
            padding : 2rem 0;
            color: #16194F;
        }
    }
    .logo-container {
        display: flex;
        align-items: center;
        img{
            width: 90px;

        }
    }
`;

export default AppFooter;
