import Count from 'components/count/Count.component';
import Price from 'components/price/Price.component';

const CartItem = (props) => {
  const {image, logo, price} = props
  return (
    <div className="selected-product-content mb-4">
      <div className="d-flex flex-wrap">
        <div className="payment-img">
          <img src={image} className="img-fluid" alt="" />
        </div>
        <div>
          <img src={logo} alt="" className="logo-img" />
        </div>

        <div className="ml-auto d-flex flex-column">
          <Count/>
          <Price price={price} />
          <div className="text-right mt-auto">
            <button
              className="delete bg-transparent border-0">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
