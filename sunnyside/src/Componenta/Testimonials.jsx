import React from 'react'
import emily from '../sunnyside-agency-landing-page-main/sunnyside-agency-landing-page-main/images/image-emily.jpg'
import jennie from '../sunnyside-agency-landing-page-main/sunnyside-agency-landing-page-main/images/image-jennie.jpg'
import thomas from '../sunnyside-agency-landing-page-main/sunnyside-agency-landing-page-main/images/image-thomas.jpg'
import './Testimonials.css'
function Testimonials() {
  return (
    <div className='client'>
        <div className='cli1'>
             <h1>CLIENT TESTIMONIALS</h1>
        </div>
        <div className='cli2'>
            <div className='cli3'>
                <div className='cli4'>
                    <img src={emily} alt="" />
                </div>
                <div className='cli5'>
                    <h5>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</h5>
                </div>
                <div className='cli6'>
                    <h4>Emily R.</h4>
                    <h5>Marketing Director</h5>
                </div>
            </div>
            <div className='cli7'>
                <div className='cli8'>
                    <img src={thomas} alt="" />
                </div>
                <div className='cli9'>
                    <h5>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</h5>
                </div>
                <div className='cli10'>
                    <h4>Thomas S.</h4>
                    <h5>Chief Operating Officer</h5>
                </div>
            </div>
            <div className='cli11'>
                <div className='cli12'>
                    <img src={jennie} alt="" />
                </div>
                <div className='cli13'>
                    <h5>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</h5>
                </div>
                <div className='cli14'>
                    <h4>Jennie F.</h4>
                    <h5>Business Owner</h5>
                </div>
            </div>

        </div>


    </div>
  )
}

export default Testimonials