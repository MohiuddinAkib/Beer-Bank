import React, { Component, Suspense } from "react";
// React animation library
import { TransitionGroup, CSSTransition } from "react-transition-group";
// Router
import { Route, Switch, withRouter } from "react-router-dom";

// Components
import Home from "../views/Home";
import Deafult from "../views/Deafult";
import Spinner from "./Spinner";
import BeerBankAlerts from "./BeerBankAlerts";

// Consumer
import { Consumer as ErrorConsumer } from "../contexts/ErrorsContext";

// Lazy loaded component
const Favorites = React.lazy(() => import("../views/Favorites"));

class MainContainer extends Component {
  render() {
    const { location } = this.props;

    return (
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames={"fade"}
        >
          <section className="route-section">
            <Switch location={location}>
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
            <ErrorConsumer>
              {({ msg, status }) => (
                <BeerBankAlerts msg={msg} status={status} />
              )}
            </ErrorConsumer>
          </section>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default withRouter(MainContainer);
