const Select = (props) => {
    const { id, onChange, value, label, className, options, ...otherProps } = props;
    return (
        <select id={id} onChange={onChange} className={className} {...otherProps}>
            {options?.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;
