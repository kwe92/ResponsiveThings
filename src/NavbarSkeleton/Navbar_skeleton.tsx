import React from "react";

const Navbar = (props:{})=>(
    <nav>
        {/* LOGO */}
        <div>Github Finder</div>

        {/* Navigation Menu */}
        <ul>
            {/* Checkbox Hack */}
            <input type={"checkbox"} id="checkbox_toggle"></input>
            <label>&#9776;</label>
            {/* Navigation Menus */}
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li>
                <a href="/">Services</a>
                {/* Dropdown Menu */}
                <ul>
                    <li><a href="/">Dropdown</a></li>
                    <li><a href="/">Dropdown</a></li>
                    <li><a href="/">Dropdown</a></li>
                    <li><a href="/">Dropdown</a></li>
                </ul>
            </li>
            <li><a href="/">Pricing</a></li>
            <li><a href="/">Contact</a></li>
        </ul>
    </nav>
);
