import { createStore, compose, applyMiddleware } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import usersReducer from "./users";
import userReducer from "./user";
import reposReducer from "./repos";

const reducers = {
  user: userReducer,
  users: usersReducer,
  repos: reposReducer,
};

// Persistor Configuration to whitelist users
const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};
const persistedReducer = persistCombineReducers(persistConfig, reducers);

export default () => {
  const store = createStore(persistedReducer, compose(applyMiddleware(thunk)));
  const persistor = persistStore(store);
  return { store, persistor };
};
