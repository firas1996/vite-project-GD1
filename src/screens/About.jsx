import React from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const { state } = useLocation();
  let abc, test;
  if (state) {
    abc = state.abc;
    test = state.test;
  }
  return (
    <div>
      <h1>About Page</h1>
      <h2>
        {abc} || {test}
      </h2>
    </div>
  );
};

export default About;
