import { combineReducers } from "redux";
import { markerReducer } from "./marker";
import { temperatureReducer } from "./temperature";

export const rootReducer = combineReducers({
  markerReducer,
  temperatureReducer
});
