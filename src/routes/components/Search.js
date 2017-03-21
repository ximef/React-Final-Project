import ResultsContainer from './ResultsContainer'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Search extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      query: this.props.value, 
      urlSearch: this.props.url,
      data: {}, 
      inputCleared: false 
    }

  }

  componentDidMount(){
    this.onlyChange(this);
  }

  componentWillMount(){
        this.state.url = this.props.url;
        
  }

  handleChange (event) {

    const query = event.target.value.trim().toLowerCase()

    if (this.state.query === query) {
      return
    }

    this.state.url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=artist`;

    this.setState({ query })
    this.submitSearch(query)
  }

  onlyChange (event) {
      this.submitSearch(this.state.query)
  }


  submitSearch (keyword) {
    // If the keyword isn't present, set the data object to an empty object and
    // set a flag that the input has been cleared so we don't render any
    // pending AJAX requests after the user clears the input box
    if (!keyword.length > 0) {
      this.setState({ data: {}, inputCleared: true })
      return
    }

    // If a keyword was present, make sure the inputCleared flag is set to false
    this.setState({ inputCleared: false })

    fetch(this.state.url)
      .then((response) => response.json())
      .then((data) => {
        // If the input field has been cleared or if Spotify returned an empty response,
        // don't render these results. There is also a case where the timing of a response
        // is in a state such that we could render results for a previous state of the user's
        // query. So, if the results from this keyword do not match what's in the component's
        // state, we ignore those results as well.
        if (this.state.inputCleared || !data || keyword !== this.state.query) {
          return
        }

        this.setState({data: data});
      })
  }



  render () {
    return (
      <div >
        <p className="list-text">You are currently searching: {this.state.query}</p>
        <div className="list-view__s">
          <input type="text" name="search" className="list-view__search-query" onChange={this.handleChange.bind(this)} placeholder= "Search your favorite artist here..."/> 
        </div>
        
        <div>
           <ResultsContainer data={this.state.data} />  
        </div>
                
      </div>
    )
  }
}
