const Count = (props) => {
    return (
        <div className="count d-flex justify-content-end align-items-center position-relative">
            <span>Quantity</span>
            <span className="sub"> </span>
            <input type="number" value={props.count} readOnly />
            <span className="add"> </span>
        </div>
    );
};

const CountSingle = (props) => {
    return (
        <div className="count-buttons d-flex align-items-center">
            <button className="sub bg-transparent" type="button" aria-label="sub">
                <span>-</span>
            </button>
            <input type="number" value="1" className="mt-0" name="adults" aria-label="number" readOnly />
            <button className="add bg-transparent" type="button" aria-label="add">
                +
            </button>
        </div>
    );
};

export default Object.assign(Count, { CountSingle });
