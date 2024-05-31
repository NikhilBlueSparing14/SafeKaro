import React from 'react';
import './Blog.css';
import img1 from '../../assets/insurance1.png';
import img2 from '../../assets/insurance2.png';
import img3 from '../../assets/insurance3.png';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      imageUrl: img1,
      date: '10',
      month: 'Jan',
      year: '2024',
      title: 'Get a Personal Insurance this Winter?',
    },
    {
      id: 2,
      imageUrl: img2,
      date: '15',
      month: 'Feb',
      year: '2024',
      title: 'Choose the Right Insurance Policy',
    },
    {
      id: 3,
      imageUrl: img3,
      date: '20',
      month: 'Mar',
      year: '2024',
      title: 'Why Life Insurance is Important',
    },
  ];

  return (
    <section id='Blog' className='blog-main'>
    <div className="blog-container">
      <h1 className="blog-title"> <span className='heading1'>Latest News</span> & <span className='heading2'>Articles From the Blog Posts</span></h1>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div className="blog-post" key={post.id}>
            <img src={post.imageUrl} alt={`Blog post ${post.id}`} className="post-image" />
            <div className="post-details">
              <div className="post-date">{`${post.date} ${post.month} ${post.year}`}</div>
              <h2 className="post-title">{post.title}</h2>
              <div className="read-more">Read More &gt;</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Blog;