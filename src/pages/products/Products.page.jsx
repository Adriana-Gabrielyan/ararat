import Select from "components/select/Select.component";
import Sidebar from "components/sidebar/Sidebar.component";
import ProductsList from "components/products-list/ProductsList.component";
import PRODUCTS_DATA from "data/products.data";

const Products = () => {
    const products = PRODUCTS_DATA;
    const options = [
        {value: 'sortBy', label: 'Sort By Default'},
        {value: 'lowToHigh', label: 'Price Low to High'},
        {value: 'highToLow', label: 'Price High to Low'},
    ];

    return (
        <section className="products-page">
            <div className="text-right">
                <Select options={options} />
            </div>

            <div className="products-page-content d-flex justify-content-between align-items-start flex-wrap">
                <Sidebar />
                <ProductsList products={products}/>
            </div>
        </section>
    );
};
export default Products;
