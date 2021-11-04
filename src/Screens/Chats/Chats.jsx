import { useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { ROUTES } from "../../Routing/constants";
import { profileSelector } from "../../Store/Profile/selectors";

const chatList = {
  id1: {
    name: "chat1",
  },
};

export const Chats = () => {
  const history = useHistory();
  const { chatId } = useParams();

  const { userName } = useSelector(profileSelector);

  const handleButtonClick = () => {
    history.push(ROUTES.MAIN);
  };

  const isChatExists = chatId && chatList[chatId];

  if (!isChatExists) {
    return <Redirect to={ROUTES.NOCHAT} />;
  }

  return (
    <div>
      Hi, {userName}!
      <br />
      Chats comming soon <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
};
