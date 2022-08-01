import React from "react";
import Main from "./components/MainComponent";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { configureStore } from './redux/configureStore'


function App() {
  const store  = configureStore()
  return (
    <BrowserRouter>
      <div className="App">
        <Provider store={store}>
          <Main />
        </Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
