import React from "react";
import { navigateTo } from "gatsby-link"

import '../styles/post-listing.css';

export default function Styling({ data }) {
  if (data.allMarkdownRemark) {
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <div className="project-posts">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="project-post" key={post.id}>
                <div className="project-post-preview" onClick={() => navigateTo(post.frontmatter.path)} style={{ backgroundImage: 'url(' + post.frontmatter.cover + ')' }}>
                </div>
                <h2 className="post-title-container">
                  <span className="post-title" onClick={() => navigateTo(post.frontmatter.path)}>{post.frontmatter.title}</span>
                </h2>
              </div>
            );
          })}
      </div>
    );
  } else {
    return (
      <div className="general-content">
        Styling
            </div>
    )
  }
}
export const pageQuery = graphql`
  query StylingQuery {
    allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: {fileAbsolutePath: {regex: "/(style)/.*\\.md$/"}}
    ) {
      edges {
        node {
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