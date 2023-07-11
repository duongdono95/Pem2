"use client";
import { Icons } from "../../Icons/Icons";
import React from "react";
import UserAuthForm from "../UserAuthForm/UserAuthForm";
import "./SignUpModal.scss";
import { useRouter } from "next/navigation";
import { Buttons } from "@/components/Buttons/Buttons";
const SignUpModal = ({
  closedButton,
}: {
  closedButton?: boolean;
}) => {
  const router = useRouter();
  return (
    <div className="sign-in-modal">
      {closedButton ? (
        <div className="close-btn">
          <Buttons.close />
        </div>
      ) : (
        <p>Back to Home Page</p>
      )}
      <Icons.logo />
      <h1>Welcome Back</h1>
      <p className="policy">
        By continuing, you are setting up a PemTalk account
        and agree to our User Agreement and Privacy Policy.
      </p>
      <UserAuthForm />
    </div>
  );
};

export default SignUpModal;
