import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import '../Blog/Blog.css'



const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error('Error fetching post:', error));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <>
    <Header/>
    <div className='main-title'>
      <h1 className='blog-main'>{post.title}</h1>
      <p className='blog-title'>{post.body}</p>
    </div>
    <Footer/>
    </>
  );
};

export default BlogPost;