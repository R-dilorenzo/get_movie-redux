import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from "../features/filmsSlice";

export default configureStore({
  reducer: {
    films: filmsReducer,
  },
});
