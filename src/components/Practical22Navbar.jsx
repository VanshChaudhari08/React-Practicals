import { NavLink } from "react-router-dom";

function Practical22Navbar() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            {" | "}

            <NavLink to="/students">Students</NavLink>
            {" | "}

            <NavLink to="/about">About</NavLink>
        </nav>
    );
}

export default Practical22Navbar;