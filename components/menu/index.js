import React, { Fragment, useState } from 'react'
import Link from 'next/link'
import { triangleImage } from '../../constants/variables'
import Scramble from 'react-scramble'
import './style.less'

const Menu = () => {
    const [active, setActive] = useState(false)
    const toggleActive = (e) => {
        setActive(!active)
        setTimeout(function(){
            !active && document.getElementById('menu-triangle') ? document.getElementById('menu-triangle').classList.add('none') : document.getElementById('menu-triangle').classList.remove('none')
        }, 200);
        setTimeout(function(){
            !active && document.getElementById('menu-triangle') ? document.getElementById('menu-triangle').classList.add('none') : document.getElementById('menu-triangle').classList.remove('none')
        }, 400);
    }   
    const linkList = [
        {
            text: 'HOME',
            url: '/home'
        },{
            text: 'PROJECTS',
            url: '/projects'
        },{
            text: 'ABOUT',
            url: '/about'
        },{
            text: 'CONTACT',
            url: '/contact'
        }
    ]

    const listItem = () => {
        return (
            <Fragment>
                {linkList.map((item, index) => (
                    <Link href={item.url} key={index} >
                        <a>
                            <div className="menu">
                                <span className="icon"><img src={triangleImage} /></span>
                                <div className="name">
                                    <Scramble
                                        autoStart
                                        text={item.text}
                                        steps={[
                                        {
                                            roll: 10,
                                            action: '+',
                                            type: 'all',
                                        },
                                        {
                                            action: '-',
                                            type: 'forward',
                                        },
                                        ]}
                                    />
                                </div>
                            </div>
                        </a>

                    </Link>
                ))}
            </Fragment>
        )
    }

    return (
        <div>
            <a href="javascript:void(0);" className={active ? 'menu active' : 'menu'} id="menu-triangle" onClick={toggleActive}>
                <img src={triangleImage} />
            </a>
            <div className={`menu-wrapper ${active ? 'show' : 'hide'}`}>
                <div className="close-menu" ><div className="close cross" id="menu-close" onClick={toggleActive}></div></div>
                <div className="nav">
                    {listItem()}
                </div>
                <div className="close bottom">
                    <p>At ARA Design from extensive urban plans to the littlest of furniture subtleties, our work consistently weaves interior and exterior spaces.
                    </p>
                    <div className="social-icons">
                        <span>
                            <a href="https://www.facebook.com/aradesignfirm/" target="_balnk" >
                                <img src="https://aradesign.in/content/common/facebook.png" alt="instagram aradesign" />
                            </a>
                        </span>
                        <span>
                            <a href="https://www.instagram.com/ara.design_official/" target="_balnk" >
                                <img src="https://aradesign.in/content/common/instagram.png" alt="instagram aradesign" />
                            </a>
                        </span>
                        <span>
                            <a href="https://in.linkedin.com/in/amey-dahanukar-b3016134" target="_balnk" >
                                <img src="https://aradesign.in/content/common/linkedin.png" alt="instagram aradesign" />
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
