// import logo from "./2023-02-09_155135.png";
import "./CmcStyle.scss";
import React from "react";
import { Button } from "antd";
import { Layout, Menu, List } from "antd";
import { Link } from "react-router-dom";

function CmcService() {
  return (
    <div className="container-fluid">
      <div class="row">
        <div class="col-12 cms">
          <div>
            <p className="cms-p">CMS services</p>
            <p className="cms-p-unlock">
              Unlock the Potential of Your Business with standard CMS solution!
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div style={{ backgroundColor: "white" }} class="col-12 p-5">
          <div>
            <p className="title-start pt-3">
              Start your idea with our all-in-one CMS Solution!
            </p>
            <p className="section-service">
              We offer a whole gamut of CMS to facilitate you to build complex
              websites, manage content and business data and render pages as you
              desired in a structured manner without much help from the
              technical experts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CmcService;
