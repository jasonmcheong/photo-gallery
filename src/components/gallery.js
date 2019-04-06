import React from 'react';
import ReactImageProcess from 'react-image-process';

class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.clickEvent = this.clickEvent.bind(this);
    }

    onComplete = data => {
        // console.log('data:', data);
    };

    clickEvent = art => evt => {
        this.props.click(art.webImage.url);
    };

    render() {
        return (
            <div className="list">
                <ReactImageProcess mode="compress" quality={0.4} onComplete={this.onComplete}>
                    {this.props.gallery.map(art => {
                        return (
                            <img
                                key={art.webImage.guid}
                                src={art.webImage.url}
                                alt=""
                                width="150px"
                                height="150px"
                                onClick={this.clickEvent(art)}
                            />
                        );
                    })}
                </ReactImageProcess>
            </div>
        );
    }
}

export default Gallery;
