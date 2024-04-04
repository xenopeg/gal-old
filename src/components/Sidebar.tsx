import React from "react";
import styled from "styled-components";
import type { RootState } from "../state/store";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../state/slices/sidebar";
import { Header } from "./Header";
import { PiListBold } from "react-icons/pi";
import { Logo } from "./Logo";
import { IconBox } from "./IconBox";

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

const SidebarHeader = styled(Header)`
  background: ${(props) => props.theme.sidebar.header};
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
      <SidebarHeader>
        <IconBox>
          <Logo />
        </IconBox>
        <span>Gal</span>
      </SidebarHeader>
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
