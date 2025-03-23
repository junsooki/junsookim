import { Routes, Route, Link } from 'react-router-dom';
import { BlogPost1 } from './blogs/BlogPost1';
import { BlogPost2 } from './blogs/BlogPost2';

export const BlogPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Blog</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Blog navigation sidebar */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold mb-3">Posts</h3>
          <ul className="mb-8">
            <li className="mb-2">
              <Link to="/blog/1" className="hover:text-blue-500 transition">First Post</Link>
            </li>
            <li className="mb-2">
              <Link to="/blog/2" className="hover:text-blue-500 transition">Second Post</Link>
            </li>
          </ul>
        </div>
        
        {/* Blog content area */}
        <div className="md:col-span-3">
          <Routes>
            <Route path="1" element={<BlogPost1 />} />
            <Route path="2" element={<BlogPost2 />} />
            <Route index element={<h3 className="text-xl text-gray-300">Please select a blog post to read.</h3>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};