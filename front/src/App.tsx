import React, { useState, useEffect } from 'react';
import { StylesProvider } from '@material-ui/styles';
import { 
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom';
import withProps from 'recompose/withProps';

import './App.css';
import LoginLayout from "./containers/LoginLayout";
import { getTokenFromUrl } from "./containers/LoginLayout";
import TopLayout from "./containers/TopLayout";
import DetailContainer from "./containers/details/DetailContainer";
import ArtistTrackLayout from "./containers/artist-track/ArtistTrackLayout";
import AlbumTrackLayout from "./containers/album-track/AlbumTrackLayout"


function App() {
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const hash = getTokenFromUrl();
    setToken(hash);
    window.location.hash = "";
  }, []);

  return (
    <StylesProvider injectFirst>
        <div className="App">
          { token ? 
            <>
              <Router>
                <Switch>
                  <Route exact path='/' component={withProps(() => ({token}))(TopLayout)} />
                  <Route path='/show/:trackId' component={DetailContainer} />
                  <Route exact path='/artist/:artistId' component={withProps(() => ({token}))(ArtistTrackLayout)} />
                  <Route exact path='/album/:albumId' component={withProps(() => ({token}))(AlbumTrackLayout)} />
                </Switch>
              </Router>
            </>
           : 
            <LoginLayout /> 
          }
        </div>
    </StylesProvider>
  );
}

export default App;
