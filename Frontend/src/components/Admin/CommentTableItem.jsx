import React from 'react'

const CommentTableItem = ({comment, fetchComments}) => {
    const {blog, createdAt, _id} = comment
    const blogDate = new Date(createdAt);
  return (
    <tr>
        <td></td>
    </tr>
  )
}

export default CommentTableItem
