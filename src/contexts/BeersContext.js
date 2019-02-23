import React, { useReducer, useEffect, useContext } from "react";
import beersReducer from "../reducers/beersReducer";
import Axios from "axios";
import {
  BEERS_LOADING,
  BEERS_LOADED,
  GET_BEERS,
  BEER_LOADING,
  BEER_LOADED,
  GET_BEER,
  GET_ERRORS,
  BEERS_ERROR,
  BEER_ERROR
} from "../actions/types";

// Error context
import { Context as ErrorCntext } from "./ErrorsContext";
import debug from "../helpers/debug";

export const Context = React.createContext();

export const Provider = props => {
  const [state, dispatch] = useReducer(beersReducer, {
    beers: [],
    beer: null,
    beersAreLoading: false,
    beerIsLoading: false,
    modalOpen: false,
    modalBeerId: null
  });

  const errorContext = useContext(ErrorCntext);

  // Fetch all beers
  const fetchBeers = async () => {
    try {
      dispatch({ type: BEERS_LOADING });
      const { data } = await Axios.get("/beers?page=1&per_page=80");
      dispatch({ type: BEERS_LOADED });
      dispatch({ type: GET_BEERS, payload: data });
    } catch (error) {
      debug(error);
      errorContext.dispatch({
        type: GET_ERRORS,
        payload: { message: "something went wrong", statusCode: 500 }
      });
      dispatch({
        type: BEERS_ERROR
      });
    }
  };

  // Fetch all beers when scrolling the page
  const fetchBeersWithScroll = async (page = 1, per_page = 80) => {
    try {
      const { data } = await Axios.get(
        `/beers?page=${page}&per_page=${per_page}`
      );
      dispatch({ type: GET_BEERS, payload: data });
    } catch (error) {
      debug(error);
      errorContext.dispatch({
        type: GET_ERRORS,
        payload: { message: "something went wrong", statusCode: 500 }
      });
      dispatch({
        type: BEERS_ERROR
      });
    }
  };

  useEffect(() => {
    fetchBeers();
  }, []);

  // Fetch a single beer
  const fetchBeer = async id => {
    try {
      dispatch({ type: BEER_LOADING });
      const { data } = await Axios.get(`/beers/${id}`);
      dispatch({ type: BEER_LOADED });
      dispatch({ type: GET_BEER, payload: data });
    } catch (error) {
      debug(error);
      errorContext.dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      });
      dispatch({
        type: BEER_ERROR
      });
    }
  };

  // runs when beer id for fetching a single item changes
  useEffect(() => {
    if (state.modalBeerId) {
      fetchBeer(state.modalBeerId);
    }
  }, [state.modalBeerId]);

  return (
    <Context.Provider
      value={{ ...state, dispatch, fetchBeer, fetchBeersWithScroll }}
    >
      {props.children}
    </Context.Provider>
  );
};

export const Consumer = Context.Consumer;
