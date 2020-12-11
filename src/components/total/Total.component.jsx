import Price from 'components/price/Price.component';
import {Link} from "react-router-dom";

const Total = (props) => {
  return (
    <div className={`selected-product-content  ${props.className}`}>
      <div className="d-flex justify-content-between">
        <div className="total">Total</div>

        <div className="d-flex flex-column justify-content-end">
          <Price className={'mt-0'} />
          <div className="text-right product-count mb-5">
            2 product
          </div>
          <Link to="/payment" className="w-165 mt-auto btn-outline-gold">
            buy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Total;
