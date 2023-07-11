"use client";
import { Icons } from "../../Icons/Icons";
import React from "react";
import UserAuthForm from "../UserAuthForm/UserAuthForm";
import "./SignInModal.scss";
import Link from "next/link";
import { Buttons } from "@/components/Buttons/Buttons";

interface SignInModalProps {
  closedButton?: boolean;
}

const SignInModal: React.FC<SignInModalProps> = ({
  closedButton,
}) => {
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
      <p className="option">
        New to PemTalk?
        <span>
          <Link href="/sign-up">Sign Up</Link>
        </span>
      </p>
    </div>
  );
};

export default SignInModal;
