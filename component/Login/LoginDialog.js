import React from "react";
import style from "./Login.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

// import {authenticateSignup} from '../../service/api'

// const accountInitialValues ={
//   login:{
//     views:'login',
//     heading:'Login',
//     subHeading:'Get access to your Orders,',
//     subHeading1:'Wishlist and Recommendations,'
//   },
//   signup:{
//     views:'signup',
//     heading:"Look's like new here",
//     subHeading:'Signup and',
//     subHeading1:'Gets started!,'
//   }
// }

// const signupInitialValues = {
//   Fname: "",
//   email: "",
//   password: "",
// };

const LoginDialog = () => {
  const [Fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let form = {
      Fname,
      email,
      password,
    };

    const rawResponse = await fetch("/api/sheet", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const content = await rawResponse.json();

    // print to screen
    alert("Data entered");

    // Reset the form fields
    setFname("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      {/* <AiFillCloseCircle
        onClick={() => setOpen(!open)}
        className={style.close}
      /> */}
      <div className={style.wrapperDialog}>
        <div className={style.wrapper}>
          <div className={style.right}>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="Fname"
                value={Fname}
                className={style.FnameInput}
                required
                placeholder="Enter your Name*"
                style={{ borderBottom: "1px solid grey" }}
                onChange={(e) => setFname(e.target.value, e.target.name)}
              />

              <input
                type="email"
                name="email"
                value={email}
                className={style.NameInput}
                required
                placeholder="Enter your Email*"
                style={{ borderBottom: "1px solid grey" }}
                onChange={(e) => setEmail(e.target.value, e.target.name)}
              />

              <input
                type="text"
                name="password"
                value={password}
                className={style.passwordInput}
                required
                placeholder="Enter your Password*"
                style={{ borderBottom: "1px solid grey" }}
                onChange={(e) => setPassword(e.target.value, e.target.name)}
              />

              <button type="submit" className={style.button}>
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginDialog;
