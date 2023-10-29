import React from "react";
import {Outlet} from "react-router-dom";
import '../../src/root.css'; // Import your CSS file

export default function Root() {
    return(
        <div>
            <Outlet />
        </div>
    )
}