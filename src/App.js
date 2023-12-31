import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './fonts/Outfit-VariableFont_wght.ttf';
import Navbar from './components/common/Navbar';
import './App.css'
import Portfolio from './components/view/Portfolio';
import MyAccount from './components/view/MyAccount';
import Pricing from './components/view/Pricing';
import Home from './components/view/Home';
import BlogSinglePost from './components/view/BlogSinglePost';
import Blog from './components/view/Blog';
import BusinessCa from './components/view/blog_categories/BusinessCa';
import LifestyleCa from './components/view/blog_categories/LifestyleCa';
import MarketCa from './components/view/blog_categories/MarketCa';
import ConsultingCa from './components/view/blog_categories/ConsultingCa';
import Footer from './components/common/Footer';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route exact path="/" element={<Portfolio />} /> */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/account" element={<MyAccount />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/my_portfolio" element={<Portfolio />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blog_details" element={<BlogSinglePost />} />
          <Route exact path="/business" element={<BusinessCa />} />
          <Route exact path="/consulting" element={<ConsultingCa />} />
          <Route exact path="/lifestyle" element={<LifestyleCa />} />
          <Route exact path="/market" element={<MarketCa />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>

  );
}

export default App;
