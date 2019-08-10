import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import axios from 'axios'
import Link from 'next/link'
import Slider from 'react-slick'
import Header from '../components/header'
import Pattern from '../components/screen-pattern'
import '../styles/project-list.less'
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
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplaySpeed: 3000
        }

        const { images } = this.props
        return (
            <div className="sliderWrapper" onMouseEnter={this.play} onMouseLeave={this.pause}>
                <Slider {...settings} ref={slider => (this.slider = slider)}>
                    {images && images.map((item, index) => (
                        <div className="image-wrapper" key={index}>
                            <img src={item} alt="" />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}
class ProjectList extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        axios
            .get('https://api.myjson.com/bins/16i8zp')
            .then(res => this.setState({ data: res.data }))
            .catch(error => console.log(`error => ${error}`))
    }

    renderProjectList = (item, index) => {
        const slug = item.name.replace(/-|\s/g,"").toLowerCase()
        return (
            <div className='column'>
                <div className='project-list'>
                    <div className='gray-img'>
                        <div className="image-wrapper">
                            <img src={item.staticImageUrl} alt="name" />
                        </div>
                    </div>
                    <Link href={`/project-detail?name=${slug}`} as={`/project-detail?name=${slug}`}>
                        <a>
                            <div className="project-slider">
                                <SimpleSlider images={item.projectImages} />
                            </div>
                        </a>
                    </Link>
                    <Link href={`/project-detail?name=${slug}`} as={`/project-detail?name=${slug}`}>
                        <a>
                            <div className="project-overlay">
                                <div className="details-section">
                                    <h2>{item.type}</h2>
                                    <h2><strong>{item.name}</strong></h2>
                                </div>
                            </div>
                            </a>
                        </Link>
                </div>
            </div>
        )
    }

    render() {
        return (
            <Fragment>
                <Head>
                    <title>Our Projects | Interior, Exterior Designers in Mumbai-India</title>
                    <meta name="Undertakings structured by Ara Design - Mumbai modelers, studio for engineering, supportable and inside and architecture landscape plans in India." />
                    <meta name="Keywords" content="residential interior design , interior design firms , office interior design company , small office interior design , interior design companies , interior design firms in mumbai , list of interior designers in mumbai , residential interior designers in mumbai , commercial interior design , top interior designers in mumbai" />
                    <link rel="canonical" href="https://aradesign.in/projects/" />
                </Head>
                <div className="main-container">
                    <div className="row">
                        <div className="container">
                            <Header />
                        </div>
                    </div>
                    <div className="super-container">
                        <div className="row">
                            <div className="container project-container">
                                <div className='grid'>
                                    {this.state.data && this.state.data.map((item, index) => (
                                        <Fragment key={index}>
                                            {this.renderProjectList(item, index)}
                                        </Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Pattern />
            </Fragment>
        )
    }
}

export default ProjectList
