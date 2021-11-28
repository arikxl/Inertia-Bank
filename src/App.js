import styled from 'styled-components';
import { Fade } from 'react-reveal';

import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import CardSection from './components/CardSection';
import ChartSection from './components/ChartSection';
import ChatSection from './components/ChatSection';
import FaqSection from './components/FaqSection';
import PaymentSection from './components/PaymentSection';
import { OuterLayout } from './styles/layouts';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <OuterLayout>
          <MainStyled>
            <Fade left>
              <CardSection />
            </Fade>
            <Fade right>
              <ChartSection />
            </Fade>
            <Fade left>
              <ChatSection />
            </Fade>
            <Fade right>
              <PaymentSection />
            </Fade>
            <Fade left>
              <FaqSection />
            </Fade>
          </MainStyled>
      </OuterLayout>
      <Fade bottom>
        <AppFooter />
      </Fade>
    </div>
  );
};

const MainStyled = styled.main`
  
`;

export default App;
