import React, { useReducer } from "react";
import errorsReducer from "../reducers/errorsReducer";

export const Context = React.createContext({
  msg: null,
  status: null
});

export const Provider = props => {
  const [state, dispatch] = useReducer(errorsReducer, {
    msg: {},
    status: null
  });

  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};

export const Consumer = Context.Consumer;
