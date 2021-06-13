import React from "react";
import { Link } from "gatsby";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarButtonProps
{
    name:string;
    data:any;
}
export default function NavbarButton(props:NavbarButtonProps)
{
    const renderSubmenu = (content:any, index:number) => {
        const article = content.node.frontmatter;
        
        return (
            <motion.li
                key={content.node.id}
                className="article-button"
                initial={{opacity: 0, y: 200}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.1 * index, duration: 0.5}}
                exit={{opacity: 0}}
            >
                <Link to={`/${article.lang}/articles/${article.slug}`}>{ article.title }</Link>
            </motion.li>
        );
    };

    return (
        <li className="menu-button">
            {props.name}
            <AnimatePresence>
                <ul className="submenu">
                    {props.data.map(renderSubmenu)}
                </ul>
            </AnimatePresence>
        </li>
    );
}