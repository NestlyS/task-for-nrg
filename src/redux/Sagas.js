import { put, takeEvery, all, call } from "redux-saga/effects";
import * as types from "./ActionTypes";
import * as API from "../services/RedditApi";
import { mapTopicFromReddit } from "../services/common";

export function* getRandomTopic(action) {
  try {
    yield put({ type: types.loadTopics });
    const topics = yield call(API.getTopics, action.payload.topicName);
    const raw = topics.data.data.children;
    const randomTopicIdx = Math.round((raw.length - 1) * Math.random());
    const cooked = mapTopicFromReddit(raw[randomTopicIdx]);
    yield put({ type: types.dataTopic, payload: { topic: cooked } });
  } catch (err) {
    yield put({ type: types.errorTopics, payload: { error: err } });
  }
}

export function* watchAsync() {
  yield takeEvery(types.getTopics, getRandomTopic);
}

export default function* rootSaga() {
  yield all([watchAsync()]);
}
