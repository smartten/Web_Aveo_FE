import './TestStyle.scss';
import img1 from './Hero-testing.webp';
import React, { useEffect, useState } from 'react';

import { BulbOutlined, SelectOutlined, UserOutlined, PieChartOutlined, SwitcherOutlined, PaperClipOutlined } from '@ant-design/icons';
function Testing() {
  const [banner, setBanner] = useState();
  const [ourService, setOurService] = useState();
  const [logo, setLogo] = useState();
  const [keyCus, setKeyCus] = useState();
  const [benefit, setBenefit] = useState();
  useEffect(() => {
    document.title = 'AVEO Global - Testing Service';
    topFunction();
    fetchLogo();
    fetchBanner();
    fetchOurService();
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

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

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
    });
  }, []);

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
    <div className="testing">
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
                    <span>Testing Services</span>
                  </p>
                  <p className="sub-text">
                    We provides full-range testing services based on our proficiency with application specifics and standards to ensure your app's high quality and user
                    adoption
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
                  <h3 class="title">{ourService && ourService[2]?.title}</h3>
                  <p class="sub-title">{ourService && <div dangerouslySetInnerHTML={{ __html: ourService[2]?.content }}></div>}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-service">
            <div className="row row-cols-1 row-cols-md-2">
              <div className="col up1">
                <div className="content-text row">
                  <div className="icon-service col-2">
                    <img src={ourService && ourService[2]?.list[0]?.link} alt="" />
                  </div>
                  <div className="text-service col">
                    <b className="text-title">{ourService && ourService[2]?.list[0]?.title}</b>
                    <p className="text-sub">{ourService && <div dangerouslySetInnerHTML={{ __html: ourService[2]?.list[0]?.content }}></div>}</p>
                  </div>
                </div>
              </div>
              <div className="col up1">
                <div className="content-text row">
                  <div className="icon-service col-2 left w-mobi">
                    <img src={ourService && ourService[2]?.list[1]?.link} alt="" />
                  </div>
                  <div className="text-service col left">
                    <b className="text-title">{ourService && ourService[2]?.list[1]?.title}</b>
                    <p className="text-sub">{ourService && <div dangerouslySetInnerHTML={{ __html: ourService[2]?.list[1]?.content }}></div>}</p>
                  </div>
                </div>
              </div>
              <div className="col up2">
                <div className="content-text row">
                  <div className="icon-service col-2">
                    <img src={ourService && ourService[2]?.list[2]?.link} alt="" />
                  </div>
                  <div className="text-service col">
                    <b className="text-title">{ourService && ourService[2]?.list[2]?.title}</b>
                    <p className="text-sub">{ourService && <div dangerouslySetInnerHTML={{ __html: ourService[2]?.list[2]?.content }}></div>}</p>
                  </div>
                </div>
              </div>
              <div className="col up2">
                <div className="content-text row">
                  <div className="icon-service col-2">
                    <img src={ourService && ourService[2]?.list[3]?.link} alt="" />
                  </div>
                  <div className="text-service col">
                    <b className="text-title">{ourService && ourService[2]?.list[3]?.title}</b>
                    <p className="text-sub">{ourService && <div dangerouslySetInnerHTML={{ __html: ourService[2]?.list[3]?.content }}></div>}</p>
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
            <p className="title-typical">{logo && logo[3]?.title}</p>
          </div>
          <div className="box-content-typical">
            <div className="row row-cols-1 row-cols-md-2">
              <div className="col">
                <div className="box">
                  <span className="nummber">1</span>
                  <div className="content-number">
                    <h3 className="title-box">{logo && logo[3]?.list[0]?.title}</h3>
                    <p className="content-title-box">{logo && <div dangerouslySetInnerHTML={{ __html: logo[3]?.list[0]?.content }}></div>}</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box">
                  <span className="nummber">2</span>
                  <div className="content-number">
                    <h3 className="title-box">{logo && logo[3]?.list[1]?.title}</h3>
                    <p className="content-title-box">{logo && <div dangerouslySetInnerHTML={{ __html: logo[3]?.list[1]?.content }}></div>}</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box">
                  <span className="nummber">3</span>
                  <div className="content-number">
                    <h3 className="title-box">{logo && logo[3]?.list[2]?.title}</h3>
                    <p className="content-title-box">{logo && <div dangerouslySetInnerHTML={{ __html: logo[3]?.list[2]?.content }}></div>}</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box">
                  <span className="nummber">4</span>
                  <div className="content-number">
                    <h3 className="title-box">{logo && logo[3]?.list[3]?.title}</h3>
                    <p className="content-title-box">{logo && <div dangerouslySetInnerHTML={{ __html: logo[3]?.list[3]?.content }}></div>}</p>
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
          <div className="container benefit up3 ">
            <div className="row">
              <div className="col-4 content-part">
                <div className="icon-benefit">
                  <BulbOutlined />
                </div>
                <div className="text-benefit">
                  <b>{benefit && benefit[0]?.subIntroService[0]?.title}</b>
                  <p>{benefit && <div dangerouslySetInnerHTML={{ __html: benefit[0]?.subIntroService[0]?.content }}></div>}</p>
                </div>
              </div>
              <div className="col-4 content-part">
                <div className="icon-benefit">
                  <SelectOutlined />
                </div>
                <div className="text-benefit">
                  <b> {benefit && benefit[0]?.subIntroService[1]?.title} </b>
                  <p>{benefit && <div dangerouslySetInnerHTML={{ __html: benefit[0]?.subIntroService[1]?.content }}></div>}</p>
                </div>
              </div>
              <div className="col-4 content-part">
                <div className="icon-benefit">
                  <UserOutlined />
                </div>
                <div className="text-benefit">
                  <b>{benefit && benefit[0]?.subIntroService[2]?.title}</b>
                  <p>{benefit && <div dangerouslySetInnerHTML={{ __html: benefit[0]?.subIntroService[2]?.content }}></div>}</p>
                </div>
              </div>
            </div>
            <div className="row up4">
              <div className="col-4 content-part">
                <div className="icon-benefit">
                  <PieChartOutlined />
                </div>
                <div className="text-benefit">
                  <b>{benefit && benefit[0]?.subIntroService[3]?.title}</b>
                  <p>{benefit && <div dangerouslySetInnerHTML={{ __html: benefit[0]?.subIntroService[3]?.content }}></div>}</p>
                </div>
              </div>
              <div className="col-4 content-part">
                <div className="icon-benefit">
                  <SwitcherOutlined />
                </div>
                <div className="text-benefit">
                  <b>{benefit && benefit[0]?.subIntroService[4]?.title}</b>
                  <p>{benefit && <div dangerouslySetInnerHTML={{ __html: benefit[0]?.subIntroService[4]?.content }}></div>}</p>
                </div>
              </div>
              <div className="col-4 content-part">
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

export default Testing;
