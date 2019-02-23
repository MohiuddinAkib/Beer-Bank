import {
  BEERS_LOADING,
  BEERS_LOADED,
  GET_BEERS,
  OPEN_MODAL,
  CLOSE_MODAL,
  BEER_LOADING,
  BEER_LOADED,
  GET_BEER,
  BEERS_ERROR,
  BEER_ERROR
} from "../actions/types";
// lodash
import _ from "lodash";

export default (state, action) => {
  switch (action.type) {
    case BEERS_LOADING:
      return { ...state, beersAreLoading: true };
    case BEERS_LOADED:
      return { ...state, beersAreLoading: false };
    case GET_BEERS:
      return {
        ...state,
        beers: _.unionBy(state.beers.concat(action.payload), "id")
      };
    case BEER_LOADING:
      return { ...state, beerIsLoading: true };
    case BEER_LOADED:
      return { ...state, beerIsLoading: false };
    case GET_BEER:
      return { ...state, beer: action.payload };
    case OPEN_MODAL:
      return { ...state, modalOpen: true, modalBeerId: action.payload };
    case CLOSE_MODAL:
      return { ...state, modalOpen: false, modalBeerId: null };
    case BEERS_ERROR:
      return {
        ...state,
        beers: [],
        beer: null,
        beersAreLoading: false,
        beerIsLoading: false,
        modalOpen: false,
        modalBeerId: null
      };
    case BEER_ERROR:
      return {
        ...state,
        beer: null,
        beerIsLoading: false,
        modalOpen: false,
        modalBeerId: null
      };
    default:
      return state;
  }
};
