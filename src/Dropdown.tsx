import React, { ReactNode } from "react";
import { StyledDropdown } from "./NavbarStyles";

//TODO: Interface deep dive!

interface _props {
    children: ReactNode;
};

export const Dropdown = (props:_props)=>
{
    return (
        <StyledDropdown>
        {props.children}
    </StyledDropdown>
    );
};

