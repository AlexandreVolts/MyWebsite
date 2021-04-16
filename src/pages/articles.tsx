import { Link, graphql } from "gatsby";
import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import "./../styles/articles.css";

export default function Articles({ data })
{
    const intl = useIntl();
    const articles = data.allMarkdownRemark.edges.filter((art) => art.node.frontmatter.lang === intl.locale);

    const renderArticle = (content) => {
        const article = content.node.frontmatter;
        return (
            <Link to={`${article.slug}`} key={content.node.id}>
                <div className="article-box">
                    <h3>{ article.title }</h3>
                    <h4>{ article.subjects }</h4>
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