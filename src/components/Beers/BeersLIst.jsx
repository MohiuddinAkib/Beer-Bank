import React from "react";
// Component imports
import SingleBeer from "./SingleBeer";
// Reactstrap imports
import { Container, Row, Col } from "reactstrap";
// proptypes
import PropTypes from "prop-types";
// Infinite scroll
import InfiniteScroll from "react-infinite-scroll-component";
// styled components
import styled from "styled-components";
// Spinner component
import Spinner from "../Spinner";

class BeersLIst extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1
    };
  }

  // Handles when scroll is finished
  handleNext = fetchBeersWithScroll => {
    this.setState(
      prevState => ({
        page: prevState.page + 1
      }),
      () => {
        if (this.state.page <= 3) {
          fetchBeersWithScroll(this.state.page);
        }
      }
    );
  };

  render() {
    const { beers, dispatch, fetchBeersWithScroll } = this.props;

    return (
      <Container className="py-5">
        <Row className="align-item-center">
          <InfiniteScrollContainer>
            <InfiniteScroll
              className="w-100 row"
              dataLength={beers.length}
              next={this.handleNext.bind(this, fetchBeersWithScroll)}
              hasMore={this.state.page <= 3}
              loader={<Spinner />}
              children={beers.map(beer => (
                <Col md="6" lg="4" key={beer.id} className="mb-3">
                  <SingleBeer beer={beer} dispatch={dispatch} />
                </Col>
              ))}
            />
          </InfiniteScrollContainer>
        </Row>
      </Container>
    );
  }
}

BeersLIst.propTypes = {
  beers: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  fetchBeersWithScroll: PropTypes.func.isRequired
};

const InfiniteScrollContainer = styled.div`
  width: 100%;
  div {
    width: 100%;
  }

  /* div > .infinite-scroll-component {
    width: 100%;
  } */
`;

export default BeersLIst;
