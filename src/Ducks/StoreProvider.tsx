import React, { PropsWithChildren } from "react";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import thunk from "redux-thunk";
import RootReducer from "./RootReducer";

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}
declare var window: ExtendedWindow;

const composeReduxDevToolsEnhancers =
  (typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const middlewares = [thunk];

const store = createStore(
  RootReducer,
  composeReduxDevToolsEnhancers(applyMiddleware(...middlewares))
);

interface StoreProviderProps extends PropsWithChildren<{}> {}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};
