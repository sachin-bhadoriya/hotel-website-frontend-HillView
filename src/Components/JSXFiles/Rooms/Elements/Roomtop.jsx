import React from 'react'
import image5 from '../../../../assets/Images/inside/outside5.jpg'
import './../../../CSSFile/RoomCSS/Roomtop.css'

const Roomtop = () => {
  const style = {
    background: `linear-gradient(rgba(26, 25, 25, 0.9), rgba(26, 25, 25, 0.1)), url(${image5})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '90vh',
    width: '100%',
  };

  return (
    <>
      <div data-aos="fade-up" className="home_top_elements" style={style}>
        <div className="home_top_content">
        {/* all css define in app.css */}
          <h3 data-aos="slide-right" className='home_top_heading_size'>WELCOME TO</h3>
          <h1 data-aos="slide-right" className='home_top_heading_size'>HILLVIEW ESCAPE</h1>
          <h3 data-aos="slide-right" className='home_top_heading_size'>HOTELS</h3>
          <p data-aos="slide-right" className='home_top_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, maiores.</p>
        </div>
        <div className="home_top_btn">
          <button>BOOK NOW</button>
        </div>
      </div>
      <div className='container text-center'>
        <h2 data-aos="fade-up" className='facilities-heading'>ROOMS AND RATES</h2>
        <p data-aos="fade-up" className='facilities-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, nesciunt. Nulla et deleniti veniam pariatur laborum architecto soluta maxime reprehenderit temporibus dolorem, doloremque dolorum quisquam placeat a debitis aliquid. Accusantium dolorem reprehenderit pariatur cum dignissimos, vitae aliquam sequi neque exercitationem itaque eius blanditiis illo consequuntur incidunt veritatis magnam assumenda doloremque.</p>
      </div>
    </>
  )
}

export default Roomtop;