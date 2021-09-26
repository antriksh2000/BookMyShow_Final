import React from "react";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Higher Order Components
import DefaultHOC from "./HOC/Default.HOC";

//Pages
import HomePage from "./pages/Home.Page";


function App() {
    return (
        <>
            <DefaultHOC path="/" exact component={HomePage} />
        </>
    );
}
export default App;
