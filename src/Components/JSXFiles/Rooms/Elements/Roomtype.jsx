import React from 'react'
import image10 from '../../../../assets/Images/inside/outside4.jpg'
import '../../../CSSFile/RoomCSS/Roomtype.css'

const Roomtype = () => {
    return (
        <>
            <div className="container">
                <div data-aos="zoom-in" className='single_room room_images_type'>
                    <img className='' src={image10} alt="image" />
                    <h1 className='text-center'>SINGLE ROOM</h1>
                    <div className="row container room_images_type_container">
                        <h3 className='room_images_type_headingmin'>VIEW ROOM DETAILS</h3>
                        <button className='room_images_type_btn'>$150/Night</button>
                    </div>
                </div>
                <div data-aos="zoom-in" className='single_room room_images_type'>
                    <img className='' src={image10} alt="image" />
                    <h1 className='text-center'>DOUBLE ROOM</h1>
                    <div className="row container room_images_type_container">
                        <h3 className='room_images_type_headingmin'>VIEW ROOM DETAILS</h3>
                        <button className='room_images_type_btn'>$150/Night</button>
                    </div>
                </div>
                <div data-aos="zoom-in" className='single_room room_images_type'>
                    <img className='' src={image10} alt="image" />
                    <h1 className='text-center'>TWIN ROOM</h1>
                    <div className="row container room_images_type_container">
                        <h3 className='room_images_type_headingmin'>VIEW ROOM DETAILS</h3>
                        <button className='room_images_type_btn'>$150/Night</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Roomtype