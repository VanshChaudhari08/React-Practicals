import { useEffect, useState } from "react";
import "./Practical11_2.css";

function Practical11_2() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.log("Error:", error));

    }, []);

    return (
        <div className="user-container">

            <h1>Users List</h1>

            <div className="user-list">

                {users.map((user) => (

                    <div className="user-card" key={user.id}>

                        <h3>{user.name}</h3>

                        <p>
                            <b>Username:</b> {user.username}
                        </p>

                        <p>
                            <b>Email:</b> {user.email}
                        </p>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Practical11_2;