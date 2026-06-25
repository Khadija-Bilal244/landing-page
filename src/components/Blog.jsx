
import blogImage from "../assets/blog.png";
import "../styles/Blog.css";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "How to Plan Your Tax Affairs Effectively",
      excerpt: "Learn the best strategies to optimize your tax planning and maximize your wealth...",
      date: "June 15, 2024",
      author: "John Smith",
      category: "Tax Planning"
    },
    {
      id: 2,
      title: "Top 5 Financial Mistakes to Avoid in 2024",
      excerpt: "Discover the most common financial pitfalls and how to avoid them...",
      date: "June 10, 2024",
      author: "Sarah Johnson",
      category: "Financial Advice"
    },
    {
      id: 3,
      title: "Understanding Mergers & Acquisitions",
      excerpt: "A comprehensive guide to the M&A process and how it can benefit your business...",
      date: "June 5, 2024",
      author: "Michael Brown",
      category: "M&A"
    },
    {
      id: 4,
      title: "The Future of Accounting: Digital Transformation",
      excerpt: "Explore how technology is reshaping the accounting industry...",
      date: "June 1, 2024",
      author: "Emma Wilson",
      category: "Technology"
    },
    {
      id: 5,
      title: "Budget Forecasting for Small Businesses",
      excerpt: "Essential tips for creating accurate budget forecasts for your business...",
      date: "May 28, 2024",
      author: "David Lee",
      category: "Budgeting"
    },
    {
      id: 6,
      title: "VAT Returns Made Simple",
      excerpt: "Everything you need to know about filing VAT returns for your business...",
      date: "May 25, 2024",
      author: "Lisa Taylor",
      category: "VAT"
    }
  ];

  return (
    <div className="page-wrapper">
      <div
        className="page-hero blog-hero page-hero-image"
        style={{ "--hero-image": `url(${blogImage})` }}
      >
        <h1>Our Blog</h1>
        <p>Insights and updates from the world of accounting and finance</p>
      </div>

      <div className="page-content">
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-category">{post.category}</div>
              <h3>{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-meta">
                <span className="blog-date">{post.date}</span>
                <span className="blog-author">By {post.author}</span>
              </div>
              <button className="read-more">Read More →</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
