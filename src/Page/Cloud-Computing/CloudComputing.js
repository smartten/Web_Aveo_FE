import './CloudComputingStyle.scss';
import React, { useEffect, useState } from 'react';
import logo1 from "./COMATCH's_logo.svg";
import logo2 from './Group.svg';
import logo3 from './logo-tisa-white.svg';
import logo4 from './Logo-white_340x156-px-01.svg';
import logo5 from './layer1.svg';
import logo6 from './g16.svg';
import logo7 from './imageLogo1.svg';
import icon1 from './Cloud.svg';
import icon2 from './icons-05-22.svg';
import icon3 from './CloudMonitoring.svg';
import icon4 from './LegacySystemtoCloudMigration.svg';
import img1 from './Cloud-Services-1-01.svg';
import {
  CloudServerOutlined,
  DashboardOutlined,
  FieldTimeOutlined,
  CodeOutlined,
  BulbOutlined,
  SelectOutlined,
  UserOutlined,
  PieChartOutlined,
  SwitcherOutlined,
  PaperClipOutlined,
} from '@ant-design/icons';
function CloudComputing() {
  const [banner, setBanner] = useState();
  const [ourService, setOurService] = useState();
  const [logo, setLogo] = useState();
  const [keyCus, setKeyCus] = useState();
  const [benefit, setBenefit] = useState();
  useEffect(() => {
    document.title = 'AVEO Global - Cloud Service';
    topFunction();
    fetchBanner();
    fetchOurService();
    fetchLogo();
    fetchKeyCus();
    fetchBenefit();
  }, []);

  setTimeout(function () {
    var text = document.getElementsByClassName('text');
    for (var i = 0; i < text.length; i++) {
      text[i].classList.add('fadeInRight', 'cssanimation');
    }
    var image = document.getElementsByClassName('image');
    for (var i = 0; i < image.length; i++) {
      image[i].classList.add('fadeInLeft', 'cssanimation');
    }
  }, 1000);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      var up1 = document.getElementsByClassName('up1');
      var up2 = document.getElementsByClassName('up2');
      var up3 = document.getElementsByClassName('up3');
      var up4 = document.getElementsByClassName('up4');
      var bigGuy = document.getElementsByClassName('big-guys');
      if (window.scrollY >= 320) {
        for (var i = 0; i < up1.length; i++) {
          up1[i].classList.add('fadeInUp', 'cssanimation');
        }
        // for (var i = 0; i < txtblock.length; i++) {
        //   txtblock[i].classList.add("fadeInRight", "cssanimation");
        // }
      }
      if (window.scrollY >= 330) {
        for (var i = 0; i < up2.length; i++) {
          up2[i].classList.add('fadeInUp', 'cssanimation');
        }
      }
      if (window.scrollY >= 1560) {
        for (var i = 0; i < bigGuy.length; i++) {
          bigGuy[i].classList.add('fadeInLeft', 'cssanimation');
        }
      }
      if (window.scrollY >= 1650) {
        for (var i = 0; i < up3.length; i++) {
          up3[i].classList.add('fadeInUp', 'cssanimation');
        }
      }
      if (window.scrollY >= 1690) {
        for (var i = 0; i < up4.length; i++) {
          up4[i].classList.add('fadeInUp', 'cssanimation');
        }
      }
    });
  }, []);

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  const fetchBanner = async () => {
    try {
      const res = await fetch('http://192.168.0.98:8080/api/service-banner/get-all');
      const data = await res.json();
      setBanner(data);
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

  const fetchLogo = async () => {
    try {
      const res = await fetch('http://192.168.0.98:8080/api/collab/get-all');
      const data = await res.json();
      setLogo(data);
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

  return (
    <div className="cloud-computing">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item">
            <div className="container">
              <div className="slide-content d-flex">
                <div className="image">
                  <img src={img1} alt="" />
                </div>
                <div className="text">
                  <p className="text-title">
                    <span>Cloud Services</span>
                  </p>
                  <p className="sub-text">
                    An effective cloud strategy ensures that the enterprise makes the right technology investments at the right time and on the right platforms to improve
                    business performance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="developer-service">
        <div className="container">
          <div className="title-service">
            <div class="row justify-content-center">
              <div class="col-lg-10 col-xl-8">
                <div class="section-title title-01 mb-70">
                  <h3 class="title">{ourService && ourService[5]?.title}</h3>
                  <p class="sub-title">{ourService && <div dangerouslySetInnerHTML={{ __html: ourService[5]?.content }}></div>}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-service">
            <div className="row row-cols-1 row-cols-md-2">
              <div className="col up1">
                <div className="content-text row">
                  <div className="icon-service col-2">
                    <img src={ourService && ourService[5]?.list[0]?.link} alt="" />
                  </div>
                  <div className="text-service col">
                    <b className="text-title">{ourService && ourService[5]?.list[0]?.title}</b>
                    <p className="text-sub">{ourService && <div dangerouslySetInnerHTML={{ __html: ourService[5]?.list[0]?.content }}></div>}</p>
                  </div>
                </div>
              </div>
              <div className="col up1">
                <div className="content-text row">
                  <div className="icon-service col-2">
                    <img src={ourService && ourService[5]?.list[1]?.link} alt="" />
                  </div>
                  <div className="text-service col">
                    <b className="text-title">{ourService && ourService[5]?.list[1]?.title}</b>
                    <p className="text-sub">{ourService && <div dangerouslySetInnerHTML={{ __html: ourService[5]?.list[1]?.content }}></div>}</p>
                  </div>
                </div>
              </div>
              <div className="col up2">
                <div className="content-text row">
                  <div className="icon-service col-2">
                    <img src={ourService && ourService[5]?.list[2]?.link} alt="" />
                  </div>
                  <div className="text-service col">
                    <b className="text-title">{ourService && ourService[5]?.list[2]?.title}</b>
                    <p className="text-sub">{ourService && <div dangerouslySetInnerHTML={{ __html: ourService[5]?.list[2]?.content }}></div>}</p>
                  </div>
                </div>
              </div>
              <div className="col up2">
                <div className="content-text row">
                  <div className="icon-service col-2">
                    <img src={ourService && ourService[5]?.list[3]?.link} alt="" />
                  </div>
                  <div className="text-service col">
                    <b className="text-title">{ourService && ourService[5]?.list[3]?.title}</b>
                    <p className="text-sub">{ourService && <div dangerouslySetInnerHTML={{ __html: ourService[5]?.list[3]?.content }}></div>}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-typical">
        <div className="container">
          <div className="content-typical">
            <p className="title-typical">{logo && logo[2]?.title}</p>
          </div>
          <div className="box-content-typical">
            <div className="row row-cols-1 row-cols-md-2">
              <div className="col">
                <div className="box">
                  <span className="nummber">1</span>
                  <div className="content-number">
                    <h3 className="title-box">{logo && logo[2]?.list[0]?.title}</h3>
                    <p className="content-title-box">{logo && <div dangerouslySetInnerHTML={{ __html: logo[2]?.list[0]?.content }}></div>}</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box">
                  <span className="nummber">2</span>
                  <div className="content-number">
                    <h3 className="title-box">{logo && logo[2]?.list[1]?.title}</h3>
                    <p className="content-title-box">{logo && <div dangerouslySetInnerHTML={{ __html: logo[2]?.list[1]?.content }}></div>}</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box">
                  <span className="nummber">3</span>
                  <div className="content-number">
                    <h3 className="title-box">{logo && logo[2]?.list[2]?.title}</h3>
                    <p className="content-title-box">{logo && <div dangerouslySetInnerHTML={{ __html: logo[2]?.list[2]?.content }}></div>}</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box">
                  <span className="nummber">4</span>
                  <div className="content-number">
                    <h3 className="title-box">{logo && logo[2]?.list[3]?.title}</h3>
                    <p className="content-title-box">{logo && <div dangerouslySetInnerHTML={{ __html: logo[2]?.list[3]?.content }}></div>}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="big-guys">
        <div className="container">
          {keyCus?.map((el) => (
            <>
              <p className="text-center title-big-guy">{el.title}</p>
              <div className="row justify-content-center flex-wrap" key={el.id}>
                {el?.subKeyCus.map((item) => (
                  <div className="col-2 left">
                    <img src={item.link} style={{ width: '100px', height: '100px' }} alt="" />
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      </section>

      <section className="benefits-of-partnering">
        <div className="container">
          <p className="title-benefit">{benefit && benefit[0]?.titleName}</p>
          <div className="container benefit ">
            <div className="row">
              <div className="col-4 content-part up3">
                <div className="icon-benefit">
                  <BulbOutlined />
                </div>
                <div className="text-benefit">
                  <b>{benefit && benefit[0]?.subIntroService[0]?.title}</b>
                  <p>{benefit && <div dangerouslySetInnerHTML={{ __html: benefit[0]?.subIntroService[0]?.content }}></div>}</p>
                </div>
              </div>
              <div className="col-4 content-part up3">
                <div className="icon-benefit">
                  <SelectOutlined />
                </div>
                <div className="text-benefit">
                  <b>{benefit && benefit[0]?.subIntroService[1]?.title}</b>
                  <p>{benefit && <div dangerouslySetInnerHTML={{ __html: benefit[0]?.subIntroService[1]?.content }}></div>}</p>
                </div>
              </div>
              <div className="col-4 content-part up3">
                <div className="icon-benefit">
                  <UserOutlined />
                </div>
                <div className="text-benefit">
                  <b>{benefit && benefit[0]?.subIntroService[2]?.title}</b>
                  <p>{benefit && <div dangerouslySetInnerHTML={{ __html: benefit[0]?.subIntroService[2]?.content }}></div>}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4 content-part up4">
                <div className="icon-benefit">
                  <PieChartOutlined />
                </div>
                <div className="text-benefit">
                  <b>{benefit && benefit[0]?.subIntroService[3]?.title}</b>
                  <p>{benefit && <div dangerouslySetInnerHTML={{ __html: benefit[0]?.subIntroService[3]?.content }}></div>}</p>
                </div>
              </div>
              <div className="col-4 content-part up4">
                <div className="icon-benefit">
                  <SwitcherOutlined />
                </div>
                <div className="text-benefit">
                  <b>{benefit && benefit[0]?.subIntroService[4]?.title}</b>
                  <p>{benefit && <div dangerouslySetInnerHTML={{ __html: benefit[0]?.subIntroService[4]?.content }}></div>}</p>
                </div>
              </div>
              <div className="col-4 content-part up4">
                <div className="icon-benefit">
                  <PaperClipOutlined />
                </div>
                <div className="text-benefit">
                  <b>{benefit && benefit[0]?.subIntroService[5]?.title}</b>
                  <p>{benefit && <div dangerouslySetInnerHTML={{ __html: benefit[0]?.subIntroService[5]?.content }}></div>}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CloudComputing;
