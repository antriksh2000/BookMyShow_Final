import React from "react";
import { Route } from "react-router-dom";

const MovieHOC = ({ component: Component, ...rest }) => {
    return (
        <>
            <Route
                {...rest}
                component={(props) => (
                    <DefaultLayout {...props}>
                        <Component {...props} />
                    </DefaultLayout>
                )}
            />
        </>
    );
};

export default MovieHOC;
