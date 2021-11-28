import React from 'react';
import styled from 'styled-components';

import { InnerLayout } from '../styles/layouts';
import lines from '../assets/images/lines.svg';
import questions from '../data/questions';
import Question from './Question';

const FaqSection = () => {
    return (
        <FaqStyled>
            <InnerLayout>
                <h3 className="small-heading">
                    Frequently
                    <span> asked questions</span>
                </h3>
                <p className="center-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quo, quaerat laboriosam. Tempore, illo perferendis.
                    Amet neque ipsum quaerat ipsam,
                    minus libero minima cupiditate eos eaque magni.
                </p>
                <div className="lines">
                    <img src={lines} alt="" />
                </div>

                <div className="question-container">
                    {questions.map((q) =>  {
                        return <Question key={q.id} {...q}/>
                    })}
                </div>
            </InnerLayout>
        </FaqStyled>
    )
};

const FaqStyled = styled.section`
    .center-text{
        width: 60%;
        margin: 0 auto;
    }
    .lines{
        position: absolute;
        left: 0;
        top: 300%;
        width: 100%;
        z-index: -1;
        img {
            width: 100%;

        }
    }

    .question-container {
        padding-top: 4rem; 
    }
`;

export default FaqSection;
