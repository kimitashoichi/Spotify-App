import React, { useState, useEffect } from 'react';

import './App.css';
import LoginLayout from "./containers/LoginLayout";
import { getTokenFromUrl } from "./containers/LoginLayout"
import TopSearchLayout from "./containers/TopSearchLayout";

function App() {
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const hash = getTokenFromUrl();
    setToken(hash);

    window.location.hash = "#"
  }, []);

  return (
    <div className="App">
      { token ? <TopSearchLayout token={token}/> : <LoginLayout /> }
    </div>
  );
}

export default App;
