import React from "react";
import { connect } from "react-redux";
import "./MovingLine.css";
import TopicButton from "../TopicButton";

import * as actions from "../../redux/Actions";

import topicNames from "../../models/MovingLineTopics";

// Передаю топики как аргумент, а не использую замыкание для инкапсуляции функции
const renderButtons = (topics, getTopics) =>
  topics.map((item, index) => {
    // Я осведомлен о том, что присваивание ключей как индекса - плохая практика
    // Однако в данном случае список элементов является статичным и ни в коем случае
    // Не поменяется
    return (
      <TopicButton key={index} onClick={getTopics} speedType={index % 3}>
        {item}
      </TopicButton>
    );
  });

export const MovingLine = ({ getTopics }) => {
  return (
    <div className="moving-line">{renderButtons(topicNames, getTopics)}</div>
  );
};

//const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  getTopics: actions.getTopics,
};

export default connect(null, mapDispatchToProps)(MovingLine);
