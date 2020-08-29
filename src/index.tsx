import * as React from "react";
import { render } from "react-dom";

import App from "./App";
import { StoreProvider } from "./Ducks/StoreProvider";

const rootElement = document.getElementById("root");
render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  rootElement
);
