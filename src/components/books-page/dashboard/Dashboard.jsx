import BookFilter from "../book-filter-component/BookFilter.jsx";
import ScrollableSection from "../scrollable-component/ScrollableSection.jsx";
import "./dashboard-styles.css";

export default function Books() {
  const handleFilterChange = (selectedGenres) => {
    console.log("Selected genres:", selectedGenres);
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

  const authors = [
    {
      authorName: "Paulo Coelho",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      booksCount: 25,
    },
    {
      authorName: "James Clear",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      booksCount: 3,
    },
    {
      authorName: "Cal Newport",
      avatar:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&crop=face",
      booksCount: 7,
    },
    {
      authorName: "Daniel Kahneman",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
      booksCount: 5,
    },
    {
      authorName: "Morgan Housel",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=face",
      booksCount: 2,
    },
    {
      authorName: "Yuval Noah Harari",
      avatar:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=200&h=200&fit=crop&crop=face",
      booksCount: 8,
    },
    {
      authorName: "Stephen R. Covey",
      avatar:
        "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?w=200&h=200&fit=crop&crop=face",
      booksCount: 12,
    },
    {
      authorName: "Eckhart Tolle",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
      booksCount: 6,
    },
    {
      authorName: "Frank Herbert",
      avatar:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&h=200&fit=crop&crop=face",
      booksCount: 15,
    },
    {
      authorName: "Harper Lee",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      booksCount: 2,
    },
    {
      authorName: "George Orwell",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      booksCount: 9,
    },
    {
      authorName: "F. Scott Fitzgerald",
      avatar:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=200&h=200&fit=crop&crop=face",
      booksCount: 11,
    },
    {
      authorName: "Jane Austen",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face",
      booksCount: 7,
    },
  ];

  const newArrivals = [
    {
      title: "The Midnight Library",
      author: "Matt Haig",
      cover: "https://picsum.photos/200/320",
    },
    {
      title: "Project Hail Mary",
      author: "Andy Weir",
      cover: "https://picsum.photos/200/321",
    },
    {
      title: "Klara and the Sun",
      author: "Kazuo Ishiguro",
      cover: "https://picsum.photos/200/322",
    },
    {
      title: "The Invisible Life of Addie Larue",
      author: "V.E. Schwab",
      cover: "https://picsum.photos/200/323",
    },
    {
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      cover: "https://picsum.photos/200/324",
    },
    {
      title: "Educated",
      author: "Tara Westover",
      cover: "https://picsum.photos/200/325",
    },
  ];

  return (
    <>
      <main id="main-books-page">
        <article className="filter-site">
          <BookFilter onFilterChange={handleFilterChange} />

          <section className="book-grid">
            <h2>Explore Books</h2>
            <input
              type="text"
              placeholder="Search by title, author, or genre"
              className="search-bar"
            />
            <ScrollableSection
              sectionTitle="Most Popular Books"
              data={books}
              component="BookCard"
            />
            <ScrollableSection
              sectionTitle="New Book Arrivals"
              data={newArrivals}
              component="BookCard"
            />
            <ScrollableSection
              sectionTitle="Authors"
              data={authors}
              component="AuthorCard"
            />
          </section>
        </article>
      </main>
    </>
  );
}
