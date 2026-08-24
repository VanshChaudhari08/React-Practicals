import Class from "./Class";

function College() {

    const departmentName = "Computer Science";

    return (
        <div>
            <h2>College Component</h2>

            <Class departmentName={departmentName} />
        </div>
    );
}

export default College;