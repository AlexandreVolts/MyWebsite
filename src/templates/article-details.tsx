import Layout from "@/components/Layout";
import { graphql } from "gatsby";
import React from "react";
import "./../styles/article-content.css";

export default function ArticleDetails({ data })
{
    const { html } = data.markdownRemark;
    const { title, subjects, lang } = data.markdownRemark.frontmatter;

    return (
        <Layout>
            <div className="article-content">
                <div dangerouslySetInnerHTML={{__html: html }}></div>
                <div className="article-footer">
                    <p className="author">Auteur: Alexandre Cochet</p>
                    <p className="license"><i>License CC-BY-ND</i></p>
                    <div>
                        <img src="/static/license/cc.png" />
                        <img src="/static/license/nd.png" />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export const query = graphql`
    query Article($slug: String!, $lang: String!) {
        markdownRemark(frontmatter: { lang: {eq: $lang }, slug: { eq: $slug } }) {
            html
            frontmatter {
                subjects
                title
                date
                lang
            }
        }
    }
`