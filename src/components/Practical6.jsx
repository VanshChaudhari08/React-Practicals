import "./Practical6.css";

function TodoList() {
    const person = {
        name: "Gregorio Y. Zara",
        avatar: "https://react.dev/images/docs/scientists/7vQD0fPs.jpg",

        theme: {
            backgroundColor: "#111827",
            color: "white"
        }
    };

    const tasks = [
        "Complete React Practical",
        "Study JavaScript",
        "Complete Assignment"
    ];

    return (
        <div className="page-container">

            <div className="todo-card" style={person.theme}>

                <img
                    className="avatar"
                    src={person.avatar}
                    alt={person.name}
                />

                <h1>{person.name}</h1>

                <h2>My Todo List</h2>

                <ul className="todo-list">
                    {tasks.map((task, index) => (
                        <li key={index}>
                            {task}
                        </li>
                    ))}
                </ul>

            </div>

        </div>
    );
}

export default TodoList;