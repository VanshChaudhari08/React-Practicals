import { NavLink } from "react-router-dom";

function Practical21Products() {

    return (
        <div>

            <h1>Products Page</h1>

            <p>Here is the list of products:</p>

            <p>
                <NavLink to="/products/1">
                    Mobile
                </NavLink>
            </p>

            <p>
                <NavLink to="/products/2">
                    Laptop
                </NavLink>
            </p>

        </div>
    );
}

export default Practical21Products;