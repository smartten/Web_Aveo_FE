import './offStyle.scss';
import React, { useEffect, useState } from 'react';
import { BulbOutlined, SelectOutlined, UserOutlined, PieChartOutlined, SwitcherOutlined, PaperClipOutlined } from '@ant-design/icons';

function Offshore() {
  const [banner, setBanner] = useState();
  const [ourService, setOurService] = useState();
  const [logo, setLogo] = useState();
  const [keyCus, setKeyCus] = useState();
  const [benefit, setBenefit] = useState();

  setTimeout(function () {
    var testarray = document.getElementsByClassName('img-fluid');
    for (var i = 0; i < testarray.length; i++) {
      testarray[i].classList.add('fadeInLeft', 'cssanimation');
    }
  }, 2500);
  setTimeout(function () {
    var heroText = document.getElementsByClassName('hero-text');
    for (var i = 0; i < heroText.length; i++) {
      heroText[i].classList.add('fadeInRight', 'cssanimation');
    }
  }, 2500);
  useEffect(() => {
    document.title = 'AVEO Global - Offshore Development Service';
    topFunction();
    fetchBanner();
    fetchOurService();
    fetchLogo();
    fetchKeyCus();
    fetchBenefit();
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
      if (window.scrollY >= 1800) {
        for (var i = 0; i < animate.length; i++) {
          animate[i].classList.add('fadeInUp', 'cssanimation');
        }
      }
      if (window.scrollY >= 1900) {
        for (var i = 0; i < animate2.length; i++) {
          animate2[i].classList.add('fadeInUp', 'cssanimation');
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
    <div className="container-fluid overflow-hidden p-0 m-0 g-0">
      <div className="hero-section g-0 m-0 py-sm-5">
        <div className="container d-flex">
          <div className="row mt-4 pt-5 mt-sm-5 pt-sm-0">
            <div className="col-12  col-md-5 py-0 py-sm-5">
              <img className="img-fluid py-0 py-sm-5" src={banner && banner?.[0]?.link} alt="banner" />
            </div>
            <div className="col-12 col-md-6 px-1 pb-3 px-sm-4 my-sm-auto hero-text">
              <h1>{banner && banner?.[0]?.title}</h1>
              <p className="px-3 px-sm-0">{banner && <div dangerouslySetInnerHTML={{ __html: banner?.[0]?.content }}></div>}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-0 m-0">
          <div className="col-12 my-5 section-title">
            <h3>{ourService && ourService[0]?.title}</h3>
            <p>{ourService && <div dangerouslySetInnerHTML={{ __html: ourService[0]?.content }}></div>}</p>
          </div>
        </div>

        <div className="row g-0 m-0 mb-sm-3 content-mob">
          <div style={{ marginRight: 'auto' }} className="col-12 col-sm-6 mobility">
            <div className="row m-0 p-0 g-0">
              <div className="col-12 col-lg-2">
                <img src={ourService && ourService[0]?.list[0]?.link} alt="" />
              </div>
              <div className="col-12 col-lg-10 fbox-txt">
                <h5>{ourService && ourService[0]?.list[0]?.title}</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6  mobility">
            <div className="row m-0 p-0 g-0">
              <div className="col-12 col-lg-2">
                <img src={ourService && ourService[0]?.list[1]?.link} alt="icon" />
              </div>
              <div className="col-12 col-lg-10 fbox-txt">
                <h5>{ourService && ourService[0]?.list[1]?.title}</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-0 m-0  mb-sm-3 content-mob">
          <div style={{ marginRight: 'auto' }} className="col-12 col-sm-6  mobility-2">
            <div className="row m-0 p-0 g-0">
              <div className="col-12  col-lg-2">
                <img src={ourService && ourService[0]?.list[2]?.link} alt="" />
              </div>
              <div className="col-12 col-lg-10 fbox-txt">
                <h5>{ourService && ourService[0]?.list[2]?.title}</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6  mobility-2">
            <div className="row m-0 p-0 g-0">
              <div className="col-12  col-lg-2">
                <img src={ourService && ourService[0]?.list[3]?.link} alt="" />
              </div>
              <div className="col-12 col-lg-10 fbox-txt">
                <h5>{ourService && ourService[0]?.list[3]?.title}</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-0 m-0 mb-sm-5 content-mob">
          <div style={{ marginRight: 'auto' }} className="col-12 col-sm-6  mobility-3">
            <div className="row m-0 p-0 g-0">
              <div className="col-12  col-lg-2">
                <img src={ourService && ourService[0]?.list[4]?.link} alt="" />
              </div>
              <div className="col-12 col-lg-10 fbox-txt">
                <h5>{ourService && ourService[0]?.list[4]?.title}</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6  mobility-3">
            <div className="row m-0 p-0 g-0">
              <div className="col-12 col-lg-2">
                <img src={ourService && ourService[0]?.list[5]?.link} alt="" />
              </div>
              <div className="col-12 col-lg-10 fbox-txt">
                <h5>{ourService && ourService[0]?.list[5]?.title}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* div end container */}

      <div className="row g-0 m-0">
        <div className="col-12 my-5 section-title">
          <h3 className="mb-sm-4">{logo && logo[0]?.title}</h3>
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
                <h5>{logo && logo[0]?.list[0]?.title}</h5>
                <p>{logo && <div dangerouslySetInnerHTML={{ __html: logo[0]?.list[0]?.content }}></div>}</p>
              </div>
            </div>
          </div>
          <div className="col-2 col-sm-6  px-sm-4 step">
            <div className="row p-3 py-sm-4 g-0">
              <div className="col-2 col-sm-1">
                <span className="nr">2</span>
              </div>
              <div className="col-10 col-sm-11 px-sm-3  p-lg-2 fbox-txt">
                <h5>{logo && logo[0]?.list[1]?.title}</h5>
                <p>{logo && <div dangerouslySetInnerHTML={{ __html: logo[0]?.list[1]?.content }}></div>}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-0 mb-sm-3 step-for-col">
          <div style={{ marginRight: 'auto' }} className="col-12 col-sm-6  px-sm-4 step">
            <div className="row m-0 p-3 py-sm-4 g-0">
              <div className="col-2 col-sm-1">
                <span className="nr">3</span>
              </div>
              <div className="col-10 col-sm-11 px-sm-3  p-lg-2 fbox-txt">
                <h5>{logo && logo[0]?.list[2]?.title}</h5>
                <p>{logo && <div dangerouslySetInnerHTML={{ __html: logo[0]?.list[2]?.content }}></div>}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6  px-sm-4 step">
            <div className="row p-3 py-sm-4 g-0">
              <div className="col-2 col-sm-1">
                <span className="nr">4</span>
              </div>
              <div className="col-10 col-sm-11 px-sm-3  p-lg-2 fbox-txt">
                <h5>{logo && logo[0]?.list[3]?.title}</h5>
                <p>{logo && <div dangerouslySetInnerHTML={{ __html: logo[0]?.list[3]?.content }}></div>}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-0 mb-sm-5 step-for-col">
          <div style={{ marginRight: 'auto' }} className="col-12 col-sm-6  px-sm-4 step">
            <div className="row m-0 p-3 py-sm-4 g-0">
              <div className="col-2 col-sm-1">
                <span className="nr">5</span>
              </div>
              <div className="col-10 col-sm-11 px-sm-3  p-lg-2 fbox-txt">
                <h5>{logo && logo[0]?.list[4]?.title}</h5>
                <p>{logo && <div dangerouslySetInnerHTML={{ __html: logo[0]?.list[4]?.content }}></div>}</p>
                <br />
                <br />
                <p></p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6"></div>
        </div>

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
export default Offshore;
