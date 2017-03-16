import './albumView.css';
import React, { Component } from 'react';
//import link lo necesitan las otras view
import { Link } from 'react-router-dom';
import logogif from '../../assets/spotify-logo2.gif';

class AlbumView extends Component {
    render() {
        return (
            <article className="album-article-principal">
            	<div className="album-inside">
				<nav className="album-view__nav">
                    <ul>
                        <li><Link className="links" to="./homeView">Home View</Link></li>
                        <li>></li>
                        <li><Link className="links"  to="./artistsListView">Artist List View</Link></li>
                        <li>></li>
                        <li><Link className="links" to="./artistView">Nombre Artista</Link></li>
                        <li>></li>
                        <li><Link className="links" to="./albumView">Nombre Album</Link></li>
                    </ul>
                </nav>
                <hr/>
                <div className="album-view__results">
                    <h2>Aca van los resultados de la busqueda!</h2>
                </div>
                </div>
             	<footer className="album-view__footer">
                	<img src={logogif} className="album-view__logo" alt="logo" />
             	</footer>
            </article>
        );
    }
}

export default AlbumView;
