import SignInModal from "@/components/Auth/SignInModal/SignInModal";
import Modal from "@/components/Modal/Modal";
import React from "react";

export default function AuthSignInModal() {
  return (
    <Modal>
      <SignInModal closedButton />
    </Modal>
  );
}
