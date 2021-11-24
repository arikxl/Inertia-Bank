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
                <p>Start with our free plan and switch to premium as you grow.</p>
                <div className="card-container">
                    <Card account="free"
                        amount="$0"
                        text="Manage your business with a simple and efficient account."
                        button="Get Started"
                        cardImg={creditcard}
                        active={active}
                        inactive={inactive}
                        check={check}
                        checkDisabled={checkDisabled   }
                        text1="10 free local transfers"
                        text2="Free ATM withdrawals in Dollar up to $250 per month"
                        text3="Free payments to other Draft accounts"
                        text4="Prepaid debit cards"
                        text5="Virtual cards"
                        text6="priority 24/7 support"
                        text7="Exchange 24 currencies"
                        text8="Multi-user access"
                    />
                    <Card />
                </div>
            </InnerLayout>
        </PaymentStyled>
    )
};

const PaymentStyled = styled.section`
    p {
        text-align: center;
    }
`;

export default PaymentSection
