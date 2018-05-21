import React from 'react';

class WeatherDisplay extends React.Component {

    capitalizeEach = (string) => {
        let splitString = string.split(" ")
        let capitalizedString = splitString.map((word) => {
            let firstLetter = word.charAt(0).toUpperCase()
            return firstLetter + word.slice(1) + " "
        })
        return capitalizedString.join(" ")
    }
    
    getIcon = (iconName) => {
        let url = "https://openweathermap.org/img/w/" + iconName + ".png"
        return <img src={url}/>
    }

    render() {
        if (this.props.forecast.name) {
            if (this.props.error) {
                return (
                    <div className="weather-display error">
                        <p>Error! please enter a valid city name or US zip code.</p>
                     
                        <p>{this.props.error}</p>
                    </div>
                );
            } else {

                return (
                    <div className="weather-display">
                        <div className="weather-column">
                            <p>
                                {"City: " + this.props.forecast.name}
                            </p>
                            <p>
                                {"Temp: " + this.props.forecast.main.temp + " °F"}
                            </p>    
                            <p>
                                {"High: " + this.props.forecast.main.temp_max + " °F"}
                            </p>        
                            <p>
                                {"Low: " + this.props.forecast.main.temp_min + " °F"}  
                            </p>
                        </div>
                        <div className="weather-column">
                            <p>
                                {"Description: " + this.capitalizeEach(this.props.forecast.weather[0].description)}
                            </p> 
                            <p>
                                {"Humidity: " + this.props.forecast.main.humidity + "%"}
                            </p>
                            <p>
                                {"Pressure: " + this.props.forecast.main.pressure + " hpa"}
                            </p>
                            <p>
                                {"Wind Speed: " + this.props.forecast.wind.speed + " m/h"}
                            </p>
                        </div>
                        <div className="weather-column icon">
                            {this.getIcon(this.props.forecast.weather[0].icon)}
                        </div>
                    </div>
                );
            }
           
        } else {
            return (
                <div className="weather-display"></div>
            );
        }
    }
}

export default WeatherDisplay;