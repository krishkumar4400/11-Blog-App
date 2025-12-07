import React, { useEffect, useRef, useState } from 'react'
import { assets, blogCategories } from '../../assets/assets.js'
import Quill from 'quill';

const AddBlogs = () => {
  const [image, setImage] = useState(false);
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [category, setCategory] = useState("satrtup");
  const [isPublished, setIsPublished] = useState(false);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const generateContent = async (e) => {
    e.preventDefault();

  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      console.log("Try Block");
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    // initiate quill only once
    if(!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {theme: 'snow'});
    }
  }, [])
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex-1  bg-blue-50/50 text-gray-600 h-full overflow-scroll"
    >
      <div className="bg-white h-screen relative w-full max-w-3xl p-4 ms:p-10 sm:m-10 shadow rounded">
        <p>upload thumbnail</p>
        <label htmlFor="image">
          <img
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt="upload_area"
            className="mt-2 h-16 rounded cursor-pointer"
          />
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </label>
        <p className="mt-4">Blog Title</p>
        <input
          type="text"
          required
          placeholder="Type here"
          className="w-full max-w-lg mt-2 p-2 px-4 border border-gray-300 outline-none rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p className="mt-4">Sub Title</p>
        <input
          type="text"
          required
          placeholder="Type here"
          className="w-full max-w-lg mt-2 p-2 px-4 border border-gray-300 outline-none rounded"
          value={subTitle}
          onChange={(e) => setSubTitle(e.target.value)}
        />

        <p className="mt-4">Blog Description</p>
        <div className="">
          <div ref={editorRef}></div>
          <button
            className="absolute bottom-1 right-2 ml-2 my-4 mx-4 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer"
            onClick={generateContent}
          >
            Generate with AI
          </button>
        </div>

        <p className="mt-4">Blog Category</p>
        <select required
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          name="category"
          className="mt-2 px-3 py-2 border text-gray-500 outline-0 rounded border-gray-300 "
        >
          <option value="">Select category</option>
          {blogCategories.map((category, index) => {
            return (
              <option value={category} key={index}>
                {category}
              </option>
            );
          })}
        </select>

        <div className='flex gap-2 mt-4 items-center'>
          <p>Publish now</p>
          <input
            onChange={(e) => setIsPublished(e.target.checked)}
            type="checkbox"
            checked={isPublished}
            className="scale-125 cursor-pointer"
          />
        </div>

        <button type='submit' className='mt-8 w-40 h-10 bg-blue-600 text-white rounded cursor-pointer text-sm text-center'>Add Blog</button>
      </div>
    </form>
  );
}

export default AddBlogs
