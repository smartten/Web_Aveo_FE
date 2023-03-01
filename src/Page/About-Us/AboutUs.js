import "./AboutStyle.scss";
import React, { useEffect } from "react";
function AboutUs() {
  useEffect(() => {
    document.title =
      "AVEO Global - Leading Software Development Company in Vietnam";
  }, []);
  return (
    <div className="about-us">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item">
            <div className="container">
              <div className="slide-content">
                <div className="text">
                  <p className="text-title">
                    Vietnam's Top Software Development, Outsourcing Company
                  </p>
                  <p className="sub-text">
                    AVEO Global is one of the leading Information Technology
                    companies in Vietnam, specializing in providing digital
                    transformation consulting services and software solutions in
                    Finance, Healthcare, Manufacturing, Ecommerce and Retail for
                    Domestic and International Businesses. we help you to
                    LEVERAGE YOUR BUSINESS in the age of Digital Transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="factsheet">
        <div className="container">
          <h2 className="title-factsheet">Factsheet</h2>
          <div className="table-info">
            <table className="table" style={{ marginBottom: "0px" }}>
              <tbody>
                <tr>
                  <th>Company Name</th>
                  <td>AVEO GLOBAL TECHNOLOGY COMPANY LIMITED</td>
                </tr>
                <tr>
                  <th>Established</th>
                  <td>2019</td>
                </tr>
                <tr>
                  <th>Headquarter</th>
                  <td>
                    4F No 9 Building, 9 Ha Dinh, Thanh Xuan, Hanoi, Vietnam
                  </td>
                </tr>

                <tr>
                  <th>Development Centers</th>
                  <td>
                    <ul>
                      <li>
                        <strong>HEADQUARTER</strong>: 4F No 9 Building, 9 Ha
                        Dinh, Thanh Xuan, Hanoi, Vietnam
                      </li>
                      <li>
                        <strong>Japan</strong>: 5-21-5 Higashisuna, Koutouku,
                        Tokyo-Japan
                      </li>
                      <li>
                        <strong>Singapore</strong>: Coming Soon
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="out-mission">
        <div className="container">
          <h2 className="mission-title">Our Mission</h2>
          <p className="mission-content">
            To bring innovative technology into life by leveraging engineering
            workforce in Vietnam
          </p>
        </div>
      </section>
      <section className="out-vision">
        <div className="container">
          <h2 className="mission-title">Our Vision</h2>
          <p className="mission-content">
            Becoming a publicly listed company operating and investing in the
            multinational and multi-industry field with a positive working
            environment, participating in the list of 500 largest private
            enterprises in Vietnam (VNR500), based on the core competence of
            digital technology.
          </p>
        </div>
      </section>
      <section className="out-values">
        <div className="container">
          <h2 className="mission-title">Our Values</h2>
          <p className="mission-content">
            Morality - Companionship - Study - Participation - Sincerity -
            Consistency
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
