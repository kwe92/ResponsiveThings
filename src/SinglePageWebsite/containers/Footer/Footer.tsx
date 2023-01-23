import React from "react";
import styled from "styled-components";

const Footer = (props:{ id:string }) => {
    return (
        <div style={{ height: "100vh", width: "100%" }} id = {props.id}>
            <Child2>
                Footer
            </Child2>
        </div>
    )
};

const Child2 = styled.p`
    height: 100% !important;
    padding-top: 5rem;
    background: #9D8977;

`;

export default Footer;