import React from "react";
import "./App.css";

//importing pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Navbar from "./Pages/Navbar";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const[count, setCount] = useState(0);

  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About count={count} setCount={setCount}/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact count={count}/>}/>
      </Routes>
    </div>
  )
}
export default App;