import imageDeha from "./img-deha.jpg";
import imgDig from "./img_dig_cons@2x.jpg";
import imgTranf from "./img_digi_tranf@2x.jpg";
import w1 from "./w1.jpg";
import w4 from "./w4.jpg";
import w2 from "./w2.jpg";
import w5 from "./w5.jpg";
import w3 from "./w3.jpg";
import w6 from "./w6.jpg";
import quote from "./icons8-get-quote-96.png";
import { useState } from "react";

import "./HomeStyles.scss";
// import "../CMC_Service/CmcStyle.scss";
import React from "react";
import { Button } from "antd";
import { Layout, Menu, List } from "antd";
import { Link } from "react-router-dom";
import {
  CaretDownFilled,
  CaretUpFilled,
  LoginOutlined,
} from "@ant-design/icons";

setTimeout(function () {
  var titleWeb = document.getElementsByClassName("titleWeb");
  for (var i = 0; i < titleWeb.length; i++) {
    titleWeb[i].classList.add("fadeInBottom", "cssanimation");
  }
}, 3000);

function Home() {
  const [select, setSelect] = useState(true);
  const [text, setText] = useState({
    desc: "",
    auth: "",
    office: "",
  });

  const quotes = [
    {
      src: "https://web.archive.org/web/20210804231252im_/https://deha-soft.com/wp-content/uploads/2021/07/mitshubishi-2.png",
      desc: "Using DEHA market research services provide us a positive result. We grasped the market situation and used it for our strategy and policy.",
      auth: "LE ANH DUONG",
      office: "- Sales Manager, Mitsubishi Electric Viet Nam",
    },
    {
      src: "https://web.archive.org/web/20210804231252im_/https://deha-soft.com/wp-content/uploads/2021/07/mandi.png",
      desc: "After using DEHA offshore services I believe no matter how hard work is, you will be able to complete it to the end. I don't know what the result will be, but I have the confidence that we will never run away along the way.",
      auth: "Ya Fukuda",
      office: "- President and CEO, MANDI, Inc",
    },
    {
      src: "https://web.archive.org/web/20210804231252im_/https://deha-soft.com/wp-content/uploads/2021/07/standup.png",
      desc: "Our problem is a response to daily maintenance work. We cannot gather enough domestic engineer staff then we found DEHA.  I remember when we are in the middle of the project, the lack of resources, which is a bottleneck in outsourcing is greatly fixed by the flexible response. That's a positive point, and I appreciate that.",
      auth: "Makoto Akahira",
      office: "- Representative Director, Stansup Co., Ltd.",
    },
  ];
  const quotes2 = [
    {
      src: "https://web.archive.org/web/20220105053605im_/https://deha-soft.com/wp-content/uploads/2021/07/cotegg.png",
      desc: "We used PoC projects and Android application development projects for services that utilize image analysis. Especially for PoC projects, despite the ambiguous requirements, we were able to proceed with early development together, which was helpful.",
      auth: "Makoto Akahira",
      office: "- Representative Director, Stansup Co., Ltd.",
    },
    {
      src: "https://web.archive.org/web/20220105053516im_/https://deha-soft.com/wp-content/uploads/2021/07/itpl.png",
      desc: "I felt that the engineers were young and had a high level of understanding. Development speed is also fast. We also received various technical suggestions.",
      auth: "Takaaki Ito",
      office: "- CEO, IT Partners Link Co., Ltd.",
    },
    {
      src: "https://web.archive.org/web/20220105053249im_/https://deha-soft.com/wp-content/uploads/2021/07/milab.png",
      desc: "I knew DEHA since 2017 from my friend. At that time, I was worried about the shortage of engineers for my project, so I decided to cooperate with DEHA. I have been impressed with the DEHA engineer team, young members, and hard work. They work with high intently and responsibility until the last delivery. I would love to have another opportunity to cooperate with DEHA.",
      auth: "Remi Momoyama",
      office: "Remi Momoyama",
    },
  ];
  const quotes3 = [
    {
      src: "https://web.archive.org/web/20220105053601im_/https://deha-soft.com/wp-content/uploads/2021/07/tritome.png",
      desc: "Together, we develop an iOS app, an Android app, and a web service based on new technologies and architectures. Frankly, I must say we have a problem with the communication caused by the different languages. However, I respected the knowledge and understanding of the DEHA team. They also adapt to new technologies rapidly.",
      auth: "Hiroko Misaki",
      office: "- Director, Tritome Co., Ltd.",
    },
    {
      src: "https://web.archive.org/web/20220105053345im_/https://deha-soft.com/wp-content/uploads/2021/07/mapquest.png",
      desc: "All the people who talked have a bright and sincere impression. I strongly feel that I will try to make the most of my specialty beyond the language barrier. In addition, there is an attitude that even ambiguous ideas are approached and thought about.",
      auth: "Ryosuke Sato",
      office: "Ryosuke Sato",
    },
  ];
  return (
    <div className="container-fluid  overflow-hidden m-0 g-0">
      <div className="row hero py-5 px-sm-5 py-sm-auto g-0">
        <div
          id=""
          className="col-sm-12 mx-2 my-5 py-5 mx-sm-5 my-sm-auto px-sm-5 py-sm-auto titleWeb"
        >
          <p className="exb">
            WEB DESIGN &<br />
            <span className="dev">DEVELOPMENT SERVICES</span>
          </p>
          <p className="tec">catch up with the</p>
          <p className="digi">digital transformation</p>
          <button className="hmHr-but my-5 mt-sm-5">Read more</button>
        </div>
      </div>
      <div className="row mt-5 m-sm-5">
        <div className="col-sm-12 miss">
          <h2 className="desc grad">Mission</h2>
          <h3>
            To&nbsp;
            <span style={{ fontWeight: 700, color: "#1d2055" }}>
              deliver happiness&nbsp;
            </span>
            to our <span className="client">clients</span> and
            <span className="client"> staffs</span> .
          </h3>
        </div>
      </div>

      <div className="row  mx-sm-5">
        <div className="col-sm-6 px-4 pt-1 px-sm-5 px-md-1 px-lg-5">
          <p class="lig">
            Happiness, with DEHA, is the highest value that people accumulate
            through work, cooperation with a positive attitude along with a
            worthy life. Happiness is not an outcome, but a collection of
            experiences, long-lasting and enduring. DEHA considers the
            attainment of happiness as the goal of its business activities. All
            activities of DEHA are aimed at the continuous, unlimited transfer
            of values to members, partners and customers to achieve that
            happiness.
          </p>
        </div>
        <div className="col-sm-6 px-sm-5">
          <img className="misImg" src={imageDeha} />
        </div>
        <div className="row mx-1 my-5 mx-sm-3">
          <div className="col-sm-12">
            <button className="hmHr-but">About us</button>
          </div>
        </div>
      </div>
      <div className="row my-sm-5 imageArea px-sm-5 g-0">
        <div className="col-sm-12 px-sm-5">
          <div className="row px-3 m-sm-5 px-sm-5">
            <div className="col-6 col-sm-3">
              <h3>220</h3> <p>Members</p>
            </div>
            <div className="col-6 col-sm-3">
              <h3>200</h3> <p>Projects</p>
            </div>
            <div className="col-6 col-sm-3">
              <h3>3</h3> <p>Branches</p>
            </div>
            <div className=" col-6 col-sm-3">
              <h3>2</h3> <p>Countries</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-4 my-sm-0">
        <div className="col-12 sTitle">
          <h3 style={{ fontSize: 27, opacity: 0.9 }} class="lig">
            Services
          </h3>
          <h2 class="grad ">What We Do</h2>
        </div>
      </div>

      <div className="row my-sm-5">
        <div className="col-sm-6 py-4 p-sm-5 hmLiser">
          <h3>Digital Consulting</h3>
          <img className="px-sm-5" src={imgDig} />
          <a className="mt-sm-5" href="">
            Application services, Next-gen technologies services and more…
          </a>
        </div>
        <div className="col-sm-6 py-4 p-sm-5 hmLiser">
          <h3 style={{ color: "#8aba2b" }}>
            DIGITAL TRANSFORMATION CONSULTING
          </h3>
          <img className="px-sm-5" src={imgTranf} />
          <a
            style={{ color: "#8aba2b", border: "1px #8aba2b solid" }}
            className="mt-sm-5"
            href=""
          >
            Ecommerce services, Smart Logistics and more…
          </a>
        </div>
      </div>
      {/* <div className="row my-5 my-sm-0 mb-sm-5">
        <div className="col-12 sTitle">
          <h3 style={{ fontSize: 27, opacity: 0.9, lineHeight: 1 }} class="lig">
            Creative Portfolio
          </h3>
          <h2 class="grad">Success cases</h2>
        </div>
      </div>

      <div className="row mx-sm-5 px-sm-5 g-0 listFolio">
        <div className="col-sm-4 g-0 ">
          <img className="mb-4 g-0" src={w1} />
          <br />
          <img src={w4} />
        </div>
        <div className="col-sm-4 g-0">
          <img className="mb-4" src={w2} />
          <br />
          <img src={w5} />
        </div>
        <div className="col-sm-4 g-0">
          <img className="mb-4" src={w3} />
          <br />
          <img src={w6} />
        </div>
      </div> */}

      <div className="row hmQuote mt-lg-5 p-lg-5">
        <div className="col-12 col-lg-6 px-4 mt-lg-5 p-lg-5">
          <img src={quote} />
          <p>
            {text.desc
              ? text.desc
              : "Using DEHA market research services provide us a positive result. We grasped the market situation and used it for our strategy and policy."}
          </p>
          <h6>
            <span>{text.auth ? text.auth : "LE ANH DUONG"} </span>
            {text.office
              ? text.office
              : "- Sales Manager, Mitsubishi Electric Viet Nam"}
          </h6>
        </div>
        <div className="col-12 px-5 col-lg-6 mt-lg-5 p-lg-5">
          <div className="row mt-3 mt-sm-5 g-0 imgQuote px-sm-5">
            {quotes &&
              quotes.map((p) => (
                <div className="col-4 col-sm-4">
                  <img
                    src={p.src}
                    id="selected"
                    alt="Testimonial Images"
                    onClick={() => {
                      setText({
                        desc: p.desc,
                        auth: p.auth,
                        office: p.office,
                      });
                    }}
                  ></img>
                </div>
              ))}
          </div>
          <div className="row mt-sm-4 g-0 imgQuote px-sm-5">
            {quotes2 &&
              quotes2.map((p) => (
                <div className="col-4 col-sm-4">
                  <img
                    src={p.src}
                    id="selected"
                    alt="Testimonial Images"
                    onClick={() => {
                      setText({
                        desc: p.desc,
                        auth: p.auth,
                        office: p.office,
                      });
                    }}
                  ></img>
                </div>
              ))}
          </div>
          <div
            style={{ textAlign: "center" }}
            className="row mt-sm-4 mx-sm-5 g-0 imgQuote mx-sm-5 px-sm-5"
          >
            {quotes3 &&
              quotes3.map((p) => (
                <div
                  style={{ textAlign: "center" }}
                  className="col-6 col-sm-6 g-0"
                >
                  <img
                    src={p.src}
                    id="selected"
                    alt="Testimonial Images"
                    onClick={() => {
                      setText({
                        desc: p.desc,
                        auth: p.auth,
                        office: p.office,
                      });
                    }}
                  ></img>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 hmHr p-5">
          <div className="col-sm-6 offset-sm-3 ">
            <h2>Let’s Make it Happen Together!</h2>
            <p>
              There are still not enough friends to realize our goal of “a world
              where everyone can be absorbed in value creation.” If you like,
              why don’t you take a look at DEHA VIET NAM?
            </p>
            <button style={{ margin: "auto" }} className="hmHr-button">
              Contact us
            </button>
          </div>
        </div>
      </div>

      <div className="row my-5 my-sm-5">
        <div className="col-12 my-sm-5 sTitle">
          <h3 style={{ fontSize: 27, opacity: 0.9, lineHeight: 1 }} class="lig">
            what’s stories on
          </h3>
          <h2 class="grad">Latest News</h2>
        </div>
      </div>
      <div className="row mt-sm-0 mx-sm-5 px-sm-3">
        <div className="mb-0 col-sm-4">
          <div class="news-link">
            <div class="thumbs">
              <img
                src="https://web.archive.org/web/20210804231252im_/https://deha-soft.com/wp-content/uploads/2021/07/sao-khue-2021.png"
                alt="news"
              />
            </div>
            <div class="newsCont">
              <h4 class="cate">Achievements</h4>
              <h2 class="title">
                DEHA Viet Nam Outsourcing Service Won Sao Khue Award – 2021
              </h2>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div class="news-link">
            <div class="thumbs">
              <img
                src="https://web.archive.org/web/20210804231252im_/https://deha-soft.com/wp-content/uploads/2021/07/Group-23.png"
                alt="news"
              />
            </div>
            <div class="newsCont">
              <h4 class="cate">Achievements</h4>
              <h2 class="title">
                DEHA Viet Nam received an investment license into Hue city
              </h2>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div class="news-link">
            <div class="thumbs">
              <img
                src="https://web.archive.org/web/20210804231252im_/https://deha-soft.com/wp-content/uploads/2021/07/iso-9001.png"
                alt="news"
              />
            </div>
            <div class="newsCont">
              <h4 class="cate">Achievements</h4>
              <h2 class="title">
                DEHA achieve Certification to ISO 9001:2015 Quality management
                systems
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
