import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import axios from 'axios'
import Link from 'next/link'
import Header from '../components/header'
import Pattern from '../components/screen-pattern'
import { triangleImage } from '../constants/variables'
import '../styles/contact.less'


class Contact extends Component {
    constructor(props) {
        super(props);
        this.ShowProjects = this.ShowProjects.bind(this);
        this.closeModal = this.closeModal.bind(this)
        // this.mouseOver = this.mouseOver.bind(this)
        // this.mouseOut = this.mouseOut.bind(this)
        this.state = {showModal: false, cityName: '', }
    }

    static async getInitialProps({req}) {
        const res = await axios({
            url: 'https://api.myjson.com/bins/r6s4d'
          });
          return {dataLocation : res.data}
    }

    state = {
        data: []
    }

    componentDidMount() {
        axios
            .get('https://api.myjson.com/bins/160o11')
            .then(res => this.setState({ data: res.data }))
            .catch(error => console.log(`error => ${error}`))
    }

    renderProjectList = (data) => {
        const locationD = data.filter(location => {
            return location.location.toLowerCase() == this.state.cityName.toLowerCase()
        })
        return (
            (locationD == '' || locationD) ? locationD.map((data, index) => {
                const slug = data.name.replace(/-|\s/g,"").toLowerCase()
                return (
                    <Link href={`/project-detail?name=${slug}`} as={`/project-detail?name=${slug}`}>
                        <a>
                         {data.name}
                        </a>
                    </Link>
                )
            }) : <div>No data found</div>
        )
    }       
    // onClick={this.ShowProjects}
    renderCityList = (item, index) => (
        <span key={index}  data-id={item.cityname}>
            {item.cityname}<span className="pipe">|</span>
        </span>
    )

    ShowProjects = (e) => {
        const { showModal } = this.state
        showModal && showModal
            ? this.setState({ showModal: false, cityName: e.target.getAttribute('data-id') })
            : this.setState({ showModal: true, cityName: e.target.getAttribute('data-id') })
       
    }  

    closeModal = (e) => {
        this.setState({ showModal: false, cityName: '' })
    }
    
    // mouseOver = (e) => {
    //     const mapImg = document.querySelector('.map-svg');
    //     mapImg.classList.add('show');
    // }
    
    // mouseOut = (e) => {
    //     const mapImg = document.querySelector('.map-svg');
    //     mapImg.classList.remove('show');
    // }

    render() {
        return (
            <Fragment>
                <Head>
                    <title>Contact Us | ARA Design</title>
                    <meta name="Contact Details of Ara Design in Mumbai, India: engineering, maintainable, inside, scene structure - accommodation, private, institutional and some other compositional plan necessities." />
                    <meta name="Keywords" content="residential interior design , interior design firms , office interior design company , small office interior design , interior design companies , interior design firms in mumbai , list of interior designers in mumbai , residential interior designers in mumbai , commercial interior design , top interior designers in mumbai" />
                    <link rel="canonical" href="https://aradesign.in/contact/" />
                </Head>
                <div className="main-container contact-us">
                    <div className="row">
                        <div className="container">
                            <Header />
                        </div>
                    </div>
                    <div className="super-container">
                        <div className="row">
                            <div className="container contact-container">
                                <div className="map-section">
                                    <div className='map-img' id='map-img'>
                                        <img src='https://aradesign.in/content/common/map.png' />
                                    </div>
                                 </div>
                                <div className="grid">
                                    <div className="column">
                                        <div className="left-content">
                                            <div className="title-text">
                                                <h2 className="rw-sentence">
                                                    <span>A part of us everywhere</span>
                                                </h2>
                                            </div>  
                                            <p>
                                                {this.state.data && this.state.data.map((item, index) => (
                                                    <Fragment key={index}>
                                                        {this.renderCityList(item, index)}
                                                    </Fragment>
                                                ))}
                                            </p>
                                            <h4>
                                                ADDRESS: <a href="https://goo.gl/maps/9XAd2XqWz3mjJ9j17" target="_blank">1st Floor, Dwarka, 57 Tagore Road, Santacruz (W), Mumbai, Maharashtra 400054</a><br />
                                                TEL: <a href="tel:91-2226482236">+91-2226482236</a>, <a href="tel:91-2226482237">+91-2226482237</a>,&nbsp;&nbsp;&nbsp;  EMAIL: <a href="mailto:contact@aradesign.in ">contact@aradesign.in </a><br/>                                               
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            this.state.showModal
                                ? (
                                    <div className="modal-wrapper">
                                        <div className="close-menu" ><div className="close cross active"  id="menu-close" onClick={this.closeModal}></div></div>
                                        <div className="modal-body">
                                            <div className="list">
                                                {
                                                    this.renderProjectList(__NEXT_DATA__.props.pageProps.dataLocation)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                                : null
                        }
                    </div>
                </div>
                <Pattern mouseEffect={false}/>
            </Fragment>
        )
    }
}

export default Contact
