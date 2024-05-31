import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import Services from './Components/Services/Services';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero'

const ScrollHandler = ({ sectionRefs }) => {
  const location = useLocation();

  useEffect(() => {
    const section = sectionRefs[location.pathname];
    if (section && section.current) {
      section.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location, sectionRefs]);

  return null;
};

const App = () => {
  const heroRef = useRef(null);
  const blogRef = useRef(null);
  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const homeRef = useRef(null);
  const footerRef = useRef(null);

  const sectionRefs = {

    '/home': homeRef,
    '/aboutus': aboutUsRef,
    './hero':heroRef,
    '/blog': blogRef,
    '/services': servicesRef,
    '/footer': footerRef,
  };

  return (
    <Router>
      <Navbar />
      <ScrollHandler sectionRefs={sectionRefs} />
      <div>
      <section ref={homeRef}><Home /></section>
        <section ref={aboutUsRef}><AboutUs /></section>
        <section ref={heroRef}><Hero/></section>
        <section ref={blogRef}><Blog /></section>
        <section ref={servicesRef}><Services /></section>
        <section ref={footerRef}><Footer /></section>
      </div>
      <Routes>
      <Route path="/home" element={<div />} />
        <Route path="/aboutus" element={<div />} />
        <Route path='/hero' element={<div/>} />
        <Route path="/blog" element={<div />} />
        <Route path="/services" element={<div />} />
        <Route path="/footer" element={<div />} />
      </Routes>
    </Router>
  );
};

export default App;
