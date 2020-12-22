import React from "react";
import "./TopicLink.css";

const TopicLink = ({
  deleteCb,
  likeCb,
  topicLink,
  children,
  index,
  isLiked,
}) => {
  return (
    <div className="topic-body">
      <button className="button button__trash" onClick={() => deleteCb(index)}>
        🗑
      </button>
      <button className="button button__like" onClick={() => likeCb(index)}>
        {isLiked ? "😍" : "💔"}
      </button>
      <a href={topicLink} className="link">
        {children}
      </a>
    </div>
  );
};

export default TopicLink;
