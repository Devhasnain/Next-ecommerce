import React from "react";
import Slider from "react-slick";
import Style,{ImageDiv} from '../styles/SingleItem.module.css'

const CenterMode = ({ id, images }) => {
    const settings = {
        dots: true,
        // dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
            <Slider {...settings}>
                {images.map((item, index) => {
                    return (
                        <img src={item} className={`${Style.Image} img-fluid`} key={index} />
                    )
                })}
            </Slider>
    );
}
export default CenterMode