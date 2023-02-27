import React, { useRef } from "react";
import Home from "./Home";
import { useNavigate } from "react-router-dom";

function LoginSytem() {
  const email = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem("EmailData");
  const getPassword = localStorage.getItem("PasswordData");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email.current.value == "test@gmail.com" &&
      password.current.value == "123456"
    ) {
      // setting value of email and password in  local storage..
      localStorage.setItem("EmailData", "test@email.com");
      localStorage.setItem("EmailData", "test@email.com");
      localStorage.setItem("PasswordData", "123456");
      navigate("/Home");
    } else {
      window.alert("invalid Credentails");
    }
  };

  return (
    <>
      {getEmail && getPassword ? (
        <Home />
      ) : (
        <>
          {" "}
          <div className="loginContainer">
            <h1 style={{color:"gray"}}>Email : <span style={{color:"black"}}>test@gmail.com</span> <br /> password : <span style={{color:"black"}}>123456</span></h1>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <input type="text" placeholder="Email" ref={email} />
              <input type="text" placeholder="Password" ref={password} />
              <button>Login</button>
            </form>
          </div>{" "}
        </>
      )}
    </>
  );
}

export default LoginSytem;
