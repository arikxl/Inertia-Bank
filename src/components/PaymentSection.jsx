import React from 'react';
import styled from 'styled-components';

import Card from './Card';
import check from '../assets/images/check.svg';
import active from '../assets/images/active.svg';
import inactive from '../assets/images/inactive.svg';
import creditcard from '../assets/images/creditcard.svg';
import checkDisabled from '../assets/images/check-disabled.svg';
import { InnerLayout } from '../styles/layouts';

const PaymentSection = () => {


    return (
        <PaymentStyled>
            <InnerLayout>
                <h3 className="small-heading">
                    An exceptional service,
                    <span> at the right price</span>
                </h3>
                <p className="center-text">Start with our free plan and switch to premium as you grow.</p>
                <div className="card-container">
                    <Card account="free"
                        amount="$0"
                        title="Manage your business with a simple and efficient account."
                        button="Get Started"
                        cardImg={creditcard}
                        active={active}
                        inactive={inactive}
                        check={check}
                        checkDisabled={checkDisabled}
                        text1="10 free local transfers"
                        text2="Free ATM withdrawals in Dollar up to $250 per month"
                        text3="Free payments to other Draft accounts"
                        text4="Prepaid debit cards"
                        text5="Virtual cards"
                        text6="priority 24/7 support"
                        text7="Exchange 24 currencies"
                        text8="Multi-user access"
                    />
                    <Card account="Premium"
                        amount="$10"
                        title="Manage your business with a simple and efficient account."
                        button="Get Started"
                        cardImg={creditcard}
                        active={active}
                        inactive={inactive}
                        check={check}
                        checkDisabled={checkDisabled}
                        text1="10 free local transfers"
                        text2="Free ATM withdrawals in Dollar up to $250 per month"
                        text3="Free payments to other Draft accounts"
                        text4="Prepaid debit cards"
                        text5="Virtual cards"
                        text6="priority 24/7 support"
                        text7="Exchange 24 currencies"
                        text8="Multi-user access"
                    />
                </div>
            </InnerLayout>
        </PaymentStyled>
    )
};

const PaymentStyled = styled.section`
    .card-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 3rem;
        padding-top: 7.5rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
  
`;

export default PaymentSection
