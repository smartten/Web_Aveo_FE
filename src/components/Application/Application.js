import image1 from './Application dev.png';
import './applicationStyle.scss';
import React, { useEffect, useState } from 'react';
import { BulbOutlined, SelectOutlined, UserOutlined, PieChartOutlined, SwitcherOutlined, PaperClipOutlined } from '@ant-design/icons';

function Application() {
  const [banner, setBanner] = useState();
  const [ourService, setOurService] = useState();
  const [logo, setLogo] = useState();
  const [keyCus, setKeyCus] = useState();
  const [benefit, setBenefit] = useState();
  const [introServ, setIntroServ] = useState();
  setTimeout(function () {
    var testarray = document.getElementsByClassName('img-fluid');
    for (var i = 0; i < testarray.length; i++) {
      testarray[i].classList.add('fadeInLeft', 'cssanimation');
    }
    // var heroSection = document.getElementsByClassName("hero-section");
    // for (var i = 0; i < heroSection.length; i++) {
    //   heroSection[i].style.height = "auto";
    // }
  }, 2500);
  setTimeout(function () {
    var heroText = document.getElementsByClassName('hero-text');
    for (var i = 0; i < heroText.length; i++) {
      heroText[i].classList.add('fadeInRight', 'cssanimation');
    }
  }, 2500);
  useEffect(() => {
    document.title = 'AVEO Global - Application Development';
    topFunction();
    fetchBanner();
    fetchOurService();
    fetchKeyCus();
    fetchBenefit();
    fetchIntroServ();
    fetchLogo();
  }, []);

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      var mobility = document.getElementsByClassName('mobility');
      var mobility2 = document.getElementsByClassName('mobility-2');
      var mobility3 = document.getElementsByClassName('mobility-3');
      var imgDigi = document.getElementsByClassName('img-digi');
      var txtBlock = document.getElementsByClassName('txt-block');
      var animate = document.getElementsByClassName('animate');
      var animate2 = document.getElementsByClassName('animate-2');
      var animate3 = document.getElementsByClassName('bg-snow-animate');

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
      if (window.scrollY >= 750) {
        for (var i = 0; i < mobility3.length; i++) {
          mobility3[i].classList.add('fadeInUp', 'cssanimation');
        }
      }
      if (window.scrollY >= 1000) {
        for (var i = 0; i < imgDigi.length; i++) {
          imgDigi[i].classList.add('fadeInLeft', 'cssanimation');
        }
        for (var i = 0; i < txtBlock.length; i++) {
          txtBlock[i].classList.add('fadeInRight', 'cssanimation');
        }
      }
      if (window.scrollY >= 1650) {
        for (var i = 0; i < animate3.length; i++) {
          animate3[i].classList.add('fadeInUp', 'cssanimation');
        }
      }
      if (window.scrollY >= 3000) {
        for (var i = 0; i < animate.length; i++) {
          animate[i].classList.add('fadeInUp', 'cssanimation');
        }
      }
      if (window.scrollY >= 3300) {
        for (var i = 0; i < animate2.length; i++) {
          animate2[i].classList.add('fadeInUp', 'cssanimation');
        }
      }
    });
  }, []);

  const fetchLogo = async () => {
    try {
      const res = await fetch('http://192.168.0.98:8080/api/collab/get-all');
      const data = await res.json();
      setLogo(data);
    } catch (error) {
      console.error('Error fetching menu and logo:', error);
    }
  };
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
      <div className="hero-section g-0 m-0 py-sm-5">
        <div className="container d-flex">
          <div className="row mt-4 pt-5 mt-sm-0 pt-sm-0">
            <div className="col-12  col-md-5 py-0 py-sm-5">
              <img className="img-fluid py-0 py-sm-5" src={image1} alt="" />
            </div>
            <div className="col-12 col-md-6 px-1 pb-3 px-sm-4 my-sm-auto hero-text">
              <h1>Application Development</h1>
              <p className="px-3 px-sm-0">
                Automate your business processes, cost saving, stay connected with your clients and get more revenue. The market is now in your hand.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-0 m-0">
          <div className="col-12 my-5 section-title">
            <h3>{ourService && ourService[1]?.title}</h3>
            <p>{ourService && <div dangerouslySetInnerHTML={{ __html: ourService[1]?.content }}></div>}</p>
          </div>
        </div>

        <div className="row g-0 m-0 mb-sm-3 content-mob">
          <div style={{ marginRight: 'auto' }} className="col-12 col-sm-6 mobility">
            <div className="row m-0 p-0 g-0">
              <div className="col-12 col-lg-2">
                <img src={ourService && ourService[1]?.list[0]?.link} alt="" />
              </div>
              <div className="col-12 col-lg-10 fbox-txt">
                <h5>{ourService && ourService[1]?.list[0]?.title}</h5>
                <p>{ourService && <div dangerouslySetInnerHTML={{ __html: ourService[1]?.list[0]?.content }}></div>}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6  mobility">
            <div className="row m-0 p-0 g-0">
              <div className="col-12 col-lg-2">
                <img src={ourService && ourService[1]?.list[1]?.link} alt="" />
              </div>
              <div className="col-12 col-lg-10 fbox-txt">
                <h5>{ourService && ourService[1]?.list[1]?.title}</h5>
                <p>{ourService && <div dangerouslySetInnerHTML={{ __html: ourService[1]?.list[1]?.content }}></div>}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-0 m-0  mb-sm-3 content-mob">
          <div style={{ marginRight: 'auto' }} className="col-12 col-sm-6  mobility-2">
            <div className="row m-0 p-0 g-0">
              <div className="col-12  col-lg-2">
                <img src={ourService && ourService[1]?.list[2]?.link} alt="" />
              </div>
              <div className="col-12 col-lg-10 fbox-txt">
                <h5>{ourService && ourService[1]?.list[2]?.title}</h5>
                <p>{ourService && <div dangerouslySetInnerHTML={{ __html: ourService[1]?.list[2]?.content }}></div>}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6  mobility-2">
            <div className="row m-0 p-0 g-0">
              <div className="col-12  col-lg-2">
                <img src={ourService && ourService[1]?.list[3]?.link} alt="" />
              </div>
              <div className="col-12 col-lg-10 fbox-txt">
                <h5>{ourService && ourService[1]?.list[3]?.title}</h5>
                <p>{ourService && <div dangerouslySetInnerHTML={{ __html: ourService[1]?.list[3]?.content }}></div>}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-0 m-0 mb-sm-5 content-mob">
          <div style={{ marginRight: 'auto' }} className="col-12 col-sm-6  mobility-3">
            <div className="row m-0 p-0 g-0">
              <div className="col-12  col-lg-2">
                <img src={ourService && ourService[1]?.list[4]?.link} alt="" />
              </div>
              <div className="col-12 col-lg-10 fbox-txt">
                <h5>{ourService && ourService[1]?.list[4]?.title}</h5>
                <p>{ourService && <div dangerouslySetInnerHTML={{ __html: ourService[1]?.list[4]?.content }}></div>}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6  mobility-3">
            <div className="row m-0 p-0 g-0">
              <div className="col-12 col-lg-2">
                <img src={ourService && ourService[1]?.list[5]?.link} alt="" />
              </div>
              <div className="col-12 col-lg-10 fbox-txt">
                <h5>{ourService && ourService[1]?.list[5]?.title}</h5>
                <p>{ourService && <div dangerouslySetInnerHTML={{ __html: ourService[1]?.list[5]?.content }}></div>}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* div end container */}

      <br />
      <div className="container">
        <div className="row g-0 mt-5">
          <div className="col-12 col-sm-6 col-lg-6">
            <img className="img-digi" src={introServ && introServ[0]?.link} alt="" />
          </div>
          <div style={{}} className="col-12 col-sm-6 col-lg-6 py-lg-5 px-lg-2 my-lg-auto txt-block">
            <h3 className="p-1 pt-4 pt-sm-0">{introServ && introServ[0]?.title}</h3>
            <div>
              <ul>
                <li class="list-item">
                  <p>{introServ && <div dangerouslySetInnerHTML={{ __html: introServ[0]?.content }}></div>}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div className="m-5 py-sm-5 bg-snow">
        <div className="container">
          <div className="row px-2 px-sm-0 bg-snow-animate">
            <div className="col-sm-4 g-0 gx-sm-4">
              <div className="row g-0 p-0 ">
                <div className="col-4 col-sm-5">
                  <span>600+</span>
                </div>
                <div className="col-8 col-sm-7 my-sm-auto pt-2 pt-sm-1 pt-lg-3 gx-sm-5">
                  <p>Businesses Are Digitized</p>
                </div>
              </div>
            </div>

            <div style={{ marginRight: 'auto', marginLeft: 'auto' }} className="col-sm-4 g-0 p-0">
              <div className="row g-0 p-0 m-0">
                <div className="col-xl-2"></div>
                <div className="col-4 col-sm-5 col-xl-4 g-0">
                  <span>80%</span>
                </div>
                <div className="col-8 col-sm-7  col-xl-6 my-sm-auto pt-2 pt-sm-0 pt-lg-3 g-0">
                  <p>Increase 4X Revenue</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="row">
                <div className="col-xl-4"></div>
                <div className="col-4 col-sm-5 col-xl-4 g-0">
                  <span>96%</span>
                </div>
                <div
                  // style={{ float: "right" }}
                  className="col-8 col-sm-7 col-xl-4 my-sm-auto pt-2 pt-sm-2 pt-lg-3  g-0"
                >
                  <p>Cost Saving</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-0 m-0 ">
        <div className="col-12 my-5 section-title" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <h3 className="mb-sm-4">{logo && logo[1]?.title}</h3>
          <p style={{ width: '50%' }}>{logo && <div dangerouslySetInnerHTML={{ __html: logo[1]?.content }}></div>}</p>
        </div>
      </div>

      <div className="container">
        <div className="row g-0 mb-sm-3 step-for-col">
          <div style={{ marginRight: 'auto' }} className="col-12 col-sm-6 px-sm-4 step">
            <div className="row m-0 p-3 py-sm-4 g-0">
              <div className="col-2 col-sm-1">
                <span className="nr">1</span>
              </div>
              <div className="col-10 col-sm-11 px-sm-3  p-lg-2 fbox-txt">
                <h5>{logo && logo[1]?.list[0]?.title}</h5>
                <p>{logo && <div dangerouslySetInnerHTML={{ __html: logo[1]?.list[0]?.content }}></div>}</p>
              </div>
            </div>
          </div>
          <div className="col-2 col-sm-6  px-sm-4 step">
            <div className="row p-3 py-sm-4 g-0">
              <div className="col-2 col-sm-1">
                <span className="nr">2</span>
              </div>
              <div className="col-10 col-sm-11 px-sm-3  p-lg-2 fbox-txt">
                <h5>{logo && logo[1]?.list[1]?.title}</h5>
                <p>{logo && <div dangerouslySetInnerHTML={{ __html: logo[1]?.list[1]?.content }}></div>}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-0 mb-sm-5 step-for-col">
          <div style={{ marginRight: 'auto' }} className="col-12 col-sm-6  px-sm-4 step">
            <div className="row m-0 p-3 py-sm-4 g-0">
              <div className="col-2 col-sm-1">
                <span className="nr">3</span>
              </div>
              <div className="col-10 col-sm-11 px-sm-3  p-lg-2 fbox-txt">
                <h5>{logo && logo[1]?.list[2]?.title}</h5>
                <p>{logo && <div dangerouslySetInnerHTML={{ __html: logo[1]?.list[2]?.content }}></div>}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6  px-sm-4 step">
            <div className="row p-3 py-sm-4 g-0">
              <div className="col-2 col-sm-1">
                <span className="nr">4</span>
              </div>
              <div className="col-10 col-sm-11 px-sm-3  p-lg-2 fbox-txt">
                <h5>{logo && logo[1]?.list[3]?.title}</h5>
                <p>{logo && <div dangerouslySetInnerHTML={{ __html: logo[1]?.list[3]?.content }}></div>}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-sm-5 py-5 g-0">
          <div className="col-12 g-0">
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
                <p className="my-sm-3">{benefit && <div dangerouslySetInnerHTML={{ __html: benefit[0]?.subIntroService[0]?.content }}></div>}</p>
              </div>
            </div>
            <div style={{ marginRight: 'auto' }} className="col-lg-4 mb-3 mb-lg-0 px-4 content-part">
              <div className="icon-benefit mb-4">
                <SelectOutlined />
              </div>
              <div className="text-benefit">
                <span>{benefit && benefit[0]?.subIntroService[1]?.title}</span>
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
            <div className="col-lg-4 mb-4 mb-sm-0 px-4 content-part">
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
      {/* end container */}
    </div>
  );
}
export default Application;
