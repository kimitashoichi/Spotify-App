import { History } from "history";
import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

import trackReducer from "./trackReducer";

const rootReducer = (history: History<any>) => 
  combineReducers({
    router: connectRouter(history),
    track: trackReducer
  });

export default rootReducer;