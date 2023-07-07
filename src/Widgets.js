import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import "./Widget.css";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Gokhul is Back", "Top-news 9090 readers")}
      {newsArticle("Coronavirus: India Updates", "Top-news 866 readers")}
      {newsArticle("Tesla hits New High", "Cars and auto - 908 readers")}
      {newsArticle("Bitcoin breaks $23k", "Crypto - 8000 readers")}
      {newsArticle("Is Redux too Good?", "Code - 123 readers")}
      {newsArticle("New Parliment Building", "Politics - 8238 readers")}
    </div>
  );
}

export default Widgets;
