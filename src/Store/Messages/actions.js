import { ADD_MESSAGE_ACTION } from "./constants";

export const addMessageAction = ({ message, author, chatId }) => ({
  type: ADD_MESSAGE_ACTION,
  payload: { message, author, chatId },
});

export const addMessageActionWithThunk = (payload) => (dispatch, getState) => {
  dispatch(addMessageAction(payload));
  if (payload.author === "Bot") {
    setTimeout(() => {
      const botAnswer = {
        message: "bot message",
        author: "Bot",
        chatId: "1234",
      };
      dispatch(addMessageAction(botAnswer));
    }, 1500);
  }

  console.log("i am in addMessageActionWithThunk");
};
