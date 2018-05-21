import React from 'react';


class WeatherSearch extends React.Component {

    constructor() {
        super();

        this.state = {
            input: "",
        };
    }

    handleChange = (e) => {
        this.setState({input: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.search(this.state.input)
    }

    render() {
       

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="search-box">
                        <label htmlFor="search">Please Enter a City Name or US Zip Code</label>
                        <input className="search-input" 
                        type="text" name="search" 
                        onChange={this.handleChange} 
                        value={this.state.input} 
                        placeholder="e.g. San Francisco or 94117"/>
                        {console.log(this.state)}
                        <button className="search-button">Search</button>
                    </div>
                </form>
            </div>
        );
    } 
}

export default WeatherSearch;