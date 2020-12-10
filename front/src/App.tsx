import React, { useState, useEffect } from 'react';

import './App.css';
import LoginLayout from "./containers/LoginLayout";
import { getTokenFromUrl } from "./containers/LoginLayout"

import TrackContainer from "./containers/track/TrackCotainer";
import ArtistContainer from "./containers/artist/ArtistContainer";
import AlbumContainer from "./containers/album/AlbumContainer";


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
        <AlbumContainer token={token} />
      </>
      : <LoginLayout /> }
    </div>
  );
}

export default App;
