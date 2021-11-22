import React from 'react';
import styled from 'styled-components';

import chart from '../assets/images/chart.svg';
import ChartStats from './ChartStats';
import { InnerLayout } from '../styles/layouts';


const ChartSection = () => {
    return (
        <ChartStyled>
            <InnerLayout >
                <div className="chart-container">
                    <div className="chart-left">
                        <div className="stats">
                            <div className="stats-wrapper">
                                <ChartStats title={"Balance"} amount="$1000" />
                                <ChartStats title={"Last Transaction"} amount="$250" />
                            </div>
                            <img src={chart} alt="" />
                        </div>
                    </div>
                    <div className="chart-right">
                    </div>
                </div>
            </InnerLayout>
        </ChartStyled>
    )
}

const ChartStyled = styled.section`
    .chart-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        .chart-left {
            .stats {
                img {
                    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
                    border-radius: 50px;
                    width: 100%;
                }
                .stats-wrapper {
                    display: flex;
                    justify-content: space-between;
                    padding-bottom: 1.3rem;                    
                }
            }
        }
    }
`;

export default ChartSection
