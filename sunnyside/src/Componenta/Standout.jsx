import React from 'react'
import './Standout.css'
import stand from '../sunnyside-agency-landing-page-main/sunnyside-agency-landing-page-main/images/desktop/image-stand-out.jpg'

function standout() {
  return (
    <div className='stand1'>
        
            <img className='sta' src={stand} alt="" />
       
        <div className='stand3'>
            <div className='stand4'>
                <h1>Stand out to the right audience</h1>
                <h5>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</h5>
            </div>
            <div className='stand5'>
                <button>LEARN MORE</button>
            </div>
        </div>

    </div>
  )
}

export default standout