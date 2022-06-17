import React from "react";
import Slider from "react-slick";
import tatoo2 from "../../../images/tatoo/tatoo-2.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const TatooSlider = () => {
  const settings = {
    infinite: false,
    slidesToShow: 4,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h2> Responsive </h2>
      <Slider {...settings}>
        <div>
          <img src={tatoo2} width={"200px"} alt={"tatoo picture"} />
        </div>
        <div>
          <img src={tatoo2} width={"200px"} alt={"tatoo picture"} />
        </div>{" "}
        <div>
          <img src={tatoo2} width={"200px"} alt={"tatoo picture"} />
        </div>{" "}
        <div>
          <img src={tatoo2} width={"200px"} alt={"tatoo picture"} />
        </div>{" "}
        <div>
          <img src={tatoo2} width={"200px"} alt={"tatoo picture"} />
        </div>{" "}
        <div>
          <img src={tatoo2} width={"200px"} alt={"tatoo picture"} />
        </div>{" "}
        <div>
          <img src={tatoo2} width={"200px"} alt={"tatoo picture"} />
        </div>
      </Slider>
    </div>
  );
};
