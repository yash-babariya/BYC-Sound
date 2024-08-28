import React from 'react';
import './Loader.scss'; // Import a stylesheet for loader styling

const Loader = () => {
    return (
        <div className="loader">
            {/* You can customize this loader */}
            <div className="spinner"></div>
            <p>Loading...</p>
        </div>
    );
};

export default Loader;
