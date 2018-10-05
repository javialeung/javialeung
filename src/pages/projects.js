import React from "react";
import { navigateTo  } from "gatsby-link"

import '../styles/post-listing.css';

export default function Projects({ data }) {
    if (data.allMarkdownRemark) {
        const { edges: posts } = data.allMarkdownRemark;
        return (
            <div className="project-posts">
                {posts
                    .filter(post => post.node.frontmatter.title.length > 0)
                    .map(({ node: post }) => {
                        return (
                            <div className="project-post-preview" key={post.id} onClick={ () => navigateTo (post.frontmatter.path)} style={{backgroundImage: 'url(' + post.frontmatter.cover + ')'}}>
                                <h1 className="post-title">
                                    <div>{post.frontmatter.title}</div>
                                </h1>
                                <div className="post-date">{post.frontmatter.date}</div>
                            </div>
                        );
                    })}
            </div>
        );
    } else {
        return (
            <div className="home-content">
                Projects
            </div>
        )
    }
}
export const pageQuery = graphql`
  query ProjectsQuery {
    allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: {fileAbsolutePath: {regex: "/(projects)/.*\\.md$/"}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            path
            cover
          }
        }
      }
    }
  }
`;