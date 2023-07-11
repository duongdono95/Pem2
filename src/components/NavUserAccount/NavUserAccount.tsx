"use client";
import React from "react";
import "./NavUserAccount.scss";
import { User } from "next-auth";
import UserAvatar from "../UserAvatar/UserAvatar";
import Tippy from "@tippyjs/react";
import DropDownMenu from "../DropDownMenu/DropDownMenu";

interface UserAccountNavProps
  extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, "name" | "image" | "email">;
}

const NavUserAccount = ({ user }: UserAccountNavProps) => {
  return (
    <div className="nav-user-account">
      <Tippy
        content={<DropDownMenu />}
        interactive
        placement="bottom-end"
        animation="fade"
        arrow={true}
        theme="light-border"
        trigger="click"
        appendTo="parent"
      >
        <div>
          <UserAvatar
            image={user.image ? user.image : null}
            name={user.name ? user.name : null}
          />
        </div>
      </Tippy>
    </div>
  );
};

export default NavUserAccount;
