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
import { getTokenFromUrl } from "./containers/LoginLayout"

import TopLayout from "./containers/TopLayout";
import DetailContainer from "./containers/details/DetailContainer"


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
                <Route exact path='/'
                 component={withProps(() => ({token}))(TopLayout)}
                />
                <Route path='/show/:trackId' component={DetailContainer} />
              </Switch>
            </Router>
          </>
          : <LoginLayout /> }
        </div>
    </StylesProvider>
  );
}

export default App;
