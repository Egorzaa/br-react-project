import { ADD_CHAT_ACTION } from "./constants";

const initialState = {
  // [{id:"123", chatName:"dialog"}]
  chatList: [],
};

export const chatsReducer = (store = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT_ACTION:
      return {
        ...store,
        chatList: [
          ...store.chatList,
          {
            id: "123456",
            name: action.payload,
          },
        ],
      };

    default: {
      return store;
    }
  }
};
