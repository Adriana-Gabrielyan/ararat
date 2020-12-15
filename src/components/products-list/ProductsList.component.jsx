import ProductBox from "components/product-box/ProductBox.component";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const ProductsList = (props) => {
    const [currentPage, setCurrentPage] = useState(0);
    const PER_PAGE = 6;
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(props.products.length / PER_PAGE);

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
        window.scrollTo(0, 0);
    }
    return (
        <div className="products ml-auto d-flex flex-wrap">
            <div className="justify-content-end d-flex mr-2 w-100">
                <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    marginPagesDisplayed={2}
                    onPageChange={handlePageClick}
                    pageCount={pageCount}
                    pageRangeDisplayed={5}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                />
            </div>
            {props.products.slice(offset, offset + PER_PAGE).map((item) => (
                <ProductBox key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ProductsList;
