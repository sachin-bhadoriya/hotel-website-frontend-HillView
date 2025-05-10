import React from 'react'
import image6 from '../../../../assets/Images/inside/outside6.jpg'
import './../../../CSSFile/ContactCSS/Contacttop.css'

const Contacttop = () => {
  const style = {
    background: `linear-gradient(rgba(26, 25, 25, 0.9), rgba(26, 25, 25, 0.1)), url(${image6})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '90vh',
    width: '100%',
  };

  return (
    <>
      <div className="Contact_top_elements" style={style}>
        <div className="Contact_top_content">
          <h3 className='Contact_top_heading_size'>WELCOME TO</h3>
          <h1 className='Contact_top_heading_size'>HILLVIEW ESCAPE</h1>
          <h3 className='Contact_top_heading_size'>HOTELS</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, maiores.</p>
        </div>
        <div className="Contact_top_btn">
          <button>BOOK NOW</button>
        </div>
      </div>
    </>
  )
}

export default Contacttop;