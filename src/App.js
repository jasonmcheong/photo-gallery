import React, { Component } from 'react';
import './App.css';
import Gallery from './components/gallery';
import GalleryDisplay from './components/gallery-display';

const APIKEY = 'qTAB9eHd';

class App extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    state = {
        gallery: [],
        displayObj: '',
        isLoading: true,
    };

    componentWillMount() {
        fetch(`https://www.rijksmuseum.nl/api/en/collection?key=${APIKEY}&ps=100&format=json`)
            .then(res => res.json())
            .then(res => this.setState({ gallery: res.artObjects, isLoading: false }))
            .catch(err => console.log(err));
    }

    handleClick(url) {
        this.setState({
            displayURL: url,
        });
    }

    render() {
        if (this.state.isLoading) {
            return <p>Loading...</p>;
        } else {
            return (
                <div className="App">
                    <GalleryDisplay display={this.state.displayURL} />
                    <Gallery gallery={this.state.gallery} click={this.handleClick} />
                </div>
            );
        }
    }
}

export default App;
