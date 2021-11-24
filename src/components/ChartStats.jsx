import React from 'react';
import styled from 'styled-components';

const ChartStats = ({title, amount}) => {
    return (
        <ChartStatsStyled>
            <p><b>{title}</b></p>
            <h4>{amount}</h4>
        </ChartStatsStyled>
    )
}

const ChartStatsStyled = styled.div`
    background-color: white;
    border-radius: 50px;
    border: 1px solid var(--border-color);
    height: 10rem;
    padding: 2rem;
    box-shadow: 0 25px 50px rgba(22, 25, 79, 0.05);
    h4{
        font-size: 3rem;
        color: var(--purple-primary)
    }
    p{
        color: black;
    }
`;

export default ChartStats
