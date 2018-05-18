import React from 'react';
import axios from 'axios';

class WeatherDisplay extends React.Component {
    
    constructor() {
        super();

        this.state = {
            forecast: [],
        };
    }

    componentDidMount() {
        this.getForecast();
    }
    
    getForecast = () => {
        
        axios.get('http://api.openweathermap.org/data/2.5/weather?zip=94112,us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial')
        .then((response) => {
            this.setState({ forecast: response.data });
        });
    }

    render() {
        return (
            <div>
                forecast:
                {JSON.stringify(this.state)}
            </div>
        );
    }
}

export default WeatherDisplay;