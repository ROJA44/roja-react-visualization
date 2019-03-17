/*
 * action types
 */

export const UPDATE_MARKER = "UPDATE_MARKER";
export const UPDATE_COMPLETE = "UPDATE_COMPLETE";

/*
 * action creators
 */

export function updateMarker() {
  return { type: UPDATE_MARKER, payload: null };
}
