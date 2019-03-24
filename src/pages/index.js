import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import '../styles/pages.css';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            textActive: false,
            imagesActive: false
        }
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.hideText()
        }, 2000);
    }

    componentWillUnmount() {
        this.stopTimer();
    }

    stopTimer() {
        clearInterval(this.timer);
    }

    hideText() {
        this.setState({
            textActive: true,
            imagesActive: false
        })
        this.showImages();
        this.stopTimer();
    }

    showImages() {
        this.setState({
            textActive: false,
            imagesActive: true
        })
    }

    render() {
        return (
            <div className="home-content">
                <CSSTransition
                    in={this.state.textActive}
                    classNames="main-text"
                    timeout={2000}>
                    <div>
                        Aspiring apparel designer from beautiful Vancouver, BC.
                    </div>
                </CSSTransition>
                <CSSTransition
                    in={this.state.imagesActive}
                    classNames="main-image"
                    timeout={2000}>
                    <div className="main-image">
                        <div className="image-container">
                        <div className="row-one">
                            <img className="image-one" src='/static/Home1.jpeg' />
                        </div>
                        <div className="row-two">
                            <img className="image-two" src='/static/Home2.jpeg' />
                        </div>
                        </div>
                    </div>
                </CSSTransition>
            </div>
        )
    }
}

export default Home;