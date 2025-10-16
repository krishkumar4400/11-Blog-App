import React from 'react'

const BlogList = () => {
  const categories = [
    {name: 'All',},
    {name: 'Technology',},
    {name: 'Hardware',},
    {name: 'Startup',},
    {name: 'Lifestyle',},
    {name: 'Finance',},
  ];
  
  return (
    <div>
      <div className="inline-flex items-center gap-4 px-4 mb-10">
        {categories.map((category, index) => (
          <button
            className="px-5 py-1.5 text-gray-700 rounded-full border-0 "
            key={index}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default BlogList
