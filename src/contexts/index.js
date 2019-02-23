import { combineContexts } from "react-combine-contexts";

import * as BeersContext from "./BeersContext";
import * as FavouriteBeersContext from "./FavouriteBeersContext";
import * as ErrorsContext from "./ErrorsContext";

// This will return an object that contains a Provider and a Consumer
const Context = combineContexts({
  beers: BeersContext,
  favouriteBeers: FavouriteBeersContext,
  errors: ErrorsContext
});

export const Provider = Context.Provider;
export const Consumer = Context.Consumer;
