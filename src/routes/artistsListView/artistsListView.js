import './artistsListView.css';
import React, { Component } from 'react';
//import link lo necesitan las otras view
import { Link } from 'react-router-dom';
import logogif from '../../assets/spotify-logo2.gif';

class ArtistsListView extends Component {

   constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {

         function callback(data) {
            console.log(data);
            var name = getSearchName(data);
        }

        function addChild(data, hilera){
                // Crea un elemento <td> y un nodo de texto, haz que el nodo de
                // texto sea el contenido de <td>, ubica el elemento <td> al final
                // de la hilera de la tabla
                var celda = document.createElement("td");
                var textoCelda = document.createTextNode(data);
                
                celda.appendChild(textoCelda);
                hilera.appendChild(celda);
        }

        function getSearchName(data) {

            // Obtener la referencia del elemento cuerpo
            var body = document.getElementById("cuerpo");
            while (body.firstChild) {
              body.removeChild(body.firstChild);
            }
            
            // Crea un elemento <table> y un elemento <tbody>
            var tabla   = document.createElement("table");
            var tblBody = document.createElement("tbody");

            var obj = JSON.parse(data); 

            var col = 0;
            let i, x= "";
            x +="<ol> \n";

            for(i in obj.artists.items) {
              if(col < 2){
                if(col === 0 ){
                  // Crea las hileras de la tabla
                  var hilera = document.createElement("tr");
                }
                addChild(obj.artists.items[i].name, hilera);
                col++;
              }
              else{
                col = 0;
                // agrega la hilera al final de la tabla (al final del elemento tblbody)
                tblBody.appendChild(hilera);
                // Crea las hileras de la tabla
                var hilera = document.createElement("tr");
                addChild(obj.artists.items[i].name, hilera);
                col++;
              }
            }

            x +="</ol> \n";
            console.log(x);

            //document.getElementById("text").innerHTML = x;

            // posiciona el <tbody> debajo del elemento <table>
            tabla.appendChild(tblBody);
            // appends <table> into <body>
            body.appendChild(tabla);
            // modifica el atributo "border" de la tabla y lo fija a "2";
            tabla.setAttribute("border", "2");
            tabla.style.color = "white";

        }

       function getData(artistId){

            var promise = new Promise(function(resolve, reject) {
            var url="https://api.spotify.com/v1/search?q="+artistId+"&type=artist";
            var req = new XMLHttpRequest();
            console.log(url);
            req.open("GET", url);
            
            req.onload = function() {
                if (this.readyState === 4 && this.status === 200) {
                   resolve(req.responseText);
                }
                else {
                    // Instead of the callback we're calling the reject callback of the promise
                    reject(new Error("Status code wasn't 200"));
                }
            }
            
            req.onerror = function() {
                // We're rejecting the promise here cause an error occured
                reject(new Error("Network error"));
            }
            
            req.send();
        });

          promise.then(function(data){
            console.log('Accepted');
            getSearchName(data);
           // document.getElementById('joke').innerHTML = JSON.parse(data).value.joke;
          }, function(error){
            console.log('Promise rejected.');
           // document.getElementById("error").innerHTML = "Error";
          });

       }

        this.setState({value: event.target.value});
        console.log(this.state.value);
        var res = this.state.value.replace(" ","+");
        console.log(res);
        getData(res);
        event.preventDefault();
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    
    
    render() {
        return (
            <article className="list-article-principal">
             <div className="list-inside">
                <header className="list-view__title">
                    <p className="list-title">Artists</p>
                </header>
                <p className="list-text">You are currently searching: {this.state.value}</p>
                <div className="list-view__s">
                    <input type='text' className="list-view__search-query" value={this.state.value} onChange={this.handleChange} placeholder="Search your favorite artist here..." ></input>
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
                    <p id="text"></p>
                    <p id="cuerpo"></p>
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