import React from 'react'
import image10 from '../../../../assets/Images/inside/outside4.jpg'
import '../../../CSSFile/RoomCSS/Roomtype.css'




const Roomtype = () => {
    const Roomtypedetails = [
        {image: image10, head: "SINGLE ROOM", mainheading: "VIEW ROOM DETAILS", rate: '$180/Night' },
        {image: image10, head: "DOUBLE ROOM", mainheading: "VIEW ROOM DETAILS", rate: '$150/Night' },
        {image: image10, head: "TWIN ROOM", mainheading: "VIEW ROOM DETAILS", rate: '$150/Night' },
     ]; 
    //   for reversing items
    //  const latestRoomtypedetails = Roomtypedetails.reverse();

    return (
        <>
            <div className="container">
            {Roomtypedetails.map((Roomtypedetail, index) => (
                <div  key={index} data-aos="zoom-in" className='single_room room_images_type'>
                    <img className='' src={Roomtypedetail.image} alt="image" />
                    <h1 className='text-center'>{Roomtypedetail.head}</h1>
                    <div className="row text-center container room_images_type_container">
                        <h3 className='room_images_type_headingmin'>View Room Detail</h3>
                        <button className='room_images_type_btn'>{Roomtypedetail.rate}</button>
                    </div>
                </div>
            ))};                
            </div>
        </>
    )
}

export default Roomtype