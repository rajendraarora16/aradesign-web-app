import React, { Fragment } from 'react'
import Head from 'next/head'
import PeopleList from '../components/people-list'
import PeopleDetail from '../components/people-detail'
import AboutDetail from '../components/about-detail'
import Header from '../components/header'
import Pattern from '../components/screen-pattern'

const People = () => (
    <Fragment>
        <Head>
            <title>About Us | Ara Design | Architecture Design Firm</title>
            <meta name="Ara Design established in 2000. Its a naturally responsive and stunning corporate structure and mechanical offices planning architechture." />
            <meta name="Keywords" content="residential interior design , interior design firms , office interior design company , small office interior design , interior design companies , interior design firms in mumbai , list of interior designers in mumbai , residential interior designers in mumbai , commercial interior design , top interior designers in mumbai" />
            <link rel="canonical" href="https://aradesign.in/about/" />
        </Head>
        <div className="main-container">
            <div className="row">
                <div className="container">
                    <Header />
                </div>
            </div>
            <div className="super-container people-details">
                <AboutDetail />
                <PeopleDetail />
                <PeopleList />
            </div>
        </div>
        <Pattern />
    </Fragment>
)

export default People
