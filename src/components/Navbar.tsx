import React from "react";
import { Link } from "gatsby";
import "styles/nav.css";

export default function Navbar()
{
    return (
        <nav>
            <h1>Alexandre Cochet</h1>
            <ul>
                <li><Link to="/">Accuel</Link></li>
                <li><Link to="/">Réalisations</Link></li>
                <li><Link to="/articles">Articles</Link></li>
                <li><Link to="/">A propos</Link></li>
            </ul>
        </nav>
    );
}