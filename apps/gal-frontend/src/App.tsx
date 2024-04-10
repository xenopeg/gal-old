import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Sidebar, { SidebarButton } from "./components/Sidebar";
import { theme } from "./components/Theme";
import { Header } from "./components/Header";
import {
  PiHouseBold,
  PiListDashesBold,
  PiQuestionBold,
  PiSquaresFourBold,
} from "react-icons/pi";
import { IconBox } from "./components/IconBox";
import { Content } from "./components/Content";
import { Route, Switch, useLocation } from "wouter";

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

const sections = [
  {
    name: "Home",
    route: "/",
    icon: PiHouseBold,
    exact: true,
  },
  {
    name: "Galleries",
    route: "/galleries",
    icon: PiSquaresFourBold,
  },
  {
    name: "Items",
    route: "/items",
    icon: PiListDashesBold,
  },
  {
    name: "About",
    route: "/about",
    icon: PiQuestionBold,
  },
];

function App() {
  const [location] = useLocation();
  const [SidebarContainer, SidebarToggle] = Sidebar({
    children: (
      <>
        {sections.map((s) => (
          <SidebarButton key={s.route}
            className={
              s.exact
                ? location === "/"
                  ? "active"
                  : ""
                : location.indexOf(s.route) === 0
                ? "active"
                : ""
            }
            href={s.route}
          >
            <IconBox>
              <s.icon />
            </IconBox>
            <span>{s.name}</span>
          </SidebarButton>
        ))}
      </>
    ),
  });
  return (
    <AppContainer>
      <ThemeProvider theme={theme}>
        <Body>
          {SidebarContainer}
          <Main>
            <Header>
              {SidebarToggle}
              <span>Header</span>
            </Header>

            <Content>
              <Switch>
                <Route path="/">Home</Route>

                <Route path="/galleries">Galleries</Route>

                <Route path="/items">Items</Route>

                <Route path="/about">About</Route>
                {/* Default route in a switch */}
                <Route>404: No such page!</Route>
              </Switch>
            </Content>
          </Main>
        </Body>
      </ThemeProvider>
    </AppContainer>
  );
}

export default App;
