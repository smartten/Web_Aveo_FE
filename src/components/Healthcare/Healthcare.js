import './HealthStyle.scss';
import { BulbOutlined, SelectOutlined, UserOutlined, PieChartOutlined, SwitcherOutlined, PaperClipOutlined } from '@ant-design/icons';

import React, { useEffect, useState } from 'react';
import { auto } from '@popperjs/core';
function Healthcare() {
  const [ourService, setOurService] = useState();
  const [content, setLogo] = useState();
  const [keyCus, setKeyCus] = useState();
  const [benefit, setBenefit] = useState();
  const [introServ, setIntroServ] = useState();
  setTimeout(function () {
    var heathText = document.getElementsByClassName('heath-text');
    for (var i = 0; i < heathText.length; i++) {
      heathText[i].classList.add('fadeInRight', 'cssanimation');
    }
  }, 2000);

  useEffect(() => {
    document.title = 'AVEO Global - Health Care';
    fetchBenefit();
    fetchLogo();
    fetchKeyCus();
    fetchOurService();
    fetchIntroServ();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      var mobility = document.getElementsByClassName('mobility');
      var mobility2 = document.getElementsByClassName('mobility-2');
      var animate = document.getElementsByClassName('animate');
      var animate2 = document.getElementsByClassName('animate-2');

      if (window.scrollY >= 380) {
        for (var i = 0; i < mobility.length; i++) {
          mobility[i].classList.add('fadeInUp', 'cssanimation');
        }
      }
      if (window.scrollY >= 600) {
        for (var i = 0; i < mobility2.length; i++) {
          mobility2[i].classList.add('fadeInUp', 'cssanimation');
        }
      }
      if (window.scrollY >= 1000) {
        for (var i = 0; i < animate.length; i++) {
          animate[i].classList.add('fadeInUp', 'cssanimation');
        }
      }
      if (window.scrollY >= 1400) {
        for (var i = 0; i < animate2.length; i++) {
          animate2[i].classList.add('fadeInUp', 'cssanimation');
        }
      }
    });
  }, []);
  const fetchLogo = async () => {
    try {
      const res = await fetch('http://192.168.0.98:8080/api/indust-content/all');
      const data = await res.json();
      setLogo(data);
    } catch (error) {
      console.error('Error fetching menu and logo:', error);
    }
  };

  const fetchOurService = async () => {
    try {
      const res = await fetch('http://192.168.0.98:8080/api/our-service-info/get-all');
      const data = await res.json();
      setOurService(data);
    } catch (error) {
      console.error('Error fetching menu and logo:', error);
    }
  };

  const fetchKeyCus = async () => {
    try {
      const res = await fetch('http://192.168.0.98:8080/api/keycustomer/get-all');
      const data = await res.json();
      setKeyCus(data);
    } catch (error) {
      console.error('Error fetching menu and logo:', error);
    }
  };

  const fetchBenefit = async () => {
    try {
      const res = await fetch('http://192.168.0.98:8080/api/service-introduction/all');
      const data = await res.json();
      setBenefit(data);
    } catch (error) {
      console.error('Error fetching menu and logo:', error);
    }
  };
  const fetchIntroServ = async () => {
    try {
      const res = await fetch('http://192.168.0.98:8080/api/introduce-company');
      const data = await res.json();
      setIntroServ(data);
    } catch (error) {
      console.error('Error fetching menu and logo:', error);
    }
  };
  return (
    <div className="container-fluid overflow-hidden p-0 m-0 g-0">
      <div className="health-section  g-0 m-0">
        <div className="container d-flex">
          <div
            style={{
              height: '100vh',
              position: 'relative',
            }}
            className="col-12 col-md-9 col-lg-5 g-0 heath-text"
          >
            <div
              style={{
                position: 'absolute',
                bottom: '18%',
              }}
            >
              <h1>Health Care</h1>
              <p>
                AVEO empowers healthcare providers with innovative solutions that automate processes, improve treatment outcomes and the patient experience, and reduce
                costs.
              </p>
              <div className="btn-deha mt-4 py-3">
                <a className="" href="/contact-us">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 col-lg-7"></div>
        </div>
      </div>

      <div className="container">
        <div className="row g-0 m-0">
          <div className="col-12 my-5 section-title">
            <h3>{content && content[1].title}</h3>
            <p>{content && <div dangerouslySetInnerHTML={{ __html: content[1].content }}></div>}</p>
          </div>
        </div>

        <div className="row g-0 m-0  mb-sm-3 content-mob">
          <div style={{ marginRight: 'auto' }} className="col-12 col-sm-6 mobility">
            <div className="row m-0 p-0 g-0">
              <div className="col-12 col-lg-2">
                <img src={content && content[1]?.list[0]?.link} alt="" />
              </div>
              <div className="col-12 col-lg-10 fbox-txt">
                <h5>{content && content[1]?.list[0]?.title}</h5>
                <p>{content && <div dangerouslySetInnerHTML={{ __html: content[1]?.list[0]?.content }}></div>}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 mobility">
            <div className="row m-0 p-0 g-0">
              <div className="col-12 col-lg-2">
                <img src={content && content[1]?.list[1]?.link} alt="" />
              </div>
              <div className="col-12 col-lg-10 fbox-txt">
                <h5>{content && content[1]?.list[1]?.title}</h5>
                <p>{content && <div dangerouslySetInnerHTML={{ __html: content[1]?.list[1]?.content }}></div>}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-0 m-0 mb-sm-3 content-mob">
          <div style={{ marginRight: 'auto' }} className="col-12 col-sm-6 mobility-2">
            <div className="row m-0 p-0 g-0">
              <div className="col-12 col-lg-2">
                <img src={content && content[1]?.list[2]?.link} alt="" />
              </div>
              <div className="col-12 col-lg-10 fbox-txt">
                <h5>{content && content[1]?.list[2]?.title}</h5>
                <p>{content && <div dangerouslySetInnerHTML={{ __html: content[1]?.list[2]?.content }}></div>}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 mobility-2">
            <div className="row m-0 p-0 g-0">
              <div className="col-12 col-lg-2">
                <img src={content && content[1]?.list[3]?.link} alt="" />
              </div>
              <div className="col-12 col-lg-10 fbox-txt">
                <h5>{content && content[1]?.list[3]?.title}</h5>
                <p>{content && <div dangerouslySetInnerHTML={{ __html: content[1]?.list[3]?.content }}></div>}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row my-sm-5 py-sm-5 g-0">
          <div className="col-12 g-0 my-5">
            <h3 class="h3-md">{benefit && benefit[0]?.titleName}</h3>
          </div>
        </div>
        <div className="animate">
          <div className="row g-0 m-0 p-0 content-bot">
            <div style={{ marginRight: 'auto' }} className="col-lg-4 mb-3 mb-lg-0  px-4 content-part">
              <div className="icon-benefit mb-4">
                <BulbOutlined />
              </div>
              <div className="text-benefit">
                <span>{benefit && benefit[0]?.subIntroService[0]?.title}</span>
                <p>{benefit && <div dangerouslySetInnerHTML={{ __html: benefit[0]?.subIntroService[0]?.content }}></div>}</p>
              </div>
            </div>
            <div style={{ marginRight: 'auto' }} className="col-lg-4 mb-3 mb-lg-0 px-4 content-part">
              <div className="icon-benefit mb-4">
                <SelectOutlined />
              </div>
              <div className="text-benefit">
                <span> {benefit && benefit[0]?.subIntroService[1]?.title}</span>
                <p className="my-sm-3">{benefit && <div dangerouslySetInnerHTML={{ __html: benefit[0]?.subIntroService[1]?.content }}></div>}</p>
              </div>
            </div>
            <div className="col-lg-4 mb-3 mb-lg-0 px-4 content-part">
              <div className="icon-benefit mb-4">
                <UserOutlined />
              </div>
              <div className="text-benefit">
                <span>{benefit && benefit[0]?.subIntroService[2]?.title}</span>
                <p className="my-sm-3">{benefit && <div dangerouslySetInnerHTML={{ __html: benefit[0]?.subIntroService[2]?.content }}></div>}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="animate-2">
          <div className="row mx-0 px-0 g-0 mt-lg-4 mb-sm-5 pb-sm-5 content-bot">
            <div style={{ marginRight: 'auto' }} className="col-lg-4 mb-3 mb-lg-0 px-4 g-0 content-part">
              <div className="icon-benefit mb-4">
                <PieChartOutlined />
              </div>
              <div className="text-benefit">
                <span>{benefit && benefit[0]?.subIntroService[3]?.title}</span>
                <p className="my-sm-3">{benefit && <div dangerouslySetInnerHTML={{ __html: benefit[0]?.subIntroService[3]?.content }}></div>}</p>
              </div>
            </div>
            <div style={{ marginRight: 'auto' }} className="col-lg-4 mb-3 mb-lg-0 px-4 content-part">
              <div className="icon-benefit mb-4">
                <SwitcherOutlined />
              </div>
              <div className="text-benefit">
                <span>{benefit && benefit[0]?.subIntroService[4]?.title}</span>
                <p className="my-sm-3">{benefit && <div dangerouslySetInnerHTML={{ __html: benefit[0]?.subIntroService[4]?.content }}></div>}</p>
              </div>
            </div>
            <div className="col-lg-4 mb-3 mb-sm-0 px-4 content-part">
              <div className="icon-benefit mb-4">
                <PaperClipOutlined />
              </div>
              <div className="text-benefit">
                <span>{benefit && benefit[0]?.subIntroService[5]?.title}</span>
                <p className="my-sm-3">{benefit && <div dangerouslySetInnerHTML={{ __html: benefit[0]?.subIntroService[5]?.content }}></div>}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Healthcare;
