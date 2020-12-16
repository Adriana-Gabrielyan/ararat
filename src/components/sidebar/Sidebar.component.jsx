import CheckBox from "components/checkbox/Checkbox.component";
import PRODUCTS_DATA from "data/products.data";
import CATEGORIES from "data/categories.data";
import FeaturedProduct from "components/featured-product/FeaturedProduct.component";

const Sidebar = (props) => {
    const Products = PRODUCTS_DATA;
    const Categories = CATEGORIES;
    const featured = Products.filter((product) => product.featured === true);
    const randomFeatured = featured[Math.floor(Math.random() * featured.length)];
    return (
        <>
            <div className="mobile-filter  d-md-none d-block">
                <img src="/img/filter.svg" alt="" width="30px" />
            </div>
            <aside className="products-sidebar">
                <div className="sidebar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    -height">
                    <div className="d-md-none d-block text-right close-filter ml-auto pb-4">
                        <img src="/img/close.svg" alt="" width="20" />
                    </div>
                    <div className="categories">
                        <div className="filter-title">Product Categories</div>
                        {Categories.map((category) => (
                            <CheckBox
                                variant="filter"
                                key={category.id}
                                label={category.name}
                                id={category.id}
                                onClick={() => props.onCheckboxCheck(category.id)}
                            />
                        ))}
                    </div>
                    <div className="price-filter mb-4">
                        <div className="filter-title">Filter Price</div>
                        <div className="d-flex align-items-center justify-content-between">
                            <input
                                type="number"
                                placeholder="Min"
                                onChange={props.onPriceChangeMin}
                            />
                            <span>-</span>
                            <input
                                type="number"
                                placeholder="Max"
                                onChange={props.onPriceChangeMax}
                            />
                        </div>
                    </div>
                    <div className="featured-product">
                        <div className="filter-title">FEATURED PRODUCTS</div>
                        <FeaturedProduct key={randomFeatured.id} {...randomFeatured} />
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
