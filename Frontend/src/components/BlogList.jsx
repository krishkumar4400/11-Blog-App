import React, { useState } from "react";
import BlogCard from "./BlogCard";
import { blogCategories } from "../assets/assets";
import {motion, spring} from 'motion/react';

const BlogList = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div className="mt-8">
      {/* Category Buttons */}
      <div className="flex items-center justify-center gap-3 px-4 mb-10 relative flex-wrap">
        {blogCategories.map((category, index) => (
          <motion.div
          transition={{type:spring, stiffness: 500, damping:30}}
            onClick={() => setMenu(category)}
            key={index}
            className={`px-6 py-2 text-sm font-medium rounded-full border border-gray-300 transition-all duration-200 relative cursor-pointer
              ${
                menu === category
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
          >
            {category}
          </motion.div>
        ))}
      </div>

      {/* Blog Cards */}
      <div>
        <BlogCard category={menu} />
      </div>
    </div>
  );
};

export default BlogList;
