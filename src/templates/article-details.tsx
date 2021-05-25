import Layout from "@/components/Layout";
import { graphql } from "gatsby";
import { Link } from "gatsby-plugin-intl";
import React from "react";
import Switch from "react-switch";
import "./../styles/article-content.css";

export default function ArticleDetails({ data })
{
    const [isDyslexicModeEnabled, setIsDyslexicModeEnabled] = React.useState(false);
    const { html } = data.markdownRemark;
    const { title, subjects, lang, slug } = data.markdownRemark.frontmatter;
    const headers = [title].concat(html.split("<h2>").map((chunk:string) => chunk.substr(0, chunk.indexOf("</h2>"))).slice(1));
    const sections = html.split("<h2>").map((chunk:string, index:number) => index === 0 ? chunk : "<h2>" + chunk);

    const generateHeaders = () => {
        return (sections.map((html:string, index:number) => {
            return (<li key={index}><Link to={`/articles/${slug}#${headers[index]}`}>{ headers[index] }</Link></li>);
        }));
    };
    const generateSections = () => {
        return (sections.map((html:string, index:number) => {
            return (
                <div 
                    key={index} 
                    id={headers[index]}
                    dangerouslySetInnerHTML={{__html: html }}
                ></div>
            );
        }));
    };
   
    return (
        <Layout>
            <ul className="article-menu">
                { generateHeaders() }
            </ul>
            <div className="article-content">
                <div className="dyslexic-mode">
                    <span>Mode dyslexique</span>
                    <Switch
                        className="dyslexic-toggle"
                        onChange={(checked:boolean) => setIsDyslexicModeEnabled(checked)}
                        checked={isDyslexicModeEnabled}
                        uncheckedIcon={false}
                        checkedIcon={false}
                    />
                </div>
                {generateSections()}
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
                lang,
                slug
            }
        }
    }
`