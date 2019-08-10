import React, { Component, Fragment, useState } from 'react'
import Slider from 'react-slick'
import Scramble from 'react-scramble'
import Link from 'next/link'
import axios from 'axios'
import fetch from 'isomorphic-unfetch'
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

    static async getInitialProps({ query  }) {
        return {
            productId: query,
        }
	}


    constructor(props) {
        super(props)
    }
    state = {
        data: [],
        projectID: ''
    }

    componentDidMount() {
        const { productId } = this.props
        const projectDetailUrl = encodeURI(`https://www.aradesign.in/ara-admin/project-edit.php?command=GETINFO&project_name=`+productId.name)
        fetch(projectDetailUrl)
        .then(res => res && res.json())
        .then(
            (result) => {
                this.setState({
                    data: result
                });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.log('result', error)
            }
        )
    }


    renderProjectDetailSlider = (data) => {
        const productImages = data && data.thumbnailImages
        return (
            <SimpleSlider images={productImages} />
        )
    }

    renderProjectDetail = (data) => {
        const projectDetail = data
        return (
            <Fragment>
                <div className="column column-right">
                    <div className="detail-content">
                        {
                            projectDetail && projectDetail.project_name && (
                                <h2>
                                    <Scramble
                                        autoStart
                                        text={`${projectDetail.project_name}`}
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
                                projectDetail && projectDetail.project_location && (
                                    <span>
                                        {projectDetail.project_location.toUpperCase()} |
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
                                projectDetail && projectDetail.project_stats && (
                                    <span>
                                        {projectDetail.project_stats.toUpperCase()} |
                                    </span>
                                )
                            }
                            {
                                projectDetail && projectDetail.project_area && (
                                    <span>
                                        {projectDetail.project_area.toUpperCase()} |
                                    </span>
                                )
                            }
                        </div>
                        {
                            projectDetail && projectDetail.project_info && (
                                <p>{projectDetail.project_info}</p>
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
        const projectDataDetails = Object.keys(data) || [];
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
                                            {this.renderProjectDetailSlider(data[projectDataDetails])}
                                        </div>
                                    </div>
                                    {this.renderProjectDetail(data[projectDataDetails])}
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
