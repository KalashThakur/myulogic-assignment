import React from 'react'
import {Routes, Route} from "react-router-dom";
import HomePage from './HomePage';
import Test1 from './Test1';
import Test3 from './Test3';
import Test2 from './Test2';
import Test4 from './Test4';
import Test5 from './Test5';
import Result from './Result';


const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/question-1' element={<Test1 />} />
      <Route path='/question-2' element={<Test2 />} />
      <Route path='/question-3' element={<Test3 />} />
      <Route path='/question-4' element={<Test4 />} />
      <Route path='/question-5' element={<Test5 />} />
      <Route path='/result' element={<Result />} />
    </Routes>
  )
}

export default AllRoutes
