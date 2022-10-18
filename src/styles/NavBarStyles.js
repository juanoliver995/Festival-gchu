import styled from "styled-components";

export const NavbarWrapper = styled.nav`
   background-color: var(--dark-color);
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1000;
  top: 0;
  right: ${props => (props.open ? "0" : "-100%")};
  transition: right 0.3s linear;
  height: 100vh;
  padding: 4rem 2rem 0 2rem;
  font-family: var(--body-font);
  width: 50%;
  a {
    color: var(--ligth-color);
    text-decoration: none;
    font-size: 18px;
    margin-bottom: 10px;
    margin-right: 20px;
  }
  @media only screen and (min-width: 920px) {
    background-color: transparent;
    padding: unset;
    width: 100%;
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: flex-end;
    padding-top: 0;
  }
 
`;