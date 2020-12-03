const HomeBannerSliderItem = (props) => {
    const preventDrag = (event) => {
        event.preventDefault();
    };
    return (
        <div>
            <a href={props.url} onDragStart={preventDrag}>
                <img src={props.src} alt="Slider" className="img-fluid home-banner-img" />
            </a>
        </div>
    );
};

export default HomeBannerSliderItem;
