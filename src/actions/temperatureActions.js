/*
 * action types
 */

export const UPDATE_TEMPERATURE = "UPDATE_TEMPERATURE";
export const UPDATE_TEMPERATURE_COMPLETE = "UPDATE_TEMPERATURE_COMPLETE";

/*
 * action creators
 */

export function updateTemperature() {
  return { type: UPDATE_TEMPERATURE, payload: null };
}
