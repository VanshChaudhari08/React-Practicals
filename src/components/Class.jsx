import Student from "./Student";

function Class(props) {

    return (
        <div>
            <h3>Class Component</h3>

            <Student departmentName={props.departmentName} />
        </div>
    );
}

export default Class;