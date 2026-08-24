import { useContext } from "react";
import { UserContext } from "../App";

function User() {

    const name = useContext(UserContext);

    return (
        <div>
            <h2>User Component</h2>

            <h3>Name is: {name}</h3>
        </div>
    );
}

export default User;