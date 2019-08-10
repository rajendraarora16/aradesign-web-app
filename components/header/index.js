import React, { Fragment } from 'react'
import Menu from '../menu'
import Logo from '../logo'
import './style.less'

const Header = () => (
    <Fragment>
        <div className="header-section">
            <div className="grid">
                <div className="column">
                    <Logo />
                </div>
                <div className="column column-right">
                    <Menu />
                </div>
            </div>
        </div>
    </Fragment>
)

export default Header