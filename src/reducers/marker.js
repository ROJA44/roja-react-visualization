import { UPDATE_COMPLETE, UPDATE_FAILED_MARKER } from "../actions/markerActions";

const initialState = null;

export const markerReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMPLETE:
      return action.payload;
    default:
      return state;
  }
};
