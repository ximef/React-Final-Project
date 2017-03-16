import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainView from './mainView/mainView';
import HomeView from './homeView/homeView';
import ArtistsListView from './artistsListView/artistsListView';
import ArtistView from './artistView/artistView';
import AlbumView from './albumView/albumView';

const getRoutes = function() {
    return (
        <div>
            <Route name="Main" component={MainView} />
            <Switch>
                <Route exact path="/homeView" component={HomeView} />
                <Route path="/artistsListView" component={ArtistsListView} />
                <Route path="/artistView" component={ArtistView} />
                <Route path="/albumView" component={AlbumView} />
            </Switch>
        </div>
    )
};

export default getRoutes;
