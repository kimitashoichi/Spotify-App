import React, { useState, useEffect } from 'react';

import './App.css';
import LoginLayout from "./containers/LoginLayout";
import { getTokenFromUrl } from "./containers/LoginLayout"

import TrackLayoutComponent from "./containers/track/TrackLayoutComponent";

import TrackContainer from "./containers/track/TrackCotainer";


function App() {
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const hash = getTokenFromUrl();
    setToken(hash);

    window.location.hash = "#"
  }, []);

  return (
    <div className="App">
      { token ? 
      <>
        <TrackContainer token={token}/>
        {/* <TrackSearchLayout token={token}/> 
        <AlbumSearchLayout token={token} />
        <ArtistSearchLayout token={token} /> */}
      </>
      : <LoginLayout /> }
    </div>
  );
}

export default App;
