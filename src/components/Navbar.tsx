import React from "react";
import { Link } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import "styles/nav.css";
import NavbarButton from "./NavbarButton";

interface NavbarProps
{
    articles:any;
}
export default function Navbar(props:NavbarProps)
{
    const intl = useIntl();
    const articles = props.articles.allMarkdownRemark.edges.filter((art) => art.node.frontmatter.lang === intl.locale);
    
    return (
        <nav>
            <h1><Link to="/">Alexandre Cochet</Link></h1>
            <ul className="main-menu">
                <li className="menu-button"><Link to="/">Réalisations</Link></li>
                <li className="menu-button"><Link to="/">Jeux</Link></li>
                <NavbarButton name="Articles" data={articles} />
                <li className="menu-button"><Link to="/">A propos</Link></li>
            </ul>
        </nav>
    );
}