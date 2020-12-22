import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";

import topics from "./redux/Reducer";
import rootSaga from "./redux/Sagas";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMid = createSagaMiddleware();
const store = createStore(topics, composeEnhancer(applyMiddleware(sagaMid)));

sagaMid.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
