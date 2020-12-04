import React from "react";
import Slider from "react-slick";
import HomeBannerSliderItem from "../home-banner-slider-item/HomeBannerSliderItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeBannerSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    const sliderImages = [
        {
            image: "https://shop.araratbrandy.com/storage/top_slider/16068343585725815.jpg",
            url: "https://shop.araratbrandy.com/storage/top_slider/16068343585725815.jpg",
        },
        {
            image: "https://shop.araratbrandy.com/storage/top_slider/16069101993214075.jpg",
            url: "https://shop.araratbrandy.com/storage/top_slider/16069101993214075.jpg",
        },
    ];

    return (
        <div>
            <Slider {...settings} className="home-banner-slider">
                {sliderImages.map((sliderImage, index) => (
                    <HomeBannerSliderItem key={index} src={sliderImage.image} url={sliderImage.url} />
                ))}
            </Slider>
        </div>
    );
};

export default HomeBannerSlider;
