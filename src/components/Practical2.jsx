import { useEffect, useState } from "react";

function Practical2() {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    // Async Function to Fetch JSON Data
    async function fetchUsers() {

        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

            // Check if response is successful
            if (!response.ok) {
                throw new Error("Failed to fetch users");
            }

            // Convert response into JSON
            const data = await response.json();

            // Store data in state
            setUsers(data);

            // Display data in console
            console.log("Users Information");

            data.forEach(user => {
                console.log("----------------------------");
                console.log("ID    :", user.id);
                console.log("Name  :", user.name);
                console.log("Email :", user.email);
                console.log("City  :", user.address.city);
            });

        } catch (error) {

            console.log(
                "Error while fetching data:",
                error.message
            );

            setError(error.message);
        }
    }

    // Call API when component loads
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>

            <h1>Practical 2</h1>

            <h2>Async/Await - Fetch JSON Data</h2>

            {error && <p>Error: {error}</p>}

            {users.map(user => (
                <div key={user.id}>
                    <p><b>ID:</b> {user.id}</p>
                    <p><b>Name:</b> {user.name}</p>
                    <p><b>Email:</b> {user.email}</p>
                    <p><b>City:</b> {user.address.city}</p>
                    <hr />
                </div>
            ))}

        </div>
    );
}

export default Practical2;