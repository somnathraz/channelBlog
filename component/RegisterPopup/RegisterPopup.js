import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import LoginForm from "../Form/LogInForm";
const RegisterPopup = ({ setFormShow }) => {
  return (
    <div className="wrapperDialog">
      <div className="popupWrapper">
        <p className="closeBtn" onClick={() => setFormShow(false)}>
          X
        </p>
        <h4>Begin Your Journey</h4>
        <p>by entering few details</p>
        <div className="horizontalBox">
          <button className="outlineBtn">
            <FcGoogle className="signInBtnIcon" /> Sign in with Google
          </button>
          <button className="outlineBtn">
            <FaFacebook className="signInBtnIcon fbIcon" /> Sign in with
            Facebook
          </button>
          <button className="outlineBtn">
            <FaTwitter className="signInBtnIcon twtIcon" /> Sign in with Twitter
          </button>
        </div>
        <div className="divide box">
          <hr />
          <p>or</p>
          <hr />
        </div>
        <LoginForm />
        <p>
          Don't have an account? <b>Sing Up Now</b>
        </p>
      </div>
    </div>
  );
};

export default RegisterPopup;
