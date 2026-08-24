import { NavLink } from "react-router-dom"

export default function Practical17Header() {
  return (
    <header className="header">
      <div className="logo">
        <h2>Mini React Website</h2>
      </div>

      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  )
}
