import { UPDATE_TEMPERATURE_COMPLETE } from "../actions/temperatureActions";

const initialState = null;

export const temperatureReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEMPERATURE_COMPLETE:
      return action.payload;
    default:
      return state;
  }
};
