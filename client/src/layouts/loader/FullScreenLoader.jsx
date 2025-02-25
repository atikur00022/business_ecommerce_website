import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const FullScreenLoader = () => {
    return (
        <div className="fullscreen-loader">
            <ThreeCircles
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="three-circles-loading"
            />
            <p className="loading-text">Loading, please wait...</p>
        </div>
    );
};

export default FullScreenLoader;
