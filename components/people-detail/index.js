import React, { Component } from 'react'
import Slider from "react-slick"
import './style.less'

class SimpleSlider extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }

    play = () => {
        this.slider.slickPlay()
    }
    
    pause = () => {
        this.slider.slickPause()
    }

    render(){
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true,
            slidesToScroll: 1,
            arrows: false,
            autoplaySpeed: 2000
        }
        return (
            <div className="sliderWrapper" onMouseEnter={this.play} onMouseLeave={this.pause}>
                <Slider {...settings} ref={slider => (this.slider = slider)}>
                    <div>
                        <img src="https://aradesign.in/content/people/group_01.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://aradesign.in/content/people/group_02.jpg" alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}

function PeopleDetail() {
    return (
        <div className="row people-row">
            <div className="container people-container">
                <div className="grid">
                    <div className="column text-content">
                        <div className="left-content">
                            <h2>Our People</h2>
                            <p>
                            </p>
                        </div>
                    </div>
                    <div className="column column-right">
                        <div className="slider-section">
                            <SimpleSlider />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PeopleDetail
