import { INFINITE_SCROLL_PAGINATION_RESULTS } from "@/config";
import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import React from "react";
import PostFeed from "../PostFeed/PostFeed";

const CustomFeed = async () => {
  const session = await getAuthSession();
  if (!session) return notFound();

  const followedCommunities =
    await db.subscription.findMany({
      where: {
        userId: session.user.id,
      },
      include: {
        subreddit: true,
      },
    });
  const posts = await db.post.findMany({
    where: {
      subreddit: {
        name: {
          in: followedCommunities.map(
            (sub) => sub.subreddit.name
          ),
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      votes: true,
      author: true,
      comments: true,
      subreddit: true,
    },
    take: INFINITE_SCROLL_PAGINATION_RESULTS,
  });
  console.log(posts);
  return (
    <div>{/* <PostFeed initialPosts={posts} /> */}</div>
  );
};

export default CustomFeed;
