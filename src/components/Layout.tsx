import React from "react";
import { graphql, StaticQuery } from "gatsby";
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
            <StaticQuery
                query={query}
                render={data => <NavBar articles={data} />}
            />
            <main>
                {props.children}
            </main>
            <footer>
                <div>2021 Copyright</div>
            </footer>
        </div>
    );
}

const query = graphql`
query Articles {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
            node {
                frontmatter {
                    subjects
                    title
                    slug
                    lang
                }
                id
            }
        }
    }
}  
`