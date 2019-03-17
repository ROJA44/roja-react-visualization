import { UPDATE_MARKER, UPDATE_COMPLETE, UPDATE_FAILED_MARKER } from "../actions/markerActions";
import { delay } from "redux-saga";
import { put, takeEvery, call } from "redux-saga/effects";
import fetch from 'cross-fetch';
import { toast } from 'react-toastify';

export function* getLOC(action) {
  for(let index = 0 ; index < 1000000000000000; index++){

    try {
          const response = yield call(fetch, 'https://react-assessment-api.herokuapp.com/api/drone');
          const json = yield call(response.json.bind(response));
          let positions = json['data'];
          let lastPosition = positions[positions.length - 1];
          let payload = [lastPosition['latitude'], lastPosition['longitude']];

          yield put({ type: UPDATE_COMPLETE, payload: payload })

          if(index === 0){
            toast.success("Positioning of drone is started..", {
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
export function* watchMarker() {
  yield takeEvery(UPDATE_MARKER, getLOC);
}
