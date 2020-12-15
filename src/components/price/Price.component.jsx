const Price = (props) => {
    const { price, className } = props;
    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return (
        <div className={`price d-flex align-items-center ${className}`}>
            <span>Price </span>
            <span> {numberWithSpaces(price)} AMD</span>
        </div>
    );
};

export default Price;
