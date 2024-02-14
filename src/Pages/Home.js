import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is home page</p>
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate(1)}>Next</button>
    </div>
  );
};
export default Home;
