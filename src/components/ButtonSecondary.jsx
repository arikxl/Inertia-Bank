import React from 'react';
import styled from 'styled-components';

import arrow from '../assets/images/arrow.svg';

const ButtonSecondary = ({title}) => {
    return (
        <ButtonSecondaryStyled>
            {title} 
            <img src={arrow} alt="" />

        </ButtonSecondaryStyled>
    )
};

const ButtonSecondaryStyled = styled.button`
    background-color: var(--dark-primary);
    padding: 1rem 2rem;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border-radius: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        padding-left: 0.9rem;
    }
`;

export default ButtonSecondary
