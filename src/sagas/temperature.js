import { UPDATE_TEMPERATURE, UPDATE_TEMPERATURE_COMPLETE } from "../actions/temperatureActions";
import { delay } from "redux-saga";
import { put, takeEvery, call } from "redux-saga/effects";
import fetch from 'cross-fetch';
import { toast } from 'react-toastify';

export function* getTemperature(action) {
  for(let index = 0 ; index < 1000000000000000; index++){

    try {
          const response = yield call(fetch, 'https://react-assessment-api.herokuapp.com/api/drone');
          const json = yield call(response.json.bind(response));
          let positions = json['data'];
          let timestamps = positions.map(position => position['timestamp']);
          let metrics = positions.map(position => position['metric']);
          let payload = [timestamps, metrics];

          yield put({ type: UPDATE_TEMPERATURE_COMPLETE, payload: payload })

          if(index === 0){
            toast.success("Positioning of temperature is started..", {
                position: toast.POSITION.TOP_CENTER,
                toastId: 1
              });
          }
      } catch (e) {
          toast.error("Unable to reach drone", {
            position: toast.POSITION.TOP_LEFT,
            toastId: 2
          });
          // yield put({ type: UPDATE_FAILED_MARKER, payload: '' });
          return;
      }

    yield delay(3000); //Delay the Counter By 3 Second
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchTemperature() {
  yield takeEvery(UPDATE_TEMPERATURE, getTemperature);
}
