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
                            For Javia, fashion is a form of self-expression and art where a conceptual/abstract idea becomes a tangible object. As a designer, she aspires to create timeless garments for the modern chic romantic—clothing that shows subtle details and fine craftsmanship.
                        </p>
                        <p>
                            With a long-term goal to increase awareness for sustainable fashion, she strives to promote and demonstrate the practice of slow fashion by producing clothing from mainly natural fibres free of harmful and non-biodegradable chemicals and creating high quality versatile pieces that will last for a long time. Besides on focusing on craftsmanship and high quality, a main focus of Javia’s designs is comfort.  
                        </p>
                        <p>
                            Using her design ideas and skills, Javia explores new design ideas that strive to be new yet remain a timeless staple.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;