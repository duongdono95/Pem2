import Link from "next/link";
import { toast } from "react-toastify";
import { Buttons } from "../Buttons/Buttons";
import "./CustomToasts.scss";
export const loginToast = () => {
  return toast.warning(
    <div className="login-toast">
      <p>Please Login to continue the action</p>
      <Link href="/sign-in">
        <Buttons.secondary content="Login" />
      </Link>
    </div>
  );
};
