import { Link } from "react-router";

export default function Header() {
  return (
    <header className="header">
      <h2 className="logo">BookNest</h2>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/library">My Library</Link>
        <Link to="/wishlist">Wishlist</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}
