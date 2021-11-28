import React from 'react';
import styled from 'styled-components';

import ring from '../assets/images/ring.svg';
import phone from '../assets/images/phone.svg';
import message_pink from '../assets/images/message_pink.svg';
import message_blue from '../assets/images/message_blue.svg';
import ButtonAnimated from './ButtonAnimated';
import { Fade } from 'react-reveal';

const HeaderContent = () => {
    return (
        <HeaderContentStyled>
            <Fade left>
            <div className="left-content">
                <div className="left-text-container">
                    <h1>Smart banking for freelancers</h1>
                    <p className="white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Inventore officiis nisi vitae deleniti adipisci.
                        Voluptate ratione iure distinctio ipsum sed alias temporibus,
                        itaque soluta voluptatibus quasi reiciendis ducimus maxime facere.
                    </p>
                    <ButtonAnimated title="Register Now" />
                </div>
            </div>
            </Fade>
            <Fade right>
                <div className="right-content">
                    <img src={phone} alt="" className="phone" />
                    <img src={ring} alt="" className="ring" />
                    <img src={message_pink} alt="" className="message-pink" />
                    <img src={message_blue} alt="" className="message-blue" />
                </div>
            </Fade>
        </HeaderContentStyled>
    )
}

const HeaderContentStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 3rem;
    @media screen and (max-width: 700px){
        grid-template-columns: repeat(1, 1fr);
    }

    .left-content{
        display: flex;
        align-items: center;
        padding-right: 3rem;
     
        h1{
            font-size: 4rem;
            font-weight: 600;
            @media screen and (max-width: 700px){
                font-size: 3rem;
            }

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
        width: 80%;
        }
        .ring {
            position: absolute;
            bottom: 10%;
            right: 0;
            left: auto;
            animation: move2 15s infinite;
            transition: all .4s ease-in-out;
        }
        .message-pink {
            position: absolute;
            top: 0;
            right: 0;
            left: auto;
            animation: move 5s infinite;
            transition: all .4s ease-in-out;
        }
        .message-blue {
            position: absolute;
            bottom: 15%;
            left: 0;
            animation: move 8s infinite;
            animation delay: 0.5s;
            transition: all .4s ease-in-out;        }

    }

    .message-pink {
        @keyframes move{
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(20px);
            }
            100%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
        }
        
        @keyframes move2 {
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(60deg) scale(1.1) translateX(20px);
            }
            100%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
        }
    }
`;

export default HeaderContent;
