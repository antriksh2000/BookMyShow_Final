import React from "react";
import MovieNavbar from "../components/Navbar/Moviebar.Navbar.component";

const MovieLayout = (props) => {
    return (
        <div>
            <MovieNavbar />
            {props.children}
            <div>Footer</div>
        </div>
    );
};

export default MovieLayout;
