import React from 'react';
import styled from 'styled-components';

import arrow from '../assets/images/arrow.svg';
import blob_top from '../assets/images/blob_top.svg';
import blob_bottom from '../assets/images/blob_bottom.svg';

const ButtonAnimated = ({ title }) => {
    return (
        <ButtonAnimatedStyled>
            {title}
            <img src={arrow} alt=""  className="arrow"/>
            <img src={blob_top} alt="" className="blob1"/>
            <img src={blob_bottom} alt="" className="blob2"/>
        </ButtonAnimatedStyled>
    );
};

const ButtonAnimatedStyled = styled.button`
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
    position: relative;
    overflow: hidden;
    transition: all .4s ease-in-out;
    .arrow{
        padding-left: .9rem;
        transition: all .4s ease-in-out;
    }
    &:hover{
        transition: all .4s ease-in-out;
        color: var(--accent-pink);
        .blob1{
            transition: all .4s ease-in-out;
            transform: translateX(-100px);
        }
        .blob2{
            transition: all .4s ease-in-out;
            transform: translateX(140px);
        }
        .arrow{
            padding-left: 1.4rem;
        }
    }
    .blob1, .blob2{
        position: absolute;
        pointer-events: none;
        transition: all .4s ease-in-out;
    }
    .blob1{
        top: 0;
        right: 0;
    }
    .blob2{
        bottom: 0;
        left: 0;
    }
`;


export default ButtonAnimated


