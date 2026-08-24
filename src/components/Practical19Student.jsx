import { memo } from "react";

function Practical19Student({ name }) {

    console.log("Student rendered");

    return (
        <div className="student-box">

            <h2>Student Information</h2>

            <p>
                Student Name: <strong>{name}</strong>
            </p>

        </div>
    );
}

export default memo(Practical19Student);