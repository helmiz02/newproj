// import { configureStore } from '@reduxjs/toolkit'

// export default configureStore({
//   reducer: {},
// })

import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import ThemeState from "./videos/reducer";

export const store = createStore(ThemeState, applyMiddleware(thunkMiddleware));