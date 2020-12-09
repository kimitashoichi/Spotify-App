import React, { useState, useEffect } from 'react';

import './App.css';
import LoginLayout from "./containers/LoginLayout";
import { getTokenFromUrl } from "./containers/LoginLayout"
import TrackSearchLayout from "./containers/TrackSearchLayout";
import SearchAlbumLayout from "./containers/AlbumSearchLayout";
import ArtistSearchLayout from "./containers/ArtistSearchLayout";


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
        <TrackSearchLayout token={token}/> 
        <SearchAlbumLayout token={token} />
        <ArtistSearchLayout token={token} />
      </>
      : <LoginLayout /> }
    </div>
  );
}

export default App;
