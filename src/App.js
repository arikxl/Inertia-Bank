import styled from 'styled-components';


import AppHeader from './components/AppHeader';
import CardSection from './components/CardSection';
import { OuterLayout } from './styles/layouts';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <OuterLayout>
          <MainStyled>
              <CardSection />
          </MainStyled>
      </OuterLayout>
    </div>
  );
};

const MainStyled = styled.main`
  
`;

export default App;
