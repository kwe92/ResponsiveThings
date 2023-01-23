import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from "./App";
import "./index.css"
// import App from "./SinglePageWebsite/App_v1";

import App from "./SinglePageWebsite/App";
const ele = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(ele);

root.render(
<React.StrictMode>
    <BrowserRouter>
        <App/>

    </BrowserRouter>
</React.StrictMode>
    );

