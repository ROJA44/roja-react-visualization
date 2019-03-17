import { watchMarker } from "./marker";
import { watchTemperature } from "./temperature";
import { all } from "redux-saga/effects";

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([watchMarker(), watchTemperature()]);
}
