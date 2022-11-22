import Slider from "react-slick";
import Banners from './Banners';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md'
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <MdOutlineArrowForwardIos
            className={className}
            style={{ ...style, display: "block", color: "gray"}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <MdOutlineArrowBackIosNew
            className={className}
            style={{ ...style, display: "block", color: "gray" }}
            onClick={onClick}
        />
    );
}
const SimpleSlider = () => {
    const settings = {
        size:"40",
        dots: false,
        infinite: true,
        lazyLoad: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className="container-fluid my-5">
            <div className="container">
                <div className="row">
                    <Slider {...settings}>
                        {Banners.map((item, index) => {
                            return (
                                <div key={index} className="col">
                                    <img style={{ width: '100%', height: "65vh" }} src={item.src} alt="" />
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default SimpleSlider