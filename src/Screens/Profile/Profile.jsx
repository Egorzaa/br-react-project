import firebase from "firebase";
import { useEffect } from "react";
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

  useEffect(() => {
    const uid = firebase.auth().currentUser.uid;

    firebase
      .database()
      .ref("profile")
      .child(uid)
      .on("value", (snapshot) => {
        snapshot.forEach();
        console.log(snapshot.val());
      });
  }, []);

  const handleToggleShowName = () => {
    dispatch(toggleShowNameAction());
    dispatch(
      addMessageActionWithThunk({
        message: "some text",
        author: "Egor",
        chatId: "123456789",
      })
    );
  };

  const handleUserNameChange = (e) => {
    dispatch(changeUserNameAction(e.target.value));
    const uid = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref("profile")
      .child(uid)
      .child("name")
      .set(e.target.value);
  };

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
