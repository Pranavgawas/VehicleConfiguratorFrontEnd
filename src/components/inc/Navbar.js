import React from "react";

import { Outlet, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/home"><span style={{padding:30,fontSize:25}}><b>India Fleet Services</b></span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        
        <li class="nav-item">
            <Link to="/about" class="nav-link  active" >About Us</Link>
          </li>
          <li class="nav-item">
            <Link to="/contact" class="nav-link active" >Contact Us</Link>
          </li>
          <li class="nav-item">
            <Link to="/registration" class="nav-link active" >Registration</Link>
          </li>
          <li class="nav-item">
            <Link to="/signin" class="nav-link active" >Sign In</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
