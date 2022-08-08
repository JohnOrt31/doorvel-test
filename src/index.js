import React from "react";
import ReactDOM from "react-dom/client";
import configureStore from "./redux/configureStore";

import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

import App from "./Components/App/App";

window.devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

serviceWorker.unregister();
