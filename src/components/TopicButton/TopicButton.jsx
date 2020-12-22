import React, { useCallback } from "react";
import "./TopicButton.css";

// children - всегда ОБЯЗАТЕЛЬНО название топика
// Неправильное название - нет топика
const TopicButton = ({ children, onClick, speedType }) => {
  const onClickWrapped = useCallback(() => onClick(children), [
    onClick,
    children,
  ]);
  let resultClass = "topic-button ";
  if (speedType === 0) {
    resultClass += " topic-button--fast";
  }
  if (speedType === 1) {
    resultClass += " topic-button--med";
  }
  if (speedType === 2) {
    resultClass += " topic-button--slow";
  }
  return (
    <button className={resultClass} onClick={onClickWrapped}>
      {children}
    </button>
  );
};

export default TopicButton;
