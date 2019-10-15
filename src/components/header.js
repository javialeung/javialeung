import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import Link from 'gatsby-link';

import '../styles/header.css';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            active: false,
            category: ''
        };
    }

    handleClick = () => {
        this.setState({
            active: !this.state.active
        });
    }

    headerClick = () => {
        this.setState({
            active: false
        });
    }

    categoryClick = (cat) => {
        this.setState({
            category: cat == this.state.category ? '' : cat
        });
    }

    render() {
        return (
            <nav className="top-nav-container ">
                <div className="navigation">
                    <div className="menu-button" onClick={this.handleClick}>
                        <div className={"menu-line " + (this.state.active ? 'activeTop' : null)} id="top-line"></div>
                        <div className={"menu-line " + (this.state.active ? 'activeMiddle' : null)} id="middle-line"></div>
                        <div className={"menu-line " + (this.state.active ? 'activeBottom' : null)} id="bottom-line"></div>
                    </div>
                    <CSSTransition
                        in={this.state.active}
                        classNames="menu"
                        timeout={1000}>
                        <div className="menu-container">
                            <div className="table">
                                <div className="table-cell">
                                    <div className="menu-options">
                                        <Link to="" onClick={this.handleClick} className="menu-option">HOME</Link>
                                        <Link to="/about" onClick={this.handleClick} className="menu-option">ABOUT</Link>
                                        <div className="menu-option" onClick={() => this.categoryClick('garments')}>
                                            GARMENTS {this.state.category === 'garments' ? '-' : '+'}
                                        </div>
                                        <CSSTransition
                                            in={this.state.category === 'garments'}
                                            classNames="sub"
                                            timeout={1000}>
                                            <div className={this.state.category === 'garments' ? "menu-option" : "menu-option menu-option-hidden"}>
                                                <Link to="/garments/school" onClick={this.handleClick} className="sub-menu">SCHOOL</Link>
                                                <Link to="/garments/personal" onClick={this.handleClick} className="sub-menu">PERSONAL</Link>
                                            </div>
                                        </CSSTransition>
                                        <div className="menu-option" onClick={() => this.categoryClick('illustration')}>
                                            ILLUSTRATION {this.state.category === 'illustration' ? '-' : '+'}
                                        </div>
                                        <CSSTransition
                                            in={this.state.category === 'illustration'}
                                            classNames="sub"
                                            timeout={1000}>
                                            <div className={this.state.category === 'illustration' ? "menu-option" : "menu-option menu-option-hidden"}>
                                                <Link to="/illustration/fashion" onClick={this.handleClick} className="sub-menu">FASHION</Link>
                                                <Link to="/illustration/other" onClick={this.handleClick} className="sub-menu">OTHER</Link>
                                            </div>
                                        </CSSTransition>
                                        <Link to="/styling" onClick={this.handleClick} className="menu-option">STYLING</Link>
                                        <div className="menu-option" onClick={() => this.categoryClick('projects')}>
                                            PROJECTS {this.state.category === 'projects' ? '-' : '+'}
                                        </div>
                                        <CSSTransition
                                            in={this.state.category === 'projects'}
                                            classNames="sub"
                                            timeout={1000}>
                                            <div className={this.state.category === 'projects' ? "menu-option" : "menu-option menu-option-hidden"}>
                                                <Link to="/projects/collections" onClick={this.handleClick} className="sub-menu">COLLECTIONS</Link>
                                                <Link to="/projects/campaigns" onClick={this.handleClick} className="sub-menu">MARKETING CAMPAIGNS</Link>
                                            </div>
                                        </CSSTransition>
                                        <Link to="/popup" onClick={this.handleClick} className="menu-option">POPUP</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CSSTransition>
                    <div className={"nav-title " + (this.state.active ? 'activeTitle' : null)}><Link to="" className="menu-option" onClick={this.headerClick} >JAVIA LEUNG (JAY&#8226;VEE&#8226;AH)</Link></div>
                </div>
            </nav>
        );
    }
}

export default Header;
