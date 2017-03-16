import './artistsListView.css';
import React, { Component } from 'react';
//import link lo necesitan las otras view
import { Link } from 'react-router-dom';
import logogif from '../../assets/spotify-logo2.gif';
/*import $ from 'jquery'; 
const dUrl = "https://api.spotify.com/v1/albums/10GYbpGRnCbUd5WsDzqHAv";

$.ajax(
   {
     url: dUrl, 
     success: function(result){
         console.log(result);
     }
   }
    );
*/

 //onChange={this.props.searchBy}
//<artists-list-view__search-query searchBy={this.searchBy.bind(this)}>


class ArtistsListView extends Component {
constructor(props){
      super(props)
       this.state = { inputValue:' ' }
   }
   searchBy(input){
      this.setState({ inputValue : input.target.value })
   }
    render() {
        return (
            <article className="list-article-principal">
             <div className="list-inside">
                <header className="list-view__title">
                    <p className="list-title">Artists</p>
                </header>
                <p className="list-text">You are currently searching: $(".main-view__search-query").val()</p>
                <div className="list-view__s">
                    <input type='text' className="list-view__search-query" placeholder="Search your favorite artist here..." ></input>
                </div>
                <nav className="list-view__nav">
                    <ul>
                        <li><Link className="links" to="./homeView">Home View</Link></li>
                        <li>></li>
                        <li><Link className="links" to="./artistsListView">Artist List View</Link></li>
                    </ul>
                </nav>
                <hr/>
                <div className="list-view__results">
                    <h2>Aca van los resultados de la busqueda!</h2>
                </div>
            </div> 
            <footer className="list-view__footer">
                <img src={logogif} className="list-view__logo" alt="logo" />
            </footer>
             
           </article>
        );
    }
}

export default ArtistsListView;