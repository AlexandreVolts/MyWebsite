import React from "react";
import NavBar from "components/Navbar";
import "./../styles/global.css";

interface LayoutProps
{
    children:any;
}

export default function Layout(props:LayoutProps)
{
    return (
        <div>
            <NavBar></NavBar>
            <main>
                {props.children}
            </main>
            <footer>
                <div>2021 Copyright</div>
            </footer>
        </div>
    );
}