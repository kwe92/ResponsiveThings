import React, { Fragment } from "react";
import styled from "styled-components";

export const Navebar = styled.nav`

  display: flex;

  height: 5rem;

  align-items: center;

  justify-content: space-between;

  padding: 20px;

  background-color: #3259b3;

  color: #fff;

  a {
    color: white;
  }
`;

export const UlNavLinks = styled.ul`

  color: #fff;
`;

export const Logo = styled.div`

  font-size: 2rem;
`;

export const Menu = styled.div`

  display: flex;

  gap: 1rem;

  font-size: 1.25rem;

  li {
    padding: 5px 14px;
  }

  li:hover {

    background-color: rgba(25, 29, 36, 0.6);

    transition: 0.3s ease;

    border-radius: 5px;

  }

  @media(max-width:768px){
    display: none;
  }
`;

export const ServiceWrapper = styled.a`

position: relative;

`;

export const DropdownWrapper = styled.div`

`;


export const StyledDropdown = styled.ul`

background-color: #3259b3;

// background-color: rgba(50, 89, 179, 0.7);

padding: 1em 0;

position: absolute; // With respect to parent

display: none;

border-radius: 8px;

top: 35px;

li + li {
  margin-top: 10px;
}

${DropdownWrapper}:hover & {
  display: block;
}

li {
  padding: 0.5em 1em;

  width: 8em;

  text-align:center;
}

li: hover{

  // Orange
  background: #ff9e00;
}

@media(max-width:768px){
  position: relative;
}
`;

export const HamburgerMenu = styled.label`

display: none;

position: relative;

@media (max-width:768px) {
  display: block;
}

font-size: 2.5rem;
`;


