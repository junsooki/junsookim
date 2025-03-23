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
import { Blogs } from './components/pages/Blogs';
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

function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Blog</h2>
      <ul className="mb-8">
        <li className="mb-2">
          <Link to="/blog/topic1" className="text-blue-500 hover:text-blue-700 underline">Topic 1</Link>
        </li>
        <li className="mb-2">
          <Link to="/blog/topic2" className="text-blue-500 hover:text-blue-700 underline">Topic 2</Link>
        </li>
      </ul>

      <Routes>
        <Route path=":topicId" element={<Topic />} />
        <Route index element={<h3 className="text-xl text-gray-300">Please select a topic.</h3>} />
      </Routes>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3 className="text-2xl font-bold">Requested topic: {topicId}</h3>;
}

export default App;