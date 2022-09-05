import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import { ChakraProvider } from "@chakra-ui/react";
import reducers from "./reducers";
import App from "./App";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));



ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Provider>
);
