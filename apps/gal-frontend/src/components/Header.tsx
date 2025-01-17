import styled from "styled-components";

export const Header = styled.div`
  position: sticky;
  top: 0;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 .3em;

  &:not(.unstyled){
    border-bottom: 2px solid  ${props => props.theme.header.border};
    background: ${props => props.theme.header.background};
    box-shadow: 0px 2px 3px ${props => props.theme.header.border};
  }
`;

export const HeaderTitle = styled.div`
  font-size: 1.6em;
  display: flex;
  flex-direction: row;
  align-items: center;
`;