import React, {useEffect} from 'react';
import {Link} from 'gatsby';
import Img from 'gatsby-image';
import './news-featured.scss';
 
const NewsFeatured = ({data}) => {

    useEffect(() => {
        console.log(data);
    }, [])

    return (
        <Link to={data.node.fields.slug}>
            <div className="container news-featured">
                <Img
                fluid={data.node.frontmatter.thumbnail.childImageSharp.fluid}
                fadeIn={true}
                durationFadeIn={1000}
                draggable={false}
                alt={data.node.frontmatter.title}
                className="news-featured__img-wrapper"
                imgStyle={{
                    userSelect: "none",
                    opacity: 1,
                }}
                />
                <div className="news-featured__img-overlay">
                    <div className="news-featured__content-wrapper">
                        <span className="news-featured__category">{data.node.frontmatter.category}</span>
                        <h1 className="news-featured__title">{data.node.frontmatter.title}</h1>
                    </div>
                </div>
            </div>
        </Link>
    )
}
 
export default NewsFeatured;