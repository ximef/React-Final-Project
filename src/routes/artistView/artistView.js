import './artistView.css';
import React, { Component } from 'react';
//import link lo necesitan las otras view
import { Link } from 'react-router-dom';
import logogif from '../../assets/spotify-logo2.gif';

class ArtistView extends Component {
    render() {
        return (
            <article className="artist-article-principal">
           		<div className="artist-inside">
             		<nav className="artist-view__nav">
                    <ul>
                        <li><Link className="links" className="links" to="./homeView">Home View</Link></li>
                        <li>></li>
                        <li><Link className="links" to="./artistsListView">Artist List View</Link></li>
                        <li>></li>
                        <li><Link className="links" to="./artistView">Nombre Artista</Link></li>
                    </ul>
                </nav>
                <hr/>
                <div className="artist-view__results">
                    <h2>Aca van los resultados de la busqueda!</h2>
                </div>
                </div>
	             <footer className="artist-view__footer">
	                <img src={logogif} className="artist-view__logo" alt="logo" />
	             </footer>
            </article>
        );
    }
}

export default ArtistView;
