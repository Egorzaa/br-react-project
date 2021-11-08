import { GET_DOGS_START, GET_DOGS_SUCCESS, GET_DOGS_ERROR } from "./constants";
import { DOGS_URL } from "../../Api/constants";

const getDogsStartAction = () => ({
  type: GET_DOGS_START,
});

const getDogsSuccessAction = (payload) => ({
  type: GET_DOGS_SUCCESS,
  payload,
});

const getDogsErrorAction = () => ({
  type: GET_DOGS_ERROR,
});

export const getDogsRequest = () => async (dispatch) => {
  dispatch(getDogsStartAction());
  try {
    const response = await fetch(DOGS_URL);

    if (!response.ok) {
      throw new Error(response.status);
    }

    const result = await response.json();

    dispatch(getDogsSuccessAction(result?.message?.terrier ?? []));
  } catch {
    dispatch(getDogsErrorAction());
  }
};
