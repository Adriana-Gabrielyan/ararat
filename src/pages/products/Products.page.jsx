import {useState} from 'react';
import Select from "components/select/Select.component";
import Sidebar from "components/sidebar/Sidebar.component";
import ProductsList from "components/products-list/ProductsList.component";
import PRODUCTS_DATA from "data/products.data";
import ReactPaginate from "react-paginate";

const Products = () => {
    const products = PRODUCTS_DATA;
    const options = [
        {value: "sortBy", label: "Sort By Default"},
        {value: "lowToHigh", label: "Price Low to High"},
        {value: "highToLow", label: "Price High to Low"},
    ];
    const [sortedProducts, setSortedProducts] = useState([]);
    const pageCount = Math.ceil(products.length / 6)

    function onSelectChange(event) {
        const sorted = [...products].sort(function (a, b) {
            let result;
            if (event.target.value === 'lowToHigh') {
                result = a.price - b.price;
            } else if (event.target.value === 'highToLow') {
                result = b.price - a.price;
            }
            return result;
        });
        setSortedProducts(sorted);
    }

    return (
        <section className="products-page">
            <div className="text-right">
                <Select options={options} onChange={onSelectChange}/>
            </div>

            <div className="products-page-content d-flex justify-content-between align-items-start flex-wrap">
                <Sidebar/>
                <ProductsList
                    products={sortedProducts !== undefined && sortedProducts.length === 0 ? products : sortedProducts}/>
                <div className="justify-content-center d-flex mt-5 w-100">
                    <ReactPaginate
                        previousLabel={'<'}
                        nextLabel={'>'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        marginPagesDisplayed={2}
                        pageCount={pageCount}
                        pageRangeDisplayed={5}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
                    />
                </div>
            </div>
        </section>
    );
};
export default Products;
