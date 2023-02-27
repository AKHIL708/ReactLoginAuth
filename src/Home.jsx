import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const LogOut = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={LogOut}>Log out</button>
    </div>
  );
}

export default Home;
