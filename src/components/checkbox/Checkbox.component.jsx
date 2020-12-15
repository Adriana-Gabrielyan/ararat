import classNames from "classnames";

const CheckBox = ({ children, variant, ...props }) => {
    const inputClasses = classNames({
        "styled-checkbox": variant !== "filter",
        "filter-checkbox": variant === "filter",
    });

    return (
        <label htmlFor={props.id} onClick={props.onClick} className={props.className + " " + inputClasses}>
            {variant === "filter" ? (
                <>
                    <span>{props.label} </span>
                    <span>{props.count} </span>
                </>
            ) : (
                ""
            )}
            <input type="checkbox" id={props.id} />
            {children}
        </label>
    );
};

export default CheckBox;
