import React, { Fragment, Component } from 'react'
import './style.less'

function AboutDetail() {
    return (
        <div className="row people-row">
            <div className="container about-container">
                <div className="grid">
                    <div className="column text-content">
                        <div className="left-content">
                            <h2>About</h2>
                            <p>
                                ARA Design is more of a family or an institution that is a brainchild of Amey Dahanukar (MA Urban Design, UK) and also a partner of Dahanukar Associates. After completing his Masters in Urban Design from New Castle University , he believes delving into the technicalities, it feels as though Urbanism is the father of it all that helps put together built fabric and amalgamate it into a living space. ARA, forms a charismatic design firm excelling in Design, Architecture, Urbanism and Interiors. Our varied clientele exhibits our diverse work exposure. Our forte is building relationships.
                            </p>
                            <p>
                                With his great vision for ARA, Amey Dahanukar mentions, "We look at creating design that goes beyond a person. We want to speak of a language in architecture that’s more universal and inclusive. I am also constantly reminded of how much there is to learn. It is in search of these moments and these opportunities to learn that I am most alive."
                            </p>
                        </div>
                    </div>
                    <div className="column column-right">
                        <div className="slider-section">
                            <img src="https://aradesign.in/content/people/amey.jpg" alt="" />
                            <div className="person-info">
                                <p>
                                    <strong>Amey Dahanukar</strong><br/>
                                    Principal Architect
                                </p>
                                <span>
                                    <a href="https://in.linkedin.com/in/amey-dahanukar-b3016134" target="_balnk" >
                                        <img src="https://aradesign.in/content/common/linkedin.png" alt="instagram aradesign" />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scroll-text">Scroll</div>
                <div className="container-arrow__arrow"></div>
            </div>
        </div>
    )
}

export default AboutDetail
