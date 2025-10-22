import React from 'react'
import { useParams } from 'react-router-dom'
import { blog_data } from '../assets/assets';

const BlogPage = () => {
  const {id} = useParams();
  console.log(id)
  return (
    <div>
      {
        blog_data.find(id)
      }
    </div>
  )
}

export default BlogPage
