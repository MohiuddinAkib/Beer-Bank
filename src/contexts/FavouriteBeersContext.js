import React, { useReducer } from "react";
import favouriteBeersReducer from "../reducers/favouriteBeersReducer";

export const Context = React.createContext();

export const Provider = props => {
  const [state, dispatch] = useReducer(favouriteBeersReducer, {
    favouriteBeers: []
  });

  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};

export const Consumer = Context.Consumer;
