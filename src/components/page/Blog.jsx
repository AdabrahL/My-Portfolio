import React, { useState } from "react";
import { blogPosts } from "../../data/data";
import { Footer } from "../Footer/Footer";
export const Blog = () => {
  // State: all posts start as the imported blogPosts
  const [posts, setPosts] = useState(blogPosts);

  // Extract unique categories with emojis for dropdown options
  const categories = Array.from(
    posts.reduce((acc, post) => {
      acc.set(post.category, post.emoji);
      return acc;
    }, new Map())
  ).map(([category, emoji]) => ({ category, emoji }));

  // Form state for new blog post
  const [form, setForm] = useState({
    category: categories.length > 0 ? categories[0].category : "",
    title: "",
    description: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Add new post on submit
  const handleAddPost = (e) => {
    e.preventDefault();
    if (!form.title || !form.description) return;

    // Find emoji of selected category
    const categoryObj = categories.find((c) => c.category === form.category);
    const emoji = categoryObj ? categoryObj.emoji : "";

    const newPost = {
      id: Date.now(),
      emoji,
      category: form.category,
      title: form.title,
      description: form.description,
    };

    setPosts((prev) => [newPost, ...prev]);
    setForm((prev) => ({ ...prev, title: "", description: "" })); // Clear title & desc
  };

  // Group posts by "emoji category"
  const groupedPosts = posts.reduce((acc, post) => {
    const key = `${post.emoji} ${post.category}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(post);
    return acc;
  }, {});

  return (
    <>
    <div className="pages">
      <style>{`
        
        

        .blog-header {
          font-size: 2rem;
          margin-bottom: 2rem;
          color:#00bfff;
          text-align: center;
        }

        form.blog-form {
          margin-bottom: 3rem;
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          background: #1e293b;
          padding: 1.5rem;
          border-radius: 10px;
          align-items: center;
        }

        form.blog-form select,
        form.blog-form input,
        form.blog-form textarea {
          padding: 0.75rem;
          border: none;
          border-radius: 6px;
          background: #0f172a;
          color: #f8fafc;
          font-size: 14px;
          flex: 1 1 200px;
          min-width: 200px;
        }

        form.blog-form textarea {
          flex: 2 1 400px;
          resize: vertical;
        }

        form.blog-form button {
          background-color: #38bdf8;
          color: #0f172a;
          padding: 0.75rem 1.5rem;
          font-weight: bold;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          flex-shrink: 0;
        }

        .blog-section {
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 1.2rem;
          color: #38bdf8;
          margin-bottom: 1rem;
        }

        .post-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1rem;
        }

        .blog-post {
          background-color: #1e293b;
          border-radius: 8px;
          padding: 1rem;
          transition: background 0.3s ease;
        }

        .blog-post:hover {
          background-color: #334155;
        }

        .blog-post h4 {
          margin-bottom: 0.5rem;
          color: #f8fafc;
          font-size: 1rem;
        }

        .blog-post p {
          color: #94a3b8;
          font-size: 0.9rem;
          margin: 0;
        }
      `}</style>

      <div className="content-container">
        <h1 className="blog-header">Developer Blog</h1>

        {/* Create new post form */}
        <form className="blog-form" onSubmit={handleAddPost}>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          >
            {categories.map(({ category, emoji }) => (
              <option key={category} value={category}>
                {emoji} {category}
              </option>
            ))}
          </select>

          <input
            type="text"
            name="title"
            placeholder="Post Title"
            value={form.title}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Short Description"
            rows="2"
            value={form.description}
            onChange={handleChange}
            required
          />

          <button type="submit">Add Post</button>
        </form>

        {/* Render grouped blog posts */}
        {Object.keys(groupedPosts).map((category) => (
          <div className="blog-section" key={category}>
            <h3 className="section-title">{category}</h3>
            <div className="post-grid">
              {groupedPosts[category].map((post) => (
                <div className="blog-post" key={post.id}>
                  <h4>{post.title}</h4>
                  <p>{post.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};
