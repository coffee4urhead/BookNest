import "./related-books-style.css";
import { useRef } from "react";

export default function RelatedBooks() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <main id="cards-container">
        <h1>Related Books</h1>
        <div id="cards-wrapper" ref={scrollContainerRef}>
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
        </div>

        <div className="cards-navigation">
          <button onClick={scrollLeft} aria-label="Scroll left">
            ← Previous
          </button>
          <button onClick={scrollRight} aria-label="Scroll right">
            Next →
          </button>
        </div>
      </main>
    </>
  );
}
