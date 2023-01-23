import React from "react";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Footer from "./containers/Footer/Footer";
import styled from "styled-components";

const App = () => {
    return (
        <MainContainer>
            <Navbar>
                <NavLinksContainer>

                    <NavLink href="#home">
                        home
                    </NavLink>

                    <NavLink href="#about">
                        about
                    </NavLink>

                    <NavLink href="#footer">
                        footer
                    </NavLink>

                </NavLinksContainer>
            </Navbar>
            <Home id = {"home"}/>
            <About id = {"about"}/>
            <Footer id = {"footer"}/>
        </MainContainer>
    )
};

const MainContainer = styled.div`

`;

const Navbar = styled.nav`

    display: flex;
    position: fixed;
    height: 5rem;
    width: 100%;
    background: lightblue;

`;

const NavLinksContainer = styled.div`
    padding-left: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;

const NavLink = styled.a`
text-decoration: none;
color: white;
cursor: pointer;
text-capitalize;

&: hover {
    color: orange;
}
`;
export default App;

