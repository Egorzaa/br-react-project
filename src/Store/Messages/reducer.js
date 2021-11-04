import { ADD_MESSAGE_ACTION } from "./constants";

const initialState = {
  // {chatId: [{id, message, author, ....}]}
  messageList: {},
};

export const messagesReducer = (store = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE_ACTION:
      const { message, author, chatId } = action.payload;
      const currentChatMessages = store.messageList[chatId] || []; // []
      return {
        ...store,
        messageList: {
          ...store.messageList,
          [chatId]: [...currentChatMessages, { message, author, id: "12345" }],
        },
      };

    default: {
      return store;
    }
  }
};
