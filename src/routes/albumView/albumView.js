import './albumView.css';
import React, { Component } from 'react';
//import link lo necesitan las otras view
import { Link } from 'react-router-dom';
import logogif from '../../assets/spotify-logo2.gif';
import logo from '../../assets/spotify-logo-.jpg';
import Search from '../components/Search';

var x, qstr;

class AlbumView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            artistName: '',
            artistImage: '',
            artistId: '',
            value:'',
            genero:'',
        };
        this.handleChange = this.handleChange.bind(this);
        this.acept = this.acept.bind(this);
    };

    componentWillMount(){
        qstr = this.props.location.search.substring(7);
        this.state.value = qstr;
        this.state.url = `https://api.spotify.com/v1/albums/${encodeURIComponent(qstr)}/tracks`;
    }

    handleChange(event) { 
        x = this.state.value;
        window.location.href= '/artistsListView?value='+x;
        event.preventDefault();
    }
 
    acept(event){
        this.setState({value: event.target.value});
    }

    render() {
        
        const{
            artistName,
            artistImage,
            artistId,
            infoStatus,
            value,
            genero
        } = this.state;

        return (
             <article className="album-view">
                <header className="album-view__header">
                    <div className="album-view__header-logo">
                        <img src={logo} className="album-view_logoPrinc" alt="logo" />
                    </div>
                    <div className="album-view__search">
                         <form name="myForm" action="/artistsListView" onSubmit={this.handleChange} method="get">
                           <input type="text" id="artista" className="album-view__search-query" onChange={this.acept} placeholder="Type the name of your favorite artist..." /> 
                           <input type="submit" value="search"/>
                        </form>
                     </div>
                </header>
                <div className="album-view__info">
                    <div className="album-view__info-logo">
                        <img id="img-album-tracks" src="aca va el path de la imagen" className="logoArtist" />
                    </div>
                    <div className="album-view__info-title">
                        <h2 id="album-box-nombre-title"></h2>
                        <h4 id="album-box-nombre-title"></h4>
                    </div>
                </div>
                
                <Search value={this.state.value} url={this.state.url} />
                <hr/>
                
                <div id="resultado-tracks" className="list-view__results" />

                <nav className="album-view__nav">
                    <ul>
                        <li><Link className="links" to="./homeView">Home View</Link></li>
                        <li>></li>
                        <li><Link className="links"  to="./artistsListView">Artists List View</Link></li>
                        <li>></li>
                        <li><Link className="links" to="./artistView">Artist</Link></li>
                        <li>></li>
                        <li><Link className="links" to="./albumView">Album</Link></li>
                    </ul>
                </nav>
                <footer className="album-view__footer">
                    <img src={logogif} className="album-view__logo" alt="logo" />
                </footer>
            </article>
        );
    }
}

export default AlbumView;
