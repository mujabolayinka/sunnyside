import React from 'react'
import './Transform.css'
import Transf from '../sunnyside-agency-landing-page-main/sunnyside-agency-landing-page-main/images/desktop/image-transform.jpg'
function Transform() {
  return (
    <div className='pick'>
        <div className='pickk'>
        <div className='first'>
            <div className='second'>
                <h1>Transform your brand</h1>
                <h5>We are a full-service creative agency specializing in helping brands grow fast. 
                 Engage your clients through compelling visuals that do most of the marketing for you.</h5>
            </div>
            <div className='third'>
                <button>LEARN MORE</button>
            </div>
        </div>
        
            <img className='tra' src={Transf} alt="" />
       
        </div>
    </div>
    
  )
}

export default Transform