import React, { Component } from "react";
import rehypeReact from 'rehype-react';

import ZoomImage from './zoomImage';
import Hidden from './hidden';

import '../templates/post-template.css';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'zoom-image': ZoomImage,
    hidden: Hidden,
  }
}).Compiler;


class TextPostBody extends Component {
  render() {
    return <div>{renderAst(this.props.htmlAst)}</div>
  }
}

export default TextPostBody;