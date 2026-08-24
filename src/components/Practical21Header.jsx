import { NavLink } from "react-router-dom";

function Practical21Header() {

    return (
        <header className="header">

            <div className="logo">
                <h2>Mini React Website</h2>
            </div>

            <nav>

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    About
                </NavLink>

                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Contact
                </NavLink>

                <NavLink
                    to="/products"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Products
                </NavLink>

            </nav>

        </header>
    );
}

export default Practical21Header;