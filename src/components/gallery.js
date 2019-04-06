import React from 'react';

class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.clickEvent = this.clickEvent.bind(this);
    }

    clickEvent = art => evt => {
        this.props.click(art.webImage.url);
    };

    render() {
        return (
            <div className="list">
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
            </div>
        );
    }
}

export default Gallery;
