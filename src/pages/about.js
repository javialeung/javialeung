import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="content">
                <div className="wrapper">
                    <img className="content-image" src="/static/Javia-Portrait.jpeg" alt="Javia Leung"></img>
                    <div className="content-body">
                        <p>
                            Javia Leung is a fashion design student currently attending LaSalle College in Vancouver BC, Canada.
                            </p>
                        <p>
                            She sees fashion as a form of self-expression and art. As a designer, Javia aspires to create classic garments for the <b><i>modern casual romantic</i></b>—clothing that is feminine but with a modern edge or detail. She also believes that clothing must be comfortable for the person to feel good and beautiful in their own skin.
                            </p>
                        <p>
                            Using her design ideas and skills, Javia explores new design ideas that strive to be new yet timeless.
                            </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;