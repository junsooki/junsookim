// BlogPost2.jsx
export const BlogPost2 = () => {
    return (
      <article className="blog-post">
        <h2 className="text-2xl font-bold mb-4">Second Post</h2>
        <div className="prose max-w-none">
          <p>This is the full content of the second blog post...</p>
          <p>You can format this however you want and include any JSX components.</p>
          <ul className="list-disc pl-5 my-4">
            <li>Point one about this topic</li>
            <li>Another important point</li>
            <li>A third consideration</li>
          </ul>
        </div>
      </article>
    );
  };