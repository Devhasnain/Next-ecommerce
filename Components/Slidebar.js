import React, { useState } from "react";
import Slider from "react-slick";
import Link from 'next/link';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md'


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <MdOutlineArrowForwardIos
      className={className}
      style={{ ...style, display: "block", color: "gray" }}
      onClick={onClick}
      size={40}
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
      size={40}
    />
  );
}

const Responsive = (props) => {
  const [products, setProducts] = useState(props.products);

  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="container-fluid" style={{ overflow: "hidden" }}>
      <div className="container">
        <div className="row">
          <div className="col mx-auto">
            <div className="row justify-content-center">
              <Slider {...settings}>
                {products.reverse().map((item, index) => {
                  return (
                    <div key={index} className="col-2 mx-5">
                      <div className="p-2 ">
                        <Link href={`/products/${item.id}`} className="slider-product-img-div">
                          <img src={item.thumbnail ? item.thumbnail : "/blankimg.png"} alt="" className="card-img shadow" style={{ height: "30vh", width: "100%" }} />
                          <div className="slider-product-img-lable">New</div>
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Responsive