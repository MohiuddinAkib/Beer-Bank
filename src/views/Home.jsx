import React, { Fragment } from "react";
// Component imports
import Header from "../components/Header";
import BeersLIst from "../components/Beers/BeersLIst";

// Context consumer
import { Consumer } from "../contexts";
import Spinner from "../components/Spinner";
import BeerModal from "../components/Beers/BeerModal";

const Home = () => {
  return (
    <Consumer>
      {({ beers }) => {
        return (
          <Fragment>
            <Header />
            {/* Beers */}
            {beers.beersAreLoading ? (
              <Spinner />
            ) : (
              <section>
                <BeersLIst
                  beers={beers.beers}
                  dispatch={beers.dispatch}
                  fetchBeersWithScroll={beers.fetchBeersWithScroll}
                />
                <BeerModal />
              </section>
            )}
          </Fragment>
        );
      }}
    </Consumer>
  );
};

export default Home;
