import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/React_bootsrap/Home'
import Contact from './components/React_bootsrap/Contact'
import Blog from './components/React_bootsrap/Blog'
import Error from './components/React_bootsrap/Error'
import Appcss from './App.css'
import Navbar from './components/Navbar';

function App(){
    return(
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Blog' element={<Blog/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
        </BrowserRouter>
    );
}
export default App;