import "./whiteStyle.scss";
import sme from "./SME.png";
import POSSIBLE from "./POSSIBLE.png";
import SSENTIAL from "./SSENTIAL.png";
import React, { useEffect } from "react";
import { Select } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
function Whitepapers() {
  const handleChange = (value) => {};
  return (
    <div className="container-fluid overflow-hidden p-0 m-0 g-0">
      <div className="white-section  g-0 m-0">
        <div className="container d-flex">
          <div
            style={{
              height: "100vh",
              position: "relative",
            }}
            className="col-12 col-sm-5 g-0 white-text"
          >
            <div
              style={{
                position: "absolute",
                bottom: "18%",
              }}
            >
              <h1 className="">Whitepapers</h1>
              <p>
                Access our comprehensive library of white papers covering
                applications, case studies, research, and solutions to
                challenges facing Digital Transformation strategy of businesses.
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-7"></div>
        </div>
      </div>

      <div className="container">
        <div className="row my-5 g-0 p-0">
          <div style={{ width: "32%" }} className="col-sm-4">
            <Select
              placeholder="Industries"
              style={{
                width: "100%",
                color: "rgba(0, 0, 0, 0.88)",
                fontSize: "20px",
              }}
              size="large"
              onChange={handleChange}
              options={[
                {
                  value: "Manufacturing",
                  label: "Manufacturing",
                },
                {
                  value: "HealthCare",
                  label: "Health Care",
                },
                {
                  value: "Retail",
                  label: "Retail",
                },
                {
                  value: "Ecommerce",
                  label: "Ecommerce",
                },
                {
                  value: "Financial",
                  label: "Financial",
                },
              ]}
            ></Select>
          </div>
          <div className="col-sm-8"></div>
        </div>
        <div className="row g-0 mb-sm-5 pb-sm-5">
          <div
            style={{ width: "32%", marginRight: "auto" }}
            className="col-sm-4 success-stories"
          >
            <img src={sme} />
            <div className="p-sm-4 ">
              <h5 className="pt-sm-1">
                SME Warehouse Management Systems Vision 2030
              </h5>
              <div className="item">
                <CalendarOutlined style={{ fontSize: 20 }} />
                <p className="py-sm-1 px-sm-2">February 23rd 2023</p>
              </div>
              <p className="desc">
                The concept of on-demand warehousing is fast emerging to meet
                the intermittent demands for
              </p>
              <div className="but-detail">
                <a href="">Get The Detail</a>
              </div>
            </div>
          </div>
          <div
            style={{ width: "32%", marginRight: "auto" }}
            className="col-sm-4 success-stories"
          >
            <img src={POSSIBLE} />
            <div className="p-sm-4 ">
              <h5 className="pt-sm-1">
                POSSIBLE IMPACT ON VITAL SECTORS OF THE GLOBAL
              </h5>
              <div className="item">
                <CalendarOutlined style={{ fontSize: 20 }} />
                <p className="py-sm-1 px-sm-2">February 23rd 2023</p>
              </div>
              <p className="desc">
                Time and cost efficiency, transparency, privacy, security, fraud
                reduction, smart contracts, record
              </p>
              <div className="but-detail">
                <a href="">Get The Detail</a>
              </div>
            </div>
          </div>
          <div style={{ width: "32%" }} className="col-sm-4 success-stories">
            <img src={SSENTIAL} />
            <div className="p-sm-4 ">
              <h5 className="pt-sm-1">
                ESSENTIAL PILLARS OF INTEGRATING DIGITAL
              </h5>
              <div className="item">
                <CalendarOutlined style={{ fontSize: 20 }} />
                <p className="py-sm-1 px-sm-2">February 23rd 2023</p>
              </div>
              <p className="desc">
                Digital transformation is inevitably taking the corporate world
                by storm. Simultaneously, the post pandemic
              </p>
              <div className="but-detail">
                <a href="">Get The Detail</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whitepapers;
