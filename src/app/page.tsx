import { Buttons } from "@/components/Buttons/Buttons";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { Home } from "lucide-react";
import Link from "next/link";
import "./GlobalStyles.scss";
import GeneralFeeds from "@/components/Feed/GeneralFeeds/GeneralFeeds";
import CustomFeed from "@/components/Feed/CustomFeed/CustomFeed";
import { toast } from "react-toastify";
export default async function HomePage() {
  const session = await getServerSession(authOptions);
  return (
    <div className="home-page">
      <div className="left">
        <h1>All Feed </h1>
        {/* @ts-expect-error server component */}
        {session?.user ? <CustomFeed /> : <GeneralFeeds />}
      </div>
      <div className="right">
        {/* <p className="greeting">
          Welcome back <span>{session?.user.name}</span>
        </p>
        <div className="details">
          <p>Let's Check out your Favorite Communities</p>
          <Link href="r/create">
            <Buttons.primary content="Create New Community" />
          </Link>
        </div> */}
        <p className="title">
          <Home /> Home
        </p>
        <div className="details">
          <p>PemTalk - official Community for PEM LTD.</p>
          <p>
            Come here to check in with your favorite
            communities.
          </p>
          <Link className="button" href="r/create">
            Create Community
          </Link>
        </div>
      </div>
    </div>
  );
}
