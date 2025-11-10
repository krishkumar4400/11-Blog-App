import React, { useEffect } from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import BlogPage from './pages/BlogPage.jsx';
import Login from './pages/Login.jsx';

const App = () => {

  // useEffect(() => {
  //   const handleRightClick = (e) => e.preventDefault();
  //   document.addEventListener("contextmenu", handleRightClick);

  //   return () => {
  //     document.removeEventListener("contextmenu", handleRightClick);
  //   };
  // }, []);
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:id' element={<BlogPage/>}/>
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App
