import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function HeaderOption({ avatar, title, Icon, onClick }) {
  // Redux storage
  const user = useSelector(selectUser);
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption___icon" />}
      {avatar && (
        <Avatar className="headerOption__icon" src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
      )}
      <h3 onClick={onClick} className="headerOption__title">
        {title}
      </h3>
    </div>
  );
}

export default HeaderOption;
