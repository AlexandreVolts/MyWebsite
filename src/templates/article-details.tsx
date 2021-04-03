import Layout from "@/components/Layout";
import { graphql } from "gatsby";
import React from "react";

export default function ArticleDetails({ data })
{
    const { html } = data.markdownRemark;
    const { title, subjects } = data.markdownRemark.frontmatter;
    
    return (
        <Layout>
            <div className="article-content">
                <div dangerouslySetInnerHTML={{__html: html }}></div>
            </div>
        </Layout>
    );
}

export const query = graphql`
    query Article($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                subjects
                title
                date
            }
        }
  }
`