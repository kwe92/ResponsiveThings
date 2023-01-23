import React from "react";
import styled from "styled-components";

const About = (props:{ id:string }) => {
    return (
        <div style={{ height: "100vh", width: "100%" }} id = {props.id}>
            <Child1>
                About
            </Child1>

        </div>
    )
};


const Child1 = styled.div`
    height: 100% !important;
    padding-top: 5rem;
    background: #B2A496;

`;

export default About;