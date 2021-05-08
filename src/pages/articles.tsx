import { Link, graphql } from "gatsby";
import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import { motion } from "framer-motion";
import "./../styles/articles.css";
import Layout from "@/components/Layout";

export default function Articles({ data })
{
    const intl = useIntl();
    const articles = data.allMarkdownRemark.edges.filter((art) => art.node.frontmatter.lang === intl.locale);

    const renderArticle = (content, index) => {
        const article = content.node.frontmatter;
        return (
            <li key={content.node.id}>
                <Link to={`${article.slug}`}>
                    <motion.div
                        className="article-button"
                        initial={{scale: 0}}
                        animate={{scale: 1}}
                        transition={{delay: 0.1 * index, duration: 0.5}}
                    >
                        <h3>{ article.title }</h3>
                        <h4>{ article.subjects }</h4>
                    </motion.div>
                </Link>
            </li>
        );
    };
    
    return (
        <Layout>
            <ul className="article-menu">
                { articles.map(renderArticle) }
            </ul>
        </Layout>
    );
}

export const query = graphql`
query Articles {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
            node {
                html
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