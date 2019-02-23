import React, { Component, Fragment } from "react";

// Router
import { BrowserRouter as Router } from "react-router-dom";
// Alert module import
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
// Context api
import { Provider } from "./contexts";
// Components
import MyNavbar from "./components/MyNavbar";
import MainContainer from "./components/MainContainer";

// alert optional cofiguration
const options = {
  // you can also just use 'bottom center'
  position: "top center",
  timeout: 3000
};

class App extends Component {
  render() {
    return (
      <Provider>
        <AlertProvider template={AlertTemplate} {...options}>
          <Router>
            <Fragment>
              <header>
                <MyNavbar />
              </header>

              <main>
                <MainContainer />
              </main>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
