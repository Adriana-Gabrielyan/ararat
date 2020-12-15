import HomeBannerSlider from "components/home-banner-slider/HomeBannerSlider.component";
import ProductSlider from "components/product-slider/ProductSlider.component";
import CATEGORIES from "data/categories.data";

const Home = () => {
    return (
        <section>
            <HomeBannerSlider />

            {CATEGORIES.map((category) => (
                <ProductSlider title={category.name} category={category.id} />
            ))}
        </section>
    );
};

export default Home;
