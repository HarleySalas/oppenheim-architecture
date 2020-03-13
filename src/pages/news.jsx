import React, {useEffect} from 'react';
import {graphql, Link} from 'gatsby';

import Layout from '../components/Layout/Layout';
import NewsFeatured from '../components/PageSections/NewsPage/NewsFeatured/NewsFeatured';
import NewsCategories from '../components/PageSections/NewsPage/NewsCategories/NewsCategories';
import ContactCTA from '../components/ContactCTA/ContactCTA';

const News = ({data}) => {
    let allData = data.allMarkdownRemark.edges;
    let featuredPost = allData[0];
    let otherPosts = allData.slice(1);


    useEffect(() => {
        console.log(otherPosts);
    }, [])
    return (
        <Layout>
            <NewsFeatured data={featuredPost}/>
            <NewsCategories/>
            <ContactCTA/>
        </Layout>
    )
}
 
export const query = graphql`
    query {
        allMarkdownRemark(
            filter: { fields: { slug: { regex: "/^/news/" } } }
            sort: { order: DESC, fields: frontmatter___date }
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                  frontmatter {
                    title
                    category
                    date(formatString: "MMM. DD, YYYY")
                    thumbnail {
                        childImageSharp {
                          fluid(quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                      }
                  }
                }
              }
        }
    }
`
export default News;