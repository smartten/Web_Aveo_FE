import React, { useEffect, useState } from 'react';
import './BlogStyle.scss';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [filterTitle, setFilterTitle] = useState('');
  const [sort, setSort] = useState('createdAt');
  const [direction, setDirection] = useState('desc');

  const fetchBlogs = async () => {
    const response = await fetch(`http://192.168.0.98:8080/api/blogs/all?page=${page}&filterTitle=${filterTitle}&sort=${sort}&direction=${direction}&size=6`);
    const data = await response.json();
    setBlogs(data.content);
    setTotalPages(data.totalPages);
  };

  useEffect(() => {
    fetchBlogs();
  }, [page, filterTitle, sort, direction]);

  const handleNextPage = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleFilterChange = (e) => {
    setFilterTitle(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const handleDirectionChange = (e) => {
    setDirection(e.target.value);
  };

  return (
    <div className="home">
      <section className="slider-blog">
        <div className="siler-list">
          <div className="slider-item-home">
            <div className="container">
              <div className="slide-content">
                <div className="text-slider">
                  <p className="text-title">
                    <span>Blog</span>
                  </p>
                  <p className="text-title"> </p>
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

      <div className="blog-container">
        <div className="blog-layout">
          <div className="blog-list">
            <h1>Blog List</h1>
            <div className="filter-sort">
              <input type="text" value={filterTitle} onChange={handleFilterChange} placeholder="Filter by title" />
              <select value={sort} onChange={handleSortChange}>
                <option value="createdAt">Created At</option>
                <option value="title">Title</option>
              </select>
              <select value={direction} onChange={handleDirectionChange}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>

            <div className="blog-grid">
              {blogs?.map((blog) => (
                <Link to={`/blog/${blog.id}`} className="blog-item" key={blog.id}>
                  <img src={blog.link} alt={blog.title} />
                  <h2>{blog.title}</h2>
                  <div className="blog-date">{moment(blog.createdAt).format('LL')}</div>
                </Link>
              ))}
            </div>

            <div className="pagination">
              <button onClick={handlePrevPage} disabled={page === 0}>
                Previous
              </button>
              <button onClick={handleNextPage} disabled={page >= totalPages - 1}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
