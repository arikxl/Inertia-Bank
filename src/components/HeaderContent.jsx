import React from 'react';
import styled from 'styled-components';

import ring from '../assets/images/ring.svg';
import phone from '../assets/images/phone.svg';
import SecondaryButton from './SecondaryButton';
import message_pink from '../assets/images/message_pink.svg';
import message_blue from '../assets/images/message_blue.svg';


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
                <img src={phone} alt="" className="phone" />
                <img src={ring} alt="" className="ring" />
                <img src={message_pink} alt="" className="message-pink"/>
                <img src={message_blue} alt="" className="message-blue"/>
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
            color: white;
        }
    }

    .right-content {
        position: relative;
        display: flex;
        justify-contents : center;
        .phone{
            // width: 80%;
        }
        .ring {
            position: absolute;
            bottom: 10%;
            right: 0;
            left: auto;
        }
        .message-pink {
            position: absolute;
            top: 0;
            right: 0;
            left: auto;
        }
        .message-blue {
            position: absolute;
            bottom: 15%;
            left: 0;
        }

    }
`;

export default HeaderContent;
