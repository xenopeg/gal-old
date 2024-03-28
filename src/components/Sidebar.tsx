import React, { createRef } from 'react';
import styled from 'styled-components'

const SidebarContainer = styled.div`
  width: 0;
  overflow: hidden;
  transition: width .2s;
  &&.open {
    width: 250px;
  }
`

const Button = styled.button`
`

export default function Sidebar(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; })  {
  const sidebarRef = createRef<HTMLDivElement>();

  const sidebar = <SidebarContainer ref={sidebarRef} >{props.children}</SidebarContainer>

  const button = <Button onClick={()=>sidebarRef.current?.classList.toggle("open")}>H</Button>

  return [sidebar, button];
}