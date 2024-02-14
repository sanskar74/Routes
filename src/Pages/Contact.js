import React from "react";
import { useHref, useNavigate } from "react-router-dom";

const Contact = ({ count }) => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Contact</h1>
      <p>This is Contact Page</p>
      <br />
      <h1>Value of Count : {count}</h1>
      <button onClick={() => navigate("/blog")}>Go to Blog</button>
      {/* <button onClick={()=>navigate("blog")}>Go to Blog2</button> */}
      <br />
      <br />
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate(1)}>Next</button>
    </div>
  );
};
export default Contact;
