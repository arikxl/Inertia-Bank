import React from 'react';
import styled from 'styled-components';
import { Bounce, Roll } from 'react-reveal';

import chart from '../assets/images/chart.svg';
import ChartStats from './ChartStats';
import { InnerLayout } from '../styles/layouts';
import ButtonAnimated from './ButtonAnimated';


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
                            <h2 className="secondary-heading">
                                Manage your finances like a pro in no time
                            </h2>
                        <Roll right>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Libero laborum qui provident voluptatum numquam atque odit et,
                                similique labore, harum quibusdam consequatur
                                tempore ipsa omnis.
                            </p>
                        </Roll>
                        <Bounce right>
                            <ButtonAnimated title="Learn More" />
                        </Bounce>
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
        @media screen and (max-width: 1347px){
            grid-template-columns: repeat(1, 1fr);
        }

        .chart-left {
            width: 80%;
            @media screen and (max-width: 1347px){
                width: 100%;
            }
            .stats {
                img {
                    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
                    border-radius:65px;
                    width: 100%;
                }
                .stats-wrapper {
                    display: flex;
                    justify-content: space-between;
                    padding-bottom: 1.3rem;                    
                }
            }
        }
        .chart-right {
            padding-left: 2rem;
            p {
                padding: 1.3rem 0;
            }
        }
    }
`;

export default ChartSection
