import Layout from "@/components/Layout";
import { graphql } from "gatsby";
import React from "react";
import Switch from "react-switch";
import "./../styles/article-content.css";

export default function ArticleDetails({ data })
{
    const [isDyslexicModeEnabled, setIsDyslexicModeEnabled] = React.useState(false);
    const { html } = data.markdownRemark;
    const { title, subjects, lang } = data.markdownRemark.frontmatter;

    return (
        <Layout>
            <div className="article-content">
                <div className="dyslexic-mode">
                    <span>Mode dyslexique</span>
                    <Switch
                        className="dyslexic-toggle"
                        onChange={(checked) => setIsDyslexicModeEnabled(checked)}
                        checked={isDyslexicModeEnabled}
                        uncheckedIcon={false}
                        checkedIcon={false}
                    />
                </div>
                <div
                    style={{fontFamily: !isDyslexicModeEnabled ? "Roboto" : "OpenDys"}}
                    dangerouslySetInnerHTML={{__html: html }}
                ></div>
                <div className="article-footer">
                    <p className="author">Auteur: Alexandre Cochet</p>
                    <p className="license">
                        <i>License CC-BY-ND</i>
                        <img src="/license/cc.png" alt="License CC" />
                        <img src="/license/nd.png" alt="License ND" />
                    </p>
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