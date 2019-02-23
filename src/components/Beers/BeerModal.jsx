import React from "react";
// Modal imports from reactstrap
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  CardTitle,
  CardSubtitle,
  CardText,
  Row,
  Card,
  CardBody
} from "reactstrap";
// styled components
import styled from "styled-components";
// Beers context
import { Consumer } from "../../contexts/BeersContext";
import { CLOSE_MODAL } from "../../actions/types";
import Spinner from "../Spinner";
// import shuffle from "../../helpers/shuffle";
import _shuffle from "lodash/shuffle";

const toggle = dispatch => {
  dispatch({ type: CLOSE_MODAL });
};

const BeerModal = () => {
  let beerObject;
  let mightLikes;
  return (
    <Consumer>
      {({ modalOpen, dispatch, beers, beer, beerIsLoading, fetchBeer }) => {
        if (beer) {
          beerObject = beer[0];
          mightLikes = _shuffle(
            beers.filter(item => item.id !== beer.id)
          ).slice(0, 3);
        }
        return (
          <Modal
            isOpen={modalOpen}
            toggle={toggle.bind(this, dispatch)}
            size="lg"
          >
            <ModalHeader
              toggle={toggle.bind(this, dispatch)}
              className="border-0"
            />

            {beerIsLoading ? (
              <Spinner />
            ) : (
              <React.Fragment>
                <ModalBody>
                  {beer ? (
                    <Row className="m-0">
                      <Col lg="3" className="pr-lg-0">
                        <ImageContainer>
                          <img
                            src={beerObject.image_url}
                            alt={beerObject.name}
                          />
                        </ImageContainer>
                      </Col>
                      <Col lg="9" className="pl-lg-0">
                        <CardTitle className="text-break h2 font-weight-bold text-yellow pt-sm-3 pt-lg-0">
                          {beerObject.name}
                        </CardTitle>
                        <CardSubtitle className="text-muted lead">
                          {beerObject.tagline}
                        </CardSubtitle>
                        <Divider className="my-3">
                          <span className="bg-blue d-block" />
                        </Divider>
                        <div className="mb-3">
                          <span className="mr-3">
                            <strong className="h4">IBU</strong> {beerObject.ibu}
                          </span>

                          <span className="mr-3">
                            <strong className="h4">ABV</strong> {beerObject.abv}
                          </span>

                          <span className="mr-3">
                            <strong className="h4">EBC</strong> {beerObject.ebc}
                          </span>
                        </div>
                        <CardText
                          className="text-muted h5 font-weight-light text-break pr-lg-2"
                          style={{ lineHeight: "2rem" }}
                        >
                          {beerObject.description}
                        </CardText>
                        <CardTitle className="text-break h4 font-weight-bold mt-2">
                          Best served with
                        </CardTitle>
                        <ul>
                          {beerObject.food_pairing.map((pair, i) => (
                            <li key={i}>
                              <CardText
                                className="text-muted  lead"
                                style={{ lineHeight: "2rem" }}
                              >
                                {pair}
                              </CardText>
                            </li>
                          ))}
                        </ul>
                      </Col>
                    </Row>
                  ) : (
                    <Spinner />
                  )}
                </ModalBody>
                {beer ? (
                  <ModalFooter className="border-0 justify-content-start">
                    <Row className="w-100 mx-0">
                      <Col xs="12">
                        <CardTitle className="text-break h4 font-weight-bold text-yellow">
                          You might also like:
                        </CardTitle>
                      </Col>

                      {mightLikes.map(mightLike => (
                        <Col lg="4" key={mightLike.id} className="pb-3 pb-lg-0">
                          <Card
                            className="text-center "
                            onClick={fetchBeer.bind(this, mightLike.id)}
                            style={{ cursor: "pointer" }}
                          >
                            <CardBody>
                              <ImageContainer sm className="position-relative">
                                <img
                                  src={mightLike.image_url}
                                  alt={mightLike.name}
                                />
                              </ImageContainer>
                              <CardTitle className="h5 mt-2">
                                {mightLike.name}
                              </CardTitle>
                            </CardBody>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </ModalFooter>
                ) : null}
              </React.Fragment>
            )}
          </Modal>
        );
      }}
    </Consumer>
  );
};

const ImageContainer = styled.div`
  height: ${({ sm }) => (!sm ? "500px" : "300px")};
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${({ sm }) => (!sm ? "70%" : "35%")};
    height: 100%;
  }

  @media (max-width: 992px) {
    img {
      width: ${({ sm }) => (!sm ? "35%" : "25%")};
    }
  }
`;

const Divider = styled.div`
  span {
    height: 0.3rem;
    width: 15%;
  }
`;

export default BeerModal;
