import React from "react";
import styled from "styled-components";

const Spinner = () => {
  return (
    <LoaderContainer className="p-5">
      <img src="img/spinner.gif" alt="spinner" />
      <h5 className="mt-2">Loading</h5>
    </LoaderContainer>
  );
};

const LoaderContainer = styled.div`
  text-align: center;
  img {
    height: 50px;
    width: 50px;
  }
`;

export default Spinner;
