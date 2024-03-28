import React, { createRef } from 'react';
import styled from 'styled-components'
import Sidebar from './components/Sidebar';


const AppContainer = styled.div`
  height: 100vh;
  display:flex;
  flex-direction: row;
`
const Main = styled.div`
  flex: 1;
`
const Header = styled.div`
  position: sticky;
  top: 0;
  height: 100px;
`

function App() {
  //const sidebarRef = createRef<HTMLDivElement>();
  const [sb, b] = Sidebar({children:"sidebar"})
  return (
    <AppContainer>
      {sb}
      <Main>
        <Header>
          {b}
          Header
        </Header>
        Content
      </Main>
    </AppContainer>
  );
}

export default App;
