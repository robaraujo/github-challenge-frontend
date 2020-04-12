import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import axios from "axios";

import config from "./config";
import Routes from "./Routes";
import configureStore from "./store/configStore";

axios.defaults.baseURL = config.api;
const { store, persistor } = configureStore();
const browserHistory = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
