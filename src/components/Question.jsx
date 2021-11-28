import React, { useState } from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal';


import plus from '../assets/images/plus.svg';
import minus from '../assets/images/minus.svg';


const Question = ({ title, description }) => {

    const [toggle, setToggle] = useState(false)

    return (
        <Fade left cascade>
            <QuestionStyled>
                <div className=".question-container">
                    <div className="toggle-container">
                        <h4>{title}</h4>
                        <button onClick={() => setToggle(!toggle)}>
                            <img src={toggle ? minus : plus} alt="" />
                        </button>
                    </div>

                    {toggle && <p>{description}</p>}
                </div>
            </QuestionStyled>
        </Fade>
    )
};

const QuestionStyled = styled.div`
    background-color: #fff;
    margin: 1rem 0;
    padding:1.4rem 1rem;
    border-radius: 24px;
    transition: all .4s ease-in-out;
    box-shadow: 0 25px 50px rgba(22, 25, 79, 0.05);

    h4 {
        color: #16194F;
        font-size: 1.3rem;
        padding: .5rem 0;
    }
    .toggle-container {
        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
            background: transparent;
            outline: none;
            border: none;
            curser: pointer;
        }
        img {
            curser: pointer;
        }
        
    }

`

export default Question
