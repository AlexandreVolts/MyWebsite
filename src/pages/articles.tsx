import { Link } from "gatsby";
import { graphql } from "gatsby";
import React from "react";
import "./../styles/articles.css";

export default function Articles({ data })
{
    const articles = data.allMarkdownRemark.nodes;

    const renderArticle = (article) => {
        return (
            <Link to={`${article.frontmatter.slug}`} key={article.id}>
                <div className="article-box">
                    <h3>{ article.frontmatter.title }</h3>
                    <h4>{ article.frontmatter.subjects }</h4>
                </div>
            </Link>
        );
    };
    
    return (
        <div className="article-showcase">
            { articles.map(renderArticle) }
        </div>
    );
}

export const query = graphql`
query Articles {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
            frontmatter {
                subjects
                title
                slug
            }
            id
        }
    }
}  
`