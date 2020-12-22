import * as types from "./ActionTypes";

export const deleteTopic = (id) => ({
  type: types.deleteTopic,
  payload: {
    id,
  },
});

export const likeTopic = (id) => ({
  type: types.likeTopic,
  payload: {
    id,
  },
});

export const getTopics = (topicName) => ({
  type: types.getTopics,
  payload: {
    topicName,
  },
});
