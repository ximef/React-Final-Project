import './artistView.css';
import React, { Component } from 'react';
//import link lo necesitan las otras view
import { Link } from 'react-router-dom';
import logogif from '../../assets/spotify-logo2.gif';
import logo from '../../assets/spotify-logo-.jpg';

class ArtistView extends Component {

    render() {
        return (
            <article className="artist-view">
                <header className="artist-view__header">
                    <div className="artist-view__header-logo">
                        <img src={logo} className="artist-view__logo" alt="logo" />
                    </div>
                    <div className="artist-view__search">
                        <input type="text" className="artist-view__search-query" placeholder="Search for your favorite artist here..." />
                    </div>
                </header>
                <div className="artist-view__info">
                    <div className="artist-view__info-logo">
                        <img src="aca va el path de la imagen" className="logoArtist" />
                    </div>
                    <div className="artist-view__info-title">
                        <h2 className="box-nombre-title">Nombre Artista</h2>
                        <h4 className="box-nombre-title">Genero</h4>
                    </div>
                </div>
                <nav className="artist-view__nav">
                    <ul>
                        <li><Link className="links" to="./mainView">Main View</Link></li>
                        <li>></li>
                        <li><Link className="links" to="./artistsListView">Artists List View</Link></li>
                        <li>></li>
                        <li><Link className="links" to="./artist">Artist</Link></li>
                    </ul>
                </nav>
                <hr/>
                <div className="artist-view__results">
                    <div className="box">
                        <div className="box-img">
                            <img src="" className="imgArtist" />
                        </div>
                        <div className="box-title">
                            <h4 className="box-nombre">Album</h4>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-img">
                            <img src="" className="imgArtist" />
                        </div>
                        <div className="box-title">
                            <h4 className="box-nombre">Album</h4>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-img">
                            <img src="" className="imgArtist" />
                        </div>
                        <div className="box-title">
                            <h4 className="box-nombre">Album</h4>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-img">
                            <img src="" className="imgArtist" />
                        </div>
                        <div className="box-title">
                            <h4 className="box-nombre">Album</h4>
                        </div>
                    </div>
                </div>
                <footer className="home-view__footer">
                     <img src={logogif} className="home-view__logo" alt="logo" />
                </footer>
            </article>
        );
    }
}

export default ArtistView;
