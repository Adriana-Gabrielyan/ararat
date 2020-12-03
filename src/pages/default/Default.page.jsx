// import axios from "configs/axios.config";
import { useState, useEffect } from "react";

const DefaultPage = (props) => {
    const [state, setState] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            setState({ title: "Narek", text: "Sargsyan" });
        }, 5000);
        // axios.get(`default/${props.params}`).then((response) => {
        //     const data = response.data;
        //     setState(data);
        //     setIsLoading(false);
        // });
    }, []);

    return (
        <section className="standart-page">
            {!isLoading ? (
                <div className="standart-page-content">
                    <h1 className="text-center title-h1">{state.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: state.text }} />
                </div>
            ) : (
                "Loading..."
            )}
        </section>
    );
};

export default DefaultPage;
