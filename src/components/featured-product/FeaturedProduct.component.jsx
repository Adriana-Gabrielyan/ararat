import Price from "../price/Price.component";
import Button from "components/button/Button.component";

const FeaturedProduct = (props) => {
  return (
    <div className="d-flex position-relative">
      <div className="featured-product-text text-right">
        <img src={props.image} alt="" className="featured-product-img mb-5" />
        <img src={props.logo} alt="" />
        <Price price={props.price} />
        <Button onClick={props.addToCart}>Add to card</Button>
      </div>
    </div>
  );
};
export default FeaturedProduct;
