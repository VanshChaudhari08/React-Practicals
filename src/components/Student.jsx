import Department from "./Department";

function Student(props) {

    return (
        <div>
            <h3>Student Component</h3>

            <Department departmentName={props.departmentName} />
        </div>
    );
}

export default Student;