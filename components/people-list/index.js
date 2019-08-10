import React, { Fragment, Component } from 'react'
import Slider from "react-slick"
import ReactScrollWheelHandler from "react-scroll-wheel-handler"
import './style.less'

const peopleList = [
    {
        name: 'Ankita Kuriakose',
        designation: 'Associate',
        imageUrl: 'https://aradesign.in/content/people/solo_01.jpg',
    },{
        name: 'Pankaj Panwar',
        designation: 'Associate',
        imageUrl: 'https://aradesign.in/content/people/solo_02.jpg',
    },{
        name: 'Raunak Shah',
        designation: 'Associate',
        imageUrl: 'https://aradesign.in/content/people/solo_03.jpg',
    },{
        name: 'Rajdeep Modak',
        designation: 'Senior Architect',
        imageUrl: 'https://aradesign.in/content/people/solo_04.jpg',
    },{
        name: 'Twinkle Kataria',
        designation: 'Design & Communication',
        imageUrl: 'https://aradesign.in/content/people/solo_10.jpg',
    }
]

const renderPeopleList = () => {
    return (
        <Fragment>
        {peopleList.map((people, index) => (
            <div key={index} className="column">
                <a href="javascript:void(0)">
                <div className="image-wrapper">
                    <img src={people.imageUrl} alt={people.name}/>
                </div>
                <div className="details-section">
                    <h2>{people.name}</h2>
                    <p>{people.designation}</p>
                </div>
                </a>
            </div>
        ))}
        </Fragment>
    )
}

const peopleCard = {
    textAlign: 'center'
}

const name = {
    fontSize: '16px',
    color: '#fff',
    fontWeight: '800',
}
class ReactSlickDemo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        arrows : false,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows : true,
              }
            },
            {
                breakpoint: 559,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows : true,
                }
              },
        ]
      };
      return (
          <div className="row people-list">
            <div className="container team-container">
                <div className="grid">
                    <ReactScrollWheelHandler
                    upHandler={() => this.slider.slickPrev()}
                    downHandler={() => this.slider.slickNext()}>
                        <Slider {...settings} ref={slider => (this.slider = slider)}>
                            <div className="column" style={peopleCard}>
                                <div className="image-wrapper">
                                    <img src="https://aradesign.in/content/people/solo_01.jpg" />
                                </div>
                                <div className="details-section">
                                    <h2>Ankita Kuriakose</h2>
                                    <p>Associate</p>
                                    <p>Ankita graduated from Rachna Sansad Academy of Architecture with a skill set of sketching and layout planning. She interned with Somaya Kalapa Consultants at Fort and worked on Maharashtra Arts & Crafts Center. She is close to completing a decade with ARA and has mastered Design along with detailing. </p>
                                </div>
                            </div>
                            <div className="column" style={peopleCard}>
                                <div className="image-wrapper">
                                    <img src="https://aradesign.in/content/people/solo_02.jpg" />
                                </div>
                                <div className="details-section">
                                    <h2>Pankaj Panwar</h2>
                                    <p>Associate</p>
                                    <p>Born and brought up in Indore, Pankaj completed his Bachelor of Architecture from Indore Professional Studies Academy (IPS), Indore. He has been majorly involved in the designing project of the Hospitality sector and it is now his forte.</p>
                                </div>
                            </div>
                            <div className="column" style={peopleCard}>
                                <div className="image-wrapper">
                                    <img src="https://aradesign.in/content/people/solo_03.jpg" />
                                </div>
                                <div className="details-section">
                                    <h2>Raunak Shah</h2>
                                    <p>Associate</p>
                                    <p>Raunak finished his Bachelors & Masters in Interior Design from ST. Francis Institute of Art & Design (SFIAD), Mumbai in the city where he grew up. After graduation he has been an integral part of ARA where he has enjoyed hands on site experience and explored project management.
                                    </p>
                                </div>
                            </div>
                            <div className="column" style={peopleCard}>
                                <div className="image-wrapper">
                                    <img src="https://aradesign.in/content/people/solo_04.jpg" />
                                </div>
                                <div className="details-section">
                                    <h2>Rajdeep Modak</h2>
                                    <p>Senior Architect</p>
                                    <p>Rajdeep did his Bachelors from VIVA School of Architecture. He then moved from Mumbai to intern at Environ Planners in Nashik, where he had the opportunity to work on both architecture and interior projects of varied scales. Over the years his expertise in architecture projects has made him travel extensively.                                    </p>                                    
                                </div>
                            </div>
                        </Slider>
                    </ReactScrollWheelHandler>
                </div>
            </div>
          </div>
      );
    }
}

function PeopleList() {

    return (
        <ReactSlickDemo />
    )
}

export default PeopleList
