import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './fonts/Outfit-VariableFont_wght.ttf';
import Navbar from './components/common/Navbar';
import './App.css'
import Portfolio from './components/view/Portfolio';
import MyAccount from './components/view/MyAccount';
import Pricing from './components/view/Pricing';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Portfolio />} />
          <Route exact path="/account" element={<MyAccount />} />
          <Route exact path="/pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;