import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from "./saga";

const sagaMiddleware = createSagaMiddleware()

export const storeSaga = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(rootWatcher)