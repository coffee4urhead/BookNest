import "./book-card-styles.css";

export default function BookCard({ title, author, cover }) {
  return (
    <article className="card">
      <img
        src="src/assets/images/atomic-habits-book-cover.jpg"
        alt="Book Cover"
      />
      <div className="book-info">
        <h2>Atomic Habits</h2>
        <p>James Clear</p>
      </div>
    </article>
  );
}
