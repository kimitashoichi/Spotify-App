import { History } from "history";
import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

import trackReducer from "./trackReducer";
import albumReducer from "./albumReducer";
import artistReducer from "./artistReducer";

const rootReducer = (history: History<any>) => 
  combineReducers({
    router: connectRouter(history),
    track: trackReducer,
    album: albumReducer,
    artist: artistReducer
  });

export default rootReducer;