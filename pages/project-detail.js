import React, { Component, Fragment, useState } from 'react'
import Slider from 'react-slick'
import Scramble from 'react-scramble'
import Link from 'next/link'
import axios from 'axios'
import Header from '../components/header'
import Pattern from '../components/screen-pattern'
import '../styles/project-detail.less'

class SimpleSlider extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            arrows: false,
            pauseOnHover: false,
            autoplaySpeed: 3000
        }   
        const { images } = this.props
        return (
            <div className="sliderWrapper">
                <Slider {...settings} ref={slider => (this.slider = slider)}>
                    {images && images.map((item, index) => (
                        <div key={index}>
                            <img src={item} alt="" />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

class PeopleDetail extends Component {

    static async getInitialProps({ query }) {
        const res = await axios({
            url: 'https://api.myjson.com/bins/qyu3p'
        });
        return {
            productId: query,
            dataLocation : res.data
        };
        this.setState({ projectID: productId })
	}


    constructor(props) {
        super(props)
    }
    state = {
        data: [],
        projectID: ''
    }

    componentDidMount() {
        const { dataLocation, productId } = this.props

        const projectData = this.props.dataLocation && this.props.dataLocation.filter(item => {
           // const projectID = item && item.id && item.id
            const projectName = item && item.name && item.name.replace(/-|\s/g,"").toLowerCase()
            return projectName == this.props.productId.name
        })
        this.setState({ data: projectData, projectID: productId })

    }


    renderProjectDetailSlider = (data) => {
        const productImages = data && data[0] && data[0].projectImages
        return (
            <SimpleSlider images={productImages} />
        )
    }

    renderProjectDetail = (data) => {
        const projectDetail = data && data[0]
        return (
            <Fragment>
                <div className="column column-right">
                    <div className="detail-content">
                        {
                            projectDetail && projectDetail.name && (
                                <h2>
                                    <Scramble
                                        autoStart
                                        text={`${projectDetail.name}`}
                                        steps={[
                                        {
                                            roll: 5,
                                            action: '+',
                                            type: 'all',
                                        },
                                        {
                                            action: '-',
                                            type: 'forward',
                                        },
                                        ]}
                                    /> 
                                </h2>
                            )
                        }
                        <div className="tags">
                            {
                                projectDetail && projectDetail.location && (
                                    <span>
                                        {projectDetail.location.toUpperCase()} |
                                    </span>
                                )
                            }
                            {
                                projectDetail && projectDetail.type && (
                                    <span>
                                        {projectDetail.type.toUpperCase()} |
                                    </span>
                                )
                            }
                            {
                                projectDetail && projectDetail.status && (
                                    <span>
                                        {projectDetail.status.toUpperCase()} |
                                    </span>
                                )
                            }
                            {
                                projectDetail && projectDetail.size && (
                                    <span>
                                        {projectDetail.size.toUpperCase()} |
                                    </span>
                                )
                            }
                        </div>
                        {
                            projectDetail && projectDetail.details && (
                                <p>{projectDetail.details}</p>
                            )
                        }
                        <Link href="/projects">
                            <a>
                                <div className="back">
                                    <span>
                                        <img src="https://aradesign.in/content/common/menu-img.png" alt='projects' />
                                    </span>
                                    <span className="__text">
                                        Back to projects
                                    </span>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </Fragment>
        )    
    }
    render() {
        const { data } = this.state
        const { productId, dataLocation } = this.props
        return (
            <Fragment>
                <div className="main-container">
                    <div className="row">
                        <div className="container">
                            <Header />
                        </div>
                    </div>
                    <div className="super-container">
                        <div className="row">
                            <div className="container project-details">
                                <div className='grid'>
                                    <div className="column column-left">
                                        <div className="slider-section">
                                            {this.renderProjectDetailSlider(data)}
                                        </div>
                                    </div>
                                    {this.renderProjectDetail(data)}
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

export default PeopleDetail
