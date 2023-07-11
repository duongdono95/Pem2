"use client";
import { Buttons } from "@/components/Buttons/Buttons";
import { loginToast } from "@/components/Toasts/CustomToasts";
import { CreateSubredditPayload } from "@/lib/validators/subreddit";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "./styles.scss";
const page = () => {
  const router = useRouter();
  const [input, setInput] = useState<string>("");
  const { mutate: createCommunity, isLoading } =
    useMutation({
      mutationFn: async () => {
        const payload: CreateSubredditPayload = {
          name: input,
        };

        const { data } = await axios.post(
          "/api/subreddit",
          payload
        );
        return data as string;
      },
      onError: (err) => {
        if (err instanceof AxiosError) {
          if (err.response?.status === 409) {
            return toast.error(
              "Subreddit already exists. Please choose a different name."
            );
          }

          if (err.response?.status === 422) {
            return toast.error(
              "Invalid subreddit name. Please choose a name between 3 and 21 letters."
            );
          }

          if (err.response?.status === 401) {
            return loginToast();
          }
        }

        toast.error(
          "There was an error. Could not create subreddit."
        );
      },
      onSuccess: (data) => {
        router.push(`/r/${data}`);
      },
    });
  return (
    <div className="create-page">
      <Link href="/" className="top">
        <ChevronLeft />
        Back to Home Page
      </Link>
      <div className="create-box">
        <h2>Create Community</h2>
        <p className="warning">
          Community names including capitalization cannot be
          changed.
        </p>
        <div className="input-container">
          <label>r/</label>
          <input
            id="create-input"
            type="text"
            placeholder="Let's give your community a name"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="buttons">
          <Buttons.secondary
            content="Close"
            onClick={() => router.back()}
          ></Buttons.secondary>
          <Buttons.primary
            isPrimary
            content="Create Community"
            onClick={() => createCommunity()}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
