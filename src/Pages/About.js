import React from "react";
import { useNavigate } from "react-router-dom";
const About = ({ count, setCount }) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About</h1>
      <p>This is About Page</p>
      <br />
      <h2>count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <br />
      <br />
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate(1)}>Next</button>
    </div>
  );
};
export default About;
