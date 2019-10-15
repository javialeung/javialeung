import React, { Component } from 'react';


class Test extends Component {
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
        if (this.state.currentImage === 0) {
            this.setState({
                currentImage: this.props.images.length - 1,
            });
        }
    }

    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
        if (this.state.currentImage === this.props.images.length - 1) {
            this.setState({
                currentImage: 0,
            });
        }
    }

    closeLightbox() {

    }

    render() {
        return (
            <div className="content">
                <div className="wrapper">
                    test
                </div>
            </div>
        )
    }
}

export default Test;