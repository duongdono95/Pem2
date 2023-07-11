"use client";

import React from "react";
import "./user-auth-form.scss";
import { Buttons } from "../../Buttons/Buttons";
import { signIn } from "next-auth/react";
const UserAuthForm = () => {
  const loginWithGoogle = async () => {
    try {
      await signIn("google");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="user-auth-form">
      <div className="form-group">
        <label htmlFor="username"></label>
        <input
          type="text"
          id="username"
          placeholder="Email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="username"></label>
        <input
          type="password"
          id="username"
          placeholder="Password"
        />
      </div>
      <div className="form-group">
        <Buttons.primary content="Login" />
      </div>

      <p className="other-option">- Or -</p>
      <div className="form-group" onClick={loginWithGoogle}>
        <Buttons.google />
      </div>
    </div>
  );
};

export default UserAuthForm;
