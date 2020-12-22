import axios from "axios";

export function getTopics(topicName) {
  return axios.get(`https://www.reddit.com/r/${topicName}.json`);
}
