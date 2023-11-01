import React from "react";

import Ell from "../../icons/ell.png";
import Fr from "../../icons/fr.png";
import Bell from "../../icons/bell.png";

import "./Header.css";
function Header() {
  return (
    <div className="header-section">
      <div className="logo-section">
        <img src="image 9.png" alt="" />
        <div className="title-sec">
          <img className="title-box" src="Rectangle 3.png" alt="" />
          <h3>BID WINNER</h3>
        </div>
      </div>
      <div className="nav-items">
        <ul>
          <li>Dashboard</li>
          <li>Jobs</li>
          <li>Calender</li>
          <li>Coast Catalog</li>
          <li>Database</li>
          <li>Tutorials</li>
        </ul>
      </div>
      <div className="profile-sec">
        <div className="box-sec">
          <div className="name-section">
            <h6>Jane Cooper</h6>
            <p>janecooper@gmail.com</p>
          </div>
          <div className="img-sec">
            <img src={Ell} alt="" />
          </div>
          <div className="profile-icon">
            <img src={Fr} alt="" />
          </div>
        </div>
      </div>
      <div className="bell-icon">
      <img src={Bell} alt="" />
      </div>
    
    </div>
  );
}

export default Header;
