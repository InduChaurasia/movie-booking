import { put, takeLatest, all } from "redux-saga/effects";

function* fetchLatestMovies() {
  console.log("fetchLatestMovies");
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "http://3.134.99.170:4000/latest";

  const json = yield fetch(proxyurl + url).then((response) => response.json());

  yield put({ type: "LATEST_MOVIES_RECEIVED", movies: json });
}

function* fetchUpComingMovies() {
  console.log("fetchUpComingMovies");
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "http://3.134.99.170:4000/upcomingMovies";

  const json = yield fetch(proxyurl + url).then((response) => response.json());

  yield put({ type: "UPCOMING_MOVIES_RECEIVED", movies: json });
}

function* fetchNearbyEvents() {
  console.log("fetchNearbyEvents");
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "http://3.134.99.170:4000/events";

  const json = yield fetch(proxyurl + url).then((response) => response.json());
  yield put({ type: "NEARBY_EVENTS_RECEIVED", events: json });
}

function* fetchMovieDetails(action) {
  console.log("fetchMovieDetails" + action.payload);
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "3.134.99.170:4000/latest/" + action.payload;

  const json = yield fetch(proxyurl + url).then((response) => response.json());
  yield put({ type: "MOVIE_DETAILS_RECEIVED", detail: json });
}

function* latestMovieActionWatcher() {
  yield takeLatest("GET_LATEST_MOVIES", fetchLatestMovies);
}

function* upcomingMovieActionWatcher() {
  yield takeLatest("GET_UPCOMING_MOVIES", fetchUpComingMovies);
}

function* nearbyEventsWatcher() {
  yield takeLatest("GET_NEARBY_EVENTS", fetchNearbyEvents);
}

function* getMovieDetailsWatcher() {
  yield takeLatest("GET_MOVIE_DETAILS", fetchMovieDetails);
}

export default function* rootSaga() {
  yield all([
    latestMovieActionWatcher(),
    upcomingMovieActionWatcher(),
    nearbyEventsWatcher(),
    getMovieDetailsWatcher()
  ]);
}
