import React from "react";
import { Jumbotron, Container, Col, Row, Input } from "reactstrap";

const Header = () => {
  return (
    <Jumbotron className="text-center bg-yellow text-white" fluid>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs="12" md="10" lg="8">
            <h1 className="text-capitalize display-4 font-weight-bold">
              the beer bank
            </h1>
            <p className="lead">Find your favourite beer here</p>
            <Input
              placeholder="Enter beer name"
              bsSize="lg"
              className="rounded-0"
            />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Header;
