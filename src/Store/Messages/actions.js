import { ADD_MESSAGE_ACTION } from "./constants";

export const addMessageAction = ({ message, author, chatId }) => ({
  type: ADD_MESSAGE_ACTION,
  payload: { message, author, chatId },
});
