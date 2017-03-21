import './mainView.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoSpotify from '../../assets/spotify-logo-.jpg';

class MainView extends Component {
    render() {
        return (
            <article className="main-view">
                <header className="main-view__header">
                    <img src={logoSpotify} className="main-view__logo" alt="logo" />
                    <h2>Welcome to Spotify Client</h2>
                </header>
                <nav className="main-view__nav">
                    <ul>
                        <li><Link  className="links" to="/homeView">Home</Link></li>
                        <li><Link  className="links" to="/artistsListView">Search Artist</Link></li>
                        <li><Link  className="links" to="/artistView">Artist</Link></li>
                        <li><Link  className="links" to="/albumView">Album</Link></li>
                    </ul>
                </nav>
            </article>
        );
    }
}

export default MainView;
