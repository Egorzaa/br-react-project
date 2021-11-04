import React, { Fragment } from "react";

export const MessageList = ({ messageList }) => {
  return (
    <>
      {messageList.map((message, i) => (
        <Fragment key={i}>{message}</Fragment>
      ))}
    </>
  );
};
