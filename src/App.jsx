import React, { Component, Fragment, Suspense } from "react";
import "./App.css";

// Router
import { Route, Switch } from "react-router-dom";
// Components
import Home from "./views/Home";
import MyNavbar from "./components/MyNavbar";
import Deafult from "./views/Deafult";
import Spinner from "./components/Spinner";
const Favorites = React.lazy(() => import("./views/Favorites"));

class App extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <MyNavbar />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/favorite"
              component={() => (
                <Suspense fallback={<Spinner />}>
                  <Favorites />
                </Suspense>
              )}
            />
            <Route component={Deafult} />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default App;
