import React from 'react';
import styled from 'styled-components';

const ButtonPrimary = ({title}) => {
    return (
        <ButtonStyled>
            {title }
        </ButtonStyled>
    );
};

const ButtonStyled = styled.button`
    background-color: var(--accent-pink);
    padding: .7rem 2rem;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border-radius: 20px;
    outline: none;
    border: none;
    cursor: pointer;
`;

export default ButtonPrimary;