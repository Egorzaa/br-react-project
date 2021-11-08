import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import { middleware } from "../Middlewares/middleware";
import { chatsReducer } from "./Chats/reducer";
import { messagesReducer } from "./Messages/reducer";
import { profileReducer } from "./Profile/reducer";
import { persistStore, persistReducer } from "redux-persist";
import { dogsReducer } from "./Dogs/reducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer,
  dogs: dogsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(middleware, thunk))
);

export const persistor = persistStore(store);
