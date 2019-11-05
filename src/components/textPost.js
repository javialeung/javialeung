import React, { Component } from "react";
import rehypeReact from 'rehype-react';
import Slider from "react-slick";
import ZoomImage from './zoomImage';

import '../templates/post-template.css';

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler;

class TextPostBody extends Component {
  componentDidMount() {
      window.addEventListener("keydown", this.keyHandling);
  }

  componentWillUnmount() {
      window.removeEventListener("keydown", this.keyHandling);
  }

  keyHandling = e => {
      if (e.defaultPrevented) return;
      switch (e.key) {
          case "ArrowLeft":
            this.slider.slickPrev();
            break;
          case "ArrowRight":
            this.slider.slickNext();
            break;
          default:
            break;
      }
  }

  render() {
    const { htmlAst, images } = this.props;
    const settings = {
      dots: true,
      arrows: false,
      infinite: false,
      ref: c => (this.slider = c),
      appendDots: dots => (
        <div>
          <ul> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div
          style={{
            color: "black"
          }}
        >
          {i + 1}
        </div>
      )
    }

    if (images) {
      return (
        <div className="post-content">
            <div className="content-image">
                <Slider {...settings}>
                  {images.edges.map((image, i) =>
                      <ZoomImage 
                      src={`/static/${image.node.relativePath}`}
                      key={i}
                      />
                  )}
                </Slider>
            </div>
            <div className="content-body">
                {renderAst(htmlAst)}
            </div>
        </div>
      )
    } else {
      return (
        <div className="post-content">
            <div className="content-image">
            </div>
            <div className="content-body">
                {renderAst(htmlAst)}
            </div>
        </div>
      )
    }
  }
}

export default TextPostBody;