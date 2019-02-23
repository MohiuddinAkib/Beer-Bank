import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { OPEN_MODAL } from "../../actions/types";

const SingleBeer = ({ beer, dispatch }) => {
  // Open beer modal
  const openModal = dispatch =>
    dispatch({
      type: OPEN_MODAL,
      payload: beer.id
    });

  return (
    <BeerWrapper onClick={openModal.bind(this, dispatch)}>
      <Card className="text-center position-relative py-5">
        <div className="img-container p-5" style={{ height: "380px" }}>
          <CardImg
            top
            src={beer.image_url}
            alt={beer.name}
            className="img-fluid"
          />
        </div>
        <CardBody>
          <CardTitle className="text-break h2 font-weight-bold text-yellow">
            {beer.name}
          </CardTitle>
          <CardSubtitle className="text-muted">{beer.tagline}</CardSubtitle>
        </CardBody>
      </Card>
    </BeerWrapper>
  );
};

const BeerWrapper = styled.div`
  height: 100%;
  .card {
    transition: box-shadow 0.5s linear;
    cursor: pointer;
    height: 100%;
  }

  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: -1px 0px 15px 5px rgba(0, 0, 0, 0.2);
    }
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }
  .img-container img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 100%;
  }
`;

SingleBeer.propTypes = {
  beer: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default SingleBeer;
