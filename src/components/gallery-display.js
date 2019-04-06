import React from 'react';
import Header from './header';

const GalleryDisplay = props => {
    if (props.display) {
        return (
            <div className="display">
                <Header />
                <div className="container">
                    <img src={props.display} alt="" />
                </div>
            </div>
        );
    } else {
        return (
            <div className="display">
                <Header />
                <div className="container">
                    <p>Click an Image to view its content</p>
                </div>
            </div>
        );
    }
};

export default GalleryDisplay;
