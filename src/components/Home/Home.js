import './HomeStyles.scss';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Rate } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
function Home() {
  const [banner, setBanner] = useState([]);
  const [keyCus, setKeyCus] = useState([]);
  const [keyComCus, setKeyComCus] = useState([]);
  const [introComm, setIntroComm] = useState([]);

  setTimeout(function () {
    var text = document.getElementsByClassName('text-slider');
    for (var i = 0; i < text.length; i++) {
      text[i].classList.add('fadeInRight', 'cssanimation1');
    }
  }, 500);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    document.title = 'AVEO Global - Leading Software Development Company in Vietnam';
    setWidth(window.screen.width);
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      var imageBlock = document.getElementsByClassName('img-fluid');
      var txtblock = document.getElementsByClassName('txt-block');
      var service = document.getElementsByClassName('service-content');
      var bigGuy = document.getElementsByClassName('big-guys');
      if (window.scrollY >= 300) {
        for (var i = 0; i < imageBlock.length; i++) {
          imageBlock[i].classList.add('fadeInLeft', 'cssanimation');
        }
        for (var i = 0; i < txtblock.length; i++) {
          txtblock[i].classList.add('fadeInRight', 'cssanimation');
        }
      }
      if (window.scrollY >= 600) {
        for (var i = 0; i < service.length; i++) {
          service[i].classList.add('fadeInLeft', 'cssanimation');
        }
      }
      if (window.scrollY >= 1560) {
        for (var i = 0; i < bigGuy.length; i++) {
          bigGuy[i].classList.add('fadeInLeft', 'cssanimation');
        }
      }
    });
  }, []);

  const fetchBanner = async () => {
    try {
      const res = await fetch('http://192.168.0.98:8080/api/banner/get-all');
      const data = await res.json();
      setBanner(data);
    } catch (error) {
      console.error('Error fetching menu and logo:', error);
    }
  };

  const fetchCommCus = async () => {
    try {
      const res = await fetch('http://192.168.0.98:8080/api/comment-customer/get-all');
      const data = await res.json();
      setKeyComCus(data);
    } catch (error) {
      console.error('Error fetching menu and logo:', error);
    }
  };
  const fetchIntroCom = async () => {
    try {
      const res = await fetch('http://192.168.0.98:8080/api/introduce-company');
      const data = await res.json();
      setIntroComm(data);
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

  useEffect(() => {
    fetchKeyCus();
    fetchBanner();
    fetchCommCus();
    fetchIntroCom();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="home">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item-home">
            <div className="container">
              <div className="slide-content">
                <div className="text-slider">
                  <p className="text-title">
                    <span>Leading Software</span>
                  </p>
                  <p className="text-title">Development Company</p>
                  <p className="text-title">in Vietnam</p>
                  <p className="sub-text">
                    With dedicated and experienced software engineers, we accompany clients to create lasting value throughout the digital transformation process.
                  </p>
                  <a href="/contact-us" target="_blank" className="btn btn-detail">
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-us">
        <div className="container">
          <div className="top-row pb-50">
            <div className="row d-flex align-items-center">
              <div className="col-md-5 col-lg-6 order-first order-md-2">
                <div className="img-block left-column wow" style={{ visibility: 'visible' }}>
                  <img
                    className="img-fluid"
                    src={introComm[0]?.link}
                    alt="Vietnam Software Development Outsourcing Company"
                    // style={{ display: "block" }}
                  />
                </div>
              </div>
              <div className="col-md-7 col-lg-6 order-last order-lg-2">
                <div className="txt-block left-column wow" style={{ visibility: 'visible' }}>
                  <h3 className="h3-xs">{introComm[0]?.title}</h3>
                  <p className="p-lg">
                    <div dangerouslySetInnerHTML={{ __html: introComm[0]?.content }}></div>
                  </p>
                  <div className="btns-group mb-30 wow " style={{ visibility: 'visible' }}>
                    <a className="btn btn-contact" href="/contact-us">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-services">
        <div className="title-service container">
          <div class="row justify-content-center">
            <div class="col-md-10 col-lg-8">
              <div class="section-title title-02 mb-75">
                <h1 class="h3-xl">Our Services Offering</h1>
                <p class="p-xl">We offer a complete solution from consulting, designing, R&D, developing, integrating, deploying and system maintenance for businesses</p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-content container">
          {banner?.map((el) => (
            <div className="row" key={el.id}>
              <div className="col-3">
                <div
                  className="our-service-box"
                  style={{
                    background: `url("${el.link}") 0% 0% / cover no-repeat`,
                    visibility: 'visible',
                  }}
                >
                  <div className="box-service-content">
                    <div className="title-box">
                      <p>{el.title}</p>
                    </div>
                    <p className="text-content">
                      <div dangerouslySetInnerHTML={{ __html: el.content }}></div>
                    </p>
                    <br />
                    <div className="icon-box">
                      <a href={`/${el.link}`}>
                        <ArrowRightOutlined />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
      <section className="comment">
        <div className="siler-list">
          <div className="slider-item-comment">
            <div className="container">
              <div className="slide-content">
                <div className="text mb-5">
                  <p className="text-title">What our clients say about us?</p>
                </div>
                {width > 1024 ? (
                  <Slider {...settings}>
                    {keyComCus?.map((el) => (
                      <div className="row comment-content d-flex">
                        {el?.subCommentCus.map((item) => (
                          <div className="col-4">
                            <div className="box-comment">
                              <p className="comment-content">{item.content}</p>
                              <p className="name-comment">{item.name}</p>
                              <p className="address-name">{item.address}</p>
                              <Rate defaultValue={item.evaluate} disabled className="mobile" />
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                    {keyComCus?.map((el) => (
                      <div className="row comment-content d-flex">
                        {el?.subCommentCus.map((item) => (
                          <div className="col-4">
                            <div className="box-comment">
                              <p className="comment-content">{item.content}</p>
                              <p className="name-comment">{item.name}</p>
                              <p className="address-name">{item.address}</p>
                              <Rate defaultValue={item.evaluate} disabled className="mobile" />
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <Slider {...settings}>
                    {keyComCus.map((item, index) => (
                      <div className="row comment-content d-flex" key={index}>
                        <div className="col-4">
                          <div className="box-comment">
                            <p className="comment-content">{item.content}</p>
                            <p className="name-comment">{item.name}</p>
                            <p className="address-name">{item.address}</p>
                            <Rate defaultValue={5} disabled className="mobile" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
