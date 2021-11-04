import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessageActionWithThunk } from "../../Store/Messages/actions";
import {
  toggleShowNameAction,
  changeUserNameAction,
} from "../../Store/Profile/actions";
import { profileSelector } from "../../Store/Profile/selectors";

export const Profile = () => {
  const { userName, showName } = useSelector(profileSelector);

  const dispatch = useDispatch();

  const handleToggleShowName = () => {
    // dispatch(toggleShowNameAction());
    dispatch(
      addMessageActionWithThunk({
        message: "some text",
        author: "Egor",
        chatId: "123456789",
      })
    );
  };

  const handleUserNameChange = useCallback(
    (e) => {
      dispatch(changeUserNameAction(e.target.value));
    },
    [dispatch]
  );

  return (
    <div>
      <button onClick={handleToggleShowName}>Toggle show name</button>
      <div>{showName && userName}</div>
      <br />
      <br />
      <br />
      <input value={userName} onChange={handleUserNameChange}></input>
    </div>
  );
};
