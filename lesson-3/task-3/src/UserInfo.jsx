import React from "react";
import Avatar from "./Avatar";
import './userInfo.scss';

const UserInfo = (props) => {
  return (
    <div className="user-info">
      <Avatar avatarUrl={props.user.avatarUrl} name={props.user.autor} />
      <div className="user-info__name">{props.user.autor}</div>
    </div>
  );
};

export default UserInfo;


