import React from "react";
import { navigateTo  } from "gatsby-link"

import '../../styles/post-listing.css';

export default function FashionPersonal({ data }) {
    if (data.allMarkdownRemark) {
        const { edges: posts } = data.allMarkdownRemark;
        return (
            <div className="project-posts">
                {posts
                    .filter(post => post.node.frontmatter.title.length > 0)
                    .map(({ node: post }) => {
                        return (
                            <div className="project-post-preview" key={post.id} onClick={ () => navigateTo (post.frontmatter.path)} style={{backgroundImage: 'url(' + post.frontmatter.cover + ')'}}>
                                <h2 className="post-title">
                                    <div>{post.frontmatter.title}</div>
                                </h2>
                            </div>
                        );
                    })}
            </div>
        );
    } else {
        return (
            <div className="general-content">
                Garmets - Personal
            </div>
        )
    }
}
export const pageQuery = graphql`
  query FashionPersonalQuery {
    allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: {fileAbsolutePath: {regex: "/(fashion-personal)/.*\\.md$/"}}
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