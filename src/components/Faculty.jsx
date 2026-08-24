import { useContext } from "react";
import { FacultyContext } from "../App";
import "../assets/card.css";

function Faculty() {

    const faculty = useContext(FacultyContext);

    return (
        <div className="faculty-card">

            <div className="faculty-details">

                <h2>College Information</h2>

                <p>
                    <strong>Username:</strong> {faculty.username}
                </p>

                <p>
                    <strong>Email:</strong> {faculty.email}
                </p>

                <p>
                    <strong>College Name:</strong> {faculty.collegeName}
                </p>

                <p>
                    <strong>Department:</strong> {faculty.department}
                </p>

                <p>
                    <strong>City:</strong> {faculty.city}
                </p>

                <p>
                    <strong>State:</strong> {faculty.state}
                </p>

            </div>

        </div>
    );
}

export default Faculty;