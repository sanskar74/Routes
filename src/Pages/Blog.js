import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Blog = () => {

    const navigate = useNavigate(); 
    return(
        <div>
            <h1>Blog</h1>
            <p>This is Blog Page</p>
            <button onClick={()=>navigate(-1)}>Back</button>
            <button onClick={()=>navigate(1)}>Next</button>
        </div>
    )
}
export default Blog;