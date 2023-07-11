"use client";
import React from "react";
import "./UserAvatar.scss";
interface Props {
  image: string | null;
  name: string | null;
}
const UserAvatar: React.FC<Props> = ({ image, name }) => {
  return (
    <div className="user-avatar">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="image"
        tabIndex={-1}
      ></div>
      <div className="user-name">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default UserAvatar;
