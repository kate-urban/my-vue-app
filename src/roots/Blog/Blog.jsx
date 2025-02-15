
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import '../Blog/Blog.css'

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <>
    <Header/>
    <div>
      <h1 className='blog'>Blog</h1>
      <ul className='blog-ul'>
        {posts.map(post => (
          <li className='blog-li' key={post.id}>
            <a className='blog-a' href={`/blog/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
    <Footer/>
    </>
  );
};

export default Blog;