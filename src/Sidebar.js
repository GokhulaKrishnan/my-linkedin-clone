import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import SidebarRecentItem from "./SidebarRecentItem";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

function Sidebar() {
  // importing the information from the redux, particular to the logged in user
  const user = useSelector(selectUser);
  //   const recentItem = (topic) => {
  //     <div classname="sidebar__recentItem">
  //       <span className="sidebar__hash">#</span>
  //       <p>{topic}</p>
  //     </div>;
  //   };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://img.freepik.com/free-vector/hand-painted-watercolor-abstract-watercolor-background_23-2149005675.jpg?size=626&ext=jpg"
          alt=""
        ></img>
        {/* Having the avatar as the photo passed by the user . If not passed we can make the first letter has profile pic by below */}
        <Avatar className="sidebar__avatar" src={user.photoUrl}>
          {user.email[0]}
        </Avatar>
        {/* Changing the username and mail according to the logged in user information */}
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,534</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        <SidebarRecentItem title="Reactjs" />
        <SidebarRecentItem title="SoftwareEngineering" />
        <SidebarRecentItem title="Programming" />
        <SidebarRecentItem title="Design" />
        <SidebarRecentItem title="Development" />
      </div>
    </div>
  );
}

export default Sidebar;
