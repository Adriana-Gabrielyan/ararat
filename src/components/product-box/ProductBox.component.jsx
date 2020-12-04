import Price from "../price/Price.component";
import Button from "../button/Button.component"
import {Link} from "react-router-dom"

const ProductBox = ({item}) => {
  const {id, image, logo, price} = item;

  return (
    <Link to={`/product/${id}`} className="product-box">
      <div className="product-img-div">
        <img src={image} alt="" className="product-img img-fluid" />
      </div>

      <img src={logo} alt="" className="img-fluid" />
      <Price price={price} className="justify-content-center" />
      <Button>  ADD TO CART </Button>
    </Link>
  );
};


export default ProductBox;
