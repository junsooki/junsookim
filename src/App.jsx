import React, { useState } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import './App.css'
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/pages/sections/Home';
import { About } from './components/pages/sections/About';
import { Projects } from './components/pages/sections/Projects';
import { BlogPreviews } from './components/pages/sections/BlogPreviews';
import { Contact } from './components/pages/sections/Contact';
import { BlogPage } from './components/pages/BlogPage';
import { Timeline } from './components/pages/sections/Timeline';
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Routes>
          <Route path="/" element={<DefaultPage />} />
          <Route path="/blog/*" element={<BlogPage />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </div>
    </>
  );
}

function DefaultPage() {
  return (
    <main>
      <Home />
      <About />
      <Projects />
      <BlogPreviews />
      <Contact />
    </main>
  );
}

// function Topic() {
//   let { topicId } = useParams();
//   return <h3 className="text-2xl font-bold">Requested topic: {topicId}</h3>;
// }

export default App;