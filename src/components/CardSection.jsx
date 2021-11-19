import React from 'react';
import styled from 'styled-components';


import { InnerLayout } from '../styles/layouts';
import creditCard from '../assets/images/creditcard.svg';



const CardSection = () => {
    return (
        <CardSectionStyled>
            <InnerLayout>
                <div className="card-container">
                    <div className="card-left">
                        <h2 className="secondary-heading">
                            One card for all your payments
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Corporis explicabo modi voluptate ,
                            inventore aliquam consectetur odit amet quas
                            asperiores aut ex at veritatis quam?
                        </p>
                    </div>
                    <div className="card-right">
                        <img src={creditCard} alt="" />
                    </div>
                </div>
            </InnerLayout>
        </CardSectionStyled>
    )
}

const CardSectionStyled = styled.section`
    card-container{
        background-color: red;
    }
`;

export default CardSection;
