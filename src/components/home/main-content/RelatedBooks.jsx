import "./related-books-style.css";
import { useRef } from "react";
import BookCard from "../../books-page/book-card/BookCard.jsx";

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
  const books = [
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      cover: "https://picsum.photos/200/300",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      cover: "https://picsum.photos/200/301",
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      cover: "https://picsum.photos/200/302",
    },
    {
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      cover: "https://picsum.photos/200/303",
    },
    {
      title: "The Psychology of Money",
      author: "Morgan Housel",
      cover: "https://picsum.photos/200/304",
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      cover: "https://picsum.photos/200/305",
    },
    {
      title: "The 7 Habits of Highly Effective People",
      author: "Stephen R. Covey",
      cover: "https://picsum.photos/200/306",
    },
    {
      title: "The Power of Now",
      author: "Eckhart Tolle",
      cover: "https://picsum.photos/200/307",
    },
    {
      title: "Dune",
      author: "Frank Herbert",
      cover: "https://picsum.photos/200/308",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      cover: "https://picsum.photos/200/309",
    },
    {
      title: "1984",
      author: "George Orwell",
      cover: "https://picsum.photos/200/310",
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      cover: "https://picsum.photos/200/311",
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      cover: "https://picsum.photos/200/312",
    },
  ];

  return (
    <>
      <main id="cards-container">
        <h1>Related Books</h1>
        <div id="cards-wrapper" ref={scrollContainerRef}>
          {books.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              author={book.author}
              cover={book.cover}
            />
          ))}
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
