import React, { useState, useEffect } from 'react';
import { StylesProvider } from '@material-ui/styles';
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';

import './App.css';
import LoginLayout from "./containers/LoginLayout";
import { getTokenFromUrl } from "./containers/LoginLayout"

import TopLayout from "./containers/TopLayout";
import DetailLayout from "./containers/details/DetailBasic"


function App() {
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const hash = getTokenFromUrl();
    setToken(hash);

    window.location.hash = "";
  }, []);

  return (
    <StylesProvider injectFirst>
      <Router>
        <div className="App">
          { token ? 
          <>
            <Route exact path='/' component={TopLayout} token={token} />
            <Route path='/show/:trackId' component={DetailLayout} />
          </>
          : <LoginLayout /> }
        </div>
      </Router>
    </StylesProvider>
  );
}

export default App;
