import React, { Fragment } from 'react'
import Link from 'next/link'
import './style.less'


const Logo = () => (
    <Fragment>
        <Link href="/">
            <a className="logo">
                <img src="https://aradesign.in/content/common/logo.png" alt="Ara" />
            </a>
        </Link>
    </Fragment>
)

export default Logo