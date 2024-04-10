import React from "react";
import styled from "styled-components";
import type { RootState } from "../state/store";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../state/slices/sidebar";
import { Header, HeaderTitle } from "./Header";
import { PiListBold } from "react-icons/pi";
import { Logo } from "./Logo";
import { IconBox } from "./IconBox";
import { Link, Route, Switch } from "wouter";


const SidebarContainer = styled.div`
  width: 0;
  overflow: hidden;
  transition: width 0.2s;
  z-index: 2;
  background: ${(props) => props.theme.sidebar.background};
  border-right: 2px solid ${(props) => props.theme.sidebar.border};
  &&.open {
    width: 250px;
  }
`;

const Button = styled.button`
  border: none;
  background: none;
  font-size: 1em;
  color: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const SidebarButton = styled(Link)`
text-decoration: none;
  display: flex;
  flex-direction : row;
  align-items: center;
  background: transparent;
  color: inherit;
  font-size: 1.3em;
  padding: .8em 0.5em;
  border: none;
  width: 100%;
  text-align: start;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.sidebar.button.hover};
  }
  &.active {
    background: ${(props) => props.theme.sidebar.button.active};
  }
`;

export default function Sidebar(props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
}) {
  const open = useSelector((state: RootState) => state.sidebar.value);
  const dispatch = useDispatch();

  const sidebar = (
    <SidebarContainer className={open ? "open" : ""}>
      <Header className="unstyled">
        <HeaderTitle>
        <IconBox>
          <Logo />
        </IconBox>
        <span>Gal</span>
        </HeaderTitle>

      </Header>
      {props.children}
    </SidebarContainer>
  );
  const button = (
    <Button aria-label="Toggle sidebar" onClick={() => dispatch(toggle())}>
      <IconBox> {open ? <PiListBold /> : <Logo />}</IconBox>
    </Button>
  );

  return [sidebar, button];
}
