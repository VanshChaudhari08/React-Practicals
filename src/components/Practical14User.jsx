import { useContext } from "react";
import { UserContext } from "../App";

function Practical14User() {

    const user = useContext(UserContext);

    return (
        <div>

            <h2>User Information</h2>

            <p>Name: {user.name}</p>

            <p>Email: {user.email}</p>

            <p>Class: {user.class}</p>

        </div>
    );
}

export default Practical14User;