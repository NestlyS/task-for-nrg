export const mapTopicsFromReddit = (topicsFromReddit) =>
  topicsFromReddit.map((topic) => {
    const { title, url, id } = topic.data;
    return {
      topicTitle: title,
      topicLink: url,
      id,
    };
  });

export const mapTopicFromReddit = (topicFromReddit) => {
  const { title, url, id } = topicFromReddit.data;
  return {
    topicTitle: title,
    topicLink: url,
    id,
  };
};
