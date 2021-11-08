import { GET_DOGS_START, GET_DOGS_SUCCESS, GET_DOGS_ERROR } from "./constants";

const initialState = {
  loading: true,
  error: false,
  dogs: [],
};

export const dogsReducer = (store = initialState, action) => {
  switch (action.type) {
    case GET_DOGS_START:
      return {
        ...store,
        loading: true,
        error: false,
      };
    case GET_DOGS_SUCCESS:
      return {
        ...store,
        loading: false,
        dogs: action.payload,
      };
    case GET_DOGS_ERROR:
      return {
        ...store,
        error: true,
        loading: false,
      };

    default: {
      return store;
    }
  }
};
