import { useState, useEffect } from "react";
import Select from "components/select/Select.component";
import Sidebar from "components/sidebar/Sidebar.component";
import ProductsList from "components/products-list/ProductsList.component";
import PRODUCTS_DATA from "data/products.data";
import ReactPaginate from "react-paginate";

const products = PRODUCTS_DATA;
const Products = () => {
    const options = [
        { value: "sortBy", label: "Sort By Default" },
        { value: "lowToHigh", label: "Price Low to High" },
        { value: "highToLow", label: "Price High to Low" },
    ];
    const [sortedProducts, setSortedProducts] = useState([]);

    function onSelectChange(event) {
        const sorted = [...products].sort(function (a, b) {
            let result;
            if (event.target.value === "lowToHigh") {
                result = a.price - b.price;
            } else if (event.target.value === "highToLow") {
                result = b.price - a.price;
            }
            return result;
        });
        setSortedProducts(sorted);
    }
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

    const [MinMaxPrice, setMinMaxPrice] = useState({max: null, min: null});

    const sortByMinMax = ({min = null, max = null, array, eItem}) => {
        if (min && max) {
            return array.filter((item) => eval(eItem) >= min && eval(eItem) <= max);
        }
        if (min) {
            return array.filter((item) => eval(eItem) >= min);
        }
        if (max) {
            return array.filter((item) => eval(eItem) <= max);
        }
    };

    function onPriceChangeMin(event) {
        const sortedArray = sortByMinMax({
            max: MinMaxPrice.max,
            min: event.target.value,
            array: products,
            eItem: 'item.price',
        });
        setMinMaxPrice({...MinMaxPrice, min: event.target.value});
        setSortedProducts(sortedArray);
    }

    function onPriceChangeMax(event) {
        const sortedArray = sortByMinMax({
            min: MinMaxPrice.min,
            max: event.target.value,
            array: products,
            eItem: 'item.price',
        });
        setMinMaxPrice({...MinMaxPrice, max: event.target.value});
        setSortedProducts(sortedArray);
    }

    const [checkedItems, setCheckedItems] = useState([]);

    function onCheckboxCheck(id) {
        const sortedArray = [];
        products.forEach((product) => {
            if (id === product.category_id) {
                sortedArray.push(product);
            }
        });
        setCheckedItems(id);
        setSortedProducts(sortedArray);
    }
    return (
        <section className="products-page">
            <div className="text-right">
                <Select options={options} onChange={onSelectChange} />
            </div>

            <div className="products-page-content d-flex justify-content-between align-items-start flex-wrap">
                <Sidebar
                    onPriceChangeMax={onPriceChangeMax}
                    onPriceChangeMin={onPriceChangeMin}
                    isChecked={checkedItems}
                    onCheckboxCheck={onCheckboxCheck}
                />
                <ProductsList
                    products={
                        sortedProducts !== undefined && sortedProducts.length === 0
                            ? products
                            : sortedProducts
                    }
                />
            </div>
        </section>
    );
};
export default Products;
