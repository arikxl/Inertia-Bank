import React from 'react';
import styled from 'styled-components';

import phone from '../assets/images/phone.svg';
import SecondaryButton from './SecondaryButton';


const HeaderContent = () => {
    return (
        <HeaderContentStyled>
            <div className="left-content">
                <div className="left-text-container">
                    <h1>Smart banking for freelancers</h1>
                    <p className="white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Inventore officiis nisi vitae deleniti adipisci.
                        Voluptate ratione iure distinctio ipsum sed alias temporibus,
                        itaque soluta voluptatibus quasi reiciendis ducimus maxime facere.
                    </p>
                    <SecondaryButton title="Register Now" />
                </div>
            </div>
            <div className="right-content">
                <img src={phone} alt="" />
            </div>
        </HeaderContentStyled>
    )
}

const HeaderContentStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 3rem;
    .left-content{
        display: flex;
        align-items: center;
        padding-right: 3rem;
        h1{
            font-size: 4rem;
            font-weight: 600;
        }
        .white {
            padding: 1.4rem 0;
            line-height: 1.8rem;
        }
    }

`;


export default HeaderContent
