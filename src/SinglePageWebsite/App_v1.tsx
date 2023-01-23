import react from "react";
import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";

interface _Props {

};

const App = (props:_Props) => {

    return (
        <MainContainer>

            <Navbar>
                <NavLinksContainer>

                    <Link to="page1">

                        Page 1

                    </Link>

                    <Link to="page2">
                        Page 2
                    </Link>

                </NavLinksContainer>
            </Navbar>

            <Routes>
            <Route path="/page1" element = {<ChildContainer1/>}/>
            <Route path="/page2" element = {<ChildContainer2/>}/>
        </Routes>

            {/* <ChildContainer>

                <Child1>
                Page 1
                </Child1>
                
            </ChildContainer> */}
            <ChildContainer1/>

            <ChildContainer>
                <Child2>
                Page 2
                </Child2>
               
            </ChildContainer>

            <ChildContainer>
                <Child3>
                Page 3
                </Child3>
            </ChildContainer>

            <ChildContainer>
                <Child4>
                Page 4
                </Child4>
            </ChildContainer>

            <ChildContainer>
                <Child5>
                Page 5
                </Child5>
            </ChildContainer>

          


       
        </MainContainer>

        
    )
};

const ChildContainer1 = () => {
    return (
        <ChildContainer>

        <Child1>
        Page 1
        </Child1>
        
    </ChildContainer>
    )
};


const ChildContainer2 = () => {
    return (
        <ChildContainer>

        <Child2>
        Page 2
        </Child2>
        
    </ChildContainer>
    )
};

const MainContainer = styled.div`

    // height: 500% !important; 
    // width: 100% !important;

`;

const ChildContainer = styled.div`
    height:100vh !important; 
    width:100% !important;
    color: white;
`;

const Child1 = styled.div`
    height: 100% !important;
    padding-top: 5rem;
    background: #B2A496;

`;

const Child2 = styled.p`
    height: 100% !important;
    padding-top: 5rem;
    background: #9D8977;

`;

const Child3 = styled.p`
    height: 100% !important;
    padding-top: 5rem;
    background: #886E58;

`;

const Child4 = styled.p`
    height: 100% !important;
    padding-top: 5rem;
    background: #735238;

`;

const Child5 = styled.p`
    height: 100% !important;
    padding-top: 5rem;
    background: #5E3719;

`;

const Navbar = styled.nav`

    display: flex;
    position: fixed;
    height: 5rem;
    width: 100%;
    background: lightblue;

`;

const NavLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;

const NavLink = styled.a`
text-decoration: none;
color: white;
cursor: pointer;

&: hover {
    color: orange;
}
`;

export default App;