import React from 'react'
import image2 from '../../../../assets/Images/inside/outside2.jpg'
import image3 from '../../../../assets/Images/inside/outside3.jpg'
import '../../../CSSFile/HomeCSS/Roomtype.css'


const Roomtype = () => {
  return (
    <>
      <div data-aos="fade-up" className="container">
        <div className="row room_type_container_main">
          <div className="col-6 d-flex">
            <div className="txt_room_type">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deserunt et cum delectus obcaecati voluptates itaque illo ipsa, fugit optio. Saepe, accusamus! Beatae ducimus nemo aliquam voluptas impedit atque alias quod dolores? Vero veniam aperiam quos, corporis, quas a quod in nostrum commodi ratione quo ipsam distinctio quasi culpa ut officia quibusdam corrupti, fuga id labore? Placeat nesciunt obcaecati odio illum itaque, neque iste, cum ab quisquam distinctio sequi sit vero aut quas explicabo officiis dolorem repudiandae id dignissimos, quibusdam dolores cumque adipisci corporis. Recusandae quisquam consequuntur voluptate. Officiis tempore temporibus repellendus omnis veniam sapiente! Rem voluptatem nam illo? Veritatis.
            </div>
          </div>
          <div className="col-6 hover-zoom room_type_image_container">
            <img src={image2} />
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="container">
        <div className="row room_type_container_main">
          <div className="col-6 d-flex">
            <div className="txt_room_type">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deserunt et cum delectus obcaecati voluptates itaque illo ipsa, fugit optio. Saepe, accusamus! Beatae ducimus nemo aliquam voluptas impedit atque alias quod dolores? Vero veniam aperiam quos, corporis, quas a quod in nostrum commodi ratione quo ipsam distinctio quasi culpa ut officia quibusdam corrupti, fuga id labore? Placeat nesciunt obcaecati odio illum itaque, neque iste, cum ab quisquam distinctio sequi sit vero aut quas explicabo officiis dolorem repudiandae id dignissimos, quibusdam dolores cumque adipisci corporis. Recusandae quisquam consequuntur voluptate. Officiis tempore temporibus repellendus omnis veniam sapiente! Rem voluptatem nam illo? Veritatis.
            </div>
          </div>
          <div className="col-6 hover-zoom room_type_image_container">
            <img src={image3} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Roomtype