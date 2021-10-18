import { Fragment } from "react";

const MessageList = ({ messageList }) => {
  return (
    <>
      {messageList.map((message, i) => (
        <Fragment key={i}>{message}</Fragment>
      ))}
    </>
  );
};

export default MessageList;
