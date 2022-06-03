import React, { Component } from 'react';
import Galaxy from '../components/galaxy';
import { useParams,  Link }  from 'react-router-dom';
import "../Horoscope.css";


class Horoscope extends Component {
    constructor(props){
        super(props);
        this.state = {
          json: {}
        }
    }

    

    componentDidMount () {
        const { starsign } = this.props.params;
        const URL = 'https://aztro.sameerkumar.website?sign=' + starsign + '&day=today';
        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
        .then(json => { this.setState({json}); });
    }

    render() {
        return (
        
        <div className='hbg'>
            <div id='border'>
                <div id='box'>
                    <p id='title'>{this.props.params.starsign }</p> 
                    {this.state.json.current_date} <br />
                    <br></br>
                    Lucky Number: {this.state.json.lucky_number} <br />
                    <br></br>
                    Mood: {this.state.json.mood} <br />
                    <br></br>
                    Description: {this.state.json.description} <br />
                    <br></br>
                    <div id='goback'><Link to="/"> Go back</Link></div>
                </div>
            </div>
                    <div className='imageapiborder'>
                        <div id='galaxy'><Galaxy/></div>
            </div>
        </div>
        );
    }
}

export default (props) => (
    <Horoscope
        {...props}
        params={useParams()}
    />
);
