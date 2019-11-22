import React, { Component } from 'react';

const Header = (props) =>  {
   return (
    <div className="Comment">
      <div className="UserInfo">
        <div className="UserInfo-name">
          {props.author}
        </div>
      </div>
      <div className="Comment-text"  onClick={props.takeclick}>
        {props.text}
      </div>
    </div>
  );

}
export default Header;
