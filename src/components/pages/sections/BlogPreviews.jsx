import { ReviewOnScroll } from "../../ReviewOnScroll";
import { useNavigate } from 'react-router-dom';

export const BlogPreviews = () => {
  const navigate = useNavigate();

  const handleSeeMore = (id) => {
    navigate(`/blog/${id}`);
  };

  const blogPosts = [
    { id: 1, title: "My 270 experience! Spring 2025", excerpt: " The class is structured so that we learn dynamic programming first, then greedy algorithms, divide and conquer, network flow, P/NP, and finally a bit about theory of computation." },
  ];
  
  return (
    <section id="blogsPreviews" className="min-h-screen flex items-center justify-center py-20">
      <ReviewOnScroll>
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent text-center">Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-5xl">
        {blogPosts.map(post => (
          <div key={post.id} className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(50,130,246,0.1)] transition">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="mb-4">{post.excerpt}</p>
              <div className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors my-4"> 
                <span onClick={() => handleSeeMore(post.id)}>Read More →</span>
              </div>
          </div>
        ))}
      </div>
      </ReviewOnScroll>
    </section>
    );
  };