import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goToAbout = () => {
    navigate("/about", { state: { abc: "Hello", test: "World" } });
  };
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToAbout}>About</button>
    </div>
  );
};

export default Home;
