import React from "react";
import { connect } from "react-redux";
import "./Content.css";
import TopicLink from "../TopicLink";

import * as actions from "../../redux/Actions";

const renderLinks = (topics, deleteCb, likeCb) => {
  return topics.map((topic) => (
    <TopicLink
      deleteCb={deleteCb}
      likeCb={likeCb}
      topicLink={topic.topicLink}
      index={topic.id}
      key={topic.id}
      isLiked={topic.liked}
    >
      {topic.topicTitle}
    </TopicLink>
  ));
};

export const Content = ({ topics, loading, deleteTopic, likeTopic }) => {
  return (
    <div className="content-block">
      {renderLinks(topics, deleteTopic, likeTopic)}
    </div>
  );
};

const mapStateToProps = ({ topics, loading }) => ({
  topics: topics,
  loading: loading,
});

const mapDispatchToProps = {
  deleteTopic: actions.deleteTopic,
  likeTopic: actions.likeTopic,
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
