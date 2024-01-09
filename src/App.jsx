import React from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Constants/Layout';
import Login from './components/Auth/Login';
import MembersGroup from './components/MembersGroup';
import Students from './components/Students';
import Videos from './components/Videos';
import Articles from './components/Articles';
import Events from './components/Events';
import Announcement from './components/Announcement';
import Jariya from './components/Jariya';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Students/>}/> 
          <Route path='/videos' element={<Videos/>}/> 
          <Route path='/articles' element={<Articles/>}/> 
          <Route path='/events' element={<Events/>}/> 
          <Route path='/announcement' element={<Announcement/>}/> 
          <Route path='/jariya' element={<Jariya/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App