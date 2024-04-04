import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Sidebar from "./components/Sidebar";
import { theme } from "./components/Theme";
import { Header } from "./components/Header";

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;
const Body = styled.div`
  background: ${(props) => props.theme.main.background};
  color: ${(props) => props.theme.main.font};
  flex: 1;
  display: flex;
  flex-direction: row;
`;
const Main = styled.div`
  flex: 1;
`;

function App() {
  const [SidebarContainer, SidebarButton] = Sidebar({ children: "sidebar" });
  return (
    <AppContainer>
      <ThemeProvider theme={theme}>
        <Body>
          {SidebarContainer}
          <Main>
            <Header>
              {SidebarButton}
              <span>Header</span>
            </Header>
            Content
          </Main>
        </Body>
      </ThemeProvider>
    </AppContainer>
  );
}

export default App;
