import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import Link from 'gatsby-link';

import '../styles/header.css';

class Header extends Component {
  constructor() {
      super();
      this.state = {
          active: false
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

  render() {
      return (
          <nav className="top-nav-container ">
              <div className="navigation">
                  <div className="menu-button" onClick={this.handleClick}>
                      <div className={"menu-line " + (this.state.active ? 'activeTop': null)} id="top-line"></div>
                      <div className={"menu-line " + (this.state.active ? 'activeMiddle': null)} id="middle-line"></div>
                      <div className={"menu-line " + (this.state.active ? 'activeBottom': null)} id="bottom-line"></div>
                  </div>
                  <CSSTransition
                      in = {this.state.active}
                      classNames="menu"
                      timeout={1000}>
                      <div className="menu-container">
                          <div className="table">
                              <div className="table-cell">
                                  <div className="menu-options">
                                      <Link to="" onClick={this.handleClick} className="menu-option">HOME</Link>
                                      <Link to="/about" onClick={this.handleClick} className="menu-option">ABOUT</Link>
                                      <div className="menu-option">
                                        GARMENTS
                                        <Link to="/garmets/school" onClick={this.handleClick} className="sub-menu">SCHOOL</Link>
                                        <Link to="/garmets/personal" onClick={this.handleClick} className="sub-menu">PERSONAL</Link>
                                      </div>
                                      <div className="menu-option">
                                        ILLUSTRATION
                                        <Link to="/illustration/fashion" onClick={this.handleClick} className="sub-menu">FASHION</Link>
                                        <Link to="/illustration/other" onClick={this.handleClick} className="sub-menu">OTHER</Link>
                                      </div>                                     
                                      <Link to="/styling" onClick={this.handleClick} className="menu-option">STYLING</Link>
                                      <div className="menu-option">
                                        PROJECTS
                                        <Link to="/projects/collections" onClick={this.handleClick} className="sub-menu">COLLECTIONS</Link>
                                        <Link to="/projects/campaigns" onClick={this.handleClick} className="sub-menu">MARKETING CAMPAIGNS</Link>
                                      </div>

                                  </div>
                              </div>
                          </div>
                      </div>
                  </CSSTransition>
                  <div className={"nav-title " + (this.state.active ? 'activeTitle': null)}><Link to="" className="menu-option" onClick={this.headerClick} >JAVIA LEUNG (JAY&#8226;VEE&#8226;AH)</Link></div>
              </div>
          </nav>
      );
  }
}

export default Header;
