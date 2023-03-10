import { createGlobalStyle } from "styled-components";
import React, { ReactNode } from "react";
import { GlobalStyleComponent, DefaultTheme } from "styled-components";

const GlobalStyle = createGlobalStyle`

/* Set the margin and padding to 0 so there will not be space around th navbar */

* {
    margin:0;

    padding:0;

    box-sizing: border-box;
}

body {
    font-family: Roboto;
    background: #191d24;
}

a {
    text-decoration: none;
}

li {
    list-style: none;
}
`;


export default GlobalStyle;