import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";
import Store from "./redux/Store";
ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
          <React.StrictMode>
              <App />
          </React.StrictMode>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);