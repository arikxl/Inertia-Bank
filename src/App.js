import styled from 'styled-components';

import AppHeader from './components/AppHeader';
import CardSection from './components/CardSection';
import ChartSection from './components/ChartSection';
import ChatSection from './components/ChatSection';
import PaymentSection from './components/PaymentSection';
import { OuterLayout } from './styles/layouts';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <OuterLayout>
          <MainStyled>
              <CardSection />
              <ChartSection />
              <ChatSection />
              <PaymentSection />
          </MainStyled>
      </OuterLayout>
    </div>
  );
};

const MainStyled = styled.main`
  
`;

export default App;
