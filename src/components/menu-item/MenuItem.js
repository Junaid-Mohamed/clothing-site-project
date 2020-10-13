import React from "react";
import "./MenuItem.scss"
import {withRouter} from "react-router-dom";


function MenuItem({title,size,imageUrl,history,linkUrl,match}) {
  return (
    <div 
    className={`${size} menu-item`}
    onClick={()=>history.push(`${match.url}${linkUrl}`)}
    >
    <div className="background-image" 
    style={{ 
        backgroundImage:`url(${imageUrl})`
    }} />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem); // super powered menuitem with access to location match and history props