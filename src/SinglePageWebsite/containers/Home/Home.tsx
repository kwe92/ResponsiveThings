import React from "react";
import styled from "styled-components";

const Home = (props:{ id:string }) => {
    return (
        <div style={{ height: "100vh", width: "100%" }} id = {props.id}>
            <Child3>
                Header
            </Child3>
        </div>
    )
};

const Child3 = styled.p`
    height: 100% !important;
    padding-top: 5rem;
    background: #886E58;

`;


export default Home;