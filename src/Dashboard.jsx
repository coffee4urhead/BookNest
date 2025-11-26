import BookCard from "./BookCard.jsx";

export default function Books() {
  const books = [
    { title: "The Alchemist", author: "Paulo Coelho", cover: "https://picsum.photos/200/300" },
    { title: "Atomic Habits", author: "James Clear", cover: "https://picsum.photos/200/301" }
  ];

  return (
    <div className="book-grid">
      {books.map((b) => (
        <BookCard key={b.title} {...b} />
      ))}
    </div>
  );
}