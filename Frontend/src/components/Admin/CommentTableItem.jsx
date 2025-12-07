import React from 'react'
import { assets } from '../../assets/assets.js';

const CommentTableItem = ({comment, fetchComments}) => {
    const { blog, createdAt, _id } = comment;
    const blogDate = new Date(createdAt);
  return (
    <tr className="order-y border-gray-300">
      <td className="px-6 py-4">
        <b className="font-medium text-gray-600">Blog</b>: {blog.title}
        <br />
        <br />
        <b className="font-medium text-gray-600">Name</b>: {comment.name}
        <br />
        <b className="font-medium text-gray-600">Comment</b>: {comment.content}
      </td>
      <td className='max-sm:hidden px-6 py-4'>{blogDate.toLocaleDateString()}</td>

      <td className='px-6 py-4 '>
        <div className='inline-flex items-center gap-4'>
            {
                !comment.isApproved ? <img src={assets.tick_icon} className='w-5 hover:scale-110 transition-all cursor-pointer' alt="tick_icon" /> : <p className='text-xs border border-green-600 bg-green-200 text-green-700 rounded-full px-3 py-1'>Approved</p>
            }
            <img src={assets.bin_icon} className='w-5 hover:scale-110 transition-all cursor-pointer' alt="bin_icon" />
        </div>
      </td>
    </tr>
  );
}

export default CommentTableItem
