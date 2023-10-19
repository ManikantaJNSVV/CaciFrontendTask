// Header.js
import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
`;



const Header = ({title}) => (
  <HeaderContainer>
    <Title>{title}</Title>
  </HeaderContainer>
);

export default Header;
