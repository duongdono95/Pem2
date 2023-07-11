"use client";
import React, { useEffect, useState } from "react";
import "./DropDownMenu.scss";
import { signOut } from "next-auth/react";
import Link from "next/link";
import {
  UserCircle,
  Newspaper,
  Group,
  LogOut,
  Search,
} from "lucide-react";
import GetWindowWidth from "@/helper/GetWindowWidth";

const DropDownMenu = () => {
  const windowWidth = GetWindowWidth();

  const handleSignOut = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    signOut({
      callbackUrl: `${window.location.origin}/sign-in`,
    });
  };

  return (
    <div tabIndex={10} className="dropdown-menu">
      <Link href="/setting" className="item">
        <span>
          <UserCircle size={20} />
        </span>
        User Profile
      </Link>
      {typeof windowWidth !== "undefined" ? (
        windowWidth ? (
          <Link href="/search" className="item">
            <span>
              <Search size={20} strokeWidth={2.75} />
            </span>
            Search
          </Link>
        ) : null
      ) : null}
      <Link href="/" className="item">
        <span>
          <Newspaper size={20} />
        </span>
        Feed
      </Link>
      <Link href="/r/create" className="item">
        <span>
          <Group size={20} />
        </span>
        Create Community
      </Link>

      <div
        onClick={(e) => handleSignOut(e)}
        className="item"
      >
        <span>
          <LogOut strokeWidth={2.75} size={20} />
        </span>
        Sign Out
      </div>
    </div>
  );
};

export default DropDownMenu;
