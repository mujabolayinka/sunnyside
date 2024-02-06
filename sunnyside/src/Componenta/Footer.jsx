import React from 'react'
import facebook from '../sunnyside-agency-landing-page-main/sunnyside-agency-landing-page-main/images/icon-facebook.svg'
import instagram from '../sunnyside-agency-landing-page-main/sunnyside-agency-landing-page-main/images/icon-instagram.svg'
import twitter from '../sunnyside-agency-landing-page-main/sunnyside-agency-landing-page-main/images/icon-twitter.svg'
import pinterest from '../sunnyside-agency-landing-page-main/sunnyside-agency-landing-page-main/images/icon-pinterest.svg'

import './Footer.css'

function footer() {
  return (
    <div className='footer1'>
        <div className='footer2'>
            <h3>sunnyside</h3>
        </div>
        <ul className='foot'>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
        </ul>
        <div className='footer3'>
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={pinterest} alt="" />
        </div>
    </div>
  )
}

export default footer