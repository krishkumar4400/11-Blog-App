import React, { useEffect, useState } from 'react'
import {List, ListFilterPlus, LucideListChecks} from 'lucide-react';
import { blog_data, comments_data } from '../../assets/assets';

const Dashboard = () => {
    const [blog, setBlog] = useState([]);
    const [drafts, setDrafts] = useState([10]);
    const fetchBlogs = async () => {
        setBlog(blog_data);
    }

    const setDraftData = async() => {
        // setDrafts("")
    }

    useEffect(() => {
        fetchBlogs();
    }, [blog]);

  return (
    <div>
      <div className="flex items-center max-w-sm sm:flex-wrap justify-center gap-4">
        <div className="flex gap-4 border border-gray-300 bg-white p-4 px-8 rounded-md">
          <LucideListChecks size={35} className="text-blue-600 " />
          <div className="text-slate-800 font-semibold text-xl">
            {blog.length} <span className="text-gray-600 "> {blog.length > 1 ? "Blogs" : "Blog"} </span>
          </div>
        </div>
        <div className="flex gap-4 border border-gray-300 bg-white p-4 px-8 rounded-md">
          <LucideListChecks size={35} className="text-blue-600 " />
          <div className="text-slate-800 font-semibold text-xl">
            {comments_data.length} <span className="text-gray-600 "> {comments_data.length > 1 ? "Comments" : "Comment"} </span>
          </div>
        </div>
        <div className="flex gap-4 border border-gray-300 bg-white p-4 px-8 rounded-md">
          <LucideListChecks size={35} className="text-blue-600 " />
          <div className="text-slate-800 font-semibold text-xl">
            {drafts.length} <span className="text-gray-600 ">{ drafts.length > 1 ? "Drafts" : "Draft" }</span>
          </div>
        </div>
      </div>

      <div>
        <h2>
            <ListFilterPlus/>
            <table>
                
            </table>
        </h2>
      </div>
    </div>
  );
}

export default Dashboard
