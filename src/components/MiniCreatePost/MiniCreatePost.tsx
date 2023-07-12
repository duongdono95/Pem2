"use client";
import React from "react";
import UserAvatar from "../UserAvatar/UserAvatar";
import "./MiniCreatePost.scss";
import type { Session } from "next-auth";
import { usePathname, useRouter } from "next/navigation";
import { Image, Link } from "lucide-react";

interface MiniCreatePostProps {
  session: Session | null;
}
const MiniCreatePost: React.FC<MiniCreatePostProps> = ({ session }) => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <div className="mini-create-post">
      <p className="note">Have a new Topic to share today ?</p>
      <div className="content-wrapper">
        <div className="avatar-container">
          <UserAvatar name={null} image={session?.user.image || null} />
        </div>
        <div
          className="create-post-container"
          onClick={() => router.push(pathName + "/submit")}
        >
          <p>Create a New Post</p>
          <div className="icons">
            <Image className="icon" />
            <Link className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCreatePost;
