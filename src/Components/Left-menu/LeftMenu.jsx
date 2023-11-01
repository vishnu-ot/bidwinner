import React from "react";
import "./LeftMenu.css";
import BackSvg from "../../icons/download.svg";
import ArticleSvg from "../../icons/Article.svg";

function LeftMenu() {
  return (
    <div className="left-menu-container">
      <div className="left-menu-items">
        <div className="items">
          <img src={BackSvg} alt="" />
          <p>Back to Jobs</p>
        </div>
        <div className="items">
          <img src={ArticleSvg} alt="" className="second-img" />
          <p>Notes</p>
        </div>
        <div className="items">
          <img src={ArticleSvg} alt="" className="second-img" />
          <p>Extension</p>
        </div>
        <div className="items">
          <img src={ArticleSvg} alt="" className="second-img" />
          <p>Take off</p>
        </div>
        <div className="items">
          <img src={ArticleSvg} alt="" className="second-img" />
          <p>Brk dwn</p>
        </div>
        <div className="items">
          <img src={ArticleSvg} alt="" className="second-img" />
          <p>Sbcon</p>
        </div>
        <div className="items">
          <img src={ArticleSvg} alt="" className="second-img" />
          <p>Gen Exp</p>
        </div>
        <div className="items">
          <img src={ArticleSvg} alt="" className="second-img" />
          <p>Qt mote</p>
        </div>
        <div className="items">
          <img src={ArticleSvg} alt="" className="second-img" />
          <p>Back to Jobs</p>
        </div>
        <div className="items">
          <img src={ArticleSvg} alt="" className="second-img" />
          <p>Back to Jobs</p>
        </div>
      </div>
    </div>
  );
}

export default LeftMenu;
