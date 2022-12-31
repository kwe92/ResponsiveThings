import React, { useState } from "react";
import * as styles from "./NavbarStyles"
import { Dropdown } from "./Dropdown";


const Navbar = (props:{})=>{

    const dropdownListItems = 
    <>
        <li><a href="/">Dropdown 1</a></li>
        <li><a href="/">Dropdown 2</a></li>
        <li><a href="/">Dropdown 3</a></li>
        <li><a href="/">Dropdown 4</a></li>
    </>

    return   (
        <styles.Navebar>
            {/* LOGO */}
            <styles.Logo>Github Finder</styles.Logo>
    
            {/* Navigation Menu */}
            <styles.UlNavLinks>
                {/* Checkbox Hack */}
                {/* Create a custom styled component with a media qurey to display later  */}
                <div style={{display:"none"}}>
                <input type={"checkbox"} id="checkbox_toggle"></input>
                <label>&#9776;</label>
                </div>

                {/* Navigation Menus */}
               <styles.Menu>
               <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li>
                    <styles.DropdownWrapper>
                    <styles.ServiceWrapper href="/">
                        Services
                    </styles.ServiceWrapper>     
                    {/* Dropdown Menu */}
                    <Dropdown>
                        {dropdownListItems}
                    </Dropdown>
                    </styles.DropdownWrapper>
                </li>
                <li><a href="/">Pricing</a></li>
                <li><a href="/">Contact</a></li>
               </styles.Menu>
            </styles.UlNavLinks>
        </styles.Navebar>
    );
}

export default Navbar;