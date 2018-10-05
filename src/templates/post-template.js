import React, { Component } from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import '../templates/post-template.css';

class Template extends Component {
  render() {
    const { data } = this.props;
    const post = data.markdownRemark;
    return (
      <div className="content">
        <div className="wrapper">
          <Link to={`${post.frontmatter.origin}`} className="site-nav-option">Back</Link>
          <div className="post-container">
            <Helmet title={`JAVIA LEUNG - ${post.frontmatter.title}`} />
            <div className="post">
              <h1>{post.frontmatter.title}</h1>
              <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Template;

export const pageQuery = graphql`
  query ProjectPosts($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        origin
      }
    }
  }
`;