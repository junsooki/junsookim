// BlogPost1.jsx
export const BlogPost1 = () => {
    return (
      <article className="blog-post">
        <h2 className="text-2xl font-bold mb-4">First Post</h2>
        <div className="prose max-w-none">
          <p>This is the full content of the first blog post...</p>
          <p>You can add as much formatted content as you want here.</p>
          <h3 className="text-xl font-semibold mt-6 mb-3">A Subheading</h3>
          <p>More detailed content for the first blog post goes here.</p>
        </div>
      </article>
    );
  };