import React from 'react';
import styled from 'styled-components';

import { InnerLayout } from '../styles/layouts';
import avatar1 from '../assets/images/avatar1.svg';
import avatar2 from '../assets/images/avatar2.svg';
import avatar3 from '../assets/images/avatar3.svg';
import avatar4 from '../assets/images/avatar4.svg';
import avatar5 from '../assets/images/avatar5.svg';
import chat from '../assets/images/chat.svg';
import circleBg from '../assets/images/circleBg.svg';


const ChatSection = () => {
    return (
        <ChatStyled >
            <InnerLayout>
                <div className="chat-container">
                    <div className="chat-left">
                        <h2 className="secondary-heading">
                            We support you in 5 different languages
                        </h2>
                        <p className="left-paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Praesentium magni et, dignissimos,
                            veritatis suscipit distinctio rem pariatur sunt
                            quos aut eaque deleniti vel!
                        </p>
                        <div className="images-container">
                            <img src={avatar1} alt="" className="image-1" />
                            <img src={avatar2} alt="" className="image-2" />
                            <img src={avatar3} alt="" className="image-3" />
                            <img src={avatar4} alt="" className="image-4" />
                            <img src={avatar5} alt="" className="image-5" />
                            <p>&nbsp; +25</p>
                        </div>  
                        <img src={circleBg} alt="" className="bg-circle" />                        
                    </div>
                    <div className="chat-right">
                        <img src={chat} alt="" />
                        <img src={circleBg} alt="" className="bg-circle" />
                    </div>
                </div>
            </InnerLayout>
        </ChatStyled>
    )
};

const ChatStyled = styled.section`
    .chat-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 1347px){
            grid-template-columns: repeat(1, 1fr);
        }

    }
    .chat-left{
        position: relative;

        padding-right: 2rem;
        .left-paragraph  {
            padding: 1rem 0;
        }
        .images-container {
            display: flex;
            align-items: center;
            .image-2, .image-3, .image-4, .image-5 {
                margin-left: -15px;
            }
        }
        .bg-circle {
            position: absolute;
            top: -7%;
            left: -10%;
            z-index: -1;
        }
    }
    .chat-right {
        position: relative;
        img {
            padding-left: 2rem;
        }
        .bg-circle {
            position: absolute;
            bottom: -7%;
            right: 0;
            z-index: -1;
        }
    }
`;

export default ChatSection
