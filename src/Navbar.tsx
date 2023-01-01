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

    const menu = <>
    {/* Navigation Menus START */}
    <styles.Menu>
               <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li>

                {/* Nested Menu: Service START */}
                    <styles.DropdownWrapper>
                    <styles.ServiceWrapper href="/">
                        Services
                    </styles.ServiceWrapper>     
                    {/* Service Sub Menu*/}
                    <Dropdown>
                        {dropdownListItems}
                    </Dropdown>
                    </styles.DropdownWrapper>
                {/* Nested Menu: Service END */}
                
                </li>
                <li><a href="/">Pricing</a></li>
                <li><a href="/">Contact</a></li>
               </styles.Menu>
    </>

    return   (
        <styles.Navebar>
            {/* LOGO */}
            <styles.Logo>Github Finder</styles.Logo>
            {/* Navigation Menu START*/}
            <styles.UlNavLinks>

                {/* Hamburger Menu Nav START */}
                <styles.DropdownWrapper>
                <styles.HamburgerMenu>&#9776;</styles.HamburgerMenu>
                <Dropdown>
                        {dropdownListItems}
                    </Dropdown>
                </styles.DropdownWrapper>
                {/* END */}
                {menu}
                
            </styles.UlNavLinks>
               {/*  Navigation Menus END */}


        </styles.Navebar>
    );
}

export default Navbar;