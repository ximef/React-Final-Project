import './homeView.css';
import React, { Component } from 'react';
//import link lo necesitan las otras view
import { Link } from 'react-router-dom';
import logogif from '../../assets/spotify-logo2.gif';

class HomeView extends Component {
    render() {
        return (
            <article className="home-article-principal">
             <div className="home-inside">
                <header className="home-view__title">
                    <p className="home-pre-title">Welcome to</p>
                    <p className="title">Spotisearch</p>
                    <p className="text">Search your favourite song over Spotify, just enter an artist's name in the<br/>
                    following search box and enjoy!</p>
                </header>
                <div className="home-view__s">
                    <input type="text" className="home-view__search-query" placeholder="Type the name of your favorite artist..." />
                </div>
                <div className="home-view__favourites">
                    <h3>Favorite Songs</h3>
                    <div className="home-view__favourites-stored">

                    </div>
                </div>
                <nav className="home-view__nav">
                    <ul>
                        <li><Link className="links" to="./mainView">Main View</Link></li>
                    </ul>
                </nav>
             </div>
             <footer className="home-view__footer">
                <img src={logogif} className="home-view__logo" alt="logo" />
             </footer>
            </article>
        );
    }
}

export default HomeView;
