import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RestaurantList from './components/Restaurant/RestaurantList';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header></Header>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/search' element={<RestaurantList/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
