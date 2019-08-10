import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import Scramble from 'react-scramble'
import Header from '../components/header'
import Pattern from '../components/screen-pattern'
import CountUp from 'react-countup'
import { triangleImage } from '../constants/variables'
import '../styles/index.less'

class Home extends Component {

    render() {
        return (
            <Fragment>
                <Head>
                    <title>Architecture Interior, Exterior Design Company In Mumbai | Ara Design</title>
                    <meta name="Ara Design is a full-service best architectural interior, an exterior designing company in India. and we are an urban space planning firm in Mumbai. We are involved with all processes." />
                    <meta name="Keywords" content="residential interior design , interior design firms , office interior design company , small office interior design , interior design companies , interior design firms in mumbai , list of interior designers in mumbai , residential interior designers in mumbai , commercial interior design , top interior designers in mumbai" />
                    <link rel="canonical" href="https://aradesign.in/home" />
                </Head>
                <div className="main-container">
                    <div className="row">
                        <div className="container">
                            <Header />
                        </div>
                    </div>
                    <div className="super-container">
                        <div className="row">
                            <div className="container home-container">
                                <div className="grid">
                                    <div className="column">
                                        <div className="left-content">
                                            <div className="title-text">
                                                <h2 className="rw-sentence">
                                                    <span>We are</span>
                                                    <div className="rw-words rw-words-1">
                                                        <span>geometry from memories</span>
                                                        <span>nuances of native</span>
                                                        <span>creators of current</span>
                                                        <span>life in layers</span>
                                                    </div>
                                                </h2>
                                            </div>
                                            <p>ARA Designs characterizes architecture as an art and investigation of ensuring our urban
                                            communities and structures fit with our varied clientele exhibits our diverse work exposure. 
                                            </p>
                                        </div>
                                    </div>
                                    <div className="column column-right">
                                        <div className="right-wrapper">
                                            <div className="right-section">
                                                <div className="icon-con">
                                                    <img src="https://aradesign.in/content/common/mug-hot.png" />
                                                </div>
                                                <div className="text-section">
                                                    Cups of Coffee consumed
                                                </div>
                                                <div className="counter-section">
                                                    <CountUp start={0} end={8920} />
                                                </div> 
                                            </div>
                                            <div className="right-section">
                                                <div className="icon-con">
                                                    <img src="https://aradesign.in/content/common/user-clock.png" />
                                                </div>
                                                <div className="text-section">
                                                    Hours of Sleep lost
                                                </div>
                                                <div className="counter-section">
                                                    <CountUp start={0} end={26280} />
                                                </div> 
                                            </div>
                                            <div className="right-section">
                                                <div className="icon-con">
                                                    <img src="https://aradesign.in/content/common/cut.png" />
                                                </div>
                                                <div className="text-section">
                                                    Papercuts we’ve had
                                                </div>
                                                <div className="counter-section">
                                                    <CountUp start={0} end={6216} />
                                                </div> 
                                            </div>
                                            <div className="right-section">
                                                <div className="icon-con">
                                                    <img src="https://aradesign.in/content/common/map-marker-alt.png" />
                                                </div>
                                                <div className="text-section">
                                                    Cities we’ve built in
                                                </div>
                                                <div className="counter-section">
                                                    <CountUp start={0} end={27} />
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Pattern animate />
            </Fragment>
        )
    }
}

export default Home
