import ProductBox from "../product-box/ProductBox.component";

const ProductsList = (props) => {
    return (
        <div className="products ml-auto d-flex flex-wrap">
            {props.products.map((item) => (
                <ProductBox key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ProductsList;
