import { ReviewOnScroll } from "../ReviewOnScroll";

export const Blog = () => {
    const blogPosts = [
      { id: 1, title: "First Post", excerpt: "Short description here..." },
      { id: 2, title: "Second Post", excerpt: "Another short description..." },
    ];
  
    return (
      <section id="blog" className="min-h-screen flex items-center justify-center py-20">
        <ReviewOnScroll>
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent text-center">Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(50,130,246,0.1)] transition">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="mb-4">{post.excerpt}</p>
                <span>Read More →</span>
            </div>
          ))}
        </div>
        </ReviewOnScroll>
      </section>
    );
  };