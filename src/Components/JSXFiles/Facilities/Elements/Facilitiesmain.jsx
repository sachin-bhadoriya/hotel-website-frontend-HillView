import React from 'react'
import image9 from '../../../../assets/Images/inside/outside7.jpg'
import '../../../CSSFile/FacilitiesCSS/Facilitiesmain.css'

const Facilitiesmain = () => {
    return (
        <>
            <div className='container text-center'>
                <h2 data-aos="fade-up" className='facilities-heading'>FACILITIES</h2>
                <p data-aos="fade-up" className='facilities-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, nesciunt. Nulla et deleniti veniam pariatur laborum architecto soluta maxime reprehenderit temporibus dolorem, doloremque dolorum quisquam placeat a debitis aliquid. Accusantium dolorem reprehenderit pariatur cum dignissimos, vitae aliquam sequi neque exercitationem itaque eius blanditiis illo consequuntur incidunt veritatis magnam assumenda doloremque.</p>
            </div>
            <div className="container">
                <div  data-aos="zoom-in" className='faci-main facilities-items the-gym'>
                    <img className='the-gym-image faci-main-img' src={image9} alt="image" />
                    <h2 className='faci-main-heading the-gym-heading'>THE GYM</h2>
                </div>
                <div  data-aos="zoom-in" className='faci-main facilities-items poolsidebar'>
                    <img className='poolsidebar-image faci-main-img' src={image9} alt="image" />
                    <h2 className='faci-main-heading poolsidebar-heading'>POOL SIDE BAR</h2>
                </div>
                <div  data-aos="zoom-in" className='faci-main facilities-items the-spa'>
                    <img className='the-spa-image faci-main-img' src={image9} alt="image" />
                    <h2 className='faci-main-heading the-spa-heading'>THE SPA</h2>
                </div>
                <div  data-aos="zoom-in" className='faci-main facilities-items swimmingpool'>
                    <img className='swimmingpool-image faci-main-img' src={image9} alt="image" />
                    <h2 className='faci-main-heading swimmingpool-heading'>SWIMMING POOL</h2>
                </div>
                <div  data-aos="zoom-in" className='faci-main facilities-items restaurant'>
                    <img className='restaurant-image faci-main-img' src={image9} alt="image" />
                    <h2 className='faci-main-heading restaurant-heading'>RESTAURANT</h2>
                </div>
                <div  data-aos="zoom-in" className='faci-main facilities-items laundary'>
                    <img className='laundary-image faci-main-img' src={image9} alt="image" />
                    <h2 className='faci-main-heading laundary-heading'>LAUNDARY</h2>
                </div>
            </div>
        </>
    )
}

export default Facilitiesmain