import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  background-color: #0c0b0ba4;
  z-index: 1000;
  top: 0;
  position: fixed;
  img{
    width: 50px;
    height: auto;
    padding-left: 0px;
  }
  @media only screen and (min-width: 920px) {
    padding: 10px;
    position: unset;
    img {
    padding-left: 10px;
    }
  }
  
`;