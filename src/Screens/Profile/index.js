import { connect } from "react-redux";
import { profileSelector } from "../../Store/Profile/selectors";
import {
  toggleShowNameAction,
  changeUserNameAction,
} from "../../Store/Profile/actions";
import { Profile } from "./Profile";

const mapStateToProps = (store) => ({
  profile: profileSelector(store),
});

const mapDispatchToProps = {
  toggleShowNameAction,
  changeUserNameAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
