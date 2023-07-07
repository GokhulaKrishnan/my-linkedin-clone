import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import HomeIcon from "@material-ui/icons/Home";
import HeaderOption from "./HeaderOption";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import { logout, selectUser } from "./features/userSlice";

// We are going to implement the logout function.
function Header() {
  // // Importing redux storage to acess the required datas
  const user = useSelector(selectUser);
  // [logout]
  const dispatch = useDispatch();
  // [logout]
  const logouts = () => {
    dispatch(logout());
    // There literally a function to logout in the auth
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        {/* Twitter Logo imported from materail UI*/}
        <LinkedInIcon
          color="primary"
          style={{ fontSize: 40, marginRight: 10 }}
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text"></input>
        </div>
      </div>
      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption title="Messaging" Icon={ChatIcon} />
        <HeaderOption title="Notifications" Icon={NotificationsIcon} />
        <HeaderOption
          // [logout]
          onClick={logouts}
          avatar={true}
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;
