import styled from 'styled-components';


import AppHeader from './components/AppHeader';
import CardSection from './components/CardSection';
import ChartSection from './components/ChartSection';
import { OuterLayout } from './styles/layouts';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <OuterLayout>
          <MainStyled>
              <CardSection />
              <ChartSection />
          </MainStyled>
      </OuterLayout>
    </div>
  );
};

const MainStyled = styled.main`
  
`;

export default App;
