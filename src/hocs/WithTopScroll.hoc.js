const WithTopScroll = (WrappedComponent) => {
    return (props) => {
        window.scrollTo(0, 0);
        return <WrappedComponent {...props} />;
    };
};

export default WithTopScroll;
