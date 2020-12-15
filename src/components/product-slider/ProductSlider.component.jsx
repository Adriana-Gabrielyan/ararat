import Slider from "react-slick";
import ProductSliderItem from "../product-slider-item/ProductSliderItem";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PRODUCTS_DATA from "data/products.data";

const ProductSlider = (props) => {
    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        // autoplay:true,
        dots: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    const Products = PRODUCTS_DATA;
    return (
        <section className="brandy-section">
            <h1 className="title-h1 text-center">{props.title}</h1>
            <Slider {...settings} className="hovered-slider default-slider brandy-slider">
                {Products.map((product) => (
                    <ProductSliderItem key={product.id} {...product} />
                ))}
            </Slider>

            <div className="text-center">
                <Link className="btn-outline-gold" to={"/products"}>
                    See More
                </Link>
            </div>
        </section>
    );
};

export default ProductSlider;
