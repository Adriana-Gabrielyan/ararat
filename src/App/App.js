import Header from "layout/header/Header.layout";
import Footer from "layout/footer/Footer.layout";

const App = () => {
    return (
        <div className="app">
            <Header />
            <main className="app__main">
                <h1>Hello world</h1>
            </main>
            <Footer />
        </div>
    );
};

export default App;
