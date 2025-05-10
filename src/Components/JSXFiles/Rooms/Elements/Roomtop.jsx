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
      <div  data-aos="fade-up" className="Room_top_elements" style={style}>
        <div className="Room_top_content">
          <h3  data-aos="slide-right" className='Room_top_heading_size'>WELCOME TO</h3>
          <h1  data-aos="slide-right" className='Room_top_heading_size'>HILLVIEW ESCAPE</h1>
          <h3  data-aos="slide-right" className='Room_top_heading_size'>HOTELS</h3>
          <p  data-aos="slide-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, maiores.</p>
        </div>
        <div className="Room_top_btn">
          <button>BOOK NOW</button>
        </div>
      </div>
    </>
  )
}

export default Roomtop;