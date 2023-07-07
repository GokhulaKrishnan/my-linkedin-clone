import React from "react";
import "./SidebarRecentItem.css";

function SidebarRecentItem({ title }) {
  return (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{title}</p>
    </div>
  );
}

export default SidebarRecentItem;
