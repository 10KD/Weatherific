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
        
        axios.get('https://www.metaweather.com/api/location/2487956/')
        .then((response) => {
            this.setState({ forecast: response.data });
        });
    }

    render() {
        return (
            <div>
                forecast:
                {console.log(this.state)}
            </div>
        );
    }
}

export default WeatherDisplay;