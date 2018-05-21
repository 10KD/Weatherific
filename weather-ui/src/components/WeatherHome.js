import React from 'react';
import axios from 'axios';
import WeatherDisplay from './WeatherDisplay';
import WeatherSearch from './WeatherSearch';

class WeatherHome extends React.Component {

    constructor() {
        super();

        this.state = {
            forecast: [],
            zipCode: true,
            searchTerm: "94112",
            error: "",
        };
    }

    componentDidMount() {
        this.getForecast();
    }

    clearErrors = () => {
        this.setState({error: ""})
    }

    getForecast = () => {
        let param; 
        if (this.zipCode) {
            param = "zip="
        } else {
            param = "q="
        }
        console.log("searching " + this.state.searchTerm);
        
        axios.get('https://api.openweathermap.org/data/2.5/weather?' 
        + param + this.state.searchTerm 
        + '&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial')
            .then((response) => {
                this.setState({ forecast: response.data })
                console.log("got new a forecast!")   
            }).catch((err) => {
                console.log(err.message)
                this.setState({error: err.message})
            });
    }

    search = (inputString) => {
        if (inputString.length === 5 && (inputString == parseInt(inputString, 10))) {
            this.setState({ zipCode: true })
        } else {
            this.setState({ zipCode: false })
        }
        this.clearErrors();
        this.setState({ searchTerm: inputString }, this.getForecast)
    }



    render() {
       

            return (
                <div className="home">
                    <h1>Weatherific by Don Kim</h1>
                    <WeatherSearch 
                    search={this.search}/>
                    <WeatherDisplay 
                    forecast={this.state.forecast}
                    error={this.state.error}
                    clearErrors={this.clearErrors}/>
                </div>
            );
    }
}

export default WeatherHome;