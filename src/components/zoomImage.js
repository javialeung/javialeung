import React, { Component } from 'react';
import ImageZoom from "react-medium-image-zoom";

class ZoomImage extends Component {
  render() {
    return (
      <ImageZoom
        defaultStyles={{ 
          overlay: { 
            backgroundColor: '#000000',
            opacity: '0.6',
          }
        }}
        image={{
          src: this.props.src,
          alt: this.props.alt || this.props.caption
        }}
        zoomImage={{
          src: this.props.zoomsrc || this.props.src,
          alt: this.props.alt || this.props.caption
        }}
      />
    );
  }
}

export default ZoomImage;