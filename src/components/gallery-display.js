import React from 'react';

const GalleryDisplay = props => {
    return (
        <div className="display">
            <img
                src={
                    'https://lh5.ggpht.com/vV5DJTpPEL5dOCFmytemK61JuTSX_9SQKI11U7uAhm4WB48zX6oyv8rXbBwYrSb7tPXUhERrROL8k2P9C5Q0NiOpCbs=s0' ||
                    props.display
                }
                alt=""
            />
        </div>
    );
};

export default GalleryDisplay;
