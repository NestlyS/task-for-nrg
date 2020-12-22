import * as types from "./ActionTypes";

const topicsInitialState = {
  loading: false,
  error: null,
  /*
    Хранятся объекты типа
    {
        id: number,
        liked: bool,
        topicTitle: string,
        topicLink: string
    }
    */
  topics: [],
};

function topics(state = topicsInitialState, action) {
  switch (action.type) {
    case types.deleteTopic:
      return {
        ...state,
        topics: state.topics.filter((item) => item.id !== action.payload.id),
      };
    case types.likeTopic:
      return {
        ...state,
        topics: state.topics.map((item) =>
          item.id === action.payload.id ? { ...item, liked: !item.liked } : item
        ),
      };
    case types.dataTopics:
      return {
        ...state,
        topics: [...state.topics, action.payload.topic],
        loading: false,
      };
    case types.loadTopics:
      return { ...state, loading: true };
    case types.errorTopics:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

export default topics;
