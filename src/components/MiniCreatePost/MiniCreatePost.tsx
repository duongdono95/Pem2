import React from "react";
import UserAvatar from "../UserAvatar/UserAvatar";
import "./MiniCreatePost.scss";
import type { Session } from "next-auth";

interface MiniCreatePostProps {
  session: Session | null;
}
const MiniCreatePost: React.FC<MiniCreatePostProps> = ({
  session,
}) => {
  return (
    <div>
      <UserAvatar
        name={session?.user.name || null}
        image={session?.user.image || null}
      />
    </div>
  );
};

export default MiniCreatePost;
