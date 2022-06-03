import React from 'react';
import pexel from '../api/pexel';

class Galaxy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: {
                original: "empty"
            }
        }
    };

    componentDidMount() {
        let currentComponent = this;
        const response =  pexel.get(`/v1/search`, {
            params: {
                query: 'galaxy',
                orientation: 'square',
                per_page: 25,
                page: 1
            }
        }).then(function (response){
            let data = response.data.photos[Math.floor(Math.random()*response.data.photos.length)].src;
            currentComponent.setState({
                photos: data
            });
        });
    }

   

    render() {

        return (
            <div>
                <img src={this.state.photos.medium} ></img>
            </div>
        );
    }
}

export default Galaxy;