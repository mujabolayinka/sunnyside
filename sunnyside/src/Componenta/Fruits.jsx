import React from 'react'
import orangee from '../sunnyside-agency-landing-page-main/sunnyside-agency-landing-page-main/images/desktop/image-gallery-milkbottles.jpg'
import orangee1 from '../sunnyside-agency-landing-page-main/sunnyside-agency-landing-page-main/images/desktop/image-gallery-orange.jpg'
import orangee2 from '../sunnyside-agency-landing-page-main/sunnyside-agency-landing-page-main/images/desktop/image-gallery-cone.jpg'
import orangee3 from '../sunnyside-agency-landing-page-main/sunnyside-agency-landing-page-main/images/desktop/image-gallery-sugarcubes.jpg'
import './Fruits.css'
function Fruits() {
  return (
    <div className='fruits1'>
        <div className='fruits2'>
            <img src={orangee} alt="" />
            <img src={orangee1} alt="" />
            <img src={orangee2} alt="" />
            <img src={orangee3} alt="" />
        </div>


    </div>
  )
}

export default Fruits