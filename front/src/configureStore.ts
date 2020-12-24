import { applyMiddleware, createStore } from "redux";
import { History } from "history";
import createSagaMiddleware from "redux-saga";
import { compose } from '@material-ui/system';

import rootSaga from "./sagas";
import rootReducer from "./reducers";
import { ExtendedWindow } from "./reduxDevToolExtensionType";

declare var window: ExtendedWindow;

export default function configureStore (history: History) {
  const sagaMiddleware = createSagaMiddleware();
  // TODO: オペレーター && と || を混ぜて使うなと言う警告がコンソールに出ているが、開発環境でのみ使用するので一旦無視でOK
  const composeReduxDevToolExtension = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhanser = composeReduxDevToolExtension(applyMiddleware(sagaMiddleware));

  const store = createStore(
    rootReducer(history),
    enhanser
  );

  sagaMiddleware.run(rootSaga);
  return store;
}

