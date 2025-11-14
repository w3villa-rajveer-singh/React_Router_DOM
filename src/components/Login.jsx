import React from "react";
import { useNavigate } from "react-router";

const Login = () => {
  let navigate = useNavigate();

  const handleLogin = () => {
    alert("User login successfully!");
    navigate("/home");
  };

  return (
    <div>
      <h1>Please login to continue!</h1>
      <button
        className="btn"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
