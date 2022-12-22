import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";
import { createStore } from "./app/store/create.store";
import "./style/style.scss";
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore();
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
