import { authOptions } from "@/lib/auth";
import { LogIn } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { Icons } from "../Icons/Icons";
import NavUserAccount from "../NavUserAccount/NavUserAccount";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.scss";
const NavBar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="NavBar">
      <div className="nav-item">
        <Icons.logo />
      </div>
      <div className="nav-item">
        <SearchBar />
      </div>
      {session?.user ? (
        <div className="nav-item">
          <NavUserAccount user={session?.user} />
        </div>
      ) : (
        <Link href="sign-in" className="nav-item">
          Login
          <LogIn strokeWidth={3} size={22} />
        </Link>
      )}
    </div>
  );
};

export default NavBar;
