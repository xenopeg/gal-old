import styled from "styled-components";

export const Header = styled.div`
  position: sticky;
  top: 0;
  height: 60px;
  font-size: 1.8em;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 2px solid  ${props => props.theme.header.border};
  background: ${props => props.theme.header.background};
  box-shadow: 0px 2px 3px ${props => props.theme.header.border};
  padding: 0 .3em
`;