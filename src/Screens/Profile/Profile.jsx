import { useDispatch, useSelector } from "react-redux";
import { toggleShowNameAction } from "../../Store/profile/actions";
import { profileSelector } from "../../Store/profile/selectors";

export const Profile = () => {
  const { name, showName } = useSelector(profileSelector);

  const dispatch = useDispatch();

  const handleToggleShowName = () => {
    dispatch(toggleShowNameAction());
  };

  return (
    <div>
      <button onClick={handleToggleShowName}>Toggle show name</button>
      <div>{showName && name}</div>
    </div>
  );
};
