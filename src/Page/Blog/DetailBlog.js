import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetailBlogStyle.scss';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
const DetailBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [highlightedVisible, setHighlightedVisible] = useState(false);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await fetch(`http://192.168.0.98:8080/api/blogs/get-by-id/${id}`);
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error('Error fetching blog details:', error);
      }
    };

    fetchBlogDetail();
  }, [id]);

  const toggleHighlightedVisibility = () => {
    setHighlightedVisible(!highlightedVisible);
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  const scrollToSection = (index) => {
    const section = document.getElementById(`section-${index}`);
    console.log(index);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const contentWithoutImages = blog.content.replace(/<img.*?>/g, '');
  const paragraphs = contentWithoutImages?.split('\n').filter((paragraph) => paragraph.trim() !== '');

  return (
    <div className="home">
      <section className="slider-detail-blog">
        <div className="siler-list">
          <div className="slider-item-home">
            <div className="container">
              <div className="slide-content">
                <div className="text-slider">
                  <p className="text-title">
                    <span>Detail Blog</span>
                  </p>
                  <p className="sub-text">
                    Welcome to the Aveo-Global Blog, your source for detailed information and the latest trends in the world of software development
                  </p>
                  <a href="/contact-us" target="_blank" className="btn btn-detail">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="detail-container">
        <div className="detail-blog">
          <div className="highlight" onClick={toggleHighlightedVisibility}>
            <span>Nội dung</span>
            {highlightedVisible ? <CaretUpOutlined size={15} color="brown" /> : <CaretDownOutlined size={15} color="brown" />}
          </div>
          {highlightedVisible && (
            <div className="highlight-content">
              <div className="highlighted-paragraphs">
                {paragraphs?.map((paragraph, index) => (
                  <p key={index} className="highlighted-paragraph" onClick={() => scrollToSection(index + 1)}>
                    <div dangerouslySetInnerHTML={{ __html: paragraph }} className="text-highlight"></div>
                  </p>
                ))}
              </div>
            </div>
          )}
          <h1>{blog?.title}</h1>
          <div className="blog-content">
            {blog?.content?.split('\n').map((paragraph, index) => (
              <div key={index} id={`section-${index + 1}`} dangerouslySetInnerHTML={{ __html: paragraph }}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBlog;
